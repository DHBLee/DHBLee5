import React, { useState, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import imgUpload from '/public/icon-upload.svg';
import imgPerson from '/public/image-avatar.jpg';
import imgIcon from '/public/icon-info.svg';

const UserInput = ({ handleSubmit }) => {
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({ fullName: '', email: '', githubUsername: '', avatar: '' });

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const githubUsernameRef = useRef(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/jpeg": [], "image/png": [] },
    maxSize: 5 * 1024 * 1024,
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles[0]);
      setFile(acceptedFiles[0]);
    },
  });

  const validateForm = () => {
    let formErrors = { fullName: '', email: '', githubUsername: '', avatar: '' };
    let isValid = true;

    if (!fullNameRef.current.value) {
      formErrors.fullName = 'Full Name is required';
      isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRef.current.value || !emailPattern.test(emailRef.current.value)) {
      formErrors.email = 'Valid Email is required';
      isValid = false;
    }

    if (!githubUsernameRef.current.value) {
      formErrors.githubUsername = 'GitHub Username is required';
      isValid = false;
    }

    if (!file) {
      formErrors.avatar = 'Avatar image is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = {
        fullName: fullNameRef.current.value,
        email: emailRef.current.value,
        githubUsername: githubUsernameRef.current.value,
        avatar: file ? file : imgPerson, // Use the file if available
      };

      handleSubmit(formData);
    }
  };

  const removeImage = () => {
    setFile(null);
  };

  return (
    <form onSubmit={onSubmit} className="relative text-neutral300 px-5 grid gap-6 max-w-[30rem] mx-auto mt-10 z-10">
      <fieldset className="flex flex-col gap-3">
        <label htmlFor="">Upload Avatar</label>
        <div
          {...getRootProps()}
          className={`border border-dashed ${errors.avatar ? 'border-red-500' : 'border-neutral500'} bg-neutral700/20 text-center w-full grid justify-center rounded-xl p-4 gap-5 hover:bg-neutral700/80 ease-in-out duration-300 cursor-pointer`}
        >
          <input {...getInputProps()} required />
          <div className="border border-solid border-neutral700 bg-neutral700/55 w-max rounded-xl mx-auto" style={{ padding: file ? '0rem' : '0.7rem' }}>
            <img src={file ? imgPerson : imgUpload} alt="" className="mx-auto" style={file ? { width: '3.5rem', border: '1px solid white', borderRadius: '10px' } : {}} />
          </div>
          {!file && <p className="text-lg text-neutral500">Drag and drop or click to upload</p>}
          {file && (
            <div className="flex gap-3">
              <button className="toggle-image" onClick={removeImage}>Remove image</button>
              <button className="toggle-image">Change image</button>
            </div>
          )}
        </div>
        {errors.avatar && <span className="text-red-500 text-xs">{errors.avatar}</span>}
        <p className="flex gap-3 text-xs text-neutral500">
          <img src={imgIcon} alt="" />
          Upload your photo (JPG or PNG, max size: 50MB).
        </p>
      </fieldset>
      <fieldset className="fieldset-field">
        <label htmlFor="">Full Name</label>
        <input
          type="text"
          required
          className={`input-field ${errors.fullName ? 'border-red-500' : ''}`}
          ref={fullNameRef}
        />
        {errors.fullName && <span className="text-red-500 text-xs">{errors.fullName}</span>}
      </fieldset>
      <fieldset className="fieldset-field">
        <label htmlFor="">Email Address</label>
        <input
          type="email"
          placeholder="example@email.com"
          required
          className={`input-field ${errors.email ? 'border-red-500' : ''}`}
          ref={emailRef}
        />
        {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
      </fieldset>
      <fieldset className="fieldset-field">
        <label htmlFor="">Github Username</label>
        <input
          type="text"
          placeholder="@yourusername"
          required
          className={`input-field ${errors.githubUsername ? 'border-red-500' : ''}`}
          ref={githubUsernameRef}
        />
        {errors.githubUsername && <span className="text-red-500 text-xs">{errors.githubUsername}</span>}
      </fieldset>
      <button type="submit" className="bg-orange700 p-3 rounded-xl text-neutral900 font-extrabold hover:scale-105 duration-200 ease-in">
        Generate My Ticket
      </button>
    </form>
  );
};

export default UserInput;
