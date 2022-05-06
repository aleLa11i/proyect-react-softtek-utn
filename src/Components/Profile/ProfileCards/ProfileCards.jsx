import { GetCard } from "./GetCard";

const data = [1,2,3,4,5,6,7,8,9,10];

export const ProfileCards = () => {
  return (
    <div
        className="d-flex flex-wrap justify-content-center"
    >
        {
        data.map( () => <GetCard />)
        }
    </div>
  );
};
