function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;

  if (index === numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finishQuiz" })}
      >
        End
      </button>
    );
  }
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next Question
    </button>
  );
}

export default NextButton;
