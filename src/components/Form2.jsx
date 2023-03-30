import {useState} from 'react'
import { useForm } from "react-hook-form";



const Form2 = ({setFullform}) => {
  const [yearly, setYearly] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const OnYearly = () => setYearly(!yearly)
  const onSubmit = (e) => {
    const prices = {
      "arcade": 9,
      "advanced": 12,
      "pro": 15
    }
    const value = yearly ? prices[e.plan] * 10 : prices[e.plan]
    const type = yearly ? "yearly" : "monthly"
    // resets addon, if is a step back is a problem  
    const billing = {
    type: type,
    price:value,
    plan:e.plan,
    addon:[]
    }
    const total = billing["price"]
    setFullform((prev) => ({...prev, billing:billing, total:total}))

  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="arcade">arcade 65684485</label>
        <input className='radio__input' type="radio" name="arcade" id="arcade" {...register("plan", { required: true })} value={"arcade"}/>
        <label htmlFor="advanced"> advanced6+256468484</label>
        <input className='radio__input' type="radio" name="advanced" id="advanced" {...register("plan", { required: true })} value={"advanced"}/>
        <label htmlFor="pro">pro asd564a64dsa4d684</label>
        <input className='radio__input' type="radio" name="pro" id="pro" {...register("plan", { required: true })} value={"pro"} />
        <div>
        <button onClick={OnYearly}>yearly is: {yearly ? "activated" : "deactivated"}</button>
        </div>
        <button type="submit">next step</button>
      </form>

    </div>
  )
}

export default Form2