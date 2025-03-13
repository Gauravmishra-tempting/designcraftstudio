import React, {useState, useEffect } from "react";
import Navbar from '../layout/Navbar';
import Footer from "../layout/Footer";
import Aboutimg from "../../assets/img/about1.png"
import Aboutimg2 from "../../assets/img/about2.png"
import Aboutimg3 from "../../assets/img/about3.png";
import Card1 from "../../assets/img/card1.png";
import Card2 from "../../assets/img/card2.png";
import Card3 from "../../assets/img/card3.png";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';




const Home = () => {
const textArray = ["Web Development", "Graphic Design", "Video Editing"];
const [currentIndex, setCurrentIndex] = useState(0);
const [opacity, setOpacity] = useState(1);
const texts = ["Web Development", "Graphic Design", "Video Editing"];
const speed = 100;
const [currentText, setCurrentText] = useState("");
const [textIndex, setTextIndex] = useState(0); 
const [charIndex, setCharIndex] = useState(0);


useEffect(() => {
  const interval = setInterval(() => {
    setOpacity(0);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      setOpacity(1);
    }, 500);
  }, 2000);
  return () => clearInterval(interval);
},[]);


useEffect(() => {
  let timeout;

  if (charIndex < texts[textIndex].length) {
    // Type next character
    timeout = setTimeout(() => {
      setCurrentText((prev) => prev + texts[textIndex][charIndex]);
      setCharIndex((prev) => prev + 1);
    }, speed);
  } else {
    // Wait for 1 second, then reset for the next text
    timeout = setTimeout(() => {
      setCharIndex(0);
      setTextIndex((prev) => (prev + 1) % texts.length);
      setCurrentText("");
    }, 1000);
  }

  return () => clearTimeout(timeout); // Cleanup timeout on component unmount
}, [charIndex, textIndex, texts]);

  return (
    <>
     <Navbar/>
      {/* Banners Section */}
      <section id="HomeBanner">
        <div className="Homebanner">
        <div className="container d-flex justify-content-center">
        <div className="col text-center texttop">
              <h4 className="mt-5">
                Welcome to <span className="highlight">Designcraft Studio</span>
              </h4>
              <h5 id="typewriter"><b>{currentText}</b></h5>
              <h6 className="lh-base text-dark-emphasis">
                We specialize in expert video editing, captivating graphic
                design, and seamless web development to help your brand make a
                lasting impact. From visually engaging content to stunning,
                user-friendly websites, we bring creativity and precision to
                every project. Let’s work together to turn your vision into
                something truly extraordinary.
              </h6>
            </div>
            </div>
        </div>
      </section> 





{/* =================================================
        Collaborative Creativity Section 
    =================================================*/}

     {/* Collaborative Creativity Section */}
      <section id="collaborative">
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="container"
        >
          <h2 className="text-center mb-5 mt-5">Collaborative Creativity</h2>
          <div className="row">
            <div className="col-sm-4 text-center mb-3">
              <i
                className="fas fa-lightbulb"
                style={{ fontSize: "32px", color: "#ff4a17" }}
              ></i>
              <h4 className="mb-4 mt-3">Innovative Solutions</h4>
              <h6 className="lh-base text-dark-emphasis">
                Leverage the latest tools and techniques in web development,
                graphic design, and video editing to create a unique and
                impactful digital presence that resonates with your audience.
              </h6>
            </div>
            <div className="col-sm-4 text-center mb-3">
              <i
                className="fas fa-user-md"
                style={{ fontSize: "32px", color: "#ff4a17" }}
              ></i>
              <h4 className="mb-4 mt-3">Personalized Consultations</h4>
              <h6 className="lh-base text-dark-emphasis">
              Experience one-on-one consultations where we
             dive deep into your needs and goals, ensuring that every 
             detail is aligned with your brand’s identity and 
             objectives.
              </h6>
            </div>
            <div className="col-sm-4 text-center mb-3">
              <i
                className="fas fa-book-open"
                style={{ fontSize: "32px", color: "#ff4a17" }}
              ></i>
              <h4 className="mb-4 mt-3">Engaging Workshops & Tutorials</h4>
              <h6 className="lh-base text-dark-emphasis">
              Participate in interactive workshops and 
              tutorials designed to enhance your skills and knowledge in 
              the digital space, all while staying updated with industry 
              trends.
              </h6>
            </div>

            {/* Other columns omitted for brevity */}
          </div>
        </div>
      </section>

      {/*=================================================
               About section 
   ================================================*/}


   <section id="aboutus" className="p-1" style={{backgroundColor: "#ff4a17", marginTop:"100px"}}>
    <div className="container">
      <h2 className="text-center text-white mt-5 mb-5">About Us</h2>
      <div className="row">
      <div className="col-sm-4 mb-3">
        <Card className="shadow-lg border">
          <Card.Body>
            <Card.Title> Graphic Design </Card.Title>
            <Col xs={6} md={4}>
              <Image src={Aboutimg} roundedCircle className="w-100 h-auto mb-2" />
            </Col>
            <Card.Text>
              At Pooja Mishra, we bring ideas to life through 
              creative and impactful design. With a passion for visual storytelling, 
              we specialize in crafting unique brand identities that resonate with 
              your audience. From logo design to digital illustrations,  ensuring every 
              project is a true reflection of your vision.
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <div className="col-sm-4 mb-3">
        <Card className="shadow-lg">
          <Card.Body>
            <Card.Title> Web Development </Card.Title>
            <Col xs={6} md={4}>
              <Image src={Aboutimg2} roundedCircle className="w-100 h-auto mb-2" />
            </Col>
            <Card.Text>
              At Gaurav Mishra, we pride ourselves on creating 
              custom, cutting-edge websites that cater to your unique business needs. 
              Our web development team specializes in building responsive, user-friendly 
              websites that provide seamless experiences across all devices.
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <div className="col-sm-4 mb-5">
        <Card className="shadow-lg h-100">
          <Card.Body>
            <Card.Title> Video Editing </Card.Title>
            <Col xs={6} md={4}>
              <Image src={Aboutimg3} roundedCircle className="w-100 h-auto mb-2" />
            </Col>
            <Card.Text>
              At Komal Mishra, we bring your 
              stories to life with expert video editing that captures attention and drives 
              engagement. Our team is skilled in crafting visually compelling videos that 
              resonate with your audience, whether it's for marketing, social media, 
              or personal projects.
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
      </div>
    </div>
   </section>

      <section id="backgroundanimation" style={{marginTop:"100px"}}>
      <div className="container mt-5 mb-5">
        <div className="wrapper">
          <h1 id="animated-text" style={{ opacity: opacity }}>
            {textArray[currentIndex]}
          </h1>
          {Array.from({ length: 15 }).map((_, index) => (
            <div key={index}>
              <span className="dot"></span>
            </div>
          ))}
        </div>
      </div>
    </section>

    

      {/* Card Content Section */}
      <section id="cardcontent" style={{marginTop:"100px"}}>
        <div data-aos="fade-up" data-aos-duration="1500" className="container">
          <h2 className="text-center mt-5 mb-5">Services</h2>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card shadow-lg">
                <img
                  src={Card1}
                  className="card-img-top"
                  height="400"
                  alt="Cardimagecap"
                />
                <div className="card-body">
                  <h5 className="card-title">Graphic Design</h5>
                  <p className="card-text text-dark-emphasis">
                    Bring your brand to life with stunning visuals. Visit us for
                    creative graphic design.
                  </p>
                  <a
                    href="graphicdesign.html"
                    className="cardbtn p-2 rounded"
                  >
                    View Work <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card shadow-lg">
                <img
                  src={Card2}
                  className="card-img-top"
                  height="400"
                  alt="Cardimagecap"
                />
                <div className="card-body">
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text text-dark-emphasis">
                  Boost your online presence with a user-friendly website. Visit us for expert web development.
                  </p>
                  <a
                    href="graphicdesign.html"
                    className="cardbtn p-2 rounded"
                  >
                    View Work <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card shadow-lg">
                <img
                  src={Card3}
                  className="card-img-top"
                  height="400"
                  alt="Cardimagecap"
                />
                <div className="card-body">
                  <h5 className="card-title">Video Editing</h5>
                  <p className="card-text text-dark-emphasis">
                  Turn footage into compelling stories. Visit us for professional video editing.
                  </p>
                  <a
                    href="graphicdesign.html"
                    className="cardbtn p-2 rounded"
                  >
                    View Work <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Home;
