import { style } from "@vanilla-extract/css";

export const container = style({
  minHeight: "100svh",
  padding: "5rem",
  display: "grid",
  gridTemplateColumns: "30% 70%",
  gap: "1rem",
});
