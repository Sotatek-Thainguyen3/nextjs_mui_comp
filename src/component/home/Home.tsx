import { Box, Button } from '@mui/material';
import { useContext, } from 'react';
import { store } from 'src/utils/store';
import Router from 'next/router';

const Home = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const actionAdd = () => {
    dispatch({type: 'add'});
  }

  console.log(globalState);
  return (<><Box>{JSON.stringify(globalState)}</Box><Button onClick={actionAdd}>Toggle</Button></>);
}

export default Home;