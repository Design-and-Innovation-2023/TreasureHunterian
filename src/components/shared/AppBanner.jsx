import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { FiArrowDownCircle } from 'react-icons/fi';
import developerLight from '../../images/developer.svg';
import developerDark from '../../images/developer-dark.svg';
import hunterianMuseum from '../../images/hunterian_museum.jpg'
import { motion } from 'framer-motion';
import msMonocle from '../../images/Ms_Monocle.png'

const AppBanner = () => {
	const [activeTheme] = useThemeSwitcher();

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
		>
			<div className="w-full md:w-1/3 text-left">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase mr-3"
				> 
				<img src={msMonocle} className="w-20" alt="Dark Logo" />
			{/* <img src={require("../images/wireframing/work01.gif").default} alt="GIF" className="w-1/2 h-auto" /> */}
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
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
				>
					We designed Treasure Hunterian, a game for kids to explore while in the museum for mobile website.
				</motion.p>
				<br></br>
				<br></br>
				<div className='flex justify-center'>
					<a
						href="https://shingliya.itch.io/test"
						target="_blank"
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

						Try it now!
					</a>
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center sm:block"
				>


					{/* <a
						download="Stoman-Resume.pdf"
						href="/files/Stoman-Resume.pdf"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						aria-label="Download Resume"
					>
						<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Download CV
						</span>
					</a> */}
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
			>
				{/* <img
					src={
						// activeTheme === 'dark' ? developerLight : developerDark
						activeTheme === 'dark' ? hunterianMuseum : hunterianMuseum
					}
					alt="Developer"
				/> */}
			<a href="https://shingliya.itch.io/test" >
			<video src={require("../../images/floating_gif.mov").default} type="video/quicktime" className="w-1/2 h-auto" muted />
			</a>
			</motion.div>
		</motion.section>
	);
};

export default AppBanner;
