import React from 'react';
import Nav from './Nav';

const PedidosComponent = () => {
	return (
		<>
			<Nav />
			<table className='table container'>
				<thead>
					<tr>
						<th>Cantidad</th>
						<th>Producto</th>
						<th>Precio</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<th>1</th>
						<td>La picara</td>
						<td>12000</td>
					</tr>
				</tbody>
			</table>
			<p style={{ width: '100%', marginLeft: 900, marginBottom: 20 }}>
				Total: 12000
			</p>

			<button
				className='button is-block is-warning is-large is-fullwidth'
				style={{
					borderRadius: 8,
					border: 'none',
					color: 'white',
					fontWeight: 'bold',
					fontSize: 15,
					backgroundColor: '#1497E2',
					width: 200,
					margin: 'auto',
				}}>
				Comprar
			</button>
		</>
	);
};

export default PedidosComponent;
