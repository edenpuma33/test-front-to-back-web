import axios from "axios";
import createAlert  from "../../utils/createAlert";
import { useForm } from "react-hook-form"
import FormInput from "../../components/form/FormInput";
import Buttons from "../../components/form/Buttons";

// Validator
import { registerSchema } from "../../utils/validators";
import { zodResolver } from '@hookform/resolvers/zod'

const Register1 = () => {
  // Javascript

  const { register, handleSubmit, formState } = useForm({
    resolver:zodResolver(registerSchema)
  });
  const { isSubmitting,errors } = formState;

  console.log(errors);
  const hdlSubmit = async(value) =>{
    // Delay
    await new Promise((resolve)=> setTimeout(resolve,2000))

    try {
      const res = await axios.post("http://localhost:9999/api/register",value)
      console.log(res)

      createAlert("success","Register Success")
    } catch (error) {
      createAlert("info",error.response.data.message)
      console.log(error.response.data.message)
    }
  }

  return (
    <div className="flex w-full h-full justify-end">
      <div className="w-64 border p-4 rounded-md">
        <h1 className="text-xl font-bold text-center">Register1</h1>

        {/* form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col gap-2 py-4">

          <FormInput register={register} name="email"/>
          <FormInput register={register} name="firstname"/>
          <FormInput register={register} name="lastname"/>
          <FormInput register={register} name="password"/>
          <FormInput register={register} name="confirmPassword"/>

          </div>
          <div className="flex justify-center">
            <Buttons isSubmitting={isSubmitting} label="Register"/>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register1;
