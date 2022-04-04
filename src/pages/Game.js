import React, {useEffect, useState} from 'react'
import Loading from '../components/Loading'
import Question from '../components/Question'

// import PNGS
import blop3 from '../images/blop3.png'
import blop4 from '../images/blop4.png'



const Game = () => {

  const [loading,setLoading] = useState(false);
  const [questions,setQuestions] = useState([]);

  const url = 'https://opentdb.com/api.php?amount=5';
                  // -----------------------OPTION1-------------
                  // let displayData
                  // function pullJson() {
                  //   setLoading(true);
                  //   fetch(url)
                  //   .then(response => response.json())
                  //   .then(responseData => {
                  //     displayData = responseData.map(item => {
                  //       return(
                  //         <p>{item}</p>
                  //       )
                  //     })
                  //     console.log(responseData)
                  //     setQuestions(displayData);
                  //   })
                  //   //return
                  //   setLoading(false);
                  // }

  //OPTION 2
  async function pullJson(){
    setLoading(true);
    try{
      const response = await fetch(url);
      const responseData = await response.json();

      if(responseData.results){
        console.log(responseData.results)
        setQuestions(responseData.results);
      }else{
        setQuestions([]);  
      }
      setLoading(false);
    }catch(error){
      console.log(error);
      setLoading(false)
    }
  }

  
  useEffect(() => {
    pullJson();
  }, [url])


  return (
    <div className="main">
        <img className="blop3" src={blop3} alt="pictureBlop"/>
        <div className="questions">
          {loading && <Loading />}
          {/* {questions.map(item => {
            return(
              <h1>
                {item.difficulty}
              </h1>
            )
          })} */}
          <Question />
        </div>
        <div className="result">
          <p>Your result is 3/5 Nice one!</p>
          <button className="checkAnswer">Check the answers</button>
        </div>
        <img className="blop4" src={blop4} alt="pictureBlop" />
    </div>
  )
}

export default Game