import { useState } from 'react';
import { useContext } from 'react';
import Modal from 'react-modal';
import AboutMeContext from '../../context/AboutMeContext';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { }from '@fortawesome/fontawesome-svg-core'

import {FaGithub} from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa';



const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="block mt-10 sm:mt-20">
      <div className="font-general-regular text-left">
  <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4">
    {aboutMe.map((item) => (
      <div key={item.id} className="flex flex-col items-center">
        {/* Make the image clickable */}
        <img
          src={item.profileImage}
          className="rounded-lg w-96 mb-2 cursor-pointer"
          alt=""
          onClick={() => openModal(item)}
        />
        <h3 className="text-ternary-dark dark:text-ternary-light text-xl font-semibold mb-2">
          {item.header}
        </h3>
        <div className="flex justify-center text-ternary-dark dark:text-ternary-light" >
          <a href={item.githubLink} className="mr-4">
            <FaGithub size="2rem" />
          </a>
          <a href={item.linkedinLink}>
            <FaLinkedin size="2rem" />
          </a>
        </div>
      </div>
    ))}
  </div>
</div>
      {/* The modal */}
      <Modal
  isOpen={selectedImage !== null}
  onRequestClose={closeModal}
  contentLabel="Image Modal"
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
    content: {
      width: '1000px',
      height: '700px',
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '20px', // Increase the border-radius for more rounded corners
    },
  }}
>
  {/* Show the selected image and additional text (bio) in the modal */}
  {selectedImage && (
   <div className="modal-content px-4 py-8  "> {/* Add padding to the content */}
   <img
	 src={selectedImage.profileImage}
	 className="rounded-lg w-96 my-6"
	 alt=""
	 style={{ margin: 'auto' }}
   />
   <h3 className="text-ternary-dark dark:text-ternary-light text-xl font-semibold my-2 text-center px-4 py-5">
	 {selectedImage.header}
   </h3>
   <p className="text-ternary-dark dark:text-ternary-light text-center my-2 px-4 py-4"> {/* Add margin (spacing) to the top and bottom of the paragraph */}
	 {selectedImage.bio}
   </p>
   <div className=" my-2 px-4 py-2" >

   </div>
 </div>
 
  )}
</Modal>

    </div>
  );
};

export default AboutMeBio;
