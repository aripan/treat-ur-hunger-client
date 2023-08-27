/* eslint-disable react/prop-types */

const ChefsRecommendationItem = ({ image, name, recipe }) => {
  return (
    <div className="text-black shadow-xl w-80 card bg-zinc-200">
      <figure>
        <img src={image} alt="" className="rounded" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="justify-center mt-2 card-actions">
          <button className="text-white uppercase btn btn-active btn-neutral">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefsRecommendationItem;
