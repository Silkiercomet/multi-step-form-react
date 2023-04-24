import React from "react";
import { useForm } from "react-hook-form";
import AddOn from "./AddOn";
const Form3 = ({ setFullform, handleNumber }) => {
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
      let { billing } = prev;
      if (billing.type === "yearly") {
        add = add * 10;
      }
      
      return { ...prev, billing: billing, addon: e.addon };
    });
    handleNumber(true)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form3">
      <input
        type="checkbox"
        name="online services"
        value={"online services"}
        {...register("addon")}
        id="online"
      />
      <label htmlFor="online">
        <AddOn addonTitle={"Online services"} addonDes={"Access to multiplayer games"} amount={1} />
      </label>

      <input
        type="checkbox"
        name="larger storage"
        value={"larger storage"}
        {...register("addon")}
        id="storage"
      />
      <label htmlFor="storage">
      <AddOn addonTitle={"Larger storage"} addonDes={"Extra 1TB of cloud save"} amount={2} />
      </label>

      <input
        type="checkbox"
        name="customizable profile"
        value={"customizable profile"}
        {...register("addon")}
        id="custom"
      />
      <label htmlFor="custom">
      <AddOn addonTitle={"Customizable Profile"} addonDes={"Custom theme on your profile"} amount={2} />
      </label>

      <button type='submit' id='btn-next' >Next Step</button>
      <button id='btn-prev' onClick={()=>handleNumber(false)}>Go Back</button>
    </form>
  );
};

export default Form3;
