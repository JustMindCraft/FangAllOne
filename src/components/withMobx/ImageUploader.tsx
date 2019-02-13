import React,{ Component } from 'react';
import { Input } from 'semantic-ui-react';

const cloudName = 'ddycd5xyn';
const unsignedUploadPreset = 'rq6jvg1m';

interface IImageUploaderProps{

}
interface IImageUploaderState{
    img: string
}

export default class ImageUploader extends Component<IImageUploaderProps, IImageUploaderState>{
    constructor(props:any){
        super(props);
        this.state = {
            img: ''
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
            
            this.setState({
                img: img.src,
            })
           
          }
        };
      
        fd.append('upload_preset', unsignedUploadPreset);
        fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
        fd.append('file', file);
        xhr.send(fd);
      }
    handleFiles = (e:any) => {
        
        const files = e.target.files;
        console.log(files);
        
        for (var i = 0; i < files.length; i++) {
          this.uploadFile(files[i]); // call the function to upload the file
        }
    }
    render(){
        return(
            <div id="dropbox">

            <form>
                <div>
                    <img src={this.state.img} alt=""/>
                </div>
            <div>
            <Input type="file" multiple={true} accept="image/*" onChange={this.handleFiles} />
            </div>
            </form>
                   
                    
            </div>
        )
    }
}


