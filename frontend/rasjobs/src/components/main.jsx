import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from './footer';
import '../style/style.scss';
import { useAuth } from './authProvide';

export default function Main(props) {
	const [isPieChartOpen, setIsPieChartOpen] = useState(false);
	const { state, dispatch } = useAuth();
	console.log(state);
	return (
		<div className='root'>
			<div className='navigation'>
				<div className='logo'>
					<NavLink to='/' onClick={() => setIsPieChartOpen(false)}>
						Ras - Jobs
					</NavLink>
				</div>

				<div className='nav'>
					<ul>
						<li>
							<NavLink
								to='/'
								onClick={() => setIsPieChartOpen(false)}
							>
								Jobs
							</NavLink>
						</li>
						<li>
							<NavLink
								to={
									state.userStats.isLoggedIn
										? '/Signout'
										: '/Signin'
								}
							>
								{state.userStats.isLoggedIn
									? 'Sign Out'
									: 'Sign In'}
							</NavLink>
						</li>

						<li>
							<NavLink
								to={
									state.userStats.isLoggedIn
										? '/createProfile'
										: '/login'
								}
								onClick={() => setIsPieChartOpen(true)}
							>
								Create Profile
							</NavLink>
						</li>
						<li>
							<NavLink
								to={
									state.userStats.isLoggedIn
										? '/postJob'
										: '/login'
								}
							>
								Post Jobs
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
			<Outlet id='details' context={[isPieChartOpen]} />
			<Footer className='footer' />
		</div>
	);
}
