import {useState} from 'react'

const User = (props) => {

    const  [count] = useState(0);

  return (
    <div className="m-3 p-2 w-72 h-60 bg-gray-150 rounded-lg  hover:shadow-gray-700 hover:shadow-2xl hover:border border-gray-200 my-8">
      <h1 className='m-3 text-lg font-bold'>Our Developers</h1>
      <h2 className='m-3'>Name: {props.name}</h2>
      <h2 className='m-3'>Role: FrontEnd Developer</h2>
      <h3 className='m-3'>Location: {props.location}</h3>
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
