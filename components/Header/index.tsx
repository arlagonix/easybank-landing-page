import * as SC from "./index.styled";
import Image from "next/image";
import NavItem, { ModalNavItem } from "./NavItem";
import HamburgerMenu from "../HamburgerMenu";
import { useEffect, useState } from "react";
import Button from "../Button";
import useEventListener from "../../hooks/useEventListener";
import anime from "animejs";

import logo from "../../public/logo.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolledY, setIsScrolled] = useState<boolean>(false);

  useEventListener("scroll", () => {
    setIsScrolled(window.scrollY > 10);
  });

  useEffect(() => {
    anime({
      targets: ['[data-anime="nav-item"]'],
      translateY: [-50, 0],
      opacity: [0, 1],
      delay: anime.stagger(200, { start: 500 }),
      duration: 300,
      easing: "linear",
    });
  }, []);

  return (
    <SC.HeaderWrapper isScrolledY={isScrolledY}>
      <SC.Header>
        <a href="#" style={{ userSelect: "none" }} draggable={false} data-anime="nav-item">
          <Image
            src={logo}
            alt="Open home page"
            width="139"
            height="20"
            draggable={false}
            style={{ display: "block" }}
          />
        </a>
        <SC.NavWrapper>
          <ul>
            <NavItem dataAnime="nav-item">Home</NavItem>
            <NavItem dataAnime="nav-item">About</NavItem>
            <NavItem dataAnime="nav-item">Contact</NavItem>
            <NavItem dataAnime="nav-item">Blog</NavItem>
            <NavItem dataAnime="nav-item">Careers</NavItem>
          </ul>
        </SC.NavWrapper>
        <SC.RightBlock>
          <Button dataAnime="nav-item" initiallyInvisible>
            Request Invite
          </Button>
          <HamburgerMenu active={isMenuOpen} clickHandler={() => setIsMenuOpen((prev) => !prev)} />
        </SC.RightBlock>
      </SC.Header>
      <SC.ModalMenu show={isMenuOpen} onClick={() => setIsMenuOpen((prev) => !prev)}>
        <ul>
          <ModalNavItem>Home</ModalNavItem>
          <ModalNavItem>About</ModalNavItem>
          <ModalNavItem>Contact</ModalNavItem>
          <ModalNavItem>Blog</ModalNavItem>
          <ModalNavItem>Careers</ModalNavItem>
        </ul>
      </SC.ModalMenu>
    </SC.HeaderWrapper>
  );
}
