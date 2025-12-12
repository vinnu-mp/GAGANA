import { useState } from "react";
import QUESTIONS from "../data/questions";

export default function QuizPage() {
  const [step, setStep] = useState("select");
  const [numQuestions, setNumQuestions] = useState(5);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const quizQuestions = QUESTIONS.slice(0, numQuestions);

  function checkAnswer(opt) {
    if (opt === quizQuestions[current].answer) setScore(score + 1);

    if (current + 1 === numQuestions) setStep("result");
    else setCurrent(current + 1);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020d11] text-white px-6 py-10">

      {/* STEP 1 — SELECT QUESTION COUNT */}
      {step === "select" && (
        <div className="bg-white/10 backdrop-blur-md px-12 py-10 rounded-2xl shadow-xl border border-white/20 text-center">
          <h1 className="text-3xl font-bold mb-6">Choose Quiz Length</h1>

          <div className="flex gap-4 justify-center">
            {[5, 10, 15].map((n) => (
              <button
                key={n}
                onClick={() => {
                  setNumQuestions(n);
                  setStep("quiz");
                }}
                className="px-6 py-3 rounded-xl bg-teal-700 hover:bg-teal-600
                           text-white shadow-lg transition font-semibold"
              >
                {n} Questions
              </button>
            ))}
          </div>
        </div>
      )}

      {/* STEP 2 — QUIZ */}
      {step === "quiz" && (
        <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-10 shadow-xl">

          <h2 className="text-xl font-bold mb-2">
            Question {current + 1} / {numQuestions}
          </h2>

          <p className="text-lg mb-8">{quizQuestions[current].question}</p>

          <div className="grid gap-4">
            {quizQuestions[current].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => checkAnswer(opt)}
                className="w-full py-3 rounded-xl bg-teal-800/80 hover:bg-teal-700
                           text-white shadow transition font-medium"
              >
                {opt}
              </button>
            ))}
          </div>

        </div>
      )}

      {/* STEP 3 — RESULT */}
      {step === "result" && (
        <div className="bg-white/10 backdrop-blur-md px-12 py-10 rounded-2xl shadow-xl border border-white/20 text-center">

          <h1 className="text-3xl font-bold mb-4">Quiz Completed!</h1>
          <p className="text-xl mb-6 font-medium">
            Your Score: {score} / {numQuestions}
          </p>

          <button
            onClick={() => {
              setStep("select");
              setCurrent(0);
              setScore(0);
            }}
            className="px-6 py-3 rounded-xl bg-teal-700 hover:bg-teal-600
                       text-white font-semibold shadow-lg transition"
          >
            Try Again
          </button>

        </div>
      )}

    </div>
  );
}
