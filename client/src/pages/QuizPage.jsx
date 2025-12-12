import React, { useState } from "react";
import { questions } from "../data/questions";

const QuizPage = () => {
  const [quizLength, setQuizLength] = useState(null);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  // Slice the questions based on chosen length
  const quizQuestions = quizLength ? questions.slice(0, quizLength) : [];

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);

    const next = current + 1;
    if (next < quizQuestions.length) {
      setCurrent(next);
    } else {
      setShowScore(true);
    }
  };

  return (
    
    <div className="min-h-screen  text-white px-10 pt-28 pb-10">

      <h1 className="text-4xl font-bold mb-10">Space Quiz</h1>

      {/* STEP 1: QUIZ LENGTH SELECTION */}
      {!quizLength && (
        <div className="bg-gray-600/40 shadow-xl p-8 rounded-xl border border-gray-500 
                        backdrop-blur-md max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Choose Quiz Length</h2>

          <div className="flex justify-center gap-6">
            {[5, 10, 15, 20].map((length) => (
              <button
                key={length}
                onClick={() => setQuizLength(length)}
                className="px-5 py-3 bg-gray-500/40 border border-gray-400 rounded-xl 
                           hover:bg-gray-500/60 hover:scale-105 transition font-medium"
              >
                {length} Questions
              </button>
            ))}
          </div>
        </div>
      )}

      {/* STEP 2: QUIZ QUESTIONS */}
      {quizLength && !showScore && (
        <div className="bg-gray-600/40 shadow-xl p-8 rounded-xl border border-gray-500 
                        backdrop-blur-md max-w-2xl mx-auto mt-10">

          <h2 className="text-2xl font-bold mb-6">
            {quizQuestions[current].question}
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {quizQuestions[current].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.isCorrect)}
                className="w-full text-left px-5 py-3 bg-gray-500/40 border border-gray-400 
                           rounded-xl hover:bg-gray-500/60 transition"
              >
                {option.text}
              </button>
            ))}
          </div>

          <p className="text-gray-300 mt-6 text-right">
            Question {current + 1} / {quizQuestions.length}
          </p>
        </div>
      )}

      {/* STEP 3: SCORE SCREEN */}
      {quizLength && showScore && (
        <div className="bg-gray-600/40 shadow-xl p-8 rounded-xl border border-gray-500 
                        backdrop-blur-md max-w-lg mx-auto text-center mt-10">
          <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-xl mb-6">
            You scored <strong>{score}</strong> / {quizQuestions.length}
          </p>

          <button
            className="px-5 py-3 bg-gray-500/40 border border-gray-400 
                       rounded-xl hover:bg-gray-500/60 transition"
            onClick={() => {
              setQuizLength(null);
              setCurrent(0);
              setScore(0);
              setShowScore(false);
            }}
          >
            Restart Quiz
          </button>
        </div>
      )}

    </div>
  );
};

export default QuizPage;
