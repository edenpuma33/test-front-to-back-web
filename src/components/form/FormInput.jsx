const FormInput = ({register, name}) => {
  return (
    <input 
    placeholder={name}
    type="text"
    {...register(name)}
    className="border w-full border-blue-800 rounded-md p-1 px-4"
    />
  )
}
export default FormInput