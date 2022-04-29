import React from 'react';
import axios from 'axios';

function About() {
	const [post, setPost] = React.useState(null);

	React.useEffect(() => {
		axios.get('https://keep.jrwebdeveloper.com/api/notes').then(response => {
			setPost(response.data.data);
			console.log(post);
		});
	}, []);
	if (!post) return null;

	return (
		<div>
			{post.map(note => (
				<div key={note.id}>
					<h1>{note.title}</h1>
					<p>{note.description}</p>
				</div>
			))}
		</div>
	);
}

export default About;
