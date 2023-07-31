import Layout from '@/components/Layout';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Error from './_error';
import fetch from 'node-fetch';
import fs from 'fs-extra';

function Github({ data, statusCode }) {
    if (statusCode) {
        return <Error statusCode={statusCode} />;
    }
    return (
        <Layout footer={false}>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center rounded">
                        <h1>{data.name}</h1>
                        <p>{data.login}</p>
                        <Image width={332} height={332} src={data.avatar_url} alt="profile" />
                        <p>{data.bio}</p>
                        <Link href={data.html_url} className="btn btn-outline-dark my-2" target="_blank">
                            Go to Github
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Github;

export async function getServerSideProps(ctx) {
    const response = await fetch('https://api.github.com/users/jhoneiberh');
    const perfil = await response.json();

    async function example(ubicacion, error) {
        try {
            await fs.writeJson(`./${ubicacion}.json`, error);
        } catch (err) {
            console.error(err);
        }
    }

    try {
        const response = await fetch('https://api.github.com/users/jhoneiberh');
        const profile = await response.json();
        if (profile) {
            example('profile', profile);
            console.log('Success profile');
        }
    } catch (error) {
        console.log(error);
        if (error) {
            example('error', error);
            console.log('Success error');
        }
    }

    const statusCode = response.status > 200 ? response.status : false;

    return {
        props: {
            data: perfil,
            statusCode,
        },
    };
}
