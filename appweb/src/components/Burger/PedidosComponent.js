import React, { useEffect, useState } from 'react';
import { getPedidos } from '../services/index';

const PedidosComponent = () => {
	const [pedidos, setPedidos] = useState([]);
	useEffect(() => {
		async function loadPedidos() {
			const datos = await getPedidos();
			console.log(datos);
		}
		loadPedidos();
	}, []);
	return (
		<table className='table container'>
			<thead>
				<tr>
					<th>
						<abbr title='Position'>Pos</abbr>
					</th>
					<th>Team</th>
					<th>
						<abbr title='Played'>Pld</abbr>
					</th>
					<th>
						<abbr title='Won'>W</abbr>
					</th>
					<th>
						<abbr title='Drawn'>D</abbr>
					</th>
					<th>
						<abbr title='Lost'>L</abbr>
					</th>
					<th>
						<abbr title='Goals for'>GF</abbr>
					</th>
					<th>
						<abbr title='Goals against'>GA</abbr>
					</th>
					<th>
						<abbr title='Goal difference'>GD</abbr>
					</th>
					<th>
						<abbr title='Points'>Pts</abbr>
					</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<th>1</th>
					<td>38</td>
					<td>23</td>
					<td>12</td>
					<td>3</td>
					<td>68</td>
					<td>36</td>
					<td>+32</td>
					<td>81</td>
				</tr>
			</tbody>
		</table>
	);
};

export default PedidosComponent;
