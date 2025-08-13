import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.png'
import hero_title from '../../assets/hero_title.jpeg'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info-circle.svg'
import TitleCards from '../../components/TitleCards/TitleCards'
const Home = () => {
  return (
    <div className="home">
     <Navbar />
     <div className="hero">
      <img src={hero_banner} alt="" className='banner-img'/>
      <div className="hero-caption">
        <img src={hero_title} alt="" className='caption-img'/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora eum praesentium repellat, perferendis aperiam, mollitia illo distinctio atque, sint fugiat eligendi. Repellendus iure, aliquam cumque explicabo suscipit dolore deleniti ratione.</p>
        <div className="hero-btns">
          <button className='btn'><img src={play_icon} alt="Play" />Play</button>
          <button className='btn dark-btn'><img src={info_icon} alt="Info" />More Info</button>
        </div>
        <TitleCards/>
      </div>
      </div>
    </div>
  )
}

export default Home