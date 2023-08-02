import TheHunterianLogo from '../../../src/images/Collaborations/HunterianLogo-Black.jpg';
import UniversityOfGlasgow from '../../../src/images/Collaborations/UoG_colour.jpeg'
import TheHunterianAndUniversityOfGlasgow from '../../../src/images/Collaborations/H_UofG_FULLCOL_LOCKUP.png'

function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				<p>In Collaboration with:</p>
				<br></br>
				<div className='flex item-center justify-center'>
				<img src={TheHunterianAndUniversityOfGlasgow} alt="The Hunterian" style={{ width: "200px", height: "auto" }} />
				</div>
				
				{/* <img src={UniversityOfGlasgow} alt="Picture 02" style={{ width: "200px", height: "auto" }} /> */}


				<br></br>
				<p>&copy;2023 Team 3B Portfolio. TREASURE HUNTerian </p>


				{/* &copy; {new Date().getFullYear()}
				<a
					href="https://github.com/realstoman/react-tailwindcss-portfolio"
					target="__blank"
					className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Team 3B Portfolio
				</a>
				.
				<a
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Treasure Hunterian
				</a> */}
			</div>
		</div>
	);
}

export default AppFooterCopyright;
