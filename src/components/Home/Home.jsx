import LeftSide from '../Shared/LeftSide/LeftSide';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/Sajek.png'
import img2 from '../../assets/Sreemongol.png'
import img3 from '../../assets/sundorbon.png'
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './Home.css'

const Home = () => {

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-6 my-margin'>
                    <LeftSide/>
                </div>
                <div className='col-12 col-md-6 my-margin'>
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        spaceBetween={30}
                        slidesPerView={3}
                    >
                        <div style={{ marginRight: '-100px' }}>
                            <SwiperSlide onClick={() => console.log('click')}><img className='img-fluid' src={img1} alt="" /></SwiperSlide>
                            <SwiperSlide><img className='img-fluid' src={img2} alt="" /></SwiperSlide>
                            <SwiperSlide><img className='img-fluid' src={img2} alt="" /></SwiperSlide>
                            <SwiperSlide><img className='img-fluid' src={img2} alt="" /></SwiperSlide>
                            <SwiperSlide><img className='img-fluid' src={img2} alt="" /></SwiperSlide>
                            <SwiperSlide><img className='img-fluid' src={img3} alt="" /></SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Home;