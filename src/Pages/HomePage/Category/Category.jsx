import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

function Category() {
  return (
    <section>
      <SectionTitle
        heading={"Order online"}
        subHeading={"From 11:00 am to 10:00 pm"}
      ></SectionTitle>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="mb-20"
      >
        <SwiperSlide>
          <img src={slide1} alt="slide1" />
          <h3 className="mb-4 ml-16 -mt-16 text-4xl text-white uppercase">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slide2" />
          <h3 className="mb-4 ml-16 -mt-16 text-4xl text-white uppercase">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slide3" />
          <h3 className="mb-4 ml-16 -mt-16 text-4xl text-white uppercase">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="slide4" />
          <h3 className="mb-4 ml-16 -mt-16 text-4xl text-white uppercase">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="slide5" />
          <h3 className="mb-4 ml-16 -mt-16 text-4xl text-white uppercase">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Category;
