import React from "react";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

function SubscriptionItem({ item }) {
  const { title, desc, price, duration, benefit } = item;

  let adjustedPrice;
  let buttonTitle;
  let checkMark;
  let outline;

  const adjustedBenefit = [];
  benefit.forEach((item) => adjustedBenefit.push(item.title));

  switch (title) {
    case "Enterprise":
      adjustedPrice = "Custom";
      buttonTitle = "Contact Sales";
      checkMark = (
        <div className="flex flex-rw">
          <FaCheck />
          <FaCheck />
        </div>
      );
      outline = "ring-1 ring-gray-200";
      break;
    case "Pro":
      adjustedPrice = "Free";
      buttonTitle = "Sign up";
      checkMark = (
        <div>
          <FaCheck />
        </div>
      );
      outline = "ring-1 ring-gray-200";
      break;
    case "Premium":
      adjustedPrice = price;
      buttonTitle = "Sign up and Subscribe";
      checkMark = (
        <div>
          <FaCheck />
        </div>
      );
      outline = "ring-2 ring-blue-600";
      break;
    default:
      adjustedPrice = price;
      buttonTitle = "Sign up and Subscribe";
      checkMark = (
        <div>
          <FaCheck />
        </div>
      );
  }

  return (
    <div className="w-[100%] flex flex-row justify-center">
      <div
        className={`w-[320px] ${outline} p-3 flex flex-col gap-8 rounded-md`}
      >
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p>{desc}</p>
        <div className="flex flex-row gap-2">
          <h1>{adjustedPrice}</h1>
          <h1>{duration}</h1>
        </div>
        <Link to="/signup">{buttonTitle}</Link>
        <ul className="space-y-1">
          {adjustedBenefit.map((item, i) => (
            <li className="flex flex-row" key={i}>
              {checkMark} {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SubscriptionItem;
