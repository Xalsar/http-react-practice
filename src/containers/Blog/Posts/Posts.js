import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from '../../../axios'
import { Link } from 'react-router-dom'
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
                <Link key={post.id} to={'/' + post.id}>
                    <Post
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedhandler(post.id)} />
                </Link>
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
