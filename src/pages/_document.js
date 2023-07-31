import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="description" content="Ryan Ray simple Portfolio website" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"  />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
