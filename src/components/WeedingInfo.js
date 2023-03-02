import './WeddingInfo.scss';
import Images from '../constants/images';

export default function WeedingInfo() {
	return (
		<div className="wedding-info">
			<div className='row justify-content-center'>
				{/* wedding detail info */}
				<div className="place-time-info mb-4 d-flex flex-column align-items-center just col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<p className='text-success'>TRÂN TRỌNG KÍNH MỜI BẠN TỚI THAM DỰ LỄ THÀNH HÔN CỦA CHÚNG MÌNH TẠI</p>
					<p><strong>Quinter Central Nha Trang</strong></p>
					<p><small>86/4 Trần Phú, Phường Lộc Thọ, Thành phố Nha Trang, Khánh Hòa</small></p>
					<div>
						<div className='btn btn-time'>11 GIỜ 00</div>
						<div className='btn btn-date'>08.04.2023</div>
					</div>
					<p className='mt-2 text-green-700'><small><strong>Sự hiện diện của bạn là niềm vinh dự của vợ chồng chúng mình.</strong></small></p>
				</div>
				{/* wedding info */}
				<div className="owners-info p-0 d-flex col-xs-8 col-sm-8 col-md-8 col-lg-8">
					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<img className='owners-image' src={Images.DETAIL} alt='detail' />
					</div>
					<div className="pt-5 col-xs-8 col-sm-8 col-md-8 col-lg-8">
						<div class="d-flex py-4 col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<div className="text-center col-xs-6 col-sm-6 col-md-6 col-lg-6">
								<p>NHÀ TRAI</p>
								<p>Chú rể: Nguyễn Văn Quyền</p>
								<p>Bố: Nguyễn ...</p>
								<p>Mẹ: Đào Lan Hương</p>
							</div>
							<div className="text-center col-xs-6 col-sm-6 col-md-6 col-lg-6">
								<p>NHÀ GÁI</p>
								<p>Cô dâu: Thiều Bảo Trân</p>
								<p>Bố: Nguyễn ...</p>
								<p>Mẹ: Đào Lan Hương</p>
							</div>
						</div>
						<div class="text-center col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<img className='flower' src={Images.FLOWER} alt='flower' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
