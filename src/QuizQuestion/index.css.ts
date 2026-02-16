import { style } from "@vanilla-extract/css";

export const wrapper = style({
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f3f4f6",
});

export const container = style({
  minHeight: "100vh",
  minWidth: "740px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  justifyContent: "center",
  alignItems: "center",
  background: "white",
});

export const question = style({});
