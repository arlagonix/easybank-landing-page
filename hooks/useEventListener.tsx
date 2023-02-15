import { useEffect, useRef } from "react";

/** Easy way to work with event listeners */
export default function useEventListener(
  /** Type of event */
  eventType: string,
  /** Callback fired when event happens */
  callback: any
  /** On which element we track the event */
  // element?: typeof window | null | MediaQueryList
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (e: Event) => callbackRef.current(e);
    window.addEventListener(eventType, handler);

    return () => window.removeEventListener(eventType, handler);
  }, []);
}
