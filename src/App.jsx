import { useEffect } from "react";
import Header from "./components/Header/Header";
import { useState } from "react";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";
// import Swal from 'sweetalert2';

const App = () => {
    
 const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('Allcourse.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[]);

    const [selectedCourses, setSelectedCourses] = useState([]);
    const [totalCreditHours, setTotalCreditHours] = useState(0);
    const [remainingCreditHours, setRemainingCreditHours] = useState(0);
  
    const selectCourse = (course) => {
      const isAlreadyExist = selectedCourses.find(c => c.id === course.id);
      let credits = course.credit;
      
      if (isAlreadyExist) {
        return Swal.fire({
          title: 'Error!',
          text: 'Course already selected!',
          icon: 'error',
          confirmButtonText: 'close'
        });
      } else {
        selectedCourses.forEach(c => credits += c.credit);
  
        const totalRemaining = 20 - credits;
  
        if (credits > 20) {
          return Swal.fire({
            title: 'Error!',
            text: 'Credit finished!',
            icon: 'error',
            confirmButtonText: 'close'
          });
        } else {
          setTotalCreditHours(credits);
          setRemainingCreditHours(totalRemaining);
          setSelectedCourses([...selectedCourses, course]);
        }
      }
    }
   
    return (
        <div className="container mx-auto">
            <Header></Header>
            <div className="flex">
                <Cards 
                courses={courses} selectCourse={selectCourse}></Cards>
                <Cart selectedCourses={selectedCourses} totalCreditHours={totalCreditHours} remainingCreditHours={remainingCreditHours}></Cart>
            </div>
        </div>
    );
};

export default App;