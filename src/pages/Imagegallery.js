import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Collapse } from '@mui/material';
const Imagegallery = () => {
    //  const [likes,setlikes]=useState(0);
const navigate=useNavigate();
     const [images,setimages]=useState([]);
     const [comment,setcomment]=useState([]);
    //  const [open,setopen]=useState(true);
   
    useEffect(()=>{

        axios.get("http://localhost:3000/images")
        .then(res=>{
            console.log(res.data);
            setimages(res.data);
        })
        .catch(err=>{
            console.error('There was an error fetching the images!', err);
        })
},[])

const handleLike = (imageId) => {
  const updatedImages = images.map(image =>
      image._id === imageId ? { ...image, likes: image.likes + 1 } : image
  );
  setimages(updatedImages);


  axios.post('http://localhost:3000/like', { imageId })
      .then(res => {
          console.log('Like updated for image:', res.data);
      })
      .catch(error => {
          console.error('Error updating like:', error);
      });
};

const handlecomment = (imageId) => {

  axios.post('http://localhost:3000/comment', { imageId, text: comment })
      .then(res => {
         
          const updatedImages = images.map(image =>
              image._id === imageId ? res.data.updatedImage : image
          );
          setimages(updatedImages);
          setcomment('');
          console.log('Comment added:', res.data);
          window.location.reload(); 
      })
      .catch(error => {
          console.error('Error adding comment:', error);
      });
};
const handleInputChange = (imageId, value) => {
  setcomment({ ...comment, [imageId]: value });
};


const handledelete = (imageId) => {
  axios.delete(`http://localhost:3000/delete/${imageId}`)
  window.location.reload(); 
//   .then(res => {
//     console.log('Post deleted:', res.data);
//     setimages(images.filter(image => image._id !== imageId));
    
// })
// .catch(error => {
//     console.error('Error deleting post:', error);
// });
  
};


  return (
    <div className='d-flex flex-column gap-2  mt-5'>
      {images.map((image) => (
                    
                           
                
                    <div className="card d-flex justify-center" key={image._id} style={{width: '30rem',maxHeight:'50rem'}}>
                    <img src={`http://localhost:3000/uploads/${image.filename}`} class="card-img-top" alt="..." style={{objectFit:'cover',maxHeight:'30rem'}}/>
                    <div class="card-body">
                      <div className="icons d-flex justify-content-start align-items-center gap-1">
                      <button className='btn btn-outline-black' onClick={()=>handleLike(image._id)}><i class="fa-regular fa-heart fs-5"></i></button>
                      <button className='btn btn-outline-black' onClick={()=>handlecomment(image._id)}> <i class="fa-sharp fa-regular fa-comment fs-5" ></i></button>
                     
                      
                      </div>
                      <div className="detail d-flex justify-content-start gap-5">
                      <p>Likes: {image.likes}</p>
                      
                      </div>
                    <div className="comment d-flex gap-3 justify-content-between p-10">
                      <form onSubmit={()=>handlecomment(image._id)}>
                      <input 
                                type="text" 
                                value={comment[image._id] || ''} 
                                onChange={(e) => handleInputChange(image._id, e.target.value)} 
                                placeholder="Add a comment" 
                                style={{border:'none',width:'18rem',textDecoration:'none',outline:'none'}}
                            />
                        <button type="submit" className='btn btn-around' style={{border:'0.2px solid green',padding:'0.2rem'}}> Post comment </button>
                      </form>
                      </div>
                   <div className="bottombtns d-flex justify-content-around align-items-center">
                      <a href="#"  style={{outline:'none',border:'none'}}>view comments</a>
                      <button className='btn btn-outline' onClick={()=>handledelete(image._id)}>Dalete Post</button>
                      </div>
                    
                    </div>
                  </div>
                    
                ))}
    </div>
  )
}

export default Imagegallery
