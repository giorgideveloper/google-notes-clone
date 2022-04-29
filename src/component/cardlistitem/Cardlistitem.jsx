import React from 'react';
import axios from 'axios';
import Listitem from '../listitem/Listitem';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';
import './Cardlistitem.css';

function Cardlistitem() {
	const [post, setPost] = React.useState(null);
	const [loading, setLoading] = React.useState(false);

	const setPostfn = async () => {
		try {
			const data = await axios
				.get('https://keep.jrwebdeveloper.com/api/notes')
				.then(response => {
					setPost(
						response.data.data.map(note => (
							<div key={note.id} className='col-lg-3 col-md-6 col-12 p-2 '>
								<Listitem note={note} />
							</div>
						))
					);
				});
			setLoading(true);
		} catch (e) {
			console.log(e);
		}
	};

	React.useEffect(() => {
		setPostfn();
	}, []);

	return (
		<>
			{loading ? (
				post
			) : (
				<div className='spiner'>
					<ReactBootstrap.Spinner animation='grow' className='spiners' />
				</div>
			)}
		</>
	);
}

export default Cardlistitem;
