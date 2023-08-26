import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="pt-8 my-20 text-white featured-image">
      <SectionTitle heading={"Featured item"} subHeading={"check it out"} />
      <div className="items-center justify-center pt-12 pb-20 px-36 md:flex">
        <div>
          <img src={featuredImage} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            veritatis laudantium, minima possimus quasi nam unde et nemo
            officiis fuga enim doloremque ipsa numquam modi optio temporibus
            soluta nostrum itaque!
          </p>
          <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
