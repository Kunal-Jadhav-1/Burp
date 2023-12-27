import {useRouteError} from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div className="error">
        <h1>Oops....You Fucked Up</h1>
        <h2>You Are Useless and A Total Failure</h2>
        <h3>{err.status} : {err.statusText}</h3>
    </div>
  )
}

export default Error
