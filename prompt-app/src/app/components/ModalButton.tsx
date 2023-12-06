import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import { Button, Card, CardMedia, Dialog, DialogTitle, DialogContent, IconButton, Modal, Stack, TextField, Typography, styled, DialogActions, Divider } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ImageCard from './ImageCard';

const StyledDialogContent = styled(DialogContent)({
    backgroundColor: "#f6f6f6",
})
const StyledButton = styled(Button)({
    margin: 5,
})
export default function ModalButton() {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Box>
                <StyledButton startIcon={<SendIcon />} variant="outlined" color="primary" onClick={e => setOpen(true)} >Styles</StyledButton>
            </Box >
            <Dialog
                maxWidth="lg"
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <DialogTitle>
                    <Typography variant='h6' color="gray" textAlign="center">Styles</Typography>
                </DialogTitle>
                <Divider />
                <StyledDialogContent >
                    <Box display="flex" justifyContent="center">
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                    </Box>
                </StyledDialogContent>
                <Divider />
                <DialogActions>
                    <Button onClick={e => setOpen(false)}>Close</Button>
                    <Button color='success' onClick={e => setOpen(false)}>Continue</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}