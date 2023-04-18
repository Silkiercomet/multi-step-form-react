import { useState } from "react";
import { useForm } from "react-hook-form";
import InputPlan  from "./inputPlan";
import arcadeIcon from "../assets/icon-arcade.svg"
import advancedIcon from "../assets/icon-advanced.svg"
import proIcon from "../assets/icon-pro.svg"
const Form2 = ({ setFullform }) => {
  const [yearly, setYearly] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const OnYearly = () => setYearly(!yearly);
  const onSubmit = (e) => {
    const prices = {
      arcade: 9,
      advanced: 12,
      pro: 15,
    };
    const value = yearly ? prices[e.plan] * 10 : prices[e.plan];
    const type = yearly ? "yearly" : "monthly";
    // resets addon, if is a step back is a problem
    const billing = {
      type: type,
      price: value,
      plan: e.plan,
      addon: [],
    };
    const total = billing["price"];
    setFullform((prev) => ({ ...prev, billing: billing, total: total }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input
          className="radio__input"
          type="radio"
          name="arcade"
          id="arcade"
          {...register("plan", { required: true })}
          value={"arcade"}
        />
        <label htmlFor="arcade">
          <InputPlan
            name={"arcade"}
            img={arcadeIcon}
            amount={9}
            isYearly={yearly}
          />
        </label>
        <input
          className="radio__input"
          type="radio"
          name="advanced"
          id="advanced"
          {...register("plan", { required: true })}
          value={"advanced"}
        />
        <label htmlFor="advanced">
        <InputPlan
            name={"advanced"}
            img={advancedIcon}
            amount={12}
            isYearly={yearly}
          />
        </label>
        <input
          className="radio__input"
          type="radio"
          name="pro"
          id="pro"
          {...register("plan", { required: true })}
          value={"pro"}
        />
        <label htmlFor="pro">
        <InputPlan
            name={"pro"}
            img={proIcon}
            amount={15}
            isYearly={yearly}
          />
          </label>

        <div>
        <div className="switch__container">
        <p className={!yearly ? `switch__active` : `switch__inactive`}>Monthly</p>
        <label className="switch">
        <input type="checkbox" checked={yearly} onChange={OnYearly} />
        <span className="slider"></span>

        </label>
        <p className={yearly ? `switch__active` : `switch__inactive`}>Yearly</p>
        </div>
   
        </div>
        <button type="submit" id="btn-next">
          next step
        </button>
      </form>
    </div>
  );
};

export default Form2;
