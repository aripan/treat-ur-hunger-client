import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="mt-10 bg-fixed featured-image">
      <div className="pt-2 my-4 text-white feature-image-children">
        <SectionTitle
          heading={"Featured item"}
          subHeading={"check it out"}
          headingColor={"text-white"}
        />
        <div className="items-center justify-center pt-12 pb-20 px-36 md:flex">
          <div className="flex-1 ">
            <img className="rounded" src={featuredImage} alt="" />
          </div>
          <div className="flex-1 md:ml-10">
            <p>Aug 20, 2029</p>
            <br />
            <p className="uppercase">Where can i get some?</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              veritatis laudantium, minima possimus quasi nam unde et nemo
              officiis fuga enim doloremque ipsa numquam modi optio temporibus
              soluta nostrum itaque!
            </p>
            <br />
            <button className="text-white border-0 border-b-4 btn btn-outline">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
