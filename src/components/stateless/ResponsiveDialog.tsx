import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { observer, inject } from 'mobx-react';

interface IResponsiveDialogProps {
    title: string;
    handleClose: (event: any) => void;
    open: boolean;
}

const ResponsiveDialog = (props: IResponsiveDialogProps) => {
    console.log('Dialog')
    console.log(props.open)
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {props.title}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary">
                        否
                </Button>
                    <Button onClick={props.handleClose} color="primary" autoFocus>
                        是
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}



export default ResponsiveDialog;