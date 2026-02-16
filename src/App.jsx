import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPage } from "./MainPage";
import { QuizQuestion } from "./QuizQuestion";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />;
      <Route path="/question" element={<QuizQuestion />} />
    </Routes>
  );
}

export default App;
