import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Listitem.css';
import { Button, FloatingLabel, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import { useRef, useState } from 'react';

function Listitem(props) {
	const [show, setShow] = React.useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const post_title = useRef(null);
	const post_description = useRef(null);

	const postData = e => {
		e.preventDefault();
		axios
			.put(`https://keep.jrwebdeveloper.com/api/notes/${props.note.id}`, {
				title: post_title.current.value,
				description: post_description.current.value,
				archived: props.note.archived,
				color: props.note.color,
				pinned: props.note.pinned,
			})
			.then(res => console.log('psot data', res))
			.catch(err => console.log(err));
	};
	return (
		<>
			<div variant='' onClick={handleShow}>
				<Card className='cards h-100' sx={{ maxWidth: 345, maxHeight: 500 }}>
					<CardActionArea>
						<CardContent>
							<Typography gutterBottom variant='h5' component='div'>
								{props.note.title.toUpperCase()}
							</Typography>

							<Typography variant='body2' color='text.secondary'>
								{props.note.description}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</div>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Form.Control
						defaultValue={props.note.title}
						onChange={e => setTitle(e.target.defaultValue)}
						ref={post_title}
					/>
				</Modal.Header>
				<Modal.Body>
					<FloatingLabel controlId='floatingTextarea2' label=''>
						<Form.Control
							defaultValue={props.note.description}
							onChange={e => setDescription(e.target.defaultValue)}
							as='textarea'
							placeholder='Description'
							style={{ height: '100px' }}
							ref={post_description}
						></Form.Control>
					</FloatingLabel>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary' onClick={postData}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Listitem;