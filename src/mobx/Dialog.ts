import { observable, action} from "mobx";
export class DialogContainer {
    @observable open = true;

    @action.bound handleClose = () => {
        return this.open = false
    }

    @action.bound handleClickOpen = () => {
        return this.open = true
    }

}

const dialogContainer = new DialogContainer();

export default dialogContainer;