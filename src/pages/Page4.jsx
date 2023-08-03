import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab'
import { Typography } from '@mui/material'
import Carousel from 'react-multi-carousel';
import Card from '../components/projects/Card';
import 'react-multi-carousel/lib/styles.css';
import styles from "../css/Picture.module.css";
import figmaLogo from "../images/Logo/figma_logo.png";
import idea1 from "../images/Prototype_Assets/assets/Chat Bubble.png"
import idea2 from "../images/Prototype_Assets/assets/Downloadable Gift.png"
import idea3 from "../images/Prototype_Assets/assets/Ms Monocle.png"
import idea4 from "../images/Prototype_Assets/assets/Ocean floor.jpg"
import idea5 from "../images/Prototype_Assets/assets/accept.png"
import idea6 from "../images/Prototype_Assets/assets/download (1).png"
import idea7 from "../images/Prototype_Assets/assets/elasmosaurus badge locked.png"
import idea8 from "../images/Prototype_Assets/assets/elasmosaurus badge.png"
import idea9 from "../images/Prototype_Assets/assets/mosasaurus.png"
import idea10 from "../images/Prototype_Assets/assets/roman badge locked.png"
import idea11 from "../images/Prototype_Assets/assets/vase badge locked.png"
import idea12 from "../images/Prototype_Assets/assets/fish.png"
import showcase1 from "../images/prototyping/Showcase1/Slide1.png"
import QRCode from '../images/QR/GameQR.png'

