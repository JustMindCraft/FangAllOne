import { observable, action } from "mobx";

export class DialogContainer {
    @observable open = false;

    @action handleClose = () => {
        return this.open = false
    }

    @action handleClickOpen = () => {
        console.log(this.open)
        return this.open = true
    }

}

const dialogContainer = new DialogContainer();

export default dialogContainer;