import { useState } from 'react';
import { HiUpload } from 'react-icons/hi';
const Header = ({ title }) => {
  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      console.log(file);
    }
  };
  const getFile = () => {
    document.getElementById('fileSelect')?.click();
  };
  return (
    <>
      <div className='flex w-full bg-bgMild/40 h-10 tracking-wider font-semibold justify-between items-center pl-2 cursor-pointer border-r border-white'>
        {title}
      </div>
      {
        <div className='default-button ' onClick={getFile}>
          <input
            id='fileSelect'
            className='hidden'
            type='file'
            onChange={handleFileChange}
          />
          <HiUpload />
          Upload
        </div>
      }
    </>
  );
};

export default Header;

// to add : no file else file name
