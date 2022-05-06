import { useDispatch } from "react-redux";
import { addDescription } from "../../../Actions/newpost";

export const DescriptionTextArea = () => {
  const dispatch = useDispatch();

  return (
    <form className="mx-5 mb-5 d-flex">
      <h4 className="w-25 me-5">Descripción</h4>
      <textarea
        name="description"
        className="w-100"
        cols="100"
        rows="10"
        onChange={({ target }) => dispatch(addDescription(target.value))}
      />
    </form>
  );
};
