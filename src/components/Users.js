import React, { Component } from 'react';
class Blogs extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        users: result
                    });

                }
            )
    }

    render() {
        const { users } = this.state;


        return (
            <div>
                <ol className="user-item">
                    {
                        users.map(user => (
                            <li key={user.id}>
                                <div>
                                    <p className="name" align="start">{user.name}</p>
                                </div>
                            </li>
                        ))
                    }
                </ol>
            </div>
        );
    }

}

export default Blogs;