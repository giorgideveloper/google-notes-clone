import * as React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import { Button } from 'bootstrap';
export default function CahngeColor() {
	const Colors = ['red', 'green'];
	return (
		<>
			{Colors.map((color, key) => (
				<Button Color={color} Colors={Colors} key={key} />
			))}
		</>
	);
}
