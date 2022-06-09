import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../FileUploader/fileUploader.css';

const FileUploader = ({ onSuccess }) => {
  const [files, setFiles] = useState([]);

  const onInputChange = (e) => {
    setFiles(e.target.files);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      data.append('uploads', files[i]);
    }

    axios
      .post('//localhost:8000/uploads', data)
      .then((response) => {
        toast.success('Upload Success');
        onSuccess(response.data);
      })
      .catch((e) => {
        toast.error('Upload Error');
      });
  };

  return (
    <div className='main__container'>
      <div className='box'>
        <form method='post' action='#' id='#' onSubmit={onSubmit}>
          <div className='form-group files'>
            <div className='heading'>Upload Your File </div>
            <input
              type='file'
              name='uploads'
              onChange={onInputChange}
              className='form-control input__container'
              multiple
            />
          </div>

          <button className='button'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FileUploader;
