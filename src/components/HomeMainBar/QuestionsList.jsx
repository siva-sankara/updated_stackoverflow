import React from 'react'
import QuestionsEach from './QuestionsEach';

const QuestionsList = ({questionList}) => {
  
  return (
    <div>
      {questionList.map((question) => (
               <QuestionsEach question={question} key={question._id}/>
            ))}
    </div>
  )
}

export default QuestionsList
