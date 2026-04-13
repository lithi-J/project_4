import { useState } from "react";
import { questions } from "../data/questions";
import { QuestionCard } from "../components/QuestionCard";
import { ProgressBar } from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";

export default function Assessment() {
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState([]);
  const nav = useNavigate();

  // ✅ handle answer
  const handleAnswer = (category) => {
    setAnswers([...answers, category]);
  };

  // ✅ next question safely
  const handleNext = () => {
    if (i < questions.length - 1) {
      setI(i + 1);
    }
  };

  // ✅ submit (go to report)
  const handleSubmit = () => {
    nav("/dashboard/report", { state: { answers } });
  };

  return (
    <div className="max-w-md mx-auto p-4">

      {/* Question */}
      <QuestionCard
        q={questions[i]}
        onAnswer={handleAnswer}
      />

      {/* Next Button */}
      {i < questions.length - 1 && (
        <button
          onClick={handleNext}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      )}

      {/* Submit Button */}
      {i === questions.length - 1 && (
        <button
          onClick={handleSubmit}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      )}

      {/* Progress */}
      <ProgressBar value={((i + 1) / questions.length) * 100} />

    </div>
  );
}