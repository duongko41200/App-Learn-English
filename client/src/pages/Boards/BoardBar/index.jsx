import React from 'react';
import Box from '@mui/material/Box';
function BoardBar() {
	return (
		<Box
			sx={{
				backgroundColor: 'primary.main',
				width: '100%',
				height: (theme) => theme.trello.boardBar,
				display: 'flex',
				alignItems: 'center',
			}}
		>
			Boar bar
		</Box>
	);
}

export default BoardBar;
