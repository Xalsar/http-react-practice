import React, { Component } from 'react';
import axios from 'axios'
import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    async componentDidMount() {
        await this.loadData()
    }

    async componentDidUpdate() {
        await this.loadData()
    }

    async loadData() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
        if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== Number(this.props.match.params.id))) {
            this.setState({ loadedPost: response.data })
        }
    }

    deletePostHandler = async (id) => {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        console.log(response)
    }

    render() {
        console.log('OK!')
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.match.params.id) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>

            )
        }
        return post;
    }
}

export default FullPost;
