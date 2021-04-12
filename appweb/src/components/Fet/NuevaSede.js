import React from 'react';
import SedeImagen from '../../assets/img/Nuevasede.png';

const NuevaSede = () => {
	return (
		<>
			<div className='section'>
				<div className='container'>
					<div className='columns is-4'>
						<figure className='image'>
							<img src={SedeImagen} alt='' />
						</figure>
					</div>
				</div>
			</div>
		</>
	);
};

export default NuevaSede;
