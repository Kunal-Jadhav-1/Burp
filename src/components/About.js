import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="about">
            <h1>This is Burp</h1>
            <User name = "Kunal Jadhav (func)" location="Pune (func)"/>
            <UserClass  name = "Kunal Jadhav (class)" location="Pune (class)"/>
        </div>
    );
};

export default About;