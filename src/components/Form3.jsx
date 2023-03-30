import React from "react";
import { useForm } from "react-hook-form";
const Form3 = ({ setFullform }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    if (!e.addon.length) return;

    let add = e.addon.reduce(
      (acc, cur) => (cur === "online services" ? (acc += 1) : (acc += 2)),
      0
    );
    setFullform((prev) => {
      let { billing, total } = prev;
      if (billing.type === "yearly") {
        add *= 12;
        total += add
      }
      
      return { ...prev, billing: billing, addon: e.addon, total:total };
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="online">
        online services online services online services
      </label>
      <input
        type="checkbox"
        name="online services"
        value={"online services"}
        {...register("addon")}
        id="online"
      />
      <label htmlFor="storage">
        larger storage larger storage larger storage
      </label>
      <input
        type="checkbox"
        name="larger storage"
        value={"larger storage"}
        {...register("addon")}
        id="storage"
      />
      <label htmlFor="custom">
        customizable profile customizable profile customizable profile
      </label>
      <input
        type="checkbox"
        name="customizable profile"
        value={"customizable profile"}
        {...register("addon")}
        id="custom"
      />
      <button>next step</button>
    </form>
  );
};

export default Form3;
