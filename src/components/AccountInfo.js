import './AccountInfo.scss';
import Images from '../constants/images';

export default function AccountInfo() {
	return (
		<div className='account-info'>
			<div className='account-info-content row'>
				<div className="text-center">
					<img className='love-birds' src={Images.LOVEBIRDS} alt='love birds' />
					<p className='text-green-700 mt-2'><strong>Gửi lời chúc đến đôi uyên ương</strong></p>
				</div>
				<div className="row">
					<div class="d-flex justify-content-center col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<img className='bank-account' src={Images.ACCOUNT1} alt='account 1' />
						<img className='bank-account' src={Images.ACCOUNT2} alt='account 2' />
					</div>
				</div>
			</div>
		</div>
	)
}
