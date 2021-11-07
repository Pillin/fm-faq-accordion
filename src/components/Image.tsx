import React from "react";

export const IMG = (props: { mobile: string; desktop: string; alt: string; style?: React.CSSProperties }) => (
  <picture style={props.style || {}}>
    <source media="(max-width:768px)" srcSet={props.mobile} />
    <source media="(min-width:769px)" srcSet={props.desktop} />
    <img
      src={props.desktop}
      alt={props.alt}
      style={{
        height: "100%",
        width: "100%",
        objectFit: "none"
      }}
    />
  </picture>
);
