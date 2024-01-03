import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="mx-auto text-left max-w-4xl  bg-gray-300 rounded-2xl m-2">
            <h1 className="text-center">This is Burp</h1>
            <User name = "Kunal Jadhav (func)" location="Pune (func)"/>
            <UserClass  name = "Kunal Jadhav (class)" location="Pune (class)"/>
        </div>
    );
};

export default About;