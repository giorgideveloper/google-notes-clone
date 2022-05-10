import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import './Listitem.css';
import { Button, FloatingLabel, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import { useRef, useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Swal from 'sweetalert2';
import index from '../../helpers';
import CircleIcon from '@mui/icons-material/Circle';

function Listitem(props) {
	const [show, setShow] = React.useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [title, setTitle] = useState(false);
	const [description, setDescription] = useState(false);
	const post_title = useRef(null);
	const post_description = useRef(null);
	const [item, setItem] = useState('');
	const [itemDes, setItemDes] = useState('');
	const [color, setColor] = useState('');
	const DeleteItem = () => {
		axios
			.delete(`https://keep.jrwebdeveloper.com/api/notes/${props.note.id}`)
			.then(res => {
				index();
				Swal.fire(`${props.note.title}`, 'Deleted', 'success');
				window.location.reload(false);
			})
			.catch(console.error());
	};

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
			.then(res => {
				Swal.fire(`${post_title.current.value}`, 'Updated', 'success');
				setShow(false);
			})
			.catch(err => console.log(err));
	};
	const showInput = e => {
		e.preventDefault();
		setItem(e.target.value);
	};
	const showInputs = e => {
		e.preventDefault();
		setItemDes(e.target.value);
	};

	let colors = ['red', 'green', 'blue', 'alpha'];

	const changeColor = e => {
		e.preventDefault();
		<CircleIcon color />;
	};

	return (
		<>
			<Card
				className='cards'
				color='red'
				sx={{ maxWidth: 345, maxHeight: 500 }}
			>
				<CardActionArea>
					<CardContent onClick={handleShow}>
						<Typography
							gutterBottom
							variant='h5'
							color='text.secondary'
							component='div'
						>
							{title ? item : props.note.title}
						</Typography>

						<Typography variant='body2' color='text.secondary'>
							{description ? itemDes : props.note.description}
						</Typography>
					</CardContent>
					<CardActions>
						<DeleteForeverIcon onClick={DeleteItem} />
						{colors.map(e => (
							<CircleIcon key={e} color={e} onClick={changeColor} />
						))}
					</CardActions>
				</CardActionArea>
			</Card>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Form.Control
						defaultValue={props.note.title}
						onChange={e => setTitle(true)}
						ref={post_title}
						onInput={showInput}
					/>
				</Modal.Header>
				<Modal.Body>
					<FloatingLabel controlId='floatingTextarea2' label=''>
						<Form.Control
							defaultValue={props.note.description}
							onChange={e => setDescription(true)}
							as='textarea'
							placeholder='Description'
							style={{ height: '100px' }}
							ref={post_description}
							onInput={showInputs}
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
