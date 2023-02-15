import * as SC from "./index.styled";

type NavItemProps = {
  /** URL to which the navigation item must lead. Default is "#" */
  href?: string;
  /** The nested child React Nodes */
  children: React.ReactNode;
  /** Id for animejs */
  dataAnime?: string;
};

/** Navigation element */
export default function NavItem({ href, children, dataAnime }: NavItemProps) {
  return (
    <SC.NavItem data-anime={dataAnime}>
      <a href={href ?? "#"}>{children}</a>
    </SC.NavItem>
  );
}

/** Navigation element in a modal window */
export function ModalNavItem({ href, children }: NavItemProps) {
  return (
    <SC.ModalNavItem>
      <a href={href ?? "#"}>{children}</a>
    </SC.ModalNavItem>
  );
}
