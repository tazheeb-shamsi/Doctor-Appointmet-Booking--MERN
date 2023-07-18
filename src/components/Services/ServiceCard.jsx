import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = (item) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    <div
      className="py-[30px] px-3 lg:px-5 border border-r-2 border-b-2 rounded-lg"
      key={item.id}
    >
      <h2 className="text-[26px] leading-9 text-headingColor font-[700] ">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-textColor mt-4 ">
        {desc}
      </p>

      <div className="flex justify-between items-center mt-[30px]">
        <Link
          to="/doctors"
          className="w-[44px] h-[44px] rounded-full border border-solid border-headingColor flex items-center justify-center group hover:bg-primaryColor hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>

        <span
          className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]"
          style={{
            background: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: "6px 0 0 6px",
          }}
        >
          {item.id}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;