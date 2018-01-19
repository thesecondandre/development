import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

// import Post from '../../components/Post/Post';
// import FullPost from '../../components/FullPost/FullPost';
// import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    render() {
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/posts' exact>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path='/new-post' component={AsyncNewPost} />
                    <Route path='/posts' component={Posts} />
                    <Route render={() => <h1>Not found</h1>} />
                </Switch>
            </div>
        );
    }
}

export default Blog;