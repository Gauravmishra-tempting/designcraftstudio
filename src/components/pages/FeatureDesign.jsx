import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../assets/img/featuregraphics1.png';
import Navbar from '../layout/Navbar';




const FeatureDesign  = () => {
  const [index, setIndex] = useState(0);


  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };



  return (
    <>
      <Navbar/>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={ExampleCarouselImage}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default FeatureDesign;
