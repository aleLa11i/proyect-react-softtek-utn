import { useDispatch } from "react-redux";
import { addStars } from "../../../Actions/newpost";

export const Star = ({value, name}) => {
  const dispatch = useDispatch();
  return (
    <>
        <input 
            id={`radio${value}`}
            type='radio' 
            name='star' 
            value={value}  
        />
        <label 
          onClick={ ()=> dispatch(addStars(name,value)) }
          forhtml={`radio${value}`}
        >★</label>
    </>
  )
};
