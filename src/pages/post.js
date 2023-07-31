import Layout from '@/components/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { posts } from '../../profile';

function Post() {
    const router = useRouter();
    const currentPost = posts.filter(post => post.title == router.query.post.charAt(0).toUpperCase() + router.query.post.slice(1))[0];
    return (
        <>
        <Head>
            <title>Post {router.query.post}</title>
        </Head>
        <Layout footer={false} title={currentPost.title}>
            <div className='text-center'>
                {/* <h2>Post {currentPost.title}</h2> */}
                <p>{currentPost.content}</p>
                <img src={currentPost.imageUrl} alt="post" className='rounded img-fluid w-50' />
            </div>
        </Layout>
        </>
    );
}

export default Post;
