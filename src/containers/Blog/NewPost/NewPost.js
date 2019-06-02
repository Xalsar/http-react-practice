import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submited: false
    }

    postStateHandler = async () => {
        const data = {
            title: this.state.title,
            body: this.state.body,
            author: this.state.author
        }
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data)
        this.setState({ submited: true })
        console.log(response)
    }

    render() {
        let redirect = null
        if(this.state.submited){
            redirect = <Redirect to="/posts" />
        }

        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postStateHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;