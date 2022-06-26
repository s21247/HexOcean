import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { addOrder } from "../../features/rootSlice";
import { v4 as idv4 } from "uuid";
import { resolver, FormValues } from "./resolver";
import TypeWatched from "./TypeWatched";
import axios from "axios";
import {body} from "../models/body.interface";

const Form = () => {
  const dispatch = useDispatch();
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const id = idv4();
    dispatch(
      addOrder({
        id,
        name: data.name,
        preparation_time: data.preparation_time,
        type: data.type,
        no_of_slices: data.no_of_slices,
        diameter: data.diameter,
        spiciness_scale: data.spiciness_scale,
        slices_of_bread: data.slices_of_bread,
      })
    );
      const obj: body = {
          id,
          name: data.name,
          preparation_time: data.preparation_time,
          type: data.type,
          no_of_slices: parseInt(String(data.no_of_slices)),
          diameter: parseFloat(String(data.diameter)),
          spiciness_scale: parseInt(String(data.spiciness_scale)),
          slices_of_bread: parseInt(String(data.slices_of_bread)),
      };

    axios
      .post("https://frosty-wood-6558.getsandbox.com:443/dishes", obj, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: "",
        preparation_time: "00:00:00",
        type: "",
      });
    }
  }, [formState, reset]);
  return (
      <div className={"container"}>
          <h2>Make an order</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input {...register("name", { required: true })} />
      {errors.name && errors.name.type === "required" && (
        <span>{errors.name.message}</span>
      )}
        <label htmlFor="type">Choose type</label>
      <select {...register("type", { required: true })}>
        <option value="" />
        <option value="pizza">Pizza</option>
        <option value="soup">Soup</option>
        <option value="sandwich">Sandwich</option>
      </select>
      {errors.name && errors.name.type === "required" && (
        <span>{errors.name.message}</span>
      )}
        <label htmlFor="Preparation time">Preparation time</label>
      <input
        {...register("preparation_time", { required: true })}
        type="time"
        step={"2"}
        defaultValue={"00:00:00"}
      />
      {errors.name && errors.name.type === "required" && (
        <span>{errors.name.message}</span>
      )}

      {<TypeWatched control={control} register={register} errors={errors} />}

      <input type={"submit"} />
    </form>
      </div>
  );
};

export default Form;
