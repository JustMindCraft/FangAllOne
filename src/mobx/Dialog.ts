import { observable, action} from "mobx";
export class DialogContainer {
    @observable open = true;

    @action.bound handleClose = () => {
        console.log('为什么没更新')
         this.open = false
         console.log(this.open)
    }

    @action.bound handleClickOpen = () => {
        console.log(this.open)
        return this.open = true
    }

}

const dialogContainer = new DialogContainer();

export default dialogContainer;