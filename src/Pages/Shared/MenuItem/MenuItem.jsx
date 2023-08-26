/* eslint-disable react/prop-types */

const MenuItem = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="flex space-x-2">
      <img
        style={{
          borderRadius: "0 200px 200px 200px",
        }}
        className="w-[100px] mr-4"
        src={image}
        alt="name"
      />
      <div>
        <h3 className="uppercase">{name}----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
