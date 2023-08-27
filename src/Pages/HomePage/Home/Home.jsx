import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefsRecommendation from "../ChefsRecommendation/ChefsRecommendation";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Statement from "../Statement/Statement";
import Testimonials from "../Testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <Banner />
      <Category />
      <Statement />
      <PopularMenu />
      <CallUs />
      <ChefsRecommendation />
      <Featured />
      <Testimonials />
    </div>
  );
}
