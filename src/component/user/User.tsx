import { Button } from '@mui/material';
import { useContext, } from 'react';
import { store } from 'src/utils/store';
import Router from 'next/router';

const User = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  console.log(globalState);

  const actionAdd = () => {
    dispatch({type: 'add'});
    Router.push(
      '/home'
    )
  }

  return (<Button onClick={actionAdd}>Toggle</Button>);
}

export default User;