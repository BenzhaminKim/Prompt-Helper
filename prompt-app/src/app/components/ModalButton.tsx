import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import { Button, Card, CardMedia, Dialog, DialogTitle, DialogContent, IconButton, Modal, Stack, TextField, Typography, styled, DialogActions, Divider, Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ImageCard from './ImageCard';

const StyledDialogContent = styled(DialogContent)({
    backgroundColor: "#f6f6f6",
})
const StyledButton = styled(Button)({
    margin: 5,
    textTransform: 'none',
})
export default function ModalButton(props: any) {
    const [open, setOpen] = React.useState(false);
    const [cardCount, setCardCount] = React.useState(Object.keys(props.sliderValue).length);
    const [selectedNames, setSelectedNames] = React.useState({ ...props.sliderValue });
    const withContinue = () => {
        setOpen(false);
        const prevValueDict = { ...props.sliderValue };
        console.log("selectedNames", selectedNames)
        for (const [key, value] of Object.entries(selectedNames)) {
            console.log("prevValueDict", prevValueDict)
            if (!(key in prevValueDict)) {
                prevValueDict[key] = value;
                console.log("not in value", value)
            }
            else {
                selectedNames[key] = prevValueDict[key];
                console.log("in value", value, prevValueDict[key])
            }
        }
        props.setSliderValue({ ...selectedNames });
        setCardCount(Object.keys(selectedNames).length);
    }
    const withClose = () => {
        setOpen(false);
        setCardCount(Object.keys(props.sliderValue).length);
    }
    console.log("sliderValue", props.sliderValue, selectedNames);

    return (
        <>
            <Box>
                <StyledButton startIcon={<SendIcon />} variant="outlined" color="primary" onClick={e => setOpen(true)} >{props.modalName}</StyledButton>
            </Box >
            <Dialog
                maxWidth="lg"
                open={open}
                onClose={withContinue}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <DialogTitle>
                    <Typography variant='h6' color="gray" textAlign="center">Styles</Typography>
                </DialogTitle>
                <Divider />
                <StyledDialogContent>
                    <Grid container>
                        {props.imageCardNames.map((imageCardName: string) => {
                            return (
                                <Grid item xs={12} md={6} lg={4}>
                                    <ImageCard
                                        imageCardName={imageCardName}
                                        setCardCount={setCardCount}
                                        cardCount={cardCount}
                                        selectedNames={selectedNames}
                                        setSelectedNames={setSelectedNames}
                                        sliderValue={props.sliderValue}
                                    />
                                </Grid>)
                        })}
                    </Grid>
                </StyledDialogContent>
                <Divider />
                <DialogActions>
                    <Button onClick={withClose}>Close</Button>
                    <Button color='success' onClick={withContinue}>Continue({cardCount})</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}