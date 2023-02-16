import Image from "next/image";
import Button from "../Button";
import * as SC from "./index.styled";
import { socialLinksData } from "../../data/linksData";
import logoDark from "../../public/logo_dark.svg";

export default function Footer() {
  return (
    <SC.FooterBackground>
      <SC.Footer>
        <SC.Wrapper>
          <Image src={logoDark} alt="Open home page" width="139" height="20" draggable={false} />
          <SC.SocialMediaIcons>
            {socialLinksData.map(({ href, src, alt }) => (
              <a href={href} key={href} draggable={false} style={{ userSelect: "none" }}>
                <Image src={src} alt={alt} width={20} height={20} draggable={false} />
              </a>
            ))}
          </SC.SocialMediaIcons>
        </SC.Wrapper>
        <SC.Wrapper>
          <SC.LinkText href="#">About Us</SC.LinkText>
          <SC.LinkText href="#">Contact</SC.LinkText>
          <SC.LinkText href="#">Blog</SC.LinkText>
        </SC.Wrapper>
        <SC.Wrapper>
          <SC.LinkText href="#">Careers</SC.LinkText>
          <SC.LinkText href="#">Support</SC.LinkText>
          <SC.LinkText href="#">Privacy Policy</SC.LinkText>
        </SC.Wrapper>
        <SC.CustomWrapper>
          <Button>Request invite</Button>
          <SC.RightsReserved>© Easybank. All Rights Reserved</SC.RightsReserved>
        </SC.CustomWrapper>
      </SC.Footer>
    </SC.FooterBackground>
  );
}
