import { observable, action } from "mobx";

export class InformationMsg {
    @observable open=false;
    @observable header='';
    @observable content="";

    @action show(header:string="注意", content:string=''){
        this.open = true;
        this.header= header;
        this.content= content;
        setTimeout(()=>{
            this.open = false;
        }, 2000);
    }
}

const informationMsg = new InformationMsg();

export default informationMsg;