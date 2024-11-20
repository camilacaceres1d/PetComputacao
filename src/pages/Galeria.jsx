import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Galeria.css';
import Art_graphs from "./../components/Background_Art/Art_graphs";
import News from "../components/News/News";

function Galeria() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const totalSlides = 5;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <Navbar/>
     
      <main className="main-gallery" >
      
     
      <div className="background-art">
        <Art_graphs />
      </div>
      <div className="container">
        <div className="content">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <li
                  key={index}
                  data-target="#carouselExampleIndicators"
                  data-slide-to={index}
                  className={activeIndex === index ? 'active' : ''}
                ></li>
              ))}
            </ol>
            <div className="carousel-inner">
              {['slide1.jpg', 'slide2.jpg', 'slide3.jpg', 'slide4.jpg', 'slide5.jpeg'].map((image, index) => (
                <div
                  key={index}
                  className={`carousel-item ${activeIndex === index ? 'active' : ''}`}
                >
                  <img
                    className="d-block w-100"
                    src={`src/assets/images/galeria/${image}`}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
              onClick={handlePrevClick}
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Anterior</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
              onClick={handleNextClick}
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Próximo</span>
            </a>
          </div>
        </div>
      </div> 
    </main>
      <News/>
      <Footer/>   
      </>
  
  );
}

export default Galeria;
