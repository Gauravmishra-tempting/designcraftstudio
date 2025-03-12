import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { faPenClip } from "@fortawesome/free-solid-svg-icons";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import featureimgphoto3 from "../../assets/img/featureimgphoto3.png"




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
      <div className="col m b-3">
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
        <div className="col mb-3">
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
        <div className="col mb-5">
        <Card className="shadow-lg h-100">
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
        <div className="col mb-5">
        <Card className="shadow-lg h-100">
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

 

      <Footer/>
    </>
  )
}

export default FeatureDesign;
