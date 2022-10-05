import React from 'react';
import {TextField} from "@mui/material";

export const AppDatePicker = () => {
    const []
    return (
        <>
            <TextField
                id="date"
                type="date"
                error
                defaultValue="2017-05-24"
                size={'small'}
                sx={{width: 220}}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </>
    );
};
