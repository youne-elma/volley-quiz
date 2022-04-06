import React from 'react'
import { nanoid } from 'nanoid'

const Question = ({question,correct_answer,incorrect_answers}) => {

  return (
    <div className="question">
        <h1>{question}</h1>
        <div className="answers">  
            {incorrect_answers.map(item => {
                return <p key={nanoid()}>
                    {item}
                </p>
            })}
        </div>
        <hr style={{border: "1px solid #D4D8E7",backgroundColor: "#D4D8E7",width: "100%"}}/>
    </div>
  )
}

export default Question