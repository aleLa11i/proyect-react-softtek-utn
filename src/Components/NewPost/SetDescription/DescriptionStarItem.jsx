import { Star } from "./Star";

export const DescriptionStarItem = ({label, name}) => {
    const stars = ['1', '2', '3', '4', '5'];

    return (
        <div    className='mx-5 my-2 d-flex align-items-center'>
            <h4 className='w-25'> {label} </h4>
            <form className='d-stars'>
                <p>
                    {
                        stars.map( (s,index) => <Star name={name} key={ index } value={ s } />)
                    }
                </p>
            </form>
        </div>
    )
}
