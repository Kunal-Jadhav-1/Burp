import User from "./User";
import UserClass from "./UserClass";
import UserContext from '../utils/userContext';

const About = () => {
    return (
        <div className="mx-auto text-center max-w-4xl  bg-gray-300 rounded-2xl m-2">
            <h1 className="text-center">This is Burp</h1>
            <div className="m-4 p-3 w-64 h-max bg-gray-150 rounded-lg text-center  hover:shadow-gray-700 hover:shadow-2x">
                <h1><b>LoggedIn User :</b> <UserContext.Consumer>
                    {({ loggedInUser }) => <p>{loggedInUser}</p>}
                </UserContext.Consumer></h1>

            </div>
            <h1 className='m-3 text-lg font-bold'>Our Developers</h1>
            <User name="Kunal Jadhav" location="Pune" />
            {/* <UserClass name="Kunal Jadhav (class)" location="Pune (class)" /> */}
            <div className="h-4">

            </div>
        </div>
    );
};

export default About;