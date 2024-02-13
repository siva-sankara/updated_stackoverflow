import React from 'react'
import '../../App.css'
import LeftSideBar from '../../components/leftSideBar/LeftSideBar'
import RightSIdeBar from '../../components/RightSideBar/RightSIdeBar'
import QuestionDetails from './QuestionDetails'

const Questions = ({ slideIn, handleSlideIn }) => {
    return (
        <div className='home-container-1'>
          <LeftSideBar slideIn={slideIn} handleSlideIn={handleSlideIn} />
          <div className="home-container-2">
            <QuestionDetails/>
            <RightSIdeBar />
          </div>
        </div>
      )
}

export default Questions
