function Question({ questions, answerButtons }) {
  return (
    <div className="question">
      <h1>{questions}</h1>
      <div className="answers">{answerButtons}</div>
      <hr
        style={{
          border: "1px solid #D4D8E7",
          backgroundColor: "#D4D8E7",
          width: "100%",
        }}
      />
    </div>
  );
}

export default Question;
