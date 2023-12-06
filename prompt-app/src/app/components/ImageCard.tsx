import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import { Button, Card, CardMedia, IconButton, Modal, Stack, TextField, Typography, styled } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function ModalButton() {
    const [open, setOpen] = React.useState(false);

    return (
        <Card sx={{ display: "flex", alignItems: 'center', margin: 5 }}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://static.promptfolder.com/media/midjourney/parameters/small/ab18a857-8ff1-462e-b84b-46ba857c9587.jpg"
                alt="Live from space album cover"
            />
            <Typography padding={5} variant='h6' textAlign="center" alignItems="center">16-bit</Typography>
        </Card>

    );
}