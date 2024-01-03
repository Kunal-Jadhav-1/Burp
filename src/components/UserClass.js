import React from 'react';

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    render() {
        const { name, location } = this?.props;
        const { count } = this?.state

        //Destructure if you want or just use this.props.name

        return (
            <div className="m-4 p-3 w-64 h-64 bg-gray-150 rounded-lg  hover:shadow-gray-700 hover:shadow-2xl hover:border border-gray-200 my-8">
                <h2 className='m-3'>Name: {name}</h2>
                <h2 className='m-3'>Count: {count}</h2>
                <button className='border border-gray-600 bg-gray-100 p-1 mx-1 rounded-lg' onClick={() => {
                    this.setState({
                        count: count + 1
                    })
                }}>Count++</button>
                <button className='border border-gray-600 bg-gray-100 p-1 mx-1 rounded-lg' onClick={() => {
                    this.setState({
                        count: count - 1
                    })
                }}>Count--</button>
                <h3 className='m-3'>Location: {location}</h3>
                <h4 className='m-3'>Contact: jskunal.01@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;