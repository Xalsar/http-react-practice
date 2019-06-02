import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import axios from '../../../axios'
// import { Link } from 'react-router-dom'
import Post from '../../../components/Post/Post'
import FullPost from '../FullPost/FullPost'
import './Posts.css'

class Posts extends Component {
    state = {
        posts: []
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

    postSelectedHandler = (id) => {
        // this.setState({ selectedPostId: id })
        this.props.history.push({ pathname: '/posts/' + id })
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Somethink when wrong</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => (
                // <Link key={post.id} to={'/' + post.id}>
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />
                // </Link>
            ))
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
            </div>
        )
    }
}

export default Posts
