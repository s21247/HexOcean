import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Order from "./Order";

const Orders = () => {
  const orders = useSelector((state: RootState) => state.orders.value);

  return (
    <div>
      {orders.length >= 1 ? (
        <h1 className={"Orders"}>Your previous orders:</h1>
      ) : null}
      {orders.map((order) => {
        return (
          <Order
            key={order.id}
            id={order.id}
            name={order.name}
            preparation_time={order.preparation_time}
            type={order.type}
            no_of_slices={order.no_of_slices}
            spiciness_scale={order.spiciness_scale}
            diameter={order.diameter}
            slices_of_bread={order.slices_of_bread}
          />
        );
      })}
    </div>
  );
};

export default Orders;
