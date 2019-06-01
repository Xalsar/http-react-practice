import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from '../../../axios'
import Post from '../../../components/Post/Post'
import './Posts.css'

class Posts extends Component {
    state = {
        posts: []
    }

    async componentDidMount() {
        try {
            console.log(this.props)
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
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default withRouter(Posts)
