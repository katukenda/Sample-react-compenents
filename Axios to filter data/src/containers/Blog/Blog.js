import React, { Component } from 'react';
import axios from "axios";

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
//import post from '../../components/Post/Post';

class Blog extends Component {

    state = {

        posts: [],  //empty arry
        selestedPostId: null,
        erro:false

    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 6);
                const updatePosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Janitha'
                    }
                });
                this.setState({ posts: updatePosts });
               // console.log(response);
            })
            .catch(error => {
               // console.log(error)
               this.setState({error:true})
            });
    }


    postSelectedHandler =(id) =>{

        this.setState({selestedPostId: id})
    }
    render() {
let posts = <p style={{textAlign: 'center'}}>Something went</p>;
if(!this.state.error){


        posts = this.state.posts.map(post => {
            return <Post key={post.id}
                title={post.title}
                author={post.author} 
                clicked = {() => this.postSelectedHandler(post.id)}
                />;
        })

    }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selestedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;