const Prototyping = () => {

	const cards = [
		{
		  id: 1,
		  title: '',
		  details: '',
		  image: idea1,
		},
		{
		  id: 2,
		  title: '',
		  details: '',
		  image: idea2,
		},
		{
		  id: 3,
		  title: '',
		  details: '',
		  image: idea3,
		},
		{
		  id: 4,
		  title: '',
		  details: '',
		  image: idea4,
		},
		{
		id: 5,
		title: '',
		details: '',
		image: idea5,
		},
		{
		id: 6,
		title: '',
		details: '',
		image: idea6,
		},
		{
		id: 7,
		title: '',
		details: '',
		image: idea7,
		},
		{
		id: 8,
		title: '',
		details: '',
		image: idea8,
		},
		{
		id: 9,
		title: '',
		details: '',
		image: idea9,
		},
		{
		id: 10,
		title: '',
		details: '',
		image: idea10,
		},
		{
			id: 11,
			title: '',
			details: '',
			image: idea11,
		},
		{
			id: 12,
			title: '',
			details: '',
			image: idea12,
		},
	  ]

	// array of image file names for initial
	const longImages = Array.from({ length: 34 }, (_, index) => `Flow_2.${index + 1}.png`);
   
	// array of image file names for final
	const shortImages = Array.from({ length: 26 }, (_, index) => `Flow_3.${index + 1}.png`);

	const responsive = {
		desktop: {
		  breakpoint: { max: 3000, min: 1024 },
		  items: 5,
		  slidesToSlide: 3, // Show 3 images at a time
		}
	  };
	    // state variables for each sub header
		const [showAppDesign, setShowAppDesign] = useState(false);
		const [showColorTheme, setShowColorTheme] = useState(false);
		const [showAssets, setShowAssets] = useState(false);
		const [showCartoonStyle, setShowCartoonStyle] = useState(false);

		const [showAge, setShowAge] = useState(false);
		const [showClue, setShowClue] = useState(false);
		const [showGame, setShowGame] = useState(false);
		const [showExpect, setShowExpect] = useState(false);

		
	return (
	  <>
	  {/* Section - Hi-Fi Prototype #Initial */}
      <section style={{ marginLeft: '10%', marginRight: '10%', padding: '1rem 2rem' }} className=" text-ternary-dark dark:text-ternary-light">
			{/* <h2 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>Hi-Fi Prototypes</h2> */}

			<div className="text-ternary-dark dark:text-ternary-light" >
				<h1 className={styles.secondheader}>
				<div className={styles.headerContent}>
				Finalised Prototype			
				</div>
				</h1>	
			</div>

			<p style={{ fontSize: '1.5rem', marginBottom: '2rem', textAlign:"center" }}>
			<br/>
			It’s the beginning of the end. The team incorporated feedback received from our client back into the finalised prototype and this is how it looks like.
			</p>	

		<p style={{fontSize:"50px", textAlign:"center"}}>
			The Assets
			</p>
				
		
		<div style={{marginLeft:"5%", marginRight:"5%"}}>
		<div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-1 lg:grid-cols-1 gap-4">
		{cards.map((card) => {
			if (card.id) {
				return (
				  <Card
					key={card.id}
					title={card.title}
					details={card.details}
					image={card.image}
				  />
				);
			}
			})}
			</div>
		</div>
		<br></br>
		<p style={{fontSize:"40px", textAlign:"center", marginTop:"20px"}}>
			Our client play test our game!
			</p>
	<Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h6" component="span">
        <p className=" text-ternary-dark dark:text-ternary-light">
			The player follows the map to reach the first quest location.
              </p>
        </Typography>
		<div className={styles.imageWrapper}>
				<img src={require("../images/prototyping/01.gif").default} alt="GIF" className="w-auto h-auto" style={{width:"100%", height:"auto"}} />
			</div>
    </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            
            <Typography variant="h6" component="span">
            <p className=" text-ternary-dark dark:text-ternary-light">
               Storyline begins and so does the first quest. Ms Monocles requires the player's help to complete the first quest.
               </p>
             </Typography>
             <div className={styles.imageWrapper}>
				<img src={require("../images/prototyping/02.gif").default} alt="GIF" className="w-auto h-auto" style={{width:"100%", height:"auto"}} />
			</div>

    </TimelineContent>
      </TimelineItem>


	  <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h6" component="span">
        <p className=" text-ternary-dark dark:text-ternary-light">
		An unexpected twist in the story brings the player to an interesting challenge.
              </p>
        </Typography>
		<div className={styles.imageWrapper}>
				<img src={require("../images/prototyping/03.gif").default} alt="GIF" className="w-auto h-auto" style={{width:"100%", height:"auto"}} />
			</div>
    </TimelineContent>
      </TimelineItem>

	  
	  <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            
            <Typography variant="h6" component="span">
            <p className=" text-ternary-dark dark:text-ternary-light">
			Conquer the challenge and help Ms Monocle in a tricky situation.
               </p>
             </Typography>
             <div className={styles.imageWrapper}>
				<img src={require("../images/prototyping/04.gif").default} alt="GIF" className="w-auto h-auto" style={{width:"100%", height:"auto"}} />
			</div>

    </TimelineContent>
      </TimelineItem>

	  <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h6" component="span">
        <p className=" text-ternary-dark dark:text-ternary-light">
		After completion, Ms Monocles requires help from a colleague of hers and sends the player to next quest location.
              </p>
        </Typography>
		<div className={styles.imageWrapper}>
				<img src={require("../images/prototyping/05.gif").default} alt="GIF" className="w-auto h-auto" style={{width:"100%", height:"auto"}} />
			</div>
    </TimelineContent>
      </TimelineItem>
			
	  <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            
            <Typography variant="h6" component="span">
            <p className=" text-ternary-dark dark:text-ternary-light">
			The player arrives at the next quest location and beings their new quest.
               </p>
             </Typography>
             <div className={styles.imageWrapper}>
				<img src={require("../images/prototyping/06.gif").default} alt="GIF" className="w-auto h-auto" style={{width:"100%", height:"auto"}} />
			</div>
    </TimelineContent>
      </TimelineItem>

	  <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h6" component="span">
        <p className=" text-ternary-dark dark:text-ternary-light">
		Throughout the museum experience, the player has to complete a number of quests.
              </p>
        </Typography>
		<div className={styles.imageWrapper}>
				<img src={require("../images/prototyping/07.gif").default} alt="GIF" className="w-auto h-auto" style={{width:"100%", height:"auto"}} />
			</div>
    </TimelineContent>
      </TimelineItem>

	  <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h6" component="span">
        <p className=" text-ternary-dark dark:text-ternary-light">
		Across their adventure, the player visits different sections of the museum.
              </p>
        </Typography>
		<div className={styles.imageWrapper}>
				<img src={require("../images/prototyping/08.gif").default} alt="GIF" className="w-auto h-auto" style={{width:"100%", height:"auto"}} />
			</div>
    </TimelineContent>
      </TimelineItem>


	  <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h6" component="span">
        <p className=" text-ternary-dark dark:text-ternary-light">
		Upon 100% completion, the player is given their final prize.
              </p>
        </Typography>
		<div className={styles.imageWrapper}>
				<img src={require("../images/prototyping/09.gif").default} alt="GIF" className="w-auto h-auto" style={{width:"100%", height:"auto"}} />
			</div>
    </TimelineContent>
      </TimelineItem>


	  </Timeline>
		
			
		</section>
		{/* Section - Feedbacks */}
		<section style={{ marginLeft: '10%', marginRight: '10%', padding: '1rem 2rem' }} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">		
		  	{/* <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Client Feedback</h2> */}


		</section>

		{/* Section - Final Prototype */}
		<section style={{ marginLeft: '10%', marginRight: '10%', padding: '1rem 2rem' }} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">		
		  	{/* <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Final Hi-Fi Prototype</h2> */}

			  
	<br></br>
	<p style={{textAlign:"center"}}>The games are designed based on the museum's artefacts! <br></br></p>
	<div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
	<img src={showcase1} alt="Show Case 01" style={{ width:"70%", height:"70%"}}/>
	</div>
		

	<div style={{ textAlign: "center" }}>
		<p style={{ fontSize: "30px" }}>
			Like what you see? Try it yourself by scanning the QR code below!
		</p>
		
		<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
			<a href="https://shingliya.itch.io/treasurehunterian" target="_blank">
			<img src={QRCode} alt="The Hunterian" style={{ width: "200px", height: "auto", marginTop: "10px" }} />
			</a>
		</div>
	</div>

	
		</section>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<div>
			<p style={{ fontSize: "50px" }} className="font-general-medium mb-1 text-ternary-dark dark:text-ternary-light text-center">
			It's not about the destination, it's about the journey. <br></br> Thank you for coming along with us!
				</p>
				<br></br>
				<div className='text-center'>
					<br></br>
				<Link
					to="/about"
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

					Meet the team
				</Link>

				</div>
		</div>
	  </>
	);
  };

export default Prototyping;
