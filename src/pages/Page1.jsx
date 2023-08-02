import { motion } from 'framer-motion';
import firstMeeting from '../images/first_meeting.jpg';
import styles from "../css/Picture.module.css";
import { BiMaleFemale } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
// import { Typography } from "../../@material-tailwind/react";





const Contact = () => {


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                ease: 'easeInOut',
                duration: 0.5,
                delay: 0.1,
            }}
            className="container mx-auto py-5 lg:py-10 lg:mt-10"
        >

<section style={{ paddingTop:'1%', padding: '1rem 2rem' }} className="text-ternary-dark dark:text-ternary-light" >
		
	<div className="text-ternary-dark dark:text-ternary-light" >
    <h1 className={styles.mainheader}>
      <div className={styles.headerContent}>
        Requirement Gathering
      </div>
    </h1>	
	</div>

	<figure className='figure'>
	<img
	className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50 mt-2"
	src={firstMeeting}
	alt="nature image"
	/>
		<div className="text-ternary-dark dark:text-ternary-light" >

	<figcaption className={styles.caption} >The team's first requirement gathering meeting with Ruth Fletcher, Education Manager at the Hunterian Museum.</figcaption>
	</div>
    </figure>


{/* <figure>
      <img
        className="h-96 w-full rounded-lg object-cover object-center"
        src={firstMeeting}
        alt="nature image"
      />
      <Typography as="caption" variant="small" className="mt-2 text-center font-normal">
        Image caption
      </Typography>
    </figure> */}

<div className="text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.customheading}>Requirements Gathered</h1>
	</div>

	<div style={hello.ridesFriends} className="text-ternary-dark dark:text-ternary-light">
      <div style={{ textAlign: 'center' }}>
        <span style={hello.numbers} className="text-ternary-dark dark:text-ternary-light">Target Audience </span>
        <br />
        <span style={hello.subText}>For Age Groups 8-11 and 11-14</span>
      </div>
      <div style={hello.verticalLine}>
        <span style={hello.line} className="text-ternary-dark dark:text-ternary-light" ></span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <span style={hello.numbers}>Interactive Experience</span>
        <br />
        <span style={hello.subText}>Engaging Interaction between app and artefact</span>
      </div>
      <div style={hello.verticalLine}>
        <span style={hello.line}></span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <span style={hello.numbers}>Web-based</span>
        <br />
        <span style={hello.subText}>Non-downloadable</span>
      </div>
      <div style={hello.verticalLine}>
        <span style={hello.line}></span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <span style={hello.numbers}>Non-competitive</span>
        <br />
        <span style={hello.subText}>Ensuring safety of participants</span>
      </div>
    </div>

	<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.customheading}>Detail of Requirements</h1>
	</div>

	<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.secheading}>Requirement 1: Target Audience</h1>
	</div>

	<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.thirdheading}>The application's target audience is either the age group of 8-11 or 11-14, with a specific focus on the age group of 11-14. The main objective is to create an application that not only provides educational content but also includes engaging and enjoyable games to capture the attention of kids.</h1>
	</div>

	<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.secheading}>Requirement 2: Interactive Experience</h1>
	</div>

	<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.thirdheading}>Users should be able to spend time looking at the artifact while also interacting with the application.</h1>
	</div>

	<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.secheading}>Requirement 3: Web-based Application</h1>
	</div>
	<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.thirdheading}>The application should be web-based, eliminating the need for users to download it. It should also be designed to be mobile-friendly, allowing users to interact with it seamlessly on their mobile phones.</h1>
	</div>

	<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.secheading}>Requirement 4: Non-competitive</h1>
	</div>
	<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.thirdheading}>The application should offer a secure and pleasant environment, free from competitive pressures. Users can explore the narrative-driven gameplay at their own pace, ensuring a disturbance-free experience within the museum.</h1>
	</div>

