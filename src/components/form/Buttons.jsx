import { Loader } from "lucide-react"

const Buttons = ({isSubmitting,label}) => {
  return (
    <button className="bg-green-600 text-white px-2 py-1 rounded-md hover:cursor-pointer">
    {
        isSubmitting
        ? <div className="flex gap-2">
            <Loader className="animate-spin"/>
           <p>Loading ...</p> 
        </div>
        : <p>{label}</p>
    }
    </button>
  )
}
export default Buttons