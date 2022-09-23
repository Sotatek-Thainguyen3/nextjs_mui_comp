import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    Stack,
    Typography
} from "@mui/material";
import {AppBox, AppDateRangePicker, AppInput} from "../../component/Base";
import IconDelete from 'src/assets/icons/close.svg';
import {TypeTypography} from "../../utils/theme";
import {useState} from "react";
import AppModal from "../../component/Base/AppModal";
import {useToggle} from "../../hooks/useToggle";
import {minWidth} from "@mui/system";

const Example = () => {
    const [radioValueSelected, setRadioValueSelected] = useState<any>(null);
    const [checked, setChecked] = useState({all: true, a: false, b: false, c: false});
    const [fileUpload, setFileUpload] = useState<any>();
    const [openModal, toggleModal] = useToggle();

    const styleFlexCenter = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }

    const styleCell = {
        border: '1px solid red',
        margin: '0 -1px -1px 0',
    }


    return (<>
        <AppBox p={3}>
            <Stack spacing={3}>
                {/*Typography*/}
                <Divider>Typography</Divider>
                <Grid container>
                    <Grid item xs={4}>
                        <Divider>Typography - REG</Divider>
                        <Box sx={{width: '100%', maxWidth: 500}}>
                            <Typography variant="h1" component="div" gutterBottom>
                                Title 1
                            </Typography>
                            <Typography variant="h2" gutterBottom component="div">
                                h2. Heading
                            </Typography>
                            <Typography variant="h3" gutterBottom component="div">
                                h3. Heading
                            </Typography>
                            <Typography variant="h4" gutterBottom component="div">
                                h4. Heading
                            </Typography>
                            <Typography variant="h5" gutterBottom component="div">
                                h5. Heading
                            </Typography>
                            <Typography variant="h6" gutterBottom component="div">
                                h6. Heading
                            </Typography>
                            <Typography variant="copy" gutterBottom component="div">
                                copy
                            </Typography>
                            <Typography variant="body" gutterBottom component="div">
                                body
                            </Typography>
                            <Typography variant="label" gutterBottom component="div">
                                label
                            </Typography>
                            <Typography variant="caption" gutterBottom component="div">
                                caption
                            </Typography>
                            <Typography variant="small" gutterBottom component="div">
                                small
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Divider>Typography - MED</Divider>
                        <Box sx={{width: '100%', maxWidth: 500}}>
                            <Typography
                                variant="h1"
                                fontWeight="medium"
                                component="div"
                                gutterBottom
                            >
                                Title 1
                            </Typography>
                            <Typography
                                variant="h2"
                                fontWeight="medium"
                                gutterBottom
                                component="div"
                            >
                                h2. Heading
                            </Typography>
                            <Typography
                                variant="h3"
                                fontWeight="medium"
                                gutterBottom
                                component="div"
                            >
                                h3. Heading
                            </Typography>
                            <Typography
                                variant="h4"
                                fontWeight="medium"
                                gutterBottom
                                component="div"
                            >
                                h4. Heading
                            </Typography>
                            <Box
                                // component='span'
                                sx={{
                                    typography: 'h5' as TypeTypography,
                                    fontWeight: 'medium',
                                }}
                            >
                                h5
                            </Box>
                            <Typography
                                variant="h5"
                                fontWeight="medium"
                                gutterBottom
                                component="div"
                            >
                                h5. Heading
                            </Typography>
                            <Typography
                                variant="h6"
                                fontWeight="medium"
                                gutterBottom
                                component="div"
                            >
                                h6. Heading
                            </Typography>
                            <Typography
                                variant="copy"
                                fontWeight="medium"
                                gutterBottom
                                component="div"
                            >
                                copy
                            </Typography>
                            <Typography
                                variant="body"
                                fontWeight="medium"
                                gutterBottom
                                component="div"
                            >
                                body
                            </Typography>
                            <Typography
                                variant="label"
                                fontWeight="medium"
                                gutterBottom
                                component="div"
                            >
                                label
                            </Typography>
                            <Typography
                                variant="caption"
                                fontWeight="medium"
                                gutterBottom
                                component="div"
                            >
                                caption
                            </Typography>
                            <Typography
                                variant="small"
                                fontWeight="medium"
                                gutterBottom
                                component="div"
                            >
                                small
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Divider>Typography - BOLD</Divider>
                        <Box sx={{width: '100%', maxWidth: 500}}>
                            <Typography
                                variant="h1"
                                fontWeight="bold"
                                component="div"
                                gutterBottom
                            >
                                Title 1
                            </Typography>
                            <Typography
                                variant="h2"
                                fontWeight="bold"
                                gutterBottom
                                component="div"
                            >
                                h2. Heading
                            </Typography>
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                gutterBottom
                                component="div"
                            >
                                h3. Heading
                            </Typography>
                            <Typography
                                variant="h4"
                                fontWeight="bold"
                                gutterBottom
                                component="div"
                            >
                                h4. Heading
                            </Typography>
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                gutterBottom
                                component="div"
                            >
                                h5. Heading
                            </Typography>
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                gutterBottom
                                component="div"
                            >
                                h6. Heading
                            </Typography>
                            <Typography
                                variant="copy"
                                fontWeight="bold"
                                gutterBottom
                                component="div"
                            >
                                copy
                            </Typography>
                            <Typography
                                variant="body"
                                fontWeight="bold"
                                gutterBottom
                                component="div"
                            >
                                body
                            </Typography>
                            <Typography
                                variant="label"
                                fontWeight="bold"
                                gutterBottom
                                component="div"
                            >
                                label
                            </Typography>
                            <Typography
                                variant="caption"
                                fontWeight="bold"
                                gutterBottom
                                component="div"
                            >
                                caption
                            </Typography>
                            <Typography
                                variant="small"
                                fontWeight="bold"
                                gutterBottom
                                component="div"
                            >
                                small
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/*Input*/}
                <Divider>
                    Input
                </Divider>
                <AppInput/>

                {/*DateRangePicker*/}
                <Divider>
                    DateRangePicker
                </Divider>
                <AppDateRangePicker/>

                {/*Radio*/}
                <Divider>
                    Radio
                </Divider>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={radioValueSelected}
                    onChange={(event) => setRadioValueSelected(event.target.value)}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <FormControlLabel value="a" control={<Radio/>} label="Catalogyo main Category"/>
                    <FormControlLabel value="b" control={<Radio/>} label="Product"/>
                </RadioGroup>

                {/*Checkbox*/}
                <Divider>
                    Checkbox
                </Divider>
                <Box>
                    <FormControlLabel control={<Checkbox defaultChecked/>} label={'Checked'}/>
                    <FormControlLabel control={<Checkbox/>} label={'UnChecked'}/>
                    <FormControlLabel control={<Checkbox sx={{
                        '&.Mui-disabled': {color: '#B1B5C3'}
                    }} checked disabled/>} label={'Checked, disabled'}/>
                    <FormControlLabel control={<Checkbox sx={{
                        '&.Mui-disabled': {color: '#B1B5C3'}
                    }} disabled/>} label={'UnChecked, disabled'}/>
                </Box>
                <Box mt={'1rem'}>
                    <FormControlLabel control={<Checkbox checked={checked.all}
                                                         onChange={(event) => {
                                                             setChecked(prevState => {
                                                                 return {
                                                                     ...prevState,
                                                                     all: event.target.checked,
                                                                     a: false,
                                                                     b: false,
                                                                     c: false,
                                                                 }
                                                             })
                                                         }}/>} label={'All'}/>
                    <FormControlLabel control={<Checkbox checked={checked.a}
                                                         onChange={(event) => setChecked(prevState => {
                                                             return {...prevState, all: false, a: event.target.checked}
                                                         })}/>}
                                      label={'A'}/>
                    <FormControlLabel control={<Checkbox checked={checked.b}
                                                         onChange={(event) => setChecked(prevState => {
                                                             return {...prevState, all: false, b: event.target.checked}
                                                         })}/>}
                                      label={'B'}/>
                    <FormControlLabel control={<Checkbox checked={checked.c}
                                                         onChange={(event) => setChecked(prevState => {
                                                             return {...prevState, all: false, c: event.target.checked}
                                                         })}/>}
                                      label={'C'}/>
                    <Button onClick={() => {
                        const obj: any = {};
                        console.log(checked)
                    }}>Submit</Button>
                </Box>

                {/*Input Upload*/}
                <Divider>
                    Input Upload
                </Divider>
                <Box display={'flex'}>
                    {fileUpload?.name && (
                        <Box component={'span'} mr={3} sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>{fileUpload?.name} <IconDelete style={{"cursor": "pointer"}}
                                                          onClick={() => setFileUpload(null)}/></Box>
                    )}
                    <Button variant={'outlined'} component={'label'}>
                        <input type={'file'} hidden multiple accept=".xlsx, .xls, .csv"
                               onChange={(event) => setFileUpload(event.target.files && event.target.files[0])}/>
                        Upload
                    </Button>
                </Box>

                {/*Form*/}
                <Divider>
                    Form
                </Divider>
                <Grid container>
                    <Grid item xs={2} sx={{
                        backgroundColor: '#d1d1d1',
                        ...styleCell,
                        ...styleFlexCenter
                    }}>
                        <Typography
                            variant="label"
                            fontWeight="bold">
                            Connection type
                        </Typography>

                    </Grid>
                    <Grid item xs={10} sx={{
                        ...styleCell
                    }}>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={radioValueSelected}
                            onChange={(event) => setRadioValueSelected(event.target.value)}
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                marginLeft: '1rem'
                            }}
                        >
                            <FormControlLabel value="a" control={<Radio/>} label="Catalogyo main Category"/>
                            <FormControlLabel value="b" control={<Radio/>} label="Product"/>
                        </RadioGroup>
                    </Grid>

                    {/*Row2*/}
                    <Grid item xs={2} sx={{
                        backgroundColor: '#d1d1d1',
                        ...styleCell,
                        ...styleFlexCenter
                    }}>
                        <Typography
                            variant="label"
                            fontWeight="bold">
                            Connection category
                        </Typography>
                    </Grid>
                    <Grid item xs={10} sx={{
                        ...styleCell,
                    }}>
                        <Grid container padding={'0.5rem 0.5rem 0.5rem 1rem'} columnSpacing={2}>
                            <Grid item xs>
                                <AppInput fullWidth disabled/>
                            </Grid>
                            <Grid item xs>
                                <AppInput fullWidth disabled/>
                            </Grid>
                            <Grid item xs={'auto'}>
                                <Button>Search</Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/*Row3*/}
                    <Grid item xs={2} sx={{
                        backgroundColor: '#d1d1d1',
                        ...styleCell,
                        ...styleFlexCenter
                    }}>
                        <Typography
                            variant="label"
                            fontWeight="bold">
                            Composition of exhibition products
                        </Typography>
                    </Grid>
                    <Grid item xs={10} sx={{
                        ...styleCell,
                    }}>
                        <Box sx={{height: 400, width: '100%'}}>
                        </Box>
                    </Grid>
                </Grid>

                {/*Modal*/}
                <Divider>
                    Modal
                </Divider>
                <Button onClick={toggleModal}>Show/Hidden</Button>
                <AppModal title={'Save'} open={openModal} onClose={() => toggleModal(false)} sx={{
                    width: '200px'
                }} bodyProps={{}}>
                    <AppInput/>
                </AppModal>
            </Stack>
        </AppBox>
    </>)
}

export default Example;
