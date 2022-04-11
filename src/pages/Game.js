import React, {useState, useEffect} from 'react'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
// import Components
import Loading from '../components/Loading'
import Question from '../components/Question'
import ButtonGroups from '../components/ButtonGroups'


// import PNGS
import blop3 from '../images/blop3.png'
import blop4 from '../images/blop4.png'

const Game = () => {
  const initChoicesArray = ['', '', '', '', ''];
  const initButtonGroupArray = [0, 0, 0, 0, 0];

  const [buttonGroup, setButtonGroup] = useState(initButtonGroupArray);
  const [buttonArray, setButtonArray] = useState([]);
  const [choices, setChoices] = useState(initChoicesArray);
  const [message, setMessage] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [answered, setAnswered] = useState(false);

  const [loading,setLoading] = useState(false);
  const [questions,setQuestions] = useState([]);
  const url ='https://opentdb.com/api.php?amount=5';
  const [count, setCount] = useState(0);

  const shuffle = (array) => {
    for(let i = array.length - 1; i > 0; i--){
      let j = Math.floor(Math.random() * (i+1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }


  useEffect(() => {
    const bigArray = [];
    const correctAnswerArray = []
    questions.map((item, index) => {
      const correctAnswers = item.correct_answer;
      correctAnswerArray.push(correctAnswers);
      setCorrectAnswers(correctAnswerArray);
      const wrongAnswers = item.incorrect_answers;
      const wrongAnswersArray = wrongAnswers.map(item => {
        return {
          name: item,
          isCorrect: false,
          id: nanoid(),
          index: index,
        }
      })
      const correctAnswer = {
        name: item.correct_answer,
        isCorrect: true,
        id: nanoid(),
        index: index,
      }
      wrongAnswersArray.push(correctAnswer)

      shuffle(wrongAnswersArray);
      const questionObject = {
        question: item.question,
        answers: wrongAnswersArray,
      }
      return bigArray.push(questionObject);
    })
    setButtonArray(bigArray)

  },[questions]);


  const pullData = async () => {
    setLoading(true);
    try{
      const response = await fetch(url);
    if(response.ok){
      const responseData = await response.json();
      setQuestions(responseData.results);
    }else{
      setQuestions([]);
    }
    setLoading(false);
    }catch(error){
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    pullData();
  }, [url])


  const quizQuestions = buttonArray.map(item => {
    const unicodeQ = item.question;
    const questions = unicodeQ.replace(/&quot;/g,'"').replace(/&#039;/g,"'").replace(/&amp;/g, "&").replace(/&rsquo;/g, "").replace(/&oacute;/g,'Ó').replace(/&uacute;/g, 'ú').replace(/&eacute;/g, 'é').replace(/&prime;/g,"`").replace(/&lsquo/g,"“").replace(/&rsquo/g,"”").replace(/&divide;/g,"/");
    const answerButtons = item.answers.map(item => {
      const unicodeA = item.name;
      const fixedAnswers = unicodeA.replace(/&quot;/g,'"').replace(/&#039;/g, "'").replace(/&amp;/g, "&").replace(/&oacute;/g,'Ó').replace(/&uacute;/g, 'ú').replace(/&eacute;/g, 'é').replace(/&prime;/g,"`").replace(/&lsquo/g,"“").replace(/&rsquo/g,"”").replace(/&divide;/g,"/");
      return (
        <ButtonGroups 
          fixedAnswers={fixedAnswers}
          id={item.id}
          key={item.id}
          index={item.index}
          isCorrect={item.isCorrect}
          answered={answered}
          choices={choices}
          setChoices={setChoices}
          buttonGroup={buttonGroup}
          setButtonGroup={setButtonGroup}
          active={buttonGroup[item.index] === item.id ? true : false}
        />
      )
    })
    return (
      <Question questions={questions} answerButtons={answerButtons}/>
    )
  })

  const checkAnswers = (correctAnswers, choices) => {
    setCount(0);
    if(choices.includes('')){
      setMessage(true);
    }
    for(let i = 0; i<correctAnswers.length;i++){
      if(correctAnswers[i] === choices[i]) {
        setCount(prevState => prevState+1);
      }else if(!choices.includes('')){
        setAnswered(true);
        setMessage(false);
      }

    }
  }

  return (
    <>
      <div className="main">
          <img className="blop3" src={blop3} alt="pictureBlop"/>
          {loading && <Loading />}
          <div className="questions">
            {quizQuestions}
          </div>
          <div className="result">
            {message && <p className="message">You must answer all questions</p>}
            {!answered &&
              <button className="checkAnswer" onClick={() => checkAnswers(correctAnswers,choices)}>Check the answers</button>
            }
            {answered && <>
              <p>You scored {count}/5 correct answers</p>
              <button className="checkAnswer"><Link to="/" className="playAgain">Play Again</Link></button> 
            </>
            }
          </div>
          <img className="blop4" src={blop4} alt="pictureBlop"/>
      </div>
      {/* here u can put the blop */}
    </>
  )
}

export default Game