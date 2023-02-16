import { StaticImageData } from "next/image";

import facebookIcon from "../public/facebook.svg";
import twitterIcon from "../public/twitter.svg";
import youtubeIcon from "../public/youtube.svg";
import pinterestIcon from "../public/pinterest.svg";
import instagramIcon from "../public/instagram.svg";

type LinkType = {
  /** Icon href */
  href: string;
  /** Icon src */
  src: string | StaticImageData;
  /** Icon alternative text */
  alt: string;
};

export const socialLinksData: LinkType[] = [
  {
    href: "https://www.facebook.com",
    src: facebookIcon,
    alt: "Open Facebook page of Easy Bank",
  },
  {
    href: "https://www.youtube.com",
    src: youtubeIcon,
    alt: "Open YouTube page of Easy Bank",
  },
  {
    href: "https://www.twitter.com",
    src: twitterIcon,
    alt: "Open Twitter page of Easy Bank",
  },
  {
    href: "https://www.pinterest.com",
    src: pinterestIcon,
    alt: "Open Pinterest page of Easy Bank",
  },
  {
    href: "https://www.instagram.com",
    src: instagramIcon,
    alt: "Open Instagram page of Easy Bank",
  },
];
