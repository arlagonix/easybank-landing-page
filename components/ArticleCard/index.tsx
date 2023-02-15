import Image from "next/image";
import * as SC from "./index.styled";
import { forwardRef } from "react";

type ArticleCardProps = {
  /** Path to the image file */
  imageSrc: string;
  /** Description of the image, for accessibility */
  imageAlt: string;
  /** The article author */
  author: string;
  /** The article name */
  name: string;
  /** Article description */
  description: string;
};

/** Article card displayed in the Latest Articles section */
const ArticleCard = forwardRef<any, ArticleCardProps>(
  ({ imageSrc, imageAlt, author, name, description }, ref) => {
    return (
      <a href="#" style={{ display: "block" }} draggable={false} ref={ref}>
        <SC.ArticleCard>
          <SC.ImageWrapper>
            <Image src={imageSrc} alt={imageAlt} width="256" height="256" draggable={false} />
          </SC.ImageWrapper>
          <SC.ContentWrapper>
            <p>By {author}</p>
            <h3>{name}</h3>
            <p>{description}</p>
          </SC.ContentWrapper>
        </SC.ArticleCard>
      </a>
    );
  }
);

export default ArticleCard;
