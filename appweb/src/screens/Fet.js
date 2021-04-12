import 'react-bulma-components/dist/react-bulma-components.min.css';
import '../assets/css/Fet/fet.css';
import React from 'react';

import Imagen from '../components/Fet/Imagen';
import NuevaSede from '../components/Fet/NuevaSede';
import Video from '../components/Fet/Video';
import Contactenos from '../components/Fet/Contactenos';
const Fet = () => {
	return (
		<div className='container'>
			<NuevaSede />
			<Video />
			<Imagen />
			<Contactenos />
		</div>
	);
};

export default Fet;
