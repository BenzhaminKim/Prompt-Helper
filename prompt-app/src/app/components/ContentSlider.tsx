import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import { IconButton, Slider, Stack, TextField, Typography } from '@mui/material';


export default function InputText() {
    const [value, setValue] = React.useState<number>(3);
    return (
        <Box display="flex" flex={2} p={4}>
            <Box flex={1}>
            </Box>
            <Box flex={1} pb={1}>
                <Typography variant='h6' textAlign="center">Aspect Ratio: 16-bit</Typography>
            </Box>
            <Box display="flex" flex={1}>
                <Typography variant='h6' textAlign="center" mr={1}> {value}</Typography>
                <Slider value={value} min={0}
                    step={0.1}
                    max={5} defaultValue={3} aria-label="Default" valueLabelDisplay="auto"
                    onChange={(event, newValue) => {
                        setValue(newValue as number);
                    }}
                />
            </Box>
            <Box flex={1}>
            </Box>
        </Box>
    );
}