function ButtonGroups(props) {
  const [id, setButtonGroup, buttonGroup, setChoices, choices] = props;
  const [active, answered, isCorrect, fixedAnswers, index] = props;

  const clickHandler = () => {
    buttonGroup.splice(index, 1, id);
    setButtonGroup(buttonGroup);

    const newChoices = choices;
    newChoices.splice(index, 1, fixedAnswers);

    setChoices(newChoices);
  };

  return (
    <button
      className={`answers-btn 
        ${active && "blue"}
        ${answered && "faded"}
        ${active && answered && "green"}
        ${answered && isCorrect && "green"}
        ${active && answered && !isCorrect && "red"}
        `}
      type="button"
      onClick={() => clickHandler()}
      disabled={!!answered}
      key={id}
    >
      {fixedAnswers}
    </button>
  );
}

export default ButtonGroups;
