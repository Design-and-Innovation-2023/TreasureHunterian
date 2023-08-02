import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import AboutClientSingle from './AboutClientSingle';

const AboutClients = () => {
	const { clientsData, clientsHeading } = useContext(AboutMeContext);

	return (
<div className="mt-10 sm:mt-20 flex flex-col justify-center items-center">
  <p className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light">
    {clientsHeading}
  </p>
  <div className="grid grid-cols-2 sm:grid-cols-4 mt-5 sm:mt-14 gap-10 mx-auto">
    {clientsData.map((client) => (
      <AboutClientSingle
        title={client.title}
        image={client.img}
        key={client.id}
      />
    ))}
  </div>
</div>

	);
};

export default AboutClients;
