import { Form, Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useRef, useState } from 'react';
import { Box } from '@mui/system';
import { SpeedDial, SpeedDialIcon } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';

function Example(props) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const post_title = useRef(null);
	const post_description = useRef(null);

	const postData = e => {
		axios
			.post(`https://keep.jrwebdeveloper.com/api/notes`, {
				title: post_title.current.value,
				description: post_description.current.value,
				archived: 0,
				color: 'bg-dark',
				pinned: 1,
			})
			.then(res => {
				Swal.fire(`${post_title.current.value}`, 'Added', 'success');
				setShow(false);
			})
			.catch(err => console.log(err));
	};

	const personalData = {
		name: 'Jorjo',
	};
	const moveDataHandler = () => {
		props.onMoveData(personalData);
	};
	return (
		<>
			<Box onClick={handleShow}>
				<SpeedDial
					ariaLabel='SpeedDial basic example'
					sx={{ position: 'absolute', bottom: 16, right: 16 }}
					icon={<SpeedDialIcon />}
				></SpeedDial>
			</Box>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Form.Control
						defaultValue={''}
						placeholder='Title'
						ref={post_title}
					/>
				</Modal.Header>
				<Modal.Body>
					<Form.Control
						as='textarea'
						placeholder='Description'
						style={{ height: '100px' }}
						ref={post_description}
						defaultValue={''}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={moveDataHandler}>
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

function AddCardItem() {
	return (
		<>
			<Example />
		</>
	);
}

export default AddCardItem;
