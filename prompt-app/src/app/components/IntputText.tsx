import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import { IconButton, Stack, TextField, Typography } from '@mui/material';


export default function InputText(props: any) {
    const textNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updateValue = { ...props.selectValue, [props.valueKey]: event.target.value };
        if (event.target.value === '') {
            delete updateValue[props.valueKey];
        }
        props.setSelectValue({ ...updateValue });
    };
    return (
        <Box flex={2} p={4}>
            <Box display="flex" pb={1}>
                {props.icon} <Typography pl={1}> {props.name} </Typography>
            </Box>
            <TextField
                id="outlined-number"
                label={props.name}
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                placeholder={props.placeholder}
                onChange={textNumberChange}
                fullWidth
            />
        </Box>
    );
}