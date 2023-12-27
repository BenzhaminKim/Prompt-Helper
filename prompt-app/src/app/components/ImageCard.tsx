import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import { Button, Card, CardMedia, IconButton, Modal, Stack, TextField, Typography, styled } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function ModalButton(props: any) {
    const [cardColor, setCardColor] = React.useState(props.imageCardName in props.sliderValue ? '#0058dd' : 'white');
    const [cardTextColor, setCardTextColor] = React.useState(props.imageCardName in props.sliderValue ? 'white' : 'black');

    const changeCardColor = () => {

        if (cardColor === "white") {
            //Clicked
            setCardColor("#0058dd");
            setCardTextColor("white");
            props.setCardCount(props.cardCount + 1);
            const keyValue = props.imageCardName in props.sliderValue ? props.sliderValue[props.imageCardName] : 3;
            const updateValue = { ...props.selectedNames, [props.imageCardName]: keyValue };
            props.setSelectedNames({ ...updateValue });
        }
        else {
            //Unclicked
            setCardColor("white");
            setCardTextColor("black");
            props.setCardCount(props.cardCount - 1);
            props.setSelectedNames(Object.fromEntries(Object.entries(props.selectedNames).filter(([key, value]) => key !== props.imageCardName)));
        }
    }
    return (
        <Box p={5}>
            <Button onClick={changeCardColor} sx={{
                padding: 0,
                textTransform: 'none',
            }}>
                <Card sx={{ display: "flex", alignItems: 'center', backgroundColor: cardColor }} >
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="https://static.promptfolder.com/media/midjourney/parameters/small/ab18a857-8ff1-462e-b84b-46ba857c9587.jpg"
                        alt="Live from space album cover"
                    />
                    <Typography padding={5} variant='h6' textAlign="center" alignItems="center" color={cardTextColor}>{props.imageCardName}</Typography>
                </Card>
            </Button>
        </Box >
    );
}