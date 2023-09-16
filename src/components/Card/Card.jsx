
import PropTypes from 'prop-types';
const Card = ({course,selectCourse}) => {
    const {img,course_title,price,credit} = course;
    return (
        <div>
            <img className='w-full' src={img} alt="" />
            <h1>{course_title}</h1>
            <div className='flex justify-between'>
                <h1>$ <span>Price : {price}</span></h1>
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