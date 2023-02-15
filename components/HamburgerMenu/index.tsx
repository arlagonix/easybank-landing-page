// Influenced by https://codepen.io/RRoberts/pen/ZBYaJr?editors=1100

import * as SC from "./index.styled";

type HamburgerMenuProps = {
  /** If `true`, the menu is open, is  */
  active: boolean;
  /** Click handler for the state from the parent component */
  clickHandler: () => void;
};

export default function HamburgerMenu({ active, clickHandler }: HamburgerMenuProps) {
  return (
    <SC.Hamburger
      active={active}
      id="hamburger-1"
      onClick={clickHandler}
      aria-expanded={active}
      aria-roledescription="Show / hide navigation menu"
    >
      <SC.Line></SC.Line>
      <SC.Line></SC.Line>
      <SC.Line></SC.Line>
    </SC.Hamburger>
  );
}
