import React from 'react';

import Images from '../constants/images';
import './Banner.scss';

export default function Banner() {
	return (
		<div className='banner'>
			<div className='banner-hover'>
				<div className='banner-background'></div>
				<div className='banner-overlay'></div>
			</div>
			<div className='banner-content'>
				<span className='banner-text-top'>CHÚNG MÌNH THÀNH ĐÔI</span>
				<hr />
				<span className='banner-text'>
					BẢO TRÂN
					<img src={Images.RING} alt="ring" />
					VĂN QUYỀN
				</span>
				<div className='banner-date'>08 / 04 / 2023</div>
			</div>
		</div>
	)
}
