import Layout from '@/components/Layout';

import React from 'react';

export default function Error({statusCode}) {
    return (
        <Layout>
            {
                statusCode ? 
                (<p className="text-center">Could not load your page {statusCode}</p>)
                : (
                    <p className="text-center">Could not get this page</p>
                )
            }
        </Layout>
    );
}
