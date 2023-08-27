import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data?.filter(
          (item) => item.category === "popular"
        );
        setMenu(popularItems);
      });
  }, []);

  return (
    <section className="mt-10 mb-16">
      <SectionTitle heading={"From our menu"} subHeading={"Popular items"} />
      <div className="grid gap-10 mb-10 text-black md:grid-cols-2 mx-36">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="text-center text-black border-0 border-b-4 btn btn-outline">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
