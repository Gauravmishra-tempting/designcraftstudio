import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { faPenClip } from "@fortawesome/free-solid-svg-icons";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import featureimgphoto3 from "../../assets/img/featureimgphoto3.png"
import Pencile from "../../assets/img/pencile.svg";
import VideoImg from "../../assets/img/videoimg.svg";
import GraphicImg from "../../assets/img/graphic.svg";
import HtmlImg from "../../assets/img/hmtlimg.jpg";
import Rocket from "../../assets/img/rocket.jpg";
import HandDraw from "../../assets/img/handdrawn.avif";
import HTML from "../../assets/img/featureimge/html.svg";
import CSS from "../../assets/img/featureimge/css.svg";
import Javascript from "../../assets/img/featureimge/javascript.svg";
import Bootstrap from "../../assets/img/featureimge/bootstrap.svg";
import React from "../../assets/img/featureimge/react.svg";
import Photoshop from "../../assets/img/featureimge/photoshop.svg";
import Illustrator from "../../assets/img/featureimge/illustrator.svg";
import Premiere from "../../assets/img/featureimge/premierepro.svg";
import AfterEffect from "../../assets/img/featureimge/Aftereffect.svg";
import Figma from "../../assets/img/featureimge/figma.svg";







const FeatureDesign  = () => {
 

  return (
    <>
      <Navbar/>

      {/* ==========================
              Banner Section
      ============================== */}

      <section id="feature-design">
        <div className="featurebanner">
          <div className="container d-flex justify-content-center">
          <div className="col text-center texttop1 text-white">
            <h2>Feature Design</h2>
            <p>
              We create custom designs for your brand, ensuring it's visually appealing, functional, and easy to use.
            </p>
          </div>
          </div>
        </div>
      </section>


      {/*==================================
                 My Design Text 
       ==================================*/}
       <section id="mydesigntext" className="py-5">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="text-center">
        <img 
        src={Pencile} 
        alt="pencile"
        className="img-fluid animated-img"
        style={{width: "180px", height: "auto"}} 
        />
        <img 
            src={VideoImg} 
            alt="birdimg"
            className="img-fluid animated-img"
            style={{width: "250px", height: "auto"}} 
        />
        <img 
            src={GraphicImg} 
            alt="birdimg"
            className="img-fluid animated-img"
            style={{width: "180px", height: "auto"}} 
        />
        <img 
            src={HtmlImg} 
            alt="birdimg"
            className="img-fluid animated-img"
            style={{width: "180px", height: "auto"}} 
        />
        <img 
            src={ Rocket} 
            alt="birdimg"
            className="img-fluid animated-img"
            style={{width: "180px", height: "auto"}} 
        />
        <img 
            src={HandDraw} 
            alt="birdimg"
            className="img-fluid animated-img"
            style={{width: "180px", height: "auto"}} 
        />
        </div>
          {/* Text Column */}
          <div className="text-center text-md-start">
            <h2 className="mb-4 text-center mt-5">Empowering Creativity with Cutting-Edge Digital Solutions</h2>
            <p className='mt-5'>
              At our agency, we bring ideas to life through stunning graphic design, 
              innovative web development, and high-quality video editing. Whether 
              you need a visually captivating brand identity, a sleek and responsive 
              website, or engaging video content, we ensure every project is crafted 
              with precision and creativity. Our team combines artistic vision with 
              technical expertise to deliver exceptional digital experiences that 
              make your brand stand out in the competitive online world. Let’s 
              create something amazing together! 🚀
            </p>
          </div>
          {/* Image Column */}
          <div className="text-center">
            <img src={featureimgphoto3} 
            alt="Feature" 
            className="img-fluid mt-4"
            style={{ maxHeight: "700px", width: "auto" }}  />
          </div>
        </div>    
      </div>
    </section>

{/* 
  <!-- ===============================================
                 Web development 
 =================================================== --> */}

 <section id="webdevelopment" className='backgroundcolor p-5 mt-5'>
  <div className="container">
      <h2 className="text-center text-white mt-5 mb-5">Web Development Services</h2>
      <div className="row">
      <div className="col-md-3 mb-3">
        <Card className="shadow-lg border">
          <Card.Body>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px" }}>
              <FontAwesomeIcon
                icon={faFileContract}
                style={{ fontSize: "32px", color: "#ff4a17" }}
              />
          </div>        
            <Card.Title className='text-center mb-5'> BRANDING </Card.Title>
          </Card.Body>
        </Card>
        </div>
        <div className="col-md-3 mb-3">
        <Card className="shadow-lg">
          <Card.Body>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px" }}>
              <FontAwesomeIcon
                icon={faMedal}
                style={{ fontSize: "32px", color: "#ff4a17" }}
              />
          </div>  
            <Card.Title className='text-center mb-5'> QUALITY </Card.Title>
          </Card.Body>
        </Card>
        </div>
        <div className="col-md-3 mb-3">
        <Card className="shadow-lg">
          <Card.Body>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px" }}>
              <FontAwesomeIcon
                icon={faPenClip}
                style={{ fontSize: "32px", color: "#ff4a17" }}
              />
          </div>  
            <Card.Title className='text-center mb-5'> DESIGN </Card.Title>
          </Card.Body>
        </Card>
        </div>
        <div className="col-md-3 mb-3">
        <Card className="shadow-lg">
          <Card.Body>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px" }}>
              <FontAwesomeIcon
                icon={faPlaneDeparture}
                style={{ fontSize: "32px", color: "#ff4a17" }}
              />
          </div>  
            <Card.Title className='text-center mb-5'> CREATIVITY </Card.Title>
          </Card.Body>
        </Card>
        </div>
      </div>
    </div>
 </section>

 {/* Our Work */}
 <section id="ourwork" className="py-5">
  <div className="container">
    <h2 className="text-center mt-5 mb-5">Technical Skill</h2>
    <div className="row d-flex justify-content-center">
      <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
        <img 
        src={HTML} 
        alt="HTML" 
        className="img-fluid" 
        />
        <h3 className="mt-2">HTML</h3>
      </div>

      <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
        <img 
        src={CSS} 
        alt="CSS" 
        className="img-fluid" 
        />
        <h3 className="mt-2">CSS</h3>
      </div>

      <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
        <img 
        src={Bootstrap}
        alt="Bootstrap" 
        className="img-fluid" 
        />
        <h3 className="mt-2">Bootstrap</h3>
      </div>

      <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
        <img 
        src={Javascript} 
        alt="JavaScript" 
        className="img-fluid" 
        />
        <h3 className="mt-2">JavaScript</h3>
      </div>

      <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
        <img src={React} 
        alt="React" 
        className="img-fluid" 
        style={{ maxHeight: "50px", width: "auto" }}
        />
        <h3 className="mt-2">React</h3>
      </div>
    </div>


    <div className="row mt-5 d-flex justify-content-center">
      <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
        <img 
        src={Photoshop} 
        alt="Photoshop"  
        className="img-fluid" 
        />
        <h3 className="mt-2">Photoshop</h3>
      </div>

      <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
        <img 
        src={Illustrator} 
        alt="Illustrator" 
        className="img-fluid" 
        />
        <h3 className="mt-2">Illustrator</h3>
      </div>

      <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
        <img 
        src={Premiere} 
        alt="Premiere" 
        className="img-fluid" 
        />
        <h3 className="mt-2">Premiere Pro</h3>
      </div>

      <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
        <img 
        src={AfterEffect} 
        alt="AfterEffect" 
        className="img-fluid" 
        />
        <h3 className="mt-2">AfterEffect</h3>
      </div>

      <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
        <img src={Figma} 
        alt="figma" 
        className="img-fluid" 
        />
        <h3 className="mt-2">Figma</h3>
      </div>
    </div>
  </div>
</section>


{/*=====================================
         videosection 
  =====================================*/}

  <section id="videosection" className="py-5">
    <div className="container">
      <h2 className="text-center mt-5 mb-5">🎥 Bringing Ideas to Life: Web, Video & Design Excellence</h2>
      
    </div>
  </section>

  

      <Footer/>
    </>
  )
}

export default FeatureDesign;
