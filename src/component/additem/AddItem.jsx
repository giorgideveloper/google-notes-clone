import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

export default function AddItem() {
	return (
		<Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
			<SpeedDial
				ariaLabel='SpeedDial basic example'
				sx={{ position: 'absolute', bottom: 16, right: 16 }}
				icon={<SpeedDialIcon />}
			></SpeedDial>
		</Box>
	);
}
