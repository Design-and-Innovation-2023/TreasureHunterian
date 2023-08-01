import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

const Application = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=ra9X4_mfd2k&ab_channel=ShyamPrasad';

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.5,
          delay: 0.1,
        }}
        style={{
          height: '100vh', // Set the height of motion.div to 100% of the viewport height
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',          
        }}        
      >        
        <ReactPlayer
          url={videoUrl}
          controls
          width="70%"
          height="100%" // Set the height of ReactPlayer to 100% of the parent element (motion.div)
          style={{
            border: '4px solid #000000', // Set the border styles for the video
            borderRadius: '8px', // Add some border radius for rounded corners
          }}          
        />
      </motion.div>

      {/* Section 1 - Treasure Hunterian */}
      <section style={{ marginLeft: '10%', marginRight: '10%', padding: '1rem 2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light"> <br></br> Our Final Product</h2>
        <p style={{ fontSize: '1.2rem' }} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Introducing Treasure Hunterian, where you will embark on a journey with an immersive storyline with our mascot Ms Monocle!
          As an adventurer at The Hunterian Museum, you will be tasked to solve clues to unlock various games and win a badge from them!
          See your name in the adventurers of the week and show off your badges to your friends!
        </p>
      </section>

      <hr style={{ margin: '2rem 10%', border: '1px solid' }} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light" />

      {/* Section 2 - Team Reflection */}
      <section style={{ marginLeft: '10%', marginRight: '10%', padding: '1rem 2rem' }} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Team Reflection</h2>
        <p style={{ fontSize: '1.2rem' }}>
          In our team's process of reflection, we conducted a thorough analysis to identify key recurring themes that emerged during the duration of our project.
          This allowed us to gain valuable and meaningful insights into the collaborative efforts undertaken by each member.
          We placed significant importance on considering multiple perspectives as well as taking into account relevant broader contextual factors, 
          recognizing that diverse skill sets and viewpoints were brought forth by every individual within the team. 
          By engaging in this comprehensive evaluation, we achieved an improved comprehension of the challenges encountered 
          throughout this endeavor and were able to develop effective solutions accordingly. Throughout this reflective practice, 
          genuine growth manifested itself through critical assessments made regarding both successes and setbacks experienced collectively, 
          thereby resulting in actionable insights being derived from these evaluations. 
          These invaluable learnings have not only enhanced our achievements within the project at hand but also equipped us with 
          newfound abilities and knowledge for future undertakings moving forward. 
          The story behind our accomplishments is one which fills us with immense pride - 
          it symbolizes resilience demonstrated while conquering obstacles faced along with personal development undergone.
          <br/><br/>
          We, Team 3B, are proud to present to you our final product, Treasure Hunterian.                               
          <br/><br/>                    
          <b style={{ fontSize: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>We are Proud.</b>

        </p>
      </section>

      <hr style={{ margin: '2rem 10%', border: '1px solid' }} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light"/>

      {/* Section 3 - Poster */}
      <section style={{ marginLeft: '10%', marginRight: '10%', padding: '1rem 2rem' }} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Poster</h2>
        <section style={{
          border: '3px solid #E57373',  // Nice red color border (You can change the color code as desired)
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '0.5rem',           // Add some padding to the section to make it slightly thicker
        }}>
          <img src={require('../images/Poster_Placeholder.png').default} alt="Poster Placeholder" style={{ maxWidth: '100%', marginBottom: '1rem' }} />
        </section>
      </section>

      <hr style={{ margin: '2rem 10%', border: '1px solid' }} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light"/>

      {/* Section 4 - Acknowledgements */}
      <section style={{ marginLeft: '10%', marginRight: '10%', padding: '1rem 2rem' }} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Acknowledgements</h2>
        <p style={{ fontSize: '1.2rem' }}>
          The team would like to express their thanks to Professor Jonathan Grizou for his guidance and support throughout the project.
          Additionally, the team would also like to thank the staff at The Hunterian Museum for their support and feedback.
          The weekly meetings has been a great help in the development of the project, and we are grateful for the opportunity to work with them.
          Honorable mention to Ruth Fletcher for her guidance and directions in the project, and for her patience in answering our questions.
          Lastly, the team would like to thank the teaching assistants for their help in the project and for their feedback.
        </p>
      </section>

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
    </>
  );
};

export default Application;