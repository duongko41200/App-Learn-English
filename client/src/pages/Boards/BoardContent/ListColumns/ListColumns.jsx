import React from 'react';
import Box from '@mui/material/Box';
import Column from './Column/Column';
import { Button } from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
function ListColumns({columns}) {
	return (
		<Box
			sx={{
				bgcolor: 'inherit',
				width: '100%',
				height: '100%',
				gap: 2,
				display: 'flex',
				overflowY: 'hidden',
				overflowX: 'auto',
				'&::-webkit-scrollbar-thum': {
					m: 2,
				},
			}}
		>
			{
				columns?.map((column) => {
					return (<Column key={column._id} column={ column} />)
				})
			}
		


			<Box
				sx={{
					minWidth: '200px',
					maxWidth: '200px',
					mx: 2,
					borderRadius: '5px',
					height: 'fit-content',
					bgcolor: '#ffffff3d',
				}}
			>
				<Button
					startIcon={<NoteAddIcon />}
					sx={{
						color: 'white',
						width: '100%',
						justifyContent: 'flex-start',
						pl: 2.5,
						py: 1
						
					}}
				>
					Add new Column
				</Button>
			</Box>
		</Box>
	);
}

export default ListColumns;
