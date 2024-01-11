import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Housekeeping = () => {
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
    <section className="housekeeping" id="housekeeping">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Housekeeping Highlights</h2>
                        <p>Hey Team, just a heads up to keep things spick and span! Here's the lowdown on our housekeeping game plan</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                
                                <h5>Hygiene Heroes</h5>
                                <p>Keep it fresh, pals! COVID's doing its thing, so wash those hands like you're in a handwashing concert. Feeling weird? Do the RTK test groove, my buddies!</p>
                            </div>
                            
                            <div className="item">
                                
                                <h5>Chill Roomie Code</h5>
                                <p>Roomie love time! Keep your space cool, and let's not turn our rooms into a late-night dance club 🕺💃 after 11 PM. Ghosts need their beauty sleep too, you know?</p>
                            </div>
                            
                            <div className="item">
                                
                                <h5>Punctuality</h5>
                                <p>It's time to party, so let's keep it on schedule! ⏲️ No fashionably late entries; 🚫</p>
                            </div>
                            <div className="item">
                                
                                <h5>Socializing & leisure activities</h5>
                                <p>You're also invited to "healing" with your bestie at the hilltop, by the pool , or relax by the lake 🏞️ </p>
                            </div>
                            <div className="item">
                                
                                <h5>Shush, No Noise Please</h5>
                                <p>Psst...keep it down! We're not aiming for the loud neighbors award. BNM's got a cool reputation 💁‍♀️ to uphold, peeps! Let's keep the noise in check and maintain our awesomeness.</p>
                            </div>
                            <div className="item">
                                
                                <h5>Activity Chill Zone</h5>
                                <p>Get ready for the chill activities! Outdoor and indoor vibes—two worlds, one laid-back time. Plan with your captain, and jungle adventurers, dress right and keep those phones and cameras chill for the outdoor fun.</p>
                            </div>
                            
                            <div className="item">
                                
                                <h5>Fun is the Ultimate Goal</h5>
                                <p>Dive into the joy! With many new faces around, this is the time to connect, laugh, and make friends. To the newbies, it's your moment—embrace the fun!</p>
                            </div>
                        </Carousel>
                        <p>🌟🧹 #TeamClean #HousekeepingReminder #TeamEffort</p>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
