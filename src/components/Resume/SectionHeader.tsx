import * as React from "react";
import { styled } from "@mui/system";

interface SectionHeaderProps {
  children: string;
}

const StyledH5 = styled("h5")({
  width: "100%",
  textAlign: "center",
  borderBottom: "1px solid #000",
  lineHeight: "0.1em",
  margin: "10px 0 20px",
});

const StyledSpan = styled("span")({
  background: "#fff",
  padding: "0 10px",
});

export default function SectionHeader(props: SectionHeaderProps) {
  return (
    <StyledH5>
      <StyledSpan>{props.children}</StyledSpan>
    </StyledH5>
  );
}
