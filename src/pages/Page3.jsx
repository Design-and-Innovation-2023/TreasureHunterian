import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from "../css/Picture.module.css";
import figmaLogo from "../images/Logo/figma_logo.png";


const Prototyping = () => {
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
				Hi-Fi Prototypes				
				</div>
				</h1>	
			</div>

			<p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
			<br/>A Hi-Fi prototype is a detailed and interactive depiction of a digital product that closely mirrors the visual aesthetics and functionality of the final product. 
			The team utilized Figma for fostering an effective collaborative effort in designing the Hi-Fi prototype which best represents the final product.
			</p>		
		</section>
		
		<hr style={{ margin: '2rem 10%', border: '1px solid' }} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light"/>
        <section style={{ marginLeft: '10%', marginRight: '10%', padding: '1rem 2rem' }} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
		
			{/* <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Initial Hi-Fi Prototype</h2> */}

			<div className="text-ternary-dark dark:text-ternary-light" >
    <h1 className={styles.header} style={{marginBottom:'1rem}'}} >
      <div className={styles.headerContent}>
	  Initial Hi-Fi Prototype      
	  </div>
    </h1>	
	</div>
	<br></br>

			{/* Carousel for Figma_Flow_Long */}   
			<Carousel
			responsive={responsive} // Use the responsive configuration
			swipeable={false} // Enable swipe gestures
			draggable={false} // Enable drag and swipe
			showDots={true} // Hide the navigation dots
			infinite={false} // Enable infinite scrolling
			containerClass="carousel-container" // Optional class for the carousel container
			itemClass="carousel-item" // Optional class for each carousel item
			>
			{longImages.map((imageName, index) => (
				<div key={index} className="carousel-image-wrapper">
				<img
					src={require(`../images/Figma_Flow_Long/${imageName}`).default}
					alt={`Figma_Flow_Long_${index}`}
					style={{ maxWidth: '80%', height: 'auto' }}
				/>
				</div>
			))}
			</Carousel>

			{/* Cards for sub headers */}
			<section style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', padding: '1rem 0' }}>
				<div style={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)', padding: '0.5rem', borderRadius: '20px', textAlign: 'center', position: 'relative', border: '2px solid #ccc' }} onMouseOver={() => setShowAppDesign(true)} onMouseLeave={() => setShowAppDesign(false)}>
						<h3 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: showAppDesign ? '0' : '1', transition: 'opacity .3s ease-in-out' }}>App Design</h3>
						<ul style={{ marginLeft: '1rem', fontSize: '1rem', opacity: showAppDesign ? '1' : '0', transition: 'opacity .3s ease-in-out', textAlign: 'left', listStyleType: 'disc', paddingLeft: '1rem' }}>
							<li>&nbsp;Designed with a simple and intuitive interface.</li>
							<li>&nbsp;Incorporated various visual elements, including a map and storyline</li>
							<li>&nbsp;A Mascot that guides players to solve puzzles.</li>
						</ul>
					</div>
					<div style={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)', padding: '0.5rem', borderRadius: '20px', textAlign: 'center', position: 'relative', border: '2px solid #ccc' }} onMouseOver={() => setShowColorTheme(true)} onMouseLeave={() => setShowColorTheme(false)}>
						<h3 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: showColorTheme ? '0' : '1', transition: 'opacity .3s ease-in-out' }}>Color Theme</h3>
						<ul style={{ marginLeft: '1rem', fontSize: '1rem', opacity: showColorTheme ? '1' : '0', transition: 'opacity .3s ease-in-out', textAlign: 'left', listStyleType: 'disc', paddingLeft: '1rem' }}>
							<li>&nbsp;Light and pastel colors used as the theme of the app.</li>
							<li>&nbsp;Target audience enticed by the appealing color scheme.</li>
							<li>&nbsp;Captivating design enhances user engagement in the game.</li>
						</ul>
					</div>
					<div style={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)', padding: '0.5rem', borderRadius: '20px', textAlign: 'center', position: 'relative', border: '2px solid #ccc' }} onMouseOver={() => setShowAssets(true)} onMouseLeave={() => setShowAssets(false)}>
						<h3 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: showAssets ? '0' : '1', transition: 'opacity .3s ease-in-out' }}>Assets</h3>
						<ul style={{ marginLeft: '1rem', fontSize: '1rem', opacity: showAssets ? '1' : '0', transition: 'opacity .3s ease-in-out', textAlign: 'left', listStyleType: 'disc', paddingLeft: '1rem' }}>
							<li>&nbsp;Used a mix of custom and stock illustrations.</li>
							<li>&nbsp;Created a unique look and feel for the application.</li>
							<li>&nbsp;Illustrations designed to be playful and engaging.</li>
						</ul>
					</div>
					<div style={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)', padding: '0.5rem', borderRadius: '20px', textAlign: 'center', position: 'relative', border: '2px solid #ccc' }} onMouseOver={() => setShowCartoonStyle(true)} onMouseLeave={() => setShowCartoonStyle(false)}>
						<h3 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: showCartoonStyle ? '0' : '1', transition: 'opacity .3s ease-in-out' }}>Cartoon Style</h3>
						<ul style={{ marginLeft: '1rem', fontSize: '1rem', opacity: showCartoonStyle ? '1' : '0', transition: 'opacity .3s ease-in-out', textAlign: 'left', listStyleType: 'disc', paddingLeft: '1rem' }}>
							<li>&nbsp;Cartoon style illustrations used to appeal to the target audience.</li>
							<li>&nbsp;Playful and engaging design for enhanced user experience.</li>
						</ul>
					</div>
				</section>
		</section>

		
		<hr style={{ margin: '2rem 10%', border: '1px solid' }} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light"/>		

		{/* Section - Feedbacks */}
		<section style={{ marginLeft: '10%', marginRight: '10%', padding: '1rem 2rem' }} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">		
		  	{/* <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Client Feedback</h2> */}

			  <div className="text-ternary-dark dark:text-ternary-light" >
    <h1 className={styles.header} style={{marginBottom:'1rem}'}} >
      <div className={styles.headerContent}>
	  Client Feedback	  </div>
    </h1>	
	</div>
	<br></br>


			{/* Cards for sub headers */}
			<section style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', padding: '1rem 0' }}>
				<div style={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)', padding: '0.5rem', borderRadius: '20px', textAlign: 'center', position: 'relative', border: '2px solid #ccc' }} onMouseOver={() => setShowAge(true)} onMouseLeave={() => setShowAge(false)}>
					<h3 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: showAge ? '0' : '1', transition: 'opacity .3s ease-in-out' }}>Age Group and Complexity</h3>
					<p style={{ fontSize: '1rem', opacity: showAge ? '1' : '0', transition: 'opacity .3s ease-in-out', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '80%' }}>
						The app may be better suited for an older age group due to the complexity and reading level
					</p>
				</div>	
				<div style={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)', padding: '0.5rem', borderRadius: '20px', textAlign: 'center', position: 'relative', border: '2px solid #ccc' }} onMouseOver={() => setShowClue(true)} onMouseLeave={() => setShowClue(false)}>
					<h3 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: showClue ? '0' : '1', transition: 'opacity .3s ease-in-out' }}>Clues and Interactivity</h3>
					<ul style={{ marginLeft: '1rem', fontSize: '1rem', opacity: showClue ? '1' : '0', transition: 'opacity .3s ease-in-out', textAlign: 'left', listStyleType: 'disc', paddingLeft: '1rem' }}>
						<li>&nbsp;Usage of multiple-choice questions is well-appreciated</li>
						<li>&nbsp;Clues could be better designed to enhance the experience</li>
						<li>&nbsp;Recommended to use question marks to signify responses are varied rather than fixed</li>
						<li>&nbsp;A need to ensure players are in the correct location for progressing</li>
					</ul>
				</div>
				<div style={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)', padding: '0.5rem', borderRadius: '20px', textAlign: 'center', position: 'relative', border: '2px solid #ccc' }} onMouseOver={() => setShowGame(true)} onMouseLeave={() => setShowGame(false)}>
					<h3 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: showGame ? '0' : '1', transition: 'opacity .3s ease-in-out' }}>Game Logic and Flow</h3>
					<ul style={{ marginLeft: '1rem', fontSize: '1rem', opacity: showGame ? '1' : '0', transition: 'opacity .3s ease-in-out', textAlign: 'left', listStyleType: 'disc', paddingLeft: '1rem' }}>
						<li>&nbsp;The logical flow and transition from one section to another need to be carefully designed to provide a seamless experience</li>
						<li>&nbsp;Linguistic wording to be revised as the storyline was text-heavy</li>
						<li>&nbsp;A lengthy storyline would not entice the children to continue interacting with the game</li>
					</ul>
				</div>
				<div style={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)', padding: '0.5rem', borderRadius: '20px', textAlign: 'center', position: 'relative', border: '2px solid #ccc' }} onMouseOver={() => setShowExpect(true)} onMouseLeave={() => setShowExpect(false)}>
					<h3 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: showExpect ? '0' : '1', transition: 'opacity .3s ease-in-out' }}>Expectations</h3>
					<p style={{ fontSize: '1rem', opacity: showExpect ? '1' : '0', transition: 'opacity .3s ease-in-out', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '80%' }}>
						The client requests for a refined first quest leading to the second quest, focusing on a complete flow for one storyline.
					</p>
				</div>
			</section>	
		</section>

		<hr style={{ margin: '2rem 10%', border: '1px solid' }} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light"/>

		{/* Section - Final Prototype */}
		<section style={{ marginLeft: '10%', marginRight: '10%', padding: '1rem 2rem' }} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">		
		  	{/* <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Final Hi-Fi Prototype</h2> */}

			  <div className="text-ternary-dark dark:text-ternary-light" >
				<h1 className={styles.header} style={{marginBottom:'1rem}'}} >
				<div className={styles.headerContent}>
				Final Hi-Fi Prototype	  </div>
				</h1>	
	</div>
	<br></br>

		{/* Carousel for Figma_Flow_Short */}
		<section style={{ padding: '1rem 1rem' }}>
			<Carousel
			responsive={responsive} // Use the responsive configuration
			swipeable={false} // Enable swipe gestures
			draggable={false} // Enable drag and swipe
			showDots={true} // Hide the navigation dots
			infinite={false} // Enable infinite scrolling
			containerClass="carousel-container" // Optional class for the carousel container
			itemClass="carousel-item" // Optional class for each carousel item
			>
			{shortImages.map((imageName, index) => (
			<div key={index} className="carousel-image-wrapper">
				<img
				src={require(`../images/Figma_Flow_Short/${imageName}`).default}
				alt={`Figma_Flow_Long_${index}`}
				style={{ maxWidth: '80%', height: 'auto' }}
				/>
			</div>
			))}
			</Carousel>
		</section>
			{/* Sub-Headers */}
			<section style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1rem', padding: '1rem 0' }}>
				<div style={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)', padding: '0.5rem', borderRadius: '20px', textAlign: 'center', position: 'relative', border: '2px solid #ccc' }}>
					<h3 style={{ fontWeight: 'bold' }}>Redesigned Storyline</h3>
					<p style={{ marginTop: '1rem', fontSize: '1rem', textAlign: 'center', listStyleType: 'disc', paddingLeft: '1rem' }}>
					Redesigned to be more concise and engaging for children.
					<br/>
					Each storyline adjusted to link to the next quest for a seamless experience.
					</p>
				</div>
				<div style={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)', padding: '0.5rem', borderRadius: '20px', textAlign: 'center', position: 'relative', border: '2px solid #ccc' }}>
					<h3 style={{ fontWeight: 'bold' }}>Intuitive Clues</h3>
					<p style={{ marginTop: '1rem', fontSize: '1rem', textAlign: 'center', listStyleType: 'disc', paddingLeft: '1rem' }}>
					Promote interactivity with artifacts by providing intuitive clues.
					<br/>
					Maintain educational aspect while enhancing the experience.
					</p>
				</div>
				<div style={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)', padding: '0.5rem', borderRadius: '20px', textAlign: 'center', position: 'relative', border: '2px solid #ccc' }}>
					<h3 style={{ fontWeight: 'bold' }}>Target Audience</h3>
					<p style={{ marginTop: '1rem', fontSize: '1rem', textAlign: 'center', listStyleType: 'disc', paddingLeft: '1rem' }}>
					Switching target audience to 11-14 years old for better suitability.
					<br/>
					Interactivity of the application aligns with the age group.
					</p>
				</div>

				<div style={{textAlign:"center"}}>
					Click the icon to see our finalised Figma prototype
					<br></br>
					<a href="https://www.figma.com/file/urGJDQBlfWFU3P7tuCcLms/Treasure-Hunt?type=design&node-id=0%3A1&mode=design&t=MV3WFm7R1LG5cQjI-1" 
					target="_blank" rel="noopener noreferrer">
						<img
						src={figmaLogo}
						style={{ width: '10%', height: 'auto', display: 'block', margin: '0 auto' }}
						alt="Figma Logo"
						/>
					</a>
					Finalised Figma
				</div>
				
			</section>
		</section>
		<br></br>
		<br></br>
		<br></br>
		<div>
			<p style={{ fontSize: "80px" }} className="font-general-medium mb-1 text-ternary-dark dark:text-ternary-light text-center">
				Want to learn our next journey?<br></br>
				</p>
				<br></br>
				<div className='text-center'>
					<br></br>
				<Link
					to="/page4"
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

					Visit Chapter 4
				</Link>

				</div>
		</div>
	  </>
	);
  };

export default Prototyping;