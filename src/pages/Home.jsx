import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import Button from '../components/reusable/Button';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import TreasureHunterianGameTrailer from '../images/Videos/App_Trailer.mp4'


const Home = () => {

	const videoUrl = TreasureHunterianGameTrailer;

	return (
		<div className="container mx-auto">
      
			<AppBanner></AppBanner>
			<div className="relative h-0" style={{ paddingTop: '5%', height:"100%" }}>
			<motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.5,
          delay: 0.1,
        }}
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',          
        }}        
      >   
      <div>
      <p style={{fontSize:"40px"}} className="font-general-semibold  text-ternary-dark dark:text-primary-light uppercase text-center">
        Watch our trailer
      </p>
        <ReactPlayer
          url={videoUrl}
          controls
          width="100%"
          height="100%"
          style={{
            border: '0px solid #000000',
            borderRadius: '0px',
          }}          
        />
      </div>
      </motion.div>
    </div>
			<ProjectsProvider>
				<ProjectsGrid></ProjectsGrid>
			</ProjectsProvider>

			{/* <div className="mt-8 sm:mt-10 flex justify-center">
				<Link
					to="/projects"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="More Projects"
				>
					<Button title="More Projects" />
				</Link>
			</div> */}
		</div>
	);
};

export default Home;
