import Head from 'next/head';
import { Inter } from 'next/font/google';
import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { skills, experiences, projects } from '../../profile';
import { useRef } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    const project_description = useRef();    
    
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                {/* Header Card */}
                <header className={`row ${inter.className}`}>
                    <div className="col-md-12">
                        <div className="card card-body bg-secondary text-light rounded">
                            <div className="row">
                                <div className="col-md-4">
                                    {/* eslint-disable-next-line @next/next/no-img-element*/}
                                    <img height={200} src="https://github.com/fazt/next-simple-portfolio/blob/main/public/ryan-ray-profile2.jpeg?raw=true" alt="ray" />
                                </div>
                                <div className="col-md-8">
                                    <h1>Rayn Ray</h1>
                                    <h3>FullStack Developer</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere porro aliquam numquam. Reprehenderit minus sunt quibusdam dolorum mollitia, deleniti hic et iure
                                        consectetur nemo! Nobis blanditiis deserunt laborum eum recusandae.
                                    </p>
                                    <Link href="hireme">Hire Me</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Second Section */}
                <div className="row mt-3">
                    <div className="col-md-4">
                        <div className="card bg-light rounded">
                            <div className="card-body">
                                <h1>Skills</h1>
                                {skills.map((skill) => (
                                    <div key={skill.skill} className="py-3">
                                        <h5>{skill.skill}</h5>
                                        <div className="progress rounded">
                                            <div className="progress-bar rounded" role="progressbar" style={{ width: `${skill.percentage}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card bg-light rounded">
                            <div className="card-body">
                                <h1 className="mb-4">Experience</h1>
                                <ul className="m-0 list-unstyled">
                                    {experiences.map((experience) => (
                                        <li key={experience.title} className="my-2">
                                            <h3>{experience.title}</h3>
                                            <h5>
                                                {experience.from} - {experience.to ? experience.to : 'current'}
                                            </h5>
                                            <p>{experience.description}</p>
                                        </li>
                                    ))}
                                </ul>
                                <Link href={'/experiences'} className="btn btn-primary rounded">
                                    Know More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Portfolio */}
                <div className="row mt-3">
                    <div className="col-md-12">
                        <div className="card card-body bg-dark rounded">
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <h1 className="text-center text-light">Portfolio</h1>
                                </div>
                                <div className="row row-gap-5">
                                    {projects.map((project) => (
                                        <div className="col-md-4" key={project.name}>
                                            <div className="card h-100">
                                                <div className="overflow border-top">
                                                    <img className="card-img-top h-100" src={project.image} alt="project" />
                                                </div>
                                                <div className="card-body">
                                                    <h3>{project.name}</h3>
                                                    <p ref={project_description}>{project.description}</p>
                                                    <Link href={'#'}>Know More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="text-center mt-5">
                            <Link href={'/portfolio'} className='btn btn-outline-light rounded'>More Projects</Link>
                        </div>
                        </div>
                    </div> 
                </div>
            </Layout>
        </>
    );
}
