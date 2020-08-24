import React, { Component } from 'react';
import axios from "axios";

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import post from '../../components/Post/Post';

class Blog extends Component {

    state = {

        posts: []  //empty arry

    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts =response.data.slice(0,6);
                const updatePosts = posts.map(post => {
                    return {
                        ...post, 
                        author : 'Janitha'
                    }
                });
                this.setState({ posts: updatePosts });
                //console.log(response);
            });
    }

    render() {

        const posts = this.state.posts.map(post => {
            return <Post key={post.id}  title={post.title} author={post.author}/>;
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;