import React from "react";

// Components...
import { Paragraph } from "./Paragraph";

// Types...
import { CardDescriptionProps } from "../utils/types/props/card-description-props";

function CardDescription({ fontSize, text }: CardDescriptionProps): React.JSX.Element {
  return (
    <Paragraph text={text} numberOfLines={3} style={{ fontSize: fontSize ?? 20 }} />
  );
}

export { CardDescription };