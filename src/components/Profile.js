import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from '../image/myAvatar.jpg';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
export default function Profile() {
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<img src={ImgProfile} alt='Le Huynh Duc' />
					<Link to='/' className='btn-floating halfway-fab waves-effect waves-light red'>
                        <i class="fas fa-caret-up activator"></i>Information
					</Link>
				</div>
				<div className='card-content'>
					<span className='card-title grey-text text-darken-4'>
                        Le Huynh Duc
					</span>
					<p>Front-end Web Developer </p>
                    <a href="https://github.com/ducideas" target="_blank">
						<i className='fab fa-github'></i> ducideas
					</a>
				</div>
                <div className='card-reveal'>
					<span className='card-title grey-text text-darken-4'>
						Follow Me
						<i class="fas fa-window-close right"></i>
					</span>
					<p className='flex-container'>
						<i className='fab fa-facebook-f grey-text text-darken-4 social_style'></i>
						<i className='fab fa-twitter grey-text text-darken-4 social_style'></i>
						<i className='fab fa-google-plus-g grey-text text-darken-4 social_style'></i>
						<i className='fab fa-instagram grey-text text-darken-4 social_style'></i>
						<i className='fab fa-pinterest grey-text text-darken-4 social_style'></i>
					</p>
				</div>
			</div>
		</div>
	);
}
