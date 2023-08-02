import React from 'react'
import Card from '../components/projects/Card.jsx'
import idea1 from '../images/wireframing/idea1.jpg'
import idea2 from '../images/wireframing/idea2.jpg'
import idea30 from '../images/wireframing/idea3-0.jpg'
import idea31 from '../images/wireframing/idea3-1.jpg'
import wireframe01 from '../images/wireframing/wireframe01.jpg'
import wireframe02 from '../images/wireframing/wireframe02.jpg'
import wireframe03 from '../images/wireframing/wireframe03.jpg'
import userability01 from '../images/experiment/user01.jpeg'
import userability02 from '../images/experiment/user02.jpeg'
import userability03 from '../images/experiment/user03.jpeg'
import userability04 from '../images/experiment/user04.jpeg'
import userability05 from '../images/experiment/user05.jpeg'
import userability06 from '../images/experiment/user06.jpeg'
import userability07 from '../images/experiment/user07.jpeg'
import idea11 from '../images/wireframing/idea1-1.jpeg'
import idea12 from '../images/wireframing/idea1-2.jpeg'
import idea32 from '../images/wireframing/idea3-2.jpeg'
import idea33 from '../images/wireframing/idea3-3.jpeg'
import styles from "../css/Picture.module.css";




const HomePage = () => {
	const cards = [
	  {
		id: 1,
		title: 'Idea 1 Wireframe',
		details: 'Minigames that targets younger kids between 11 to 14.',
		image: idea1,
	  },
	  {
		id: 2,
		title: 'Idea 2 Wireframe',
		details: 'A game targeting younger kids between 11 to 14.',
		image: idea2,
	  },
	  {
		id: 3,
		title: 'Idea 3 Wireframe',
		details: 'A game targeting younger kid between 11 to 14.',
		image: idea30,
	  },
	  {
		id: 4,
		title: 'Idea 3 Storyboard',
		details: 'Using storyboard to get the flow of the game.',
		image: idea31,
	  },
	]

	const cardIdea01 = [	
		{
			id: 1,
			title: 'The Brainstorming Process',
			details: 'The team wants to ensure while the kids are interacting with the application’s engaging games, they would still be cautious and aware of their surroundings. Hence, the mini games the team has brainstormed incorporates interactions of the artefacts while playing them. 3 main mini games that were idealised were a puzzle, a listening and a mining game. To have the proper interactions of the application, the children would have to go to the relevant locations to start the activity and engage with the artefact.',
			image: idea11,
		},
		{
			id: 2,
			title: 'How to Play?',
			details: 'Play it on your mobile phone. Walk around the museum to find the access codes, with a total of 3 minigames. Get rewarded when all games are completed! After completion, be part of the highscore board.',
			image: idea12,
		},
	]

	const cardIdea02 = [
		{
			id: 1,
			title: 'The Brainstorming Process',
			details: "With the educational aspect as the main highlight of this idea, the team designed the wireframing to be similiar to that of a treasure hunt game. The game would revolve a simple puzzle game where the children would have to seek for clues of the artifact's description within the museum to solve.",
			image: wireframe01,
		},
		{
			id: 2,
			title: 'How to Play?',
			details: 'The design concept allows the children to select multiple genres or topics relating to the artifacts within the museum. Each genre would require the children to fit puzzle pieces together, with each piece having clues to the artifact. This would additionally require the children to find clues to match the puzzle pieces with the artifacts itself. Upon completing the puzzle, a digital gift would be awarded to them and they would stand a chance to be featured in the leaderboard upon completion.',
			image: wireframe02,
			
		}
	]

	const cardIdea03 = [
		{
			id: 1,
			title: 'The Brainstorming Process ',
			details: 'The team have came up with an exciting way to introduce educational content to engage children during their visit in the museum. An interactive adventure along with a companion guide which would accompany the players throughout their journey would captivate their interest in interacting with the application. The quest provides informative clues and guides, allowing children to explore the museum in a fun way.',
			image: idea32,
		},
		{
			id: 2,
			title: 'How to Play? ',
			details: 'Simply get on the website and use your mobile phone as the camera. The game would be in Augmented Reality with a companion to guide you along, follow the instructions and dialogues throughout the play the game. At every quest, you would be required to find the artifact and scan it to unlock the next quest. Upon completion, you would be rewarded with a digital gift and a chance to be featured in the leaderboard.',
			image: idea33,
		}
	]

	// For Usability Testing
	const usabilityTestingCard01 = [
		{
			id: 1,
			title: 'Starting the game',
			details: 'This is what the user would see when they start the game',
			image: userability01,
		},
		{
			id: 2,
			title: 'Selecting the genre',
			details: 'Players would then choose their genre, which is according to the section of the museum they are interested in',
			image: userability02,
		},
		{
			id: 3,
			title: 'Finding the location',
			details: 'The game would then lead the player to the next location, and we understand better on how they would look out for it. A Minimap would be provided to help them navigate.',
			image: userability03,
		},
		{
			id: 4,
			title: 'Players finding their way',
			details: 'We understand that players would take some time to get a bearing of where they are and where they should go.',
			image: userability04,
		},
		{
			id: 5,
			title: 'Puzzle Piece Clue to unlock the game',
			details: 'We want players to be at the right location, so we gave a piece of clue to unlock the game. The clues we gave may be too vague but it might encourage them to explore more. ',
			image: userability05,
		},
		{
			id: 6,
			title: 'Trying to find the answer based on the clue',
			details: 'As the player try to find the answer, we understand better on how they would look for it.',
			image: userability06,
		},
		{
			id: 7,
			title: 'Game unlocked ',
			details: 'Once the clue is solved, the game would be unlocked and the player can start playing it',
			image: userability07,
		},
	]

  
	return (

		<section style={{ padding: '1rem 2rem' }} >

		{/* <h1 style={{ fontSize: "80px" }} className="font-general-medium mb-1 text-ternary-dark dark:text-ternary-light">
			Wireframing and Usability Testing
		</h1> */}

		<div className="text-ternary-dark dark:text-ternary-light" >
    <h1 className={styles.secondheader}>
      <div className={styles.headerContent}>
	  Ideation, Wireframing and Usability Testing
      </div>
    </h1>	
	</div>
	<figure>
	<div className={styles.imageWrapper}>
			<img src={require("../images/wireframing/work01.gif").default} alt="GIF" className="w-1/2 h-auto" />
		</div>
		<div className="text-ternary-dark dark:text-ternary-light" >

		<figcaption className={styles.secondcaption} >Both teams, working in pairs, brainstorming ideas for the project</figcaption>
		</div>
    </figure>

	



	  
		
		{/* <p style={{ fontSize: "25px", textAlign:"center", paddingLeft:"200px", paddingRight:"200px"}} className="font-general-medium mb-1 text-ternary-dark dark:text-ternary-light">
		The intention of is to design a simple, fun to play yet simple web application through wire framing while meeting the client’s requirements.

		<br></br><br></br>This includes a brain storming session where team members bounce ideas off each other and start designing those ideas as a pair. 
		<br></br><br></br>The following are the team’s sketches of the ideas, with substantiating pointers of the team.
		</p> */}

	  <br></br>
	  {/* <p style={{ fontSize: "60px"}} className="font-general-medium mb-1 text-ternary-dark dark:text-ternary-light">
		Wireframing
	  </p> */}
		<section style={{ marginLeft: '19%', marginRight: '20%', padding: '1rem 2rem' }}>

			<div className=" text-ternary-dark dark:text-ternary-light" >
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
	</div>
	<br></br>
	  <div className="text-ternary-dark dark:text-ternary-light" >
    <h1 className={styles.header}>
      <div className={styles.headerContent}>
	  Wireframing      
	  </div>
    </h1>	
	</div>

	<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.thirdheading}>The intention of is to design a simple, fun to play yet simple web application through wire framing while meeting the client’s requirements.</h1>
	<h1 className={styles.thirdheading}>This includes a brain storming session where team members bounce ideas off each other and start designing those ideas as a pair.</h1>
	<h1 className={styles.thirdheading}>The following are the team’s sketches of the ideas, with substantiating pointers of the team.</h1>

	</div>

	  <br></br>

	  {/* GRIDS HERE! */}

	  <div style={{ display: 'flex', alignItems: 'center' }}>
  {/* For Idea 1 */}
  <div style={{ marginRight: '10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#31C283'}}>
    <p style={{ fontSize: '40px', textAlign: 'center', lineHeight: '60px', color: '#FFFFFF'}}>1</p>
  </div>
  <div className="text-ternary-dark dark:text-ternary-light">
    <h1 className={styles.secheading}>Interactive Educational Entertainment Game</h1>
  </div>
</div>
<br></br>
	  
		<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
		{cards.map((card) => {
			if (card.id === 1) {
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

			{/* Idea 01 small grid */}
		<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
		{cardIdea01.map((card2) => {
				return (
				  <Card
					key={card2.id}
					title={card2.title}
					details={card2.details}
					image={card2.image}
				  />
				);
			})}
		</div>
		</div>
			<br></br>
			<br></br>


	{/* For Idea 2 */}
	{/* <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#31C283'}}>
  			<p style={{ fontSize: '50px', textAlign: 'center', lineHeight: '60px', color: '#FFFFFF'}}>2</p>
		</div>

		<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.secheading}>Idea 2: Treasure Hunterian Game

</h1>

</div> */}

<div style={{ display: 'flex', alignItems: 'center' }}>
  {/* For Idea 2 */}
  <div style={{ marginRight: '10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#31C283'}}>
    <p style={{ fontSize: '40px', textAlign: 'center', lineHeight: '60px', color: '#FFFFFF'}}>2</p>
  </div>
  <div className="text-ternary-dark dark:text-ternary-light">
    <h1 className={styles.secheading}>Treasure Hunterian Game</h1>
  </div>
</div>
<br></br>


		<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
		{cards.map((card) => {
			if (card.id === 2) {
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

			{/* Idea 02 small grid */}
		<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
		{cardIdea02.map((card2) => {
				return (
				  <Card
					key={card2.id}
					title={card2.title}
					details={card2.details}
					image={card2.image}
				  />
				);
			})}
		</div>
		</div>

	{/* For Idea 3 */}
	<br></br>
	<br></br>
	{/* <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#31C283'}}>
  			<p style={{ fontSize: '50px', textAlign: 'center', lineHeight: '60px', color: '#FFFFFF'}}>3</p>
		</div> */}
	{/* <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
		Treasure Hunterian Game
		</p> */}

		{/* <div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.secheading}>Idea 3: Object Recognition Visual Storytelling

</h1>
	</div> */}

	<div style={{ display: 'flex', alignItems: 'center' }}>
  {/* For Idea 2 */}
  <div style={{ marginRight: '10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#31C283'}}>
    <p style={{ fontSize: '40px', textAlign: 'center', lineHeight: '60px', color: '#FFFFFF'}}>3</p>
  </div>
  <div className="text-ternary-dark dark:text-ternary-light">
    <h1 className={styles.secheading}>Object Recognition Visual Storytelling</h1>
  </div>
</div>
<br></br>

		<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
		{cards.map((card) => {
			if (card.id === 3 || card.id === 4) {
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
		{/* Idea 03 small grid */}
		<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
		{cardIdea03.map((card) => {
				return (
				  <Card
					key={card.id}
					title={card.title}
					details={card.details}
					image={card.image}
				  />
				);
			})}
		</div>
	
	

		<br></br>
		<br></br>
		<div>
		{/* <p style={{ fontSize: "60px"}} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light text-center">
		Usability Testing
	  </p> */}

	  <div className="text-ternary-dark dark:text-ternary-light" >
    <h1 className={styles.header}>
      <div className={styles.headerContent}>
	  Usability Testing      
	  </div>
    </h1>	
	</div>
	  <br></br>
	  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4">
		{usabilityTestingCard01.map((card) => {
				return (
				  <Card
					key={card.id}
					title={card.title}
					details={card.details}
					image={card.image}
				  />
				);
			})}

		<p style={{ fontSize: "40px" }} className="font-general-medium mb-1 text-ternary-dark dark:text-ternary-light text-center">
		We Learned Better By Actually Testing It Physically!
	  </p>
		</div>
		<p style={{ fontSize: "40px" }} className="font-general-medium mb-1 text-ternary-dark dark:text-ternary-light text-center">
			This usability testing have taught us we need to improve on the navigation of the game, as well as the clues given to the players.
	  </p>
		
		<br></br>
		<br></br>
		<br></br>
		<div>
			<p style={{ fontSize: "80px" }} className="font-general-medium mb-1 text-ternary-dark dark:text-ternary-light text-center">
				Want to learn our next chapter?<br></br>
				</p>
				<br></br>
				<div className='text-center'>
					<br></br>
				<a
					href="page3"
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

					Visit Chapter 3
				</a>

				</div>
		</div>
		</div>
		</section>
			</section>
		);
	};
	
	
	export default HomePage;