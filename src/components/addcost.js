import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const additionalcost = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="addcost" id="addcost">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="addcost-bx wow zoomIn">
                        <h2>Additional Costs</h2>
                        <p>Hey Team, just a heads up :</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme housekeeping-slider">
                            <div className="item">
                                
                                <h5>Hotel Deal</h5>
                                <p>If you decide to bring your family along, just throw in an extra RM 250 for the 3 days and 2 nights room package. This covers the sweet half-price deal we've got going on. It's like a little family discount to make your stay even more awesome! </p>
                            </div>
                            
                            <div className="item">
                                
                                <h5>Museum</h5>
                                <p>An additional RM 2 for each family member attending the museum, but here's the sweet deal : if they're under 12, it's totally free! </p>
                            </div>
                            
                            
                        </Carousel>
                        
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
