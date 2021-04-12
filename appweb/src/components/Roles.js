import React from 'react';
import Button from './Button';
const Roles = () => {
	return (
		<div className='container'>
			<br />
			<br />
			<table className='table container is-3 is-bordered is-striped is-hoverable'>
				<thead className='has-background-primary'>
					<tr className='hola'>
						<th
							scope='col'
							className='has-text-white has-text-centered'>
							ID
						</th>
						<th
							scope='col'
							className='has-text-white has-text-centered'>
							Rol
						</th>
						<th
							scope='col'
							className='has-text-white has-text-centered'>
							Acciones
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Admin</td>
						<td>
							<Button />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Roles;
