import {Resolver} from "react-hook-form";

export type FormValues = {
    name: string;
    preparation_time: string;
    type: string;
    no_of_slices: number;
    diameter: number;
    spiciness_scale: number;
    slices_of_bread: number;
};


export const resolver: Resolver<FormValues> = async (values) => {
    return {
        values: values.name ? values : "",
        errors: !values.name
            ? {
                name: {
                    type: "required",
                    message: "This is required",
                },
            }
            : {},
    };
};