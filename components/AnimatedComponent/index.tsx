import { useEffect, useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import anime, { AnimeParams } from "animejs";

type AnimatedComponentProps = {
  /**
   * Component being animated, it must have the `ref` prop.
   * May be a custom component or an intrinsic element like `h1`, `p`, `button`
   */
  Tag: any; // I use `any` to stop TS swearing. Damn that "Expression produces a union type that is too complex to represent.ts(2590)"!
  /** Animejs configuration decribing how animation is gonna behave */
  animeParams: AnimeParams;
  /** All other props passed to the component */
  [otherProp: string]: any;
  /** Child nodes */
  children?: React.ReactNode;
};

/** Wraps animation around a component
 *
 * Usage examples:
 * * `<AnimatedComponent Tag={"h1"} animeParams={someImportedConfig}>`
 * * `<AnimatedComponent Tag={CustomComponent} animeParams={someImportedConfig}>`
 * * `<AnimatedComponent Tag={"h1"} animeParams={someImportedConfig} style={{ opacity: 0 }}>`
 */
export default function AnimatedComponent({
  children,
  Tag,
  animeParams,
  ...otherProps
}: AnimatedComponentProps) {
  const animatedRef = useRef(null);
  const animationHappened = useRef(false);
  const isVisible = useOnScreen(animatedRef);

  useEffect(() => {
    if (animationHappened.current) return;

    const animationOnVisible = anime({
      targets: animatedRef.current,
      ...animeParams,
    });

    if (isVisible) {
      animationOnVisible.play();
      animationHappened.current = true;
    }
  }, [isVisible, animeParams]);
  return (
    <Tag ref={animatedRef} {...otherProps}>
      {children}
    </Tag>
  );
}
