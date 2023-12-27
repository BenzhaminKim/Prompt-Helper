import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import { IconButton, Slider, Stack, TextField, Typography } from '@mui/material';


export default function ContentSlider(props: any) {
    const [sliderValue, setSliderValue] = React.useState<number>(props.sliderValue);

    const sliderOnChange = (event: any, newValue: number | number[]) => {
        setSliderValue(newValue as number);
        const updateValue = { ...props.lightningValue, [props.valueKey]: newValue };
        props.setSliderValue({ ...updateValue });
    }
    return (
        <Box display="flex" flex={2} p={4}>
            <Box flex={1}>
            </Box>
            <Box flex={1} pb={1}>
                <Typography variant='h6' textAlign="center">{props.name}</Typography>
            </Box>
            <Box display="flex" flex={1}>
                <Typography variant='h6' textAlign="center" mr={1}> {props.sliderValue}</Typography>
                <Slider value={props.sliderValue} min={0}
                    step={0.1}
                    max={5} defaultValue={props.sliderValue} aria-label="Default" valueLabelDisplay="auto"
                    onChange={sliderOnChange}
                />
            </Box>
            <Box flex={1}>
            </Box>
        </Box>
    );
}