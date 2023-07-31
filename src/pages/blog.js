import Layout from '@/components/Layout';
import React from 'react';
import { posts } from '../../profile';
import Link from 'next/link';

const PostCard = ({post}) => (
    <div className='col-md-4'>
        <div className="card bg-dark">
            <div className="overflow">
                <img src={post.imageUrl} className='card-img-top' alt={'product'} />
            </div>
            <div className="card-body">
                <h1 className='text-light'>{post.title}</h1>
                <p className='text-light'>{post.content}</p>
                <Link href={`post/?post=${post.title.toLowerCase()}`} as={`post/${post.title}`} className="btn btn-light rounded px-4">
                    Read
                </Link>
            </div>
        </div>
    </div>
);


function Blog() {
    return <Layout footer={false} title={'My blog'}>
        <div className="row">
        {
            posts.map(post => (
                <PostCard post={post} key={post.title} />
            ))
        }
        </div>
    </Layout>;
}

export default Blog;
