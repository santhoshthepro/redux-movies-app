import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import MoviesPage from './components/movies/MoviesPage';
import AboutPage from './components/about/AboutPage';
import TicketBookingPage from './components/booking/TicketBookingPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="movies" component={MoviesPage} />
		<Route path="about" component={AboutPage}/>
		<Route path="booking" component={TicketBookingPage}/>
	</Route>
);