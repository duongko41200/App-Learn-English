import React from 'react';


import Box from '@mui/material/Box';
import Card from './Card/Card';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

function ListCards() {
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
			<Card />
			<Card temporaryHideMedia />
{/* 		

		

			<Card
				sx={{
					cursor: 'pointer',
					boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
					overflow: 'unset',
				}}
			>
				<CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
					<Typography>Card 1</Typography>
				</CardContent>
			</Card> */}
		</Box>
	);
}

export default ListCards;
