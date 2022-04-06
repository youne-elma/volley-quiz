import React, {useState, useEffect} from 'react'
import { nanoid } from 'nanoid'
import Loading from '../components/Loading'
import Question from '../components/Question'


// import PNGS
import blop3 from '../images/blop3.png'
import blop4 from '../images/blop4.png'

const Game = () => {
  const [loading,setLoading] = useState(false);
  const [questions,setQuestions] = useState([]);
  const url ='https://opentdb.com/api.php?amount=5';


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


  return (
    <>
      <div className="main">
          <img className="blop3" src={blop3} alt="pictureBlop"/>
          {loading && <Loading />}
          <div className="questions">
            {questions.map(item => {
              return(
                <Question key={nanoid()} {...item}/>
              )
            })}
          </div>
          <div className="result">
            <p>Your result is 3/5 Nice one!</p>
            <button className="checkAnswer">Check the answers</button>
          </div>
          <img className="blop4" src={blop4} alt="pictureBlop"/>
      </div>
      {/* here u can put the blop */}
    </>
  )
}

export default Game