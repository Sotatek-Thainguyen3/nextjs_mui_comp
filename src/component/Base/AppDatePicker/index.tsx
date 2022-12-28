import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/fr';
import 'dayjs/locale/ru';
import 'dayjs/locale/de';
import 'dayjs/locale/ar-sa';
import 'dayjs/locale/ko';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {Typography} from "@mui/material";
import {useState} from "react";

const locales = ['en', 'fr', 'de', 'ru', 'ar-sa', 'ko'] as const;

export const AppDatePicker = () => {
    const [locale, setLocale] = useState<typeof locales[number]>('ko');
    const [datePickerValue, setDatePickerValue] = useState<Dayjs | null>(dayjs('2022-04-07'),);
    const [timePickerValue, setTimePickerValue] = useState<Dayjs | null>(dayjs('2022-04-07'),);

    return (
        <>
            <Typography>
                Datepicker
            </Typography>

            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
                {/*<DatePicker*/}
                {/*    value={datePickerValue}*/}
                {/*    onChange={(newValue) => setDatePickerValue(newValue)}*/}
                {/*    renderInput={(params) => <TextField {...params} />}*/}
                {/*/>*/}
                <TextField type={'date'}
                           error
                           defaultValue="2017-05-24"
                           size={'small'}
                           sx={{width: 220}}
                           InputLabelProps={{
                               shrink: true,
                           }}/>
            </LocalizationProvider>
        </>
    );
};
