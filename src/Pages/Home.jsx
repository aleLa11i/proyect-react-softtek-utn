import { HomeItem } from '../Components/Home/HomeItem';

const data = [ 1,2,3,4,5,6,7 ]

export const Home = () => {
  return (
    <>
      {data.map( item  => <HomeItem key={ item } /> )}
    </>
  )
}
