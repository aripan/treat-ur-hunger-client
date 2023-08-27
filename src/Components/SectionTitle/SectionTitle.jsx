/* eslint-disable react/prop-types */
const SectionTitle = ({
  heading,
  subHeading,
  headingColor = "",
  subHeadingColor = "",
}) => {
  return (
    <div className="mx-auto my-8 text-center md:w-3/12">
      <p
        className={`${
          subHeadingColor ? subHeadingColor : "text-orange-400"
        } mb-2`}
      >
        ---{subHeading}---
      </p>
      <h3
        className={`py-4 text-3xl uppercase border-y-4 ${
          headingColor ? headingColor : "text-black"
        }`}
      >
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
