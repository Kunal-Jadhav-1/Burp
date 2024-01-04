import User from "./User";
import UserClass from "./UserClass";
import UserContext from '../utils/userContext';

const About = () => {
    return (
        <div className="mx-auto text-left max-w-4xl  bg-gray-300 rounded-2xl m-2">
            <h1 className="text-center">This is Burp</h1>
            <div className="m-4 p-3 w-64 h-max bg-gray-150 rounded-lg  hover:shadow-gray-700 hover:shadow-2xl hover:border border-gray-200 my-8 flex">
                <h1><b>LoggedIn User :</b> <UserContext.Consumer>
                    {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
                </UserContext.Consumer></h1>

            </div>
            <User name="Kunal Jadhav (func)" location="Pune (func)" />
            <UserClass name="Kunal Jadhav (class)" location="Pune (class)" />
        </div>
    );
};

export default About;