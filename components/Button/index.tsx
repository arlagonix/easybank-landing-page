import * as SC from "./index.styled";
import { forwardRef } from "react";

type ButtonProps = {
  /** Nested child React nodes */
  children: React.ReactNode;
  /** Id for animejs */
  dataAnime?: string;
  /** For animejs, helps to avoid clumsy animation flickering at the initial page load */
  initiallyInvisible?: boolean;
};

const Button = forwardRef<any, ButtonProps>(({ children, dataAnime, initiallyInvisible }, ref) => {
  return (
    <SC.Button data-anime={dataAnime} initiallyInvisible={initiallyInvisible} ref={ref}>
      {children}
    </SC.Button>
  );
});

Button.displayName = "Button";

export default Button;
