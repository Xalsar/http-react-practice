import React, { Component } from 'react';
// import axios from 'axios'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import axios from '../../axios'

import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts'
import './Blog.css';

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                  color: '#fa923f',
                                  textDecoration: 'underline'
                                }}
                            >Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                              }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/" exact component={Posts}/>
                    <Route path="/new-post" exact component={NewPost}/>
                    <Route path="/:id" exact component={FullPost}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;
