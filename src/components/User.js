import {useState} from 'react'

const User = (props) => {

    const  [count] = useState(0);
    const  [count2] = useState(1);

  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h2>Count: {count}</h2>
      <h2>Count2: {count2}</h2>
      <h3>Location: {props.location}</h3>
      <h4>Contact: jskunal.01@gmail.com</h4>
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
