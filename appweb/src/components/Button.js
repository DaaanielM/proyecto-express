import React from 'react';
import { Button } from 'react-bulma-components';

const AddButton = () => {
	return (
		<div className='buttons'>
			<Button className='button is-link'>Editar</Button>
			<Button className='button is-danger'>Eliminar</Button>
		</div>
	);
};

export default AddButton;
