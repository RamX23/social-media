import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate,Navigate } from 'react-router-dom';
const Upload = () => {
  const navigate=useNavigate();
    const [file,setfile]=useState(null);

    const handleupload=async(e)=>{
      e.preventDefault();
      const formData = new FormData();
      formData.append('image', file);
      
      await axios.post(`${window.location.origin}/upload`, formData, {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
      })
      navigate('/home')
    }
  return (
    <div>
        <h3>Upload image</h3>
        <form onSubmit={handleupload}>
      <input type='file' onChange={(e)=>(setfile(e.target.files[0]))}/>
      
      <img src={file} alt="" srcset="" />
      <button type='submit'>Upload</button>
      </form>
    </div>
  )
}

export default Upload
