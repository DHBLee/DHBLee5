import React from 'react'
import {useDropzone} from 'react-dropzone';
import {useState} from 'react';
import imgUpload from '/public/icon-upload.svg';
import imgPerson from '/public/image-avatar.jpg';
import imgIcon from '/public/icon-info.svg';


const UserInput = () => {
  const [file, setFile] = useState(null);

  const {getRootProps, getInputProps} = useDropzone({
    accept: { "image/jpeg": [], "image/png": [] },
    maxSize: 5 * 1024 * 1024,
    onDrop: (acceptedFiles) => {
        console.log(acceptedFiles[0])
        setFile(acceptedFiles[0]);
    },
  });

  return (
    <form action="" className='text-neutral300 px-5 grid gap-6'>
        <fieldset className='flex flex-col gap-3'>
            <label htmlFor="">Upload Avatar</label>
            <div {...getRootProps()} className='border border-dashed border-neutral500 bg-neutral700/20 text-center w-full grid justify-center rounded-xl p-4 gap-5 hover:bg-neutral700/80 ease-in-out duration-300 cursor-pointer'>
                <input {...getInputProps()}/>
                <div className='border border-solid border-neutral700 bg-neutral700/55 w-max rounded-xl mx-auto' style={{padding: file ? '0rem' : '0.7rem'}}>
                    <img src={file ? imgPerson : imgUpload} alt="" className='mx-auto'style={file ? {width: '3.5rem', border: '1px solid white', borderRadius: '10px'} : {}}/>
                </div>
                { !file && <p className='text-lg text-neutral500'>Drag and drop or click to upload</p>}
                {file && 
                    <div className='flex gap-3'>
                        <button className='toggle-image'>Remove image</button>
                        <button className='toggle-image'>Change image</button>
                    </div>
                }
            </div>
            <p className='flex gap-3 text-xs text-neutral500'>
                <img src={imgIcon} alt="" />
                Upload your photo (JPG or PNG, max size: 50MB).    
            </p>
        </fieldset>
        <fieldset className='fieldset-field'>
            <label htmlFor="">Full Name</label>
            <input type="text" required className='input-field'/>
        </fieldset>
        <fieldset className='fieldset-field'>
            <label htmlFor="">Email Address</label>
            <input type="text" placeholder='example@email.com' required className='input-field'/>
        </fieldset>
        <fieldset className='fieldset-field'>
            <label htmlFor="">Github Username</label>
            <input type="text" placeholder='@yourusername'required className='input-field'/>
        </fieldset>
        <button className='bg-orange700 p-3 rounded-xl text-neutral900 font-extrabold'>Generate My Ticket</button>
    </form>
  )
}

export default UserInput