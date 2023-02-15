import Image from "next/image";
import * as SC from "./index.styled";
import { forwardRef } from "react";

type ChooseReasonProps = {
  /** Src for the icon displayed at the top of the card */
  imageSrc: string;
  /** Reason name */
  name: string;
  /** Reason description */
  description: string;
};

const ChooseReasonCard = forwardRef<any, ChooseReasonProps>(
  ({ imageSrc, name, description }, ref) => {
    return (
      <SC.ChooseReason ref={ref}>
        <Image
          height={72}
          width={72}
          src={imageSrc}
          aria-hidden={true}
          alt=""
          draggable={false}
          style={{ userSelect: "none" }}
        />
        <h3>{name}</h3>
        <p>{description}</p>
      </SC.ChooseReason>
    );
  }
);

export default ChooseReasonCard;
