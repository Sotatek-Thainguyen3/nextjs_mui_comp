import React from 'react';
import {BaseLayoutProps} from "src/types/model/baseLayout";
import {Header} from "../header";
import {Container} from "@mui/material";

export const BaseLayout = ({children, ...props}: BaseLayoutProps) => {
    return (
        <>
            <Header/>
            <Container sx={{padding: '0 1rem'}}>
                {children}
            </Container>
        </>
    )
};
