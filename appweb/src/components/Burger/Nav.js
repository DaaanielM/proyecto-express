import React from 'react';
import styles from '../../assets/css/Nav.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHome,
	faIdBadge,
	faUser,
	faAtom,
	faSignInAlt,
	faTable,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/img/logo.png';

export default function Nav() {
	return (
		<>
			<nav className={styles.navbar}>
				<label className={styles.logo}>
					<Link to={'/Home'} className={styles.link}>
						<img className={styles.burger} src={Logo} alt='' />
						<span className={styles.brand}>Brand Burger</span>
					</Link>
				</label>
				<ul className={styles.logoul}>
					<li className={styles.logoli}>
						<Link to={'/Home'} className={styles.logolink}>
							<FontAwesomeIcon
								icon={faHome}
								className={styles.fontIcon}
							/>
							Home
						</Link>
					</li>
					<li className={styles.logoli}>
						<Link to={'/Productos'} className={styles.logolink}>
							<FontAwesomeIcon
								icon={faTable}
								className={styles.fontIcon}
							/>
							Productos
						</Link>
					</li>
					<li className={styles.logoli}>
						<Link to={'/Contacto'} className={styles.logolink}>
							<FontAwesomeIcon
								icon={faIdBadge}
								className={styles.fontIcon}
							/>
							Contacto
						</Link>
					</li>
					<li className={styles.logoli} id='guia'>
						<Link to={'/Perfil'} className={styles.logolink}>
							<FontAwesomeIcon
								icon={faUser}
								className={styles.fontIcon}
							/>
							Perfil
						</Link>
					</li>
					{/* <li className={styles.logoli}>
						<Link to={'/Categorias'} className={styles.logolink}>
							<FontAwesomeIcon
								icon={faAtom}
								className={styles.fontIcon}
							/>
							Categorias
						</Link>
					</li> */}
					<li className={styles.logoli}>
						<Link to={'/Login'} className={styles.logolink}>
							<FontAwesomeIcon
								icon={faSignInAlt}
								className={styles.fontIcon}
							/>
							Ingreso
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
