import React,{ Component } from 'react';
// import { Input } from 'semantic-ui-react';
import Button from '@material-ui/core/Button';
import { observer, inject } from 'mobx-react';
import {  computed } from "mobx";
import LinearProgress from '@material-ui/core/LinearProgress';
import userSession from '../../mobx/global/UserSession';
import msg from '../../mobx/global/InformationMsg';
import app from '../../mobx/global/App';
const cloudName = 'ddycd5xyn';
const unsignedUploadPreset = 'rq6jvg1m';

interface IImageUploaderProps{
    store: any,
}
interface IImageUploaderState{
    img: any,
}

function LoadApp() {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      justifyItems: 'center',
      alignItems:"center",
      height: '100%',
      flexDirection: 'column'
    }}>
      <div>
        <LinearProgress variant="query" style={{width: "200px"}} />
      </div>
      <div>
        <h4>图片正在加载，请稍后</h4>
      </div>
      <div>
        <LinearProgress color="secondary" variant="query"  style={{width: "200px"}} />
      </div>
      
    </div>
  );
}


@observer
export default class HomeBannerWithMobx extends Component<IImageUploaderProps, IImageUploaderState>{
    constructor(props:any){
        super(props);
        this.state = {
            img: []
        }
    }
    @computed get aaa() {
      // 正确的; 计算属性会追踪 `user.name` 属性
      return userSession
    }
    componentWillMount(){
      this.props.store.getImg()
      // userSession.getUserInfo();
      // console.log(this.aaa);
      
    }
    componentDidMount(){
      console.log('================');
      
      console.log(this.props.store.img);
      this.setState({
        img:this.props.store.img
      })
    }
    uploadFile = (file:any) => {
        var url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
        var xhr = new XMLHttpRequest();
        var fd = new FormData();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      
        // Reset the upload progress bar
        //  document.getElementById('progress').style.width = 0;
        
        // Update progress (can be used to show progress indicator)
        xhr.upload.addEventListener("progress", function(e) {
          var progress = Math.round((e.loaded * 100.0) / e.total);
          console.log(progress);
          
        //   document.getElementById('progress').style.width = progress + "%";
      
          console.log(`fileuploadprogress data.loaded: ${e.loaded},
        data.total: ${e.total}`);
        });
      
        xhr.onreadystatechange = (e) => {
          console.log(xhr);
          if(xhr.status != 200){
            msg.show('图片上传失败，请稍后再试')
            const {store} = this.props;
            let loading = false
            store.uploadLoading(loading)
          }
          if (xhr.readyState == 4 && xhr.status == 200) {
            const {store} = this.props;
            let loading = false
            store.uploadLoading(loading)

            // File uploaded successfully
            var response = JSON.parse(xhr.responseText);
            // https://res.cloudinary.com/cloudName/image/upload/v1483481128/public_id.jpg
            var url = response.secure_url;
            // Create a thumbnail of the uploaded image, with 150px width
            // var tokens = url.split('/');
            // tokens.splice(-2, 0, 'w_150,c_scale');
            var img = new Image(); // HTML5 Constructor
            img.src = url
            console.log(img.src);
            let images = this.state.img;
            images.push(img.src)
            console.log(this.state.img);
            
            this.setState({
                img: images,
            })
           
          }

          
        };
      
        fd.append('upload_preset', unsignedUploadPreset);
        fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
        fd.append('file', file);
        xhr.send(fd);
      }
      handleUpload= () => {
        
        const {store} = this.props;
        console.log(store.name);
        store.checkImg(this.state.img)
        store.upload((m:string)=>{
            
          msg.show(m);
      });

          
      }
    handleFiles = (e:any) => {
      
        const {store} = this.props;
        let loading = true
        store.uploadLoading(loading)
        const files = e.target.files;
        console.log(files);
        if(files.length==0){
          store.uploadLoading(false)
        }
        this.setState({
          img:[]
        })
        for (var i = 0; i < files.length; i++) {
          this.uploadFile(files[i]); // call the function to upload the file
        }
    }
    getpropsimg= () => {
      const {store} = this.props;
      console.log(store.loading);
      this.setState({
        img:store.img
      })
     

        
    }
    render(){
        let image=this.state.img
        let images=[]
        let children;
        const {store} = this.props
        console.log(store.loading);
        if (store.loading) {
          children = <LoadApp />
        }else{

            for(let i =0;i<image.length;i++){
              images.push(<img style={{padding:'5px'}} src={image[i]}   key={i}  width={200} />)
          }
          children = images
        }


        
        
        return(
            <div id="dropbox">
            <div style={{width:'700px',height:'300px',border:'1px dashed #aaa',overflowY: 'scroll'}}>
                    {children}
                </div>
            <form>
                
            <div>
            <input type="file" multiple={true} accept="image/*" onChange={this.handleFiles} />
            </div>
            </form>
            <Button variant="contained" color="secondary" onClick={this.getpropsimg}>
                    取消
                </Button>   
                <Button variant="contained" color="primary" onClick={this.handleUpload}>
                    上传
                </Button>
                  
                    
            </div>
        )
    }
}


