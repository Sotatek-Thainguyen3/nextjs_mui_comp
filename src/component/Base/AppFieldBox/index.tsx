import React from 'react';
import {Box, BoxProps} from "@mui/material";

export interface IAppFieldBox extends BoxProps {
    title: any,
    labelProps?: BoxProps,
    valueProps?: BoxProps,
}

export const AppFieldBox = ({title, children, labelProps, valueProps, sx, ...props}: IAppFieldBox) => {
    const {sx: sxLabel, ...labelProp} = labelProps || {};
    const {sx: sxValue, ...valueProp} = valueProps || {};

    return (
        <Box sx={{
            display: 'flex',
            borderTop: '1px solid #dcdcdc',
            borderBottom: '1px solid #dcdcdc',
            margin: '0 -1px -1px 0',
            width: '100%',
            ...sx
        }} {...props}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#ededed',
                minWidth: 220,
                padding: '0.5rem',
            }}>
                {title}
            </Box>
            <Box sx={{
                padding: '0.5rem',
                width: '100%',
                flex: 1
            }}>{children}</Box>
        </Box>
    );
};