<div className="text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.customheading}>Motivation for Requirement Gathering</h1>
	</div>

	<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.secheading}>1: Understanding the needs of the stakeholders</h1>
	</div>

	<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.thirdheading}>In our project, the motivation for requirement gathering is deeply rooted in understanding the unique needs and expectations of all stakeholders involved. We aim to engage not only the end-users but also our esteemed clients, in our case, the organisation of the Hunterian Museum. By conducting thorough requirement gathering, we managed to align everyone's perspectives and create a shared understanding of the project's goals.</h1>
	</div>

	<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.secheading}>2: Defining Scope and Deliverables</h1>
	</div>

	<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.thirdheading}>Requirement gathering allowed us to fully understand the scope of the project and identify the specific deliverables that needed to be achieved within the timeframe.</h1>
	</div>

	<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.secheading}>3: Effective Client Communication</h1>
	</div>
	<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.thirdheading}>One of the primary reasons for conducting requirement gathering was to establish efficient communication channels with our esteemed client, Ruth Fletcher, the Educational Manager at the Hunterian Museum. During our interactions, we discovered that her preferred mode of communication was through emails, complemented by physical or online meetings held once a week. Our ability to ask useful questions, learned in class, made each meeting productive and engaging, ultimately leading to the success of our application.</h1>
	</div>

	<br></br><br></br><br></br><br></br><br></br><br></br>
	<div>
			<p style={{ fontSize: "80px" }} className="font-general-medium mb-1 text-ternary-dark dark:text-ternary-light text-center">
				Want to learn our next journey?<br></br>
				</p>
				<br></br>
				<div className='text-center'>
					<br></br>
				<a
					href="page2"
					style={{
						backgroundColor: '#0097A7',
						color: 'white',
						fontWeight: 'bold',
						padding: '0.75rem 2.5rem',
						borderRadius: '0.25rem',
						boxShadow: '0 2px 4px rgba(0, 0, 0, 1)',
						transition: 'background-color 0.5s',
					}}
					onMouseEnter={(e) => (e.target.style.backgroundColor = 'green')}
					onMouseLeave={(e) => (e.target.style.backgroundColor = '#0097A7')}>

					Visit Journey 2
				</a>

				</div>
		</div>




    <div className="grid grid-cols-2 gap-10 flex-direction-row">

      {/* Top Left
	  <div className="flex flex-row items-center space-x-8">
 		<div className="bg-gray-500 p-4">
    <h1 style={{ fontSize: '2rem' }} className="text-white text-center">1.   Target Audience    </h1>
			<div className="flex items-center space-x-30" style={{ fontSize: '1.4rem' }}>
			<div className="text-white">Ages 8-11 & 11-14</div>
			</div>
			<div className="flex items-center space-x-30" style={{ fontSize: '1.4rem' }} >
				<div className="text-white">
				 
				</div>
			</div>
		</div>
		</div> */}


      {/* Top Right */}
	  {/* <div className="flex flex-row items-center space-x-4">
 		<div className="bg-gray-500 p-4">
    <h1 style={{ fontSize: '2rem' }} className="text-white text-center">2.  Screen Time</h1>
			<div className="flex items-center space-x-30" style={{ fontSize: '1.4rem' }}>
			<div className="text-white">Users shouldn't be</div>
			</div>
		</div>
		</div> */}




      {/* Bottom Left */}
	  {/* <div className="flex flex-row items-center space-x-4">
 		<div className="bg-gray-500 p-4">
    <h1 style={{ fontSize: '2rem' }} className="text-white text-center">3.   Interactive Experience    </h1>
			<div className="flex items-center space-x-30" style={{ fontSize: '1.4rem' }}>
			<div className="text-white">Should be able to interact</div>
			</div>
		</div>
		</div> */}

      {/* Bottom Right */}
	  {/* <div className="flex flex-row items-center space-x-4">
 		<div className="bg-gray-500 p-4">
    <h1 style={{ fontSize: '2rem' }} className="text-white text-center">4.   Non-Competitive</h1>
			<div className="flex items-center space-x-30" style={{ fontSize: '1.4rem' }}>
			<div className="text-white">Hello</div>
			</div>
		</div>
		</div> */}

    </div>



{/* <div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.customheading}>Ideation</h1>
	</div>

	<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.secheading}>Idea 1: Object Recognition Visual Storytelling</h1>
	</div>

	<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.thirdheading}>The process involves using a camera to scan an artifact, triggering object recognition. Once the object is recognized, the system initiates appropriate animations that play out to convey a visual storytelling experience.</h1>
	</div>

	<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.secheading}>Idea 2: Treature Hunterian</h1>
	</div>

	<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.thirdheading}>This idea involves having puzzles at different locations of the museum. Each puzzle piece contains a fact about the artefact. Upon solving the puzzle, users will receive a digital art piece by the museum.</h1>
	</div>

	<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.secheading}>Idea 3: Mini-Games</h1>
	</div>
	<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.thirdheading}>This idea, similar to idea 2, involes having different games at different exhibits in the musuem. Games include puzzle games, games involving different pitches and tones, and even a game where shark eats fish. Users get a badge after completing each game</h1>
	</div> */}

	
</section>
        </motion.div>
    );
};



const hello = {
	ridesFriends: {
	  paddingTop: 20,
	  display: 'flex',
	  alignItems: 'left',
	  flexDirection: 'row',
	  justifyContent: 'space-evenly',
	  width: '100%',
	  marginBottom: 20,
	},
	numbers: {
	  fontSize: 30,
	  color: '#31C283',
	  fontWeight: 'bold',
	  marginRight: 20
	},
	subText: {
		fontSize: 18,
		fontWeight: 'normal',
	  },
	verticalLine: {
	  position: 'relative',
	  paddingLeft: 20,
	  flexGrow: 1,
	  marginLeft: 10,
	  alignItems: 'center'
	},
	line: {
	  content: '""',
	  position: 'absolute',
	  top: 0,
	  left: 0,
	  width: 1,
	  height: '100%',
	  backgroundColor: '#909090',
	  alignItems: 'center'
	},
  };
		

export default Contact;
