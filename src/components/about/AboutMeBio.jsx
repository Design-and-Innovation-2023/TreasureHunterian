import { useState } from 'react';
import { useContext } from 'react';
import Modal from 'react-modal';
import AboutMeContext from '../../context/AboutMeContext';
import firstMeeting from '../../images/grouppic.png';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { }from '@fortawesome/fontawesome-svg-core'

import {FaGithub} from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa';

import styles from "../../css/Picture.module.css";




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

<div className="text-ternary-dark dark:text-ternary-light" >
    <h1 className={styles.secondheader}>
      <div className={styles.headerContent}>
Meet the team      </div>
    </h1>	
	</div>

  <figure className='figure'>
	<img
	className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50 mt-2"
	src={firstMeeting}
	alt="nature image"
	/>
		<div className="text-ternary-dark dark:text-ternary-light" >

	{/* <figcaption className={styles.caption} >The team's first requirement gathering meeting with Ruth Fletcher, Education Manager at the Hunterian Museum.</figcaption> */}
	</div>
    </figure>
    <br></br>
  <br></br>
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
<br></br>
<br></br>
        {/* Section 2 - Team Reflection */}
        <section style={{  padding: '1rem 2rem' }} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
        <div className="text-ternary-dark dark:text-ternary-light" >
    <h1 className={styles.header}>
      <div className={styles.headerContent}>
	  Team Reflection      
	  </div>
    </h1>	
	</div>   
  
  <br></br>
       <p style={{ fontSize: '1.2rem' }}>
        During our team's reflection process, we conducted a thorough analysis to identify key recurring themes that emerged during the duration of our project. This allowed us to gain valuable and meaningful insights into the collaborative efforts of each team member. We placed significant importance on considering multiple perspectives and took into account relevant broader contextual factors, recognizing the diverse skill sets and viewpoints brought forth by each individual within the team. By engaging in this comprehensive evaluation, we achieved an improved understanding of the challenges encountered throughout this endeavor and were able to develop effective solutions accordingly.
        <br/><br/>
        Throughout this reflective practice, we experienced genuine growth through critical assessments of both our successes and setbacks as a team. This resulted in actionable insights derived from these evaluations. These invaluable learnings have not only enhanced our achievements within the project at hand but also equipped us with newfound abilities and knowledge for future undertakings.
        <br/><br/>
        The story behind our accomplishments fills us with immense pride. It symbolizes the resilience we demonstrated while conquering obstacles and the personal development we underwent as individuals and as a team.
          <br/><br/>
          We, Team 3B, are proud to present to you our final product, TREASURE HUNTerian.                               
          <br/><br/>                    
          <br></br>
          <b style={{ fontSize: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>We are Proud.</b>

        </p>
<br></br>
<br></br>
<br></br>
<br></br>
        {/* <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Acknowledgements</h2> */}
        <div className="text-ternary-dark dark:text-ternary-light" >
    <h1 className={styles.subheader}>
      <div className={styles.headerContent}>
      Acknowledgements	  </div>
    </h1>	
	</div>  
  <br></br>
        <p className='text-center' style={{ fontSize: '1.2rem' }}>
          The team would like to express their thanks to Professor Jonathan Grizou for his guidance and support throughout the project.
          Additionally, the team would also like to thank the staff at The Hunterian Museum for their support and feedback.
          The weekly meetings has been a great help in the development of the project, and we are grateful for the opportunity to work with them.
          Honorable mention to Ruth Fletcher for her guidance and directions in the project, and for her patience in addressing all our inquiries.
          Lastly, the team would like to thank the teaching assistants for their help in the project and for their feedback.
        </p>
<br></br>
<br></br>
        <hr style={{ margin: '2rem 10%', border: '1px solid' }} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light"/>


        <section style={{
        marginLeft: '10%',
        marginRight: '10%',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '30vh',
      }}>
        <h1 style={{ fontSize: '5rem'}} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">Thank you.</h1>
      </section>  

      </section>
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
   <h3 className="text-xl font-semibold my-2 text-center px-4 py-4">
	 {selectedImage.header}
   </h3>
   <p className="text-center px-4 py-1"> {/* Add margin (spacing) to the top and bottom of the paragraph */}
	 Contact: {selectedImage.email}
   </p>
   <p className="text-center my-2 px-4 py-6"> {/* Add margin (spacing) to the top and bottom of the paragraph */}
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
