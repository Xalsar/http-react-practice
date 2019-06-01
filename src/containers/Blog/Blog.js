import React, { Component } from 'react';
// import axios from 'axios'
import axios from '../../axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    async componentDidMount() {
        try {
            const response = await axios.get('/posts')
            const posts = response.data.slice(0, 4)
            const updatedPosts = posts.map(post => ({
                ...post,
                author: 'Max'
            }))
            this.setState({ posts: updatedPosts })
        } catch (error) {

        }
    }

    postSelectedhandler = (id) => { this.setState({ selectedPostId: id }) }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Somethink when wrong</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => (
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedhandler(post.id)} />
            ))
        }

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
