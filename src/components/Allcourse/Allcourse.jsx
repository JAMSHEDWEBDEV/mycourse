import { useState } from "react";
import Cart from "../Selectcourse/Cart";
import { useEffect } from "react";

const Allcourse = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('Allcourse.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <div className="container mx-auto bg-zinc-200 py-6 rounded-lg">
            <h1 className="text-4xl text-center my-10 font-bold">Course Registration</h1>
            <div className="flex gap-5">
                {/* All course container div start */}
                <div className="w-4/5">
                    <div className="grid gap-5 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        courses.map(course =>
                        <div className="bg-white p-5 rounded-xl" key ={course.id}>
                            <img className="w-full mb-2" src={course.img} alt="" />
                            <h1 className="text-lg font-bold my-2">{course.course_title}</h1>
                            <p className="text-sm mb-3">{course.details}</p>
                            <div className="flex justify-between items-center">
                                <div>$ <span>Price : {course.price}</span></div>
                                <div>Credit : {course.credit} hr</div>
                            </div>
                            <button className="bg-blue-700 mt-5 text-white font-bold text-xl px-5 py-2 rounded-xl w-full"
                            >Select Course</button>
                        </div> )
                    }
                    </div>

                </div>
                {/* All course container div end  */}

                {/* select course div start  */}
                <div className="w-1/5">
                    <Cart></Cart>
                </div>
                {/* select course div end  */}
            </div>
        </div>
    );
};

export default Allcourse;