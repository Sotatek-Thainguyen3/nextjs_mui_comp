import React from 'react';
import {FormControlLabel, Grid, Radio, RadioGroup, Typography} from "@mui/material";
import {GridProps} from "@mui/material/Grid/Grid";

export interface IAppFieldBox {
    title: React.ReactElement | string,
    children: any,
    containerProps?: GridProps,
    labelProps?: GridProps,
    valueProps?: GridProps
}

const AppFieldBox = ({title, children, containerProps, labelProps, valueProps}: IAppFieldBox) => {
    const {sx: sxContainer, ...containerProp} = containerProps || {};
    const {sx: sxLabel, ...labelProp} = labelProps || {};
    const {sx: sxValue, ...valueProp} = valueProps || {};

    return (
        <Grid container sx={{
            '& .MuiGrid-item': {
                border: '1px solid #a6a6a6',
                margin: '0 -1px -1px 0',
            },
            ...sxContainer
        }} {...containerProp}>
            <Grid item xs={2} sx={{
                backgroundColor: '#d1d1d1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '0 .5rem',
                ...sxLabel
            }} {...labelProp}>
                {title}
            </Grid>
            <Grid item xs sx={{
                ...sxValue
            }} {...valueProp}>
                {children}
            </Grid>
        </Grid>
    );
};

export default AppFieldBox;
