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

export const line = style({
  width: "100%",
  height: "2px",
  backgroundColor: "black",
});

export const question = style({
  display: "flex",
  minWidth: "500px",
  border: "1px solid black",
  borderRadius: "8px",
  padding: "10px",
});

export const variants = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "12px",
});

export const variant = style({
  display: "flex",
  minWidth: "235px",
  padding: "10px",
  border: "1px solid black",
  borderRadius: "8px",
  justifyContent: "center",
  textAlign: "center",
});

export const buttonContainer = style({
  display: "flex",
  gap: "12px",
});

export const nextQuestion = style({
  display: "flex",
  minWidth: "255px",
  padding: "10px",
  border: "1px solid black",
  borderRadius: "8px",
  justifyContent: "center",
  textAlign: "center",
});

export const quizEnd = style({
  display: "flex",
  minWidth: "255px",
  padding: "10px",
  border: "1px solid black",
  borderRadius: "8px",
  justifyContent: "center",
  textAlign: "center",
});
