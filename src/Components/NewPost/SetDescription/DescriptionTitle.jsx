import { useDispatch } from "react-redux";
import { addTitle } from "../../../Actions/posts";

export const DescriptionTitle = () => {
  const dispatch = useDispatch();

  return (
    <form className="mx-5 mb-5 d-flex flex-column flex-wrap">
      <h4 className="w-25 me-5">Título</h4>
      <input
        type="text"
        // className="w-75"
        name="title"
        onChange={({ target }) => dispatch(addTitle(target.value))}
      />
    </form>
  );
};
