import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import uploadcity from "../asset/uploadcity.jpg";
import uploadmore from "../asset/uploadmore.jpg";
import uploadname from "../asset/uploadname.jpg";
import uploadimage from "../asset/uploadimage.jpg";



export default function UploadHome() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    subcity: '',
    bed: '',
    room: '',
    owner: {
      name: '',
      phone: '',
      email: '',
    },
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOwnerChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      owner: {
        ...formData.owner,
        [name]: value,
      },
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      images: files,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title || !formData.description || !formData.price || !formData.location || 
        !formData.subcity || !formData.bed || !formData.room || 
        !formData.owner.name || !formData.owner.phone || !formData.owner.email || 
        formData.images.length === 0) {
      alert('Please fill in all fields and upload at least one image.');
      return;
    }
    
    // Create a FormData object to handle file uploads
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('location', formData.location);
    data.append('subcity', formData.subcity);
    data.append('bed', formData.bed);
    data.append('room', formData.room);
    data.append('owner_name', formData.owner.name);
    data.append('owner_phone', formData.owner.phone);
    data.append('owner_email', formData.owner.email);
  
    formData.images.forEach((image, index) => {
      data.append(`image_${index}`, image);
    });
  
    try {
      const response = await fetch('/api/register-home', {
        method: 'POST',
        body: data,
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
        alert('Home registered successfully!');
        // Optionally reset the form here
        setFormData({
          title: '',
          description: '',
          price: '',
          location: '',
          subcity: '',
          bed: '',
          room: '',
          owner: {
            name: '',
            phone: '',
            email: '',
          },
          images: [],
        });
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form.');
    }
  };
  
  return (
    <div className=' bg- h-full'>
        <div className='font-bold text-5xl text-center m-5 mb-10'>
            Upload Your Home
        </div>

      <Swiper  navigation modules={[Pagination, Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className='flex items-center justify-center '>
                <div className='flex items-center justify-center gap-5 border border-[#0E2865] w-3/5 py-10 shadow-md'>
                <div>
                    <img src={uploadname} alt="people" className="h-[250px] " />
                </div>

                <div className='flex flex-col gap-5'>
                    <h1 className='font-bold text-4xl text-center' >wellcome </h1>
                    <div>
                    <div>Title</div>
                    <input type="text" name="title" value={formData.title} onChange={handleInputChange} required className='border border-black rounded-3xl p-2'/>
                    </div>
                    <div>
                        <div>Price</div>
                        <input type="text" name="price" value={formData.price} onChange={handleInputChange} required  className='border border-black rounded-3xl p-2'/>
                    </div>
                    </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>

          <div className='flex justify-center gap-5'>
            <div   className='flex items-center justify-center gap-5 border border-[#0E2865] w-3/5 py-10 shadow-md' >
                
            
                <div>
                    <img src={uploadmore} alt="people" className="h-[250px] " />
                </div>

                <div className='flex flex-col gap-5' >
                    
                <div>
                    <div>Description:</div>
                    <textarea name="description" value={formData.description} onChange={handleInputChange} required className='border border-black rounded-xl  p-2'/>
                </div>
                <div>
                    <div>Bedrooms:</div>
                    <input type="number" name="bed" value={formData.bed} onChange={handleInputChange} required className='border border-black rounded-3xl p-2'/>
                </div>
                <div>
                    <div>Rooms:</div>
                    <input type="number" name="room" value={formData.room} onChange={handleInputChange} required className='border border-black rounded-3xl p-2'/>
                </div>
                </div>
            </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>

          <div className='flex justify-center gap-5'>
            <div   className='flex items-center justify-center gap-5 border border-[#0E2865] w-3/5 py-10 shadow-md' >
                
                <div>
                    <img src={uploadcity} alt="people" className="h-[250px] " />
                </div>

                <div className='flex flex-col gap-5' >
                    
                <div>
                    <div>Subcity:</div>
                    <input type="text" name="subcity" value={formData.subcity} onChange={handleInputChange} required className='border border-black rounded-3xl p-2' />
                </div>
                <div>
                    <div>city:</div>
                    <input type="text" name="location" value={formData.location} onChange={handleInputChange} required  className='border border-black rounded-3xl p-2'/>
                </div>

                </div>
            </div>
      </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='flex justify-center gap-5'>
            <div   className='flex items-center justify-center gap-5 border border-[#0E2865] w-3/5 py-10 shadow-md' >
                
                <div>
                    <img src={uploadimage} alt="people" className="h-[250px] " />
                </div>

                <div className='flex flex-col gap-5' >

            <label>Images:</label>
            <input type="file" multiple onChange={handleImageChange} required className='border border-black rounded-3xl p-2' />
            <div>
              {formData.images.map((image, index) => (
                <img key={index} src={URL.createObjectURL(image)} alt={`Image ${index + 1}`} style={{ width: '100px', margin: '10px' }} />
              ))}
            </div>
          <button type="submit" onClick={handleSubmit} className='bg-[#0E2865] text-white font-bold text-lg rounded-full w-1/2 p-2 mt-8'>Submit</button>
          </div>
          <div>

                </div>
            </div>
      </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
