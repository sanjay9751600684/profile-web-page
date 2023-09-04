import React from "react";
import { useForm } from "react-hook-form";
import './Con2.css';


export default function Form() {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
       
      <div>
<label>Name</label>
<input 
 placeholder="Enter your name"
style={{marginTop:"40px"}}
{...register("name", { required: true ,
    pattern:/^[a-zA-Z]*$/,
})}
/>
<br></br>

<error>
{errors.name?.type === "required" && "Name is required"}
{errors.name?.type === "pattern" &&
"number does not exist"}
</error>
</div>
<br></br>
        <div>
          <label>Email</label>
          <input
            placeholder="Enter primary email"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            })}
          />
          <error>
            {errors.email?.type === "required" && "Email is required"}
            {errors.email?.type === "pattern" &&
              "Entered email is in wrong format"}
          </error>
        </div>
        <div>
          <label>Phone Number</label>
          <input
           placeholder="Enter Phone Number"
            type="number"
            {...register("number", {
              minLength: 10,
              maxLength: 12,
            })}
          />
          <error>
            {errors.number?.type === "minLength" &&
              "Entered number is less than 10 digits"}
            {errors.number?.type === "maxLength" &&
              "Entered number is more than 12 digits"}
          </error>
        </div>
        <div>
          <label>Message</label>
          <input
            placeholder="Enter Message"
            {...register("Message", { required: true })}
          />
         
        </div>
        <div>
          <input className="button"  variant="contained" size="small" type="submit" style={{borderRadius:50,}}/>
         
        </div>
      </form>
    </div>
  );
}