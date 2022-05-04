import React from 'react';
import axios from 'axios';

export default function index() {
	return axios
		.get('https://keep.jrwebdeveloper.com/api/notes')
		.then(response => {
			response.data.data.map(note => (
				<div key={note.id} className='col-lg-3 col-md-6 col-12 p-2 '></div>
			));
		});
}
