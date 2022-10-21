import { Button } from '@mui/material';
import { useContext, } from 'react';
import { store } from 'src/utils/store';
import Router from 'next/router';

const Home = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  console.log(globalState);
  return (<></>);
}

export default Home;