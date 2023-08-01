// import { motion } from 'framer-motion';
// import ReactPlayer from 'react-player';
// import ContactDetails from '../components/contact/ContactDetails';
// import ContactForm from '../components/contact/ContactForm';

// const VideoPlayer = () => {
//   const videoUrl = 'https://www.youtube.com/watch?v=ra9X4_mfd2k&ab_channel=ShyamPrasad';

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{
//         ease: 'easeInOut',
//         duration: 0.5,
//         delay: 0.1,
//       }}
//       className="h-screen flex items-center justify-center bg-gray-200"
//     >
//       {/* <ReactPlayer
//         url={videoUrl}
//         controls
//         width="50%"
//         height="100%"
//       /> */}
// 	<ContactForm />
// 	<ContactDetails/>
//     </motion.div>
//   );
// };

// export default VideoPlayer;


import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';

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
			className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10"
		>
			<ContactForm />
			<ContactDetails />
		</motion.div>
	);
};

export default Contact;