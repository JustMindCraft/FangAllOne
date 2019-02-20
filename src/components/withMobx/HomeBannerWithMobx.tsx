import React,{ Component } from 'react';
import Button from '@material-ui/core/Button';
import { observer, inject } from 'mobx-react';
import {  computed } from "mobx";
import LinearProgress from '@material-ui/core/LinearProgress';
import msg from '../../mobx/global/InformationMsg';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const cloudName = 'ddycd5xyn';
const unsignedUploadPreset = 'rq6jvg1m';

interface IImageUploaderProps{
    store: any,
}
interface IImageUploaderState{
  images: any,
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
          images: []
        }
    }
   
    componentWillMount(){
      console.log('走了一次');
      
      this.props.store.getImg()
      // userSession.getUserInfo();
    }

    componentDidMount(){
      this.setState({
        images:this.props.store.banners
      })
    }
    uploadFile = (file:any) => {
        const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
        const xhr = new XMLHttpRequest();
        const fd = new FormData();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      
        // Reset the upload progress bar
        //  document.getElementById('progress').style.width = 0;
        
        // Update progress (can be used to show progress indicator)
        xhr.upload.addEventListener("progress", function(e) {
          const progress = Math.round((e.loaded * 100.0) / e.total);
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
            const response = JSON.parse(xhr.responseText);
            // https://res.cloudinary.com/cloudName/image/upload/v1483481128/public_id.jpg
            const url = response.secure_url;
            // Create a thumbnail of the uploaded image, with 150px width
            // var tokens = url.split('/');
            // tokens.splice(-2, 0, 'w_150,c_scale');
            const img = new Image(); // HTML5 Constructor
            img.src = url
            // console.log(img.src);
            let localImages = this.state.images;
            localImages.push(img.src)
            // console.log(this.state.img);
            
            this.setState({
              images: localImages,
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
        // console.log(store.name);
        store.checkImg(this.state.images)
        store.upload((m:string)=>{
            
          msg.show(m);
      });

          
      }
    handleFiles = (e:any) => {
      
        const {store} = this.props;
        let loading = true
        store.uploadLoading(loading)
        const files = e.target.files;
        if(files.length==0){
          store.uploadLoading(false)
        }
        this.setState({
          images:[]
        })
        for (var i = 0; i < files.length; i++) {
          this.uploadFile(files[i]); // call the function to upload the file
        }
    }
    getpropsimg= () => {
      const {store} = this.props;
      console.log(store.loading);
      this.setState({
        images:store.banners
      })
     

        
    }
    render(){
        let localImage=this.state.images
        let newImages=[]
        let children;
        const {store} = this.props
        if (store.loading) {
          children = <LoadApp />
        }else{

            for(let i =0;i<localImage.length;i++){
              newImages.push(<img style={{padding:'5px'}} src={localImage[i]}   key={i}  width={200} />)
          }
          children = newImages
          console.log('打印子属性'+children);
          
        }
        return(
            <div id="dropbox">
            <div style={{width:'700px',height:'300px',border:'1px dashed #aaa',overflowY: 'scroll',textAlign:'center'}}>
                    {children}
                </div>
            {/* <form> */}
            {/* <div>
            <input type="file" multiple={true} accept="image/*" onChange={this.handleFiles} />
            </div> */}

            <input
              accept="image/*"
              id="text-button-file"
              multiple
              type="file"
              onChange={this.handleFiles}
              style={{display:'none'}}
            />
            <label htmlFor="text-button-file">
              <Button component="span" style={{background:'rgba(170, 170, 170, 0.48)'}}>
                上传图片
                <CloudUploadIcon  />
              </Button>
            </label>


            {/* </form> */}
            <Button variant="contained" color="secondary" onClick={this.getpropsimg} style={{margin:'5px'}}>
                    取消
            </Button>   
            <Button variant="contained" color="primary" onClick={this.handleUpload} style={{margin:'5px'}}>
                    上传
            </Button>
                  
                    
            </div>
        )
    }
}


