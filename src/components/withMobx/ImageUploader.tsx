import React,{ Component } from 'react';
import { Input } from 'semantic-ui-react';
import Button from '@material-ui/core/Button';
import { observer, inject } from 'mobx-react';

const cloudName = 'ddycd5xyn';
const unsignedUploadPreset = 'rq6jvg1m';

interface IImageUploaderProps{
    store: any,
}
interface IImageUploaderState{
    img: any,
}



@observer
export default class ImageUploader extends Component<IImageUploaderProps, IImageUploaderState>{
    constructor(props:any){
        super(props);
        this.state = {
            img: []
        }
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
          if (xhr.readyState == 4 && xhr.status == 200) {
            // File uploaded successfully
            var response = JSON.parse(xhr.responseText);
            // https://res.cloudinary.com/cloudName/image/upload/v1483481128/public_id.jpg
            var url = response.secure_url;
            // Create a thumbnail of the uploaded image, with 150px width
            var tokens = url.split('/');
            tokens.splice(-2, 0, 'w_150,c_scale');
            var img = new Image(); // HTML5 Constructor
            img.src = tokens.join('/');
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
          store.upload()
          console.log(this.state.img);

          
      }
    handleFiles = (e:any) => {
        
        const files = e.target.files;
        console.log(files);
        
        for (var i = 0; i < files.length; i++) {
          this.uploadFile(files[i]); // call the function to upload the file
        }
    }
    render(){
        let image=this.state.img
        let images=[]
        console.log(image)
        for(let i =0;i<image.length;i++){
            images.push(<img src={image[i]}   key={i}  width={150} />)
        }
        return(
            <div id="dropbox">
            <div>
                    {images}
                </div>
            <form>
                
            <div>
            <Input type="file" multiple={true} accept="image/*" onChange={this.handleFiles} />
            </div>
            </form>
            <Button variant="contained" color="secondary">
                    取消
                </Button>   
                <Button variant="contained" color="primary" onClick={this.handleUpload}>
                    上传
                </Button>
                  
                    
            </div>
        )
    }
}


