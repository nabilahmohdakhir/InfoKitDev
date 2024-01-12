import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";


export const Location = () => {
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
    <section className="location" id="location">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>How to get there ?</h2>
                        
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                
                                <h5>Check-In</h5>
                                <p>The check-in fiesta begins at 3 PM on January 19, 2023, or whenever rooms are ready. Seek out the representative in charge for your key—it's initiation time!</p>
                            </div>
                            <div className="item">
                                
                                <h5>Check-out</h5>
                                <p>Check-out by 12 PM on January 21, 2023. Avoid fashionably late exits—any extra costs are on the late crew. Each room is tailored for two adults, and our committee members are there for your queries.</p>
                            </div>
                            
                        </Carousel>
                        
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}
