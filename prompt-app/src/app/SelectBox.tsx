import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import { IconButton, Typography } from '@mui/material';


export default function SelectBox(props: any) {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        const updateValue = { ...props.selectValue, [props.valueKey]: event.target.value };
        if (event.target.value === '----') {
            delete updateValue[props.valueKey];
        }
        props.setSelectValue({ ...updateValue });
        setAge(event.target.value as string);
    };

    return (
        <Box flex={2} p={4}>
            <Box display="flex" pb={1}>
                {props.icon} <Typography pl={1}> {props.name} </Typography>
            </Box>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">---</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    fullWidth
                >
                    {props.menuItems && props.menuItems.map((item: any) => {
                        return <MenuItem value={item.value}
                        >{item.name}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}