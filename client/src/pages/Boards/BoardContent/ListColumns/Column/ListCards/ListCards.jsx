import React from 'react';

import Box from '@mui/material/Box';
import Card from './Card/Card';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

function ListCards({ cards }) {
	
	return (
		<Box
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				gap: 1,
				overflowX: 'hidden',
				overflowY: 'auto',
				maxHeight: (theme) =>
					`calc(${theme.trello.boardContentHeight} -
				${theme.spacing(5)} -
				${theme.trello.columnFooterHeight} -
				${theme.trello.columnHeaderHeight})`,
				'&::-webkit-scrollbar-thumb': {
					backgroundColor: '#ced0da',
					borderRadius: '8px',
				},
				'&::-webkit-scrollbar-thumb:hover': {
					backgroundColor: '#bfc2cf',
				},
			}}
		>
			{cards?.map((card) => {
				return <Card key={card._id} card={card} />;
			})}

		</Box>
	);
}

export default ListCards;
