import React from "react";
import Card from "../ui/Card";

interface props {
  id: string;
  name: string;
  preparation_time;
  type: string;
  no_of_slices: number;
  diameter: number;
  spiciness_scale: number;
  slices_of_bread: number;
}
const Order = ({
  id,
  name,
  preparation_time,
  type,
  no_of_slices,
  diameter,
  spiciness_scale,
  slices_of_bread,
}: props) => {
  return (
    <div className={"containerOrder"} key={id}>
      <Card>
        <h2>Name: {name}</h2>
        <h2>Preparation time: {preparation_time}</h2>
        <h2>Type of dish: {type}</h2>
        {no_of_slices ? <h2>Number of slices: {no_of_slices}</h2> : null}
        {diameter ? <h2>Diameter: {diameter}</h2> : null}
        {spiciness_scale ? <h2>Spiciness: {spiciness_scale}</h2> : null}
        {slices_of_bread ? <h2>Slices of bread: {slices_of_bread}</h2> : null}
      </Card>
    </div>
  );
};

export default Order;
