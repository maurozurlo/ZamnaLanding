import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import trailer from '../../assets/trailer.mp4'
import bg from '../../assets/bg.jpg'
import tv from '../../assets/tv.png'

const Container = styled.div`
width: 100%;
height: 100%;
`

const Header = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    display: block;
    max-width: 300px;
    height: 50px;
  }
`

const VideoContainer = styled.div`
  height: 90vh;
  width: 100%;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  align-items: center;
  flex-direction: column;
  h1,p{
    
    padding: 0;
    filter: drop-shadow(0 5px 3px rgba(0,0,0,.2));
  }
  h1{
    font-size: 3em;
    color: var(--primary);
  }
  p{
    color: white;
    text-align: center;
    max-width: 650px;
    font-weight: bold;
  }
  @media only screen and (max-width: 417px) {
      h1{
        font-size: 2em;
    width: 90%;
    text-align: center;
      }
      p{
        font-size: .7em;
    width: 90%;
      }
    }
`

const TV = styled.div`
    width: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transform: translateX(-6%) translateY(40%);

    @media only screen and (max-width: 417px) {
      width: 100%;
      transform: translateX(-6%) translateY(40%);
    }

    span{
      position: absolute;
      background: black;
      height: 130%;
      width: 66%;
    }
    
    img{
      position: absolute;
      width: 100%;
    }

    video{
      width: 60%;
    transform: translate(0%,-6%);
  }
`


const Home = () => {
  return (
    <Container>
      
      
      <VideoContainer>
      <h1>THE ZOMBIES ARE BACK...</h1>
      <p>Zombies Ate My Neighbors Again is a 3D Remake of the great SNES/GENESIS Classic Zombies Ate My Neighbors. Save your neighbors before the zombies and scary monsters eat them, now in Amazing HD™ made by fans for the fans.</p>
      <button className="btn orange" type="button">
        <span>DOWNLOAD NOW</span>
      </button>
      <TV>
      <span></span>
        <video src={trailer} autoPlay muted loop></video>
        <img src={tv} alt="Television" />
      </TV>
      
      </VideoContainer>
      <Header>
        <img src={logo} alt="Logo" />
      </Header>
    </Container>
  );
}

export default Home;
