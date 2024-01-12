import { useState } from 'react'
import dev from '../images/dev.jpg';

const User = (props) => {

  const [count] = useState(0);

  return (
    <div className="mx-10 my-6 p-2 w-[265] h-96 bg-gray-150 rounded-lg  hover:shadow-gray-700 hover:shadow-2xl hover:border border-gray-200">
      <img className='h-[100] w-[100] mx-auto my-6' src={dev}></img>
      <h2 className='m-3'>Name: {props.name}</h2>
      <h3 className='m-3'>Location: {props.location}</h3>
      <h2 className='m-3'>Role: FrontEnd Developer</h2>
      <h2 className='m-3'>GitHub: <a className='hover:text-cyan-600' href='https://github.com/Kunal-Jadhav-1'>Kunal-Jadhav-1</a> </h2>
      <h2 className='m-3'>LinkedIn: <a className='hover:text-cyan-600' href='https://www.linkedin.com/in/kunal-jadhav-52236023b/'>Kunal Jadhav</a></h2>
      <h4 className='m-3'>Contact: jskunal.01@gmail.com</h4>
    </div>
  )
}

//  OR

// const User = ({name, location}) => {
//     return (
//       <div className="user-card">
//         <h2>Name: {name}</h2>
//         <h3>Location: {location}</h3>
//         <h4>Contact: jskunal.01@gmail.com</h4>
//       </div>
//     )
//   }

export default User
