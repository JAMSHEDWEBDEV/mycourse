
import PropTypes from 'prop-types';
const Card = ({course,selectCourse}) => {
    const {img,course_title,price,credit,details} = course;
    return (
        <div className='bg-gray-300 p-5 rounded'>
            <img className='w-full my-2' src={img} alt="" />
            <h1 className='text-xl font-bold my-3'>{course_title}</h1>
            <p className='text-sm'>{details}</p>
            <div className='flex justify-between my-3'>
                <h1 className='text-lg font-semibold'>$ <span>Price : {price}</span></h1>
                <div>
                    <h2> Credit : {credit} hr</h2>
                </div>
            </div>
            <button 
            onClick={()=> selectCourse(course)}
            className='w-full bg-blue-700 px-2 py-2 font-bold rounded text-xl text-white'>Select Course</button>
        </div>
    );
};

Card.propTypes = {
    course : PropTypes.object.isRequired,
    selectCourse: PropTypes.func.isRequired
}
export default Card;