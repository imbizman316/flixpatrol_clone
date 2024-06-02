import React from "react";
import { subscriptions } from "../../../data";
import SubscriptionItem from "./SubscriptionItem";

function SubscriptionContainer() {
  return (
    <div>
      <div className="flex flex-row justify-center items-center my-7">
        <button>Monthly</button>
        <button>Annualy</button>
      </div>
      <div className="flex flex-row gap-5">
        {subscriptions?.map((item) => (
          <SubscriptionItem key={item.id} item={item} />
        ))}
      </div>
      <p className="m-10 line-clamp-1">
        Do you have any questions about FlixPatrol features, datasets, pricing,
        or API? Contact us and we will get back to you.
      </p>
    </div>
  );
}

export default SubscriptionContainer;
