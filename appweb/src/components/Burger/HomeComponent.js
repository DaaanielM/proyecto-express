import React from 'react';
import Hamburger from '../../assets/img/burger-removebg.png';
import Wp from '../../assets/img/whatsapp.svg';
import Fb from '../../assets/img/facebook.svg';
import Ig from '../../assets/img/instagram.svg';
import styles from '../../assets/css/Home.module.css';
import Titulo from '../Titulo';
import Suscripciones from '../Suscripciones';
import Svg from '../../assets/img/wave13.svg';
import Luces from '../../assets/img/luces.png';
import { NavLink } from 'react-router-dom';
const HomeComponent = () => {
	return (
		<div className={styles.mainxd}>
			<Titulo />
			<img src={Luces} alt='Cargando imagen...' className={styles.luz} />
			<div className={styles.redes}>
				<NavLink
					to={
						'/https://api.whatsapp.com/send?phone=573013516165&text=Hola%2C%20Quiero%20ver%20el%20Men%C3%BA%20%F0%9F%A5%A4'
					}>
					<img src={Wp} alt='Cargando imagen...' id={styles.wp}></img>
				</NavLink>

				<div className={styles.face}>
					<NavLink to={'/https://www.facebook.com/benditopecadonva'}>
						<img
							src={Fb}
							alt='Cargando imagen...'
							id={styles.fb}></img>
					</NavLink>
				</div>

				<div className={styles.insta}>
					<NavLink to={'/https://www.instagram.com/benditopecadonva'}>
						<img
							src={Ig}
							alt='Cargando imagen...'
							id={styles.ig}></img>
					</NavLink>
				</div>
			</div>

			<main className={styles.containerxd}>
				<div className={styles.textoxd}>
					Brand Burger es un restaurante que se encuentra en la ciudad
					de Neiva, te ofrecemos productos frescos, de la mejor
					calidad. Te esperamos para que te deleites con nuestros
					productos 😋
				</div>
				<div className={styles.imagexd}>
					<img src={Hamburger} alt='xd' />
				</div>
				<Suscripciones />
			</main>
			<div className={styles.contimage}>
				<img
					src={Svg}
					alt='Cargando imagen'
					className={styles.franja}
				/>
			</div>

			<footer className={styles.footer}>
				Todos los derechos reservadados &copy; 2021
			</footer>
		</div>
	);
};

export default HomeComponent;
