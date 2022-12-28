import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import {_setTitle, selectTodo, wrapper} from "../state";
import {useSelector} from "react-redux";
import Link from "next/link";
import { Typography } from '@mui/material';

const Home: NextPage = (props: any) => {
    const {resolvedUrl} = props;
    const todo = useSelector(selectTodo);
    const url = process.env.API_URL;

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                    <span>{resolvedUrl}</span>
                </h1>
                <h2>Select: {todo.title} to update</h2>
                <Link href={'/demo'}>
                    <h3>Navigate to: demo</h3>
                </Link>
                <Typography>URL: {url}</Typography>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
                </a>
            </footer>
        </div>
    )
}

export const getServerSideProps = wrapper.getStaticProps(
    (store) => async ({resolvedUrl}: any) => {
        store.dispatch(_setTitle('name1'));
        return {
            props: {
                resolvedUrl
            }
        }
    }
)

export default Home
