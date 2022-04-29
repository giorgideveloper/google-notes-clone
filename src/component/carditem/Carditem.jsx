import * as React from 'react';
import Cardlistitem from '../cardlistitem/Cardlistitem';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carditem.css';

function Carditem() {
	return (
		<>
			<div className='container'>
				<div className='row justify-content-center'>
					<Cardlistitem />
				</div>
			</div>
		</>
	);
}

export default Carditem;
