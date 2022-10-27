import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { _setTitle, selectTodo, wrapper } from "../state";
import { useSelector } from "react-redux";
import Link from "next/link";
import ThemeContext, { UserProvider } from 'src/utils/themeContext';
import User from 'src/component/user/User';
import { StateProvider } from 'src/utils/store';

const Home = (props: any) => {
    // console.log(props)
    // const {resolvedUrl} = props;
    // const todo = useSelector(selectTodo);

    return (
        // <StateProvider>
            // <User />
        // </StateProvider>
        <></>
    )
}

export const getServerSideProps = () => {
    return {
        props: { abc: '123' },
    };
}

export default Home
