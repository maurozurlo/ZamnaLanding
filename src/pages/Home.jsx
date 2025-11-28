import './Home.css'

const Home = () => {
  return (
    <div className='container'>
      <div className='video-container'>
        <h1>THE ZOMBIES ARE BACK...</h1>
        <p>Zombies Ate My Neighbors Again is a 3D Remake of the great SNES/GENESIS Classic Zombies Ate My Neighbors. Save your neighbors before the zombies and scary monsters eat them, now in Amazing HD™ made by fans for the fans.</p>
        <button className="btn orange" type="button">
          <span>DOWNLOAD NOW</span>
        </button>
        <div className='tv'>
          <span></span>
          <video autoPlay muted loop controls={false} >
            <source src='/trailer.mp4' type="video/mp4" />
          </video>
          <img src='/tv.png' alt="Television" />
        </div>
      </div>
      <div className='header'>
        <img src='/logo.svg' alt="Logo" />
      </div>
    </div>
  );
}

export default Home;
