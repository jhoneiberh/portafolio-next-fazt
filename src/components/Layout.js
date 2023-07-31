import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import nProgress from 'nprogress';

function Layout({ children, footer = true, dark = false, title }) {
    const router = useRouter();
    useEffect(() => {
        const handlerRouterChage = (url) => {
            // console.log(url);
            nProgress.start();
        };
        router.events.on('routeChangeStart', handlerRouterChage);
        {
            /* Cuando la url empieze a cambiar */
        }

        router.events.on('routeChangeComplete', () => nProgress.done());

        return () => {
            router.events.off('routeChangeStart', handlerRouterChage);
        };
    }, [router.events]);
    return (
        <div className={`${dark ? 'bg-dark' : ''}`}>
            <Navbar />
            <main className="container py-4">
                {title && <h1 className={`text-center ${dark ? 'text-light': ''}`}>{title}</h1>}
                {children}
            </main>
            {footer == true && (
                <footer className="bg-dark text-light text-center">
                    <div className="container p-4">
                        <h1>&copy; Ryan Ray Portfolio</h1>
                        <p>2000 - {new Date().getFullYear()}</p>
                        <p>All rights Reserved</p>
                    </div>
                </footer>
            )}
        </div>
    );
}

export default Layout;
