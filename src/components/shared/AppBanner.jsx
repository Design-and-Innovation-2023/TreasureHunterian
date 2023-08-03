import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { motion } from 'framer-motion';
import msMonocle from '../../images/Ms_Monocle.png'
import QRCode from '../../images/QR/GameQR.png'

const AppBanner = () => {
	const [activeTheme] = useThemeSwitcher();
  
	return (
	  <>
		<motion.section
		  initial={{ opacity: 0 }}
		  animate={{ opacity: 1 }}
		  transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
		  className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2 mx-auto"
		>
		  <div className="w-full md:w-1/2 text-center sm:text-left">
			<motion.h1
			  initial={{ opacity: 0 }}
			  animate={{ opacity: 1 }}
			  transition={{
				ease: 'easeInOut',
				duration: 0.9,
				delay: 0.1,
			  }}
			  className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-center text-ternary-dark dark:text-primary-light uppercase mr-3"
			>
			  <img src={msMonocle} className="w-10 inline-block" alt="Dark Logo" />
			  Treasure Hunterian
			</motion.h1>
			<motion.p
			  initial={{ opacity: 0 }}
			  animate={{ opacity: 1 }}
			  transition={{
				ease: 'easeInOut',
				duration: 0.9,
				delay: 0.2,
			  }}
			  className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl sm:text-center leading-normal text-gray-500 dark:text-gray-200"
			>
			  <p style={{ fontSize: "30px", textAlign: "center" }}>A game for kids to explore while in the museum for mobile website</p>
			</motion.p>
		  </div>
  
		  <motion.div
			initial={{ opacity: 0, y: -180 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			// className="w-full sm:w-1/2 text-center sm:text-right flex justify-center sm:justify-end"
		  >
			<a href="https://shingliya.itch.io/treasurehunterian" target="_blank">
			  <video
				src={require("../../images/floating_gif.mov").default}
				type="video/quicktime"
				className="w-3/4 sm:w-full h-auto p-4"
				muted
				autoPlay
				loop
			  />
			</a>
		  </motion.div>
		</motion.section>
  
		<motion.section>
		  <div className='flex justify-center flex-col items-center'>
			<p style={{ fontSize: "20px" }} className="font-general-semibold  text-ternary-dark dark:text-primary-light uppercase text-center">
			  <br/>Use your mobile and scan the QR code below!
			</p>
			<a href="https://shingliya.itch.io/treasurehunterian" target="_blank">
			  <img src={QRCode} alt="The Hunterian" style={{ width: "200px", height: "auto", marginTop: "10px" }} />
			</a>
		  </div>
		</motion.section>
	  </>
	);
  };
  
  export default AppBanner;