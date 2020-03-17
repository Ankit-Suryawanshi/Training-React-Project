import React from 'react';

function getBase64(value) {
  return new Promise((resolve,reject)=>{
    const reader = new FileReader();
    reader.readAsDataURL(value);
    reader.onload = _=>resolve(reader.result);
    //reader.error = e => reject(e); 
  });
}

export default class MultipleImage extends React.Component {
  state = {
    files: []
  }

  fileSelectedHandler = (e) => {
    let file=Array.from(e.target.files);
    console.log(file);
    file=file.map( async value =>({
      step : await getBase64(value)
    }))
    console.log(file);
    Promise.all(file)
    .then(result=>{
      console.log(result);
      this.setState({ files: result }) 
    })
    
  }
  render() {
    console.log(this.state.files)
    return (
      <form>
        <div><h2>Upload images</h2></div>
        <h3>Images</h3>
        <input type="file" multiple onChange={this.fileSelectedHandler} />
      </form>

    )
  }
}




/*import React from 'react';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import { resolveOnChange } from 'antd/lib/input/Input';
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
  //reader.onload = _=>resolve(reader.result);
  //reader.error = e => reject(e); 
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}
let image=[];
class Avatar extends React.Component {
  state = {
    files: [],
  };

  handleChange = info => {
    console.log(info.file.originFileObj);
    if (info.file.status === 'uploading') {
      //console.log(info);
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  sendimage = ()=>{
    let user='';
    user = {...user,image : image};
    user ={...user,token : localStorage.getItem('token')};
    console.log('Send Image :')
    console.log(user)
    console.log(user.image)
		axios.post('http://localhost:8000/api/multipleimage',{user})
		  .then(res=>{console.log(res);
			alert(res.data.message);  
			console.log(res.data);
		  })
		  .catch(function(err){
			  console.log(err);
		  });
	};
  
  fileS

  render() {
    const uploadButton = (
      <div>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload Image</div>
      </div>
    );
    const { imageUrl } = this.state;
    //console.log('Image Url :' +imageUrl);
    if(imageUrl != undefined) {
      console.log(imageUrl.base64)
      let base64url =imageUrl.base64;
      let str = imageUrl.split(','); 
      //console.log(str[1])
      image.push(str[1]);
      
    }
    //console.log(image);
    
    //localStorage.setItem('image',image);
    return ( 
      <div>
        <h1>Select All the image You want to store</h1>
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={beforeUpload}
          onChange={this.handleChange}
          multiple={true}
        >
          {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
        </Upload>
        <button onClick={this.sendimage}>Now Click to Save Images</button>
        
        {image.map((val)=>{
          return (<img src={"data:image/jpeg;base64,"+val} alt='no image'/>);
        })}
               
      </div>  

      
    );
  }
}

export default Avatar;*/