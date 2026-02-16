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

export const textWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export const textTitle = style({
  display: "flex",
  justifyContent: "center",
  fontSize: "60px",
  fontFamily: "Lato",
});

export const textDescription = style({
  display: "flex",
  justifyContent: "center",
  fontSize: "24px",
});

export const imageWrapper = style({
  display: "flex",
});

export const image = style({});

export const buttonWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const buttonStart = style({
  minWidth: "740px",
  minHeight: "40px",
  background: "#00BFFF",
  color: "white",
  border: "2px solid white",
  borderRadius: "8px",
});

export const buttonContainer = style({
  display: "flex",
  gap: "10px",
});

export const buttonMyResults = style({
  minHeight: "40px",
  minWidth: "365px",
});

export const buttonGeneralResults = style({
  minHeight: "40px",
  minWidth: "365px",
});
