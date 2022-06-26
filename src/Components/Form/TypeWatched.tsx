import { Control, useWatch } from "react-hook-form";
import { FormValues } from "./resolver";
import React from "react";

function TypeWatched({
  control,
  register,
  errors,
}: {
  control: Control<FormValues>;
  register;
  errors;
}) {
  const type = useWatch({
    control,
    name: "type",
    defaultValue: "",
  });
  return (
    <>
      {type && type === "pizza" ? (
        <>
          <label htmlFor="no_of_slices">Number of slices</label>
          <input
              type={"number"}
              {...register("no_of_slices", { required: true })} />
          {errors.name && errors.name.type === "required" && (
            <span>{errors.name.message}</span>
          )}

          <label htmlFor="diameter">Diameter</label>
          <input
              {...register("diameter", { required: true })} />
          {errors.name && errors.name.type === "required" && (
            <span>{errors.name.message}</span>
          )}
        </>
      ) : null}
      {type && type === "soup" ? (
        <>
          <label htmlFor="spiciness_scale">Spiciness</label>
          <input
            type={"number"}
            min={0}
            max={10}
            {...register("spiciness_scale", { required: true })}
          />
          {errors.name && errors.name.type === "required" && (
            <span>{errors.name.message}</span>
          )}
        </>
      ) : null}
      {type && type === "sandwich" ? (
        <>
          <label htmlFor="slices_of_bread">Slices Of bread</label>
          <input
            type={"number"}
            min={1}
            max={10}
            {...register("slices_of_bread", { required: true })}
          />
          {errors.name && errors.name.type === "required" && (
            <span>{errors.name.message}</span>
          )}
        </>
      ) : null}
    </>
  );
}

export default TypeWatched;
