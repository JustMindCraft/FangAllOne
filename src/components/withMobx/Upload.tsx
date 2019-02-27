import React, { Component } from 'react';
import msg from '../../mobx/global/InformationMsg';
import LinearProgress from '@material-ui/core/LinearProgress';
const cloudName = 'ddycd5xyn';
const unsignedUploadPreset = 'rq6jvg1m';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


interface IImageUploaderProps {
  store: any,
  uploadtype: string,
  btntitle: string,
}
interface IImageUploaderState {
  images: any,
}
function LoadApp() {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      justifyItems: 'center',
      alignItems: "center",
      height: '100%',
      flexDirection: 'column'
    }}>
      <div>
        <LinearProgress variant="query" style={{ width: "200px" }} />
      </div>
      <div>
        <h4>图片正在加载，请稍后</h4>
      </div>
      <div>
        <LinearProgress color="secondary" variant="query" style={{ width: "200px" }} />
      </div>

    </div>
  );
}
export default class Upload extends Component<IImageUploaderProps, IImageUploaderState>{
  constructor(props: any) {
    super(props);
    this.state = {
      images: 1
    }
  }
  componentWillMount() {
    const { uploadtype, btntitle } = this.props
    // console.log(uploadtype, btntitle);


  }

  uploadFile = (file: any) => {
    const { uploadtype, btntitle } = this.props
    console.log(uploadtype, btntitle);

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const xhr = new XMLHttpRequest();
    const fd = new FormData();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    // Reset the upload progress bar
    //  document.getElementById('progress').style.width = 0;

    // Update progress (can be used to show progress indicator)
    xhr.upload.addEventListener("progress", function (e) {
      const progress = Math.round((e.loaded * 100.0) / e.total);

      //   document.getElementById('progress').style.width = progress + "%";

      console.log(`fileuploadprogress data.loaded: ${e.loaded},
        data.total: ${e.total}`);
    });

    xhr.onreadystatechange = (e) => {
      if (xhr.status != 200) {
        msg.show('图片上传失败，请稍后再试')
        const { store } = this.props;
        let loading = false
        store.uploadLoading(loading)
      }
      if (xhr.readyState == 4 && xhr.status == 200) {
        const { store } = this.props;
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
        let localImages = store.dataSource(uploadtype)
        localImages.push(img.src)

        store.changeImages(localImages, uploadtype)
        this.setState({
          images: 2
        })
      }


    };

    fd.append('upload_preset', unsignedUploadPreset);
    fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
    fd.append('file', file);
    xhr.send(fd);
  }

  handleFiles = (e: any) => {

    const { store, uploadtype } = this.props;
    let loading = true
    store.uploadLoading(loading)
    const files = e.target.files;
    if (files.length == 0) {
      store.uploadLoading(false)
    }
    this.setState({
      images: 1
    })
    store.changeImages([], uploadtype)
    for (var i = 0; i < files.length; i++) {
      this.uploadFile(files[i]); // call the function to upload the file
    }
  }

  getpropsimg = () => {
    const { store, uploadtype } = this.props;
    console.log(uploadtype);

    // const {store} = this.props;
    // store.getImage()



  }
  render() {
    const { store, uploadtype, btntitle } = this.props

    let localImage
    // console.log(store);
    if (uploadtype == 'images') {
      localImage = store.images
    }
    if (uploadtype == 'cover') {
      localImage = store.cover
    }
    if (uploadtype == 'detailsImage') {
      localImage = store.detailsImage
    }

    let newImages = []
    let children;
    if (store.loading) {
      children = <LoadApp />
    } else {

      for (let i = 0; i < localImage.length; i++) {
        newImages.push(<img style={{ padding: '5px' }} src={localImage[i]} key={i} width={200} />)
      }
      children = newImages

    }
    return (
      <div >
        <div style={{ height: '300px', border: '1px dashed #aaa', overflowY: 'scroll', textAlign: 'center',borderRadius:'5px' }}>
          {children}
        </div>
        {/* <form> */}
        {/* <div>
            </div> */}

        <span style={{ padding: '5px',  background: 'rgba(0, 71, 255, 0.58)', color: 'white', borderRadius: '8px',fontSize:'12px' }}>
          {btntitle}
        </span>
        <input
          type="file"
          multiple={true}
          accept="image/*"
          onChange={this.handleFiles}
          style={{ width: '50%' ,padding:'5px'}}
        />

        <Button variant="contained" color="secondary" onClick={this.getpropsimg} style={{ margin: '5px' }}>
          取消
            </Button>


      </div>
    )
  }
}
