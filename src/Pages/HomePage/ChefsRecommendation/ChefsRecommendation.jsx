import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ChefsRecommendationItem from "./ChefsRecommendationItem";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const ChefsRecommendation = () => {
  const [recommendedItems, setRecommendedItems] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data?.filter(
          (item) => item.category === "offered"
        );
        setRecommendedItems(popularItems);
      });
  }, []);

  return (
    <section className="mt-10">
      <SectionTitle heading={"Chef recommends"} subHeading={"Should try"} />
      <div className="mx-36">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {recommendedItems.map((recommendedItem) => (
          <SwiperSlide key={recommendedItem._id}>
            <ChefsRecommendationItem
              image={recommendedItem.image}
              name={recommendedItem.name}
              recipe={recommendedItem.recipe}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>

    </section>
  );
};

export default ChefsRecommendation;
