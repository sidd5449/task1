import React from 'react';
import './ImgCarousel.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import s1 from '../../assets/s1.jpg';
import s2 from '../../assets/s2.jpg';
import s3 from '../../assets/s3.jpg';
import s4 from '../../assets/s4.jpg';
import s5 from '../../assets/s5.jpg';

const ImgCarousel = () => {
  return (
    <div className="app__imgcarousel">
        <h1>Few Glimpses of the Campus</h1>
        <Carousel
            className='imgCarousel'
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            dynamicHeight={true}
        >
                <div>
                    <img src={s1} alt="car-img" />
                </div>
                <div>
                    <img src={s2} alt="car-img" />
                </div>
                <div>
                    <img src={s3} alt="car-img" />
                </div>
                <div>
                    <img src={s4} alt="car-img" />
                </div>
                <div>
                    <img src={s5} alt="car-img" />
                </div>
        </Carousel>
    </div>
  )
}

export default ImgCarousel