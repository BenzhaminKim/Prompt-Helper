'use client';
import * as React from 'react';
import Image from 'next/image'
import TextField from '@mui/material/TextField';
import { Box, Button, Container, Slider, Stack, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { grey } from '@mui/material/colors';
import { makeStyles } from '@mui/material/styles';

import { Theme } from '@mui/material/styles';
import SelectBox from './SelectBox';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import { IconButton } from '@mui/material';
import { Nav } from 'react-bootstrap';
import InputText from './components/IntputText';
import ModalButton from './components/ModalButton';
import { Content } from 'next/font/google';
import ContentSlider from './components/ContentSlider';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HighQualityOutlinedIcon from '@mui/icons-material/HighQualityOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import ConnectedTvOutlinedIcon from '@mui/icons-material/ConnectedTvOutlined';

const handleClick = () => {
  alert('a');
};
export default function Home() {
  const [promptValue, setPromptValue] = React.useState('');
  const [selectValue, setSelectValue] = React.useState({});

  const textChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    if (event.target.value == '') {
      setPromptValue('');
    }
    else {

      setPromptValue(event.target.value + " :: ");
    }
  }
  const selectValueMapped = Object.entries(selectValue).map(([key, value]) => {
    return `--${key} ${value} `
  }).join('');

  return (
    <Box bgcolor="f6f6f6">
      <Stack ml={10} mr={10} >
        <Stack bgcolor="f6f6f6" flex={2} p={4} textAlign="center">
          <Typography variant='h1'>Prompt Helper</Typography>
          <Box flex={1} m={1} >
            <TextField fullWidth id="outlined-basic" placeholder='Start typing your main idea...' onChange={textChange} variant="outlined" />
          </Box>
          <Box flex={1} m={1}>
            <TextField fullWidth sx={{ background: "#e9ecef" }} InputProps={{ readOnly: true, }} id="outlined-basic" value={'/imagine prompt: ' + promptValue + selectValueMapped} variant="outlined" />
          </Box>
          <Box display="flex" justifyContent="center">
            <Box p={1}>
              <Button variant="outlined" color="primary" onClick={handleClick} >Copy Prompt</Button>
            </Box>
            <Box p={1}>
              <Button variant="outlined" color="secondary">Save to My Prompts</Button>
            </Box>
          </Box>
        </Stack>
        <Stack bgcolor="f6f6f6">
          <Box display="flex" pt={4} pl={4} pr={4} flex={2} justifyContent="space-between">
            <SelectBox
              icon={<AspectRatioIcon />}
              selectValue={selectValue}
              valueKey="aspect"
              name="Aspect Ratio"
              setSelectValue={setSelectValue}
              menuItems={[{ value: '----', name: '----' }, { value: '1:1', name: '1:1' }, { value: '2:1', name: '2:1' }, { value: '3:1', name: '3:1' }, { value: '4:1', name: '4:1' }, { value: '5:1', name: '5:1' }]}
            />
            <SelectBox
              icon={<AccessTimeIcon />}
              selectValue={selectValue}
              valueKey="version"
              name="Version"
              setSelectValue={setSelectValue}
              menuItems={[{ value: '----', name: '----' }, { value: '5.2', name: '5.2' }, { value: '5.1', name: '5.1' }, { value: '5', name: '5' }, { value: '4', name: '4' }, { value: '3', name: '3' }]}
            />
            <SelectBox
              icon={<HighQualityOutlinedIcon />}
              selectValue={selectValue}
              valueKey="quality"
              name="Quality"
              setSelectValue={setSelectValue}
              menuItems={[{ value: '----', name: '----' }, { value: '.25', name: '.25' }, { value: '.5', name: '.5' }, { value: '1', name: '1' }]}
            />
            <SelectBox
              icon={<GridViewOutlinedIcon />}
              selectValue={selectValue}
              valueKey="tile"
              name="Tile"
              setSelectValue={setSelectValue}
              menuItems={[{ value: 'No', name: 'No' }, { value: 'Yes', name: 'Yes' }]}
            />
            <InputText
              icon={<ConnectedTvOutlinedIcon />}
              selectValue={selectValue}
              valueKey="stylize"
              name="Stylize"
              setSelectValue={setSelectValue}
              placeholder='0 to 10000'
            />
            <InputText
              icon={<AcUnitOutlinedIcon />}
              selectValue={selectValue}
              valueKey="chaos"
              name="Chaos"
              setSelectValue={setSelectValue}
              placeholder='0 to 100'
            />
          </Box>
          <Box display="flex" pt={4} pl={4} pr={4} flex={2} justifyContent="space-between">
            <SelectBox
              icon={<AspectRatioIcon />}
              selectValue={selectValue}
              valueKey="stop"
              name="Stop"
              setSelectValue={setSelectValue}
              menuItems={[{ value: '----', name: '----' }, { value: '1:1', name: '1:1' }, { value: '2:1', name: '2:1' }, { value: '3:1', name: '3:1' }, { value: '4:1', name: '4:1' }, { value: '5:1', name: '5:1' }]}
            />
            <SelectBox
              icon={<AccessTimeIcon />}
              selectValue={selectValue}
              valueKey="repeat"
              name="Repeat"
              setSelectValue={setSelectValue}
              menuItems={[{ value: '----', name: '----' }, { value: '5.2', name: '5.2' }, { value: '5.1', name: '5.1' }, { value: '5', name: '5' }, { value: '4', name: '4' }, { value: '3', name: '3' }]}
            />
            <SelectBox
              icon={<HighQualityOutlinedIcon />}
              selectValue={selectValue}
              valueKey="weird"
              name="Weird"
              setSelectValue={setSelectValue}
              menuItems={[{ value: '----', name: '----' }, { value: '.25', name: '.25' }, { value: '.5', name: '.5' }, { value: '1', name: '1' }]}
            />
            <SelectBox
              icon={<GridViewOutlinedIcon />}
              selectValue={selectValue}
              valueKey="time"
              name="Time"
              setSelectValue={setSelectValue}
              menuItems={[{ value: 'No', name: 'No' }, { value: 'Yes', name: 'Yes' }]}
            />
            <InputText
              icon={<ConnectedTvOutlinedIcon />}
              selectValue={selectValue}
              valueKey="seed"
              name="Seed"
              setSelectValue={setSelectValue}
              placeholder='0 to 10000'
            />
            <InputText
              icon={<AcUnitOutlinedIcon />}
              selectValue={selectValue}
              valueKey="no"
              name="Exclude"
              setSelectValue={setSelectValue}
              placeholder='0 to 100'
            />
          </Box>
          <Box display="flex" justifyContent="center">
            <ModalButton />
            <ModalButton />
            <ModalButton />
            <ModalButton />
          </Box>
          <Box>
            <ContentSlider />
          </Box>
        </Stack>
      </Stack>
    </Box>

  )
}
