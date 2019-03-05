import { observable, action } from "mobx";

export class DialogContainer {
    @observable open = false;

    @action handleClose = () => {
        return this.open = false
    }

    @action handelClickOpen = () => {
        return this.open = true
    }

}

const dialogContainer = new DialogContainer();

export default dialogContainer;