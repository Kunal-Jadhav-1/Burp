import React from 'react';

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count : 0,
        };
    }

    render() {
        const { name, location } = this?.props;
        const {count} = this?.state

        //Destructure if you want or just use this.props.name

        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h2>Count: {count}</h2>
                <button onClick={() => {
                    this.setState({
                        count: count+1
                    })
                }}>Count++</button>
                <button onClick={() => {
                    this.setState({
                        count: count-1
                    })
                }}>Count--</button>
                <h3>Location: {location}</h3>
                <h4>Contact: jskunal.01@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;