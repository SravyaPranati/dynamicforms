import React, { Component } from 'react';
class Blogs extends Component {
    state = {
        blogs: []
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        blogs: result
                    });
                    console.log(result);
                }
            )
    }

    render() {
        const { blogs } = this.state;


        return (
            <div>
                <ol className="blog-item">
                    {
                        blogs.map(blog => (
                            <li key={blog.id}>
                                <div>
                                    <p className="title" align="start">{blog.title}</p>
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