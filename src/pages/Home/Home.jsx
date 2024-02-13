import React from 'react'
import LeftSideBar from '../../components/leftSideBar/LeftSideBar'
import HomeMainBar from '../../components/HomeMainBar/HomeMainBar'
import RightSIdeBar from '../../components/RightSideBar/RightSIdeBar'
import '../../../src/App.css'
const Home = ({ slideIn ,handleSlideIn }) => {
  return (
    <div className='home-container-1'>
      <LeftSideBar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2">
        <HomeMainBar />
        <RightSIdeBar />
      </div>
    </div>
  )
}

export default Home
