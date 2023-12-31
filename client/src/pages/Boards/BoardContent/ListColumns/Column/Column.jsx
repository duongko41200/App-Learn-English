import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tooltip from '@mui/material/Tooltip';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCardIcon from '@mui/icons-material/AddCard';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import Box from '@mui/material/Box';
import ListCards from './ListCards/ListCards';
import {mapOrder} from '~/utils/sorts'

function Column({column}) {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const orderedCard = mapOrder(column?.cards,column?.cardOrderIds,'_id')
	return (
		<Box
			sx={{
				minWidth: '300px',
				maxWidth: '300px',
				bgcolor: (theme) =>
					theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',

				borderRadius: '5px',
				height: 'fit-content',
				maxHeight: (theme) =>
					`calc(${theme.trello.boardContentHeight} - ${theme.spacing(
						5
					)})`,
			}}
		>
			{/* Box colum Header*/}
			<Box
				sx={{
					height:(theme)=> theme.trello.columnHeaderHeight,
					p: 2,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Typography
					variant="h6"
					sx={{
						fontWeight: 'bold',
						cursor: 'pointer',
						fontSize: '1rem',
					}}
				>
					{column?.title}
				</Typography>
				<Box>
					<Tooltip title="More oprion">
						<ExpandMoreIcon
							id="basic-button-column-dropdown"
							aria-controls={open ? 'basic-column-dropdown' : undefined}
							aria-haspopup="true"
							aria-expanded={open ? 'true' : undefined}
							onClick={handleClick}
							sx={{
								color: 'tex.primary',
								cursor: 'pointer',
							}}
						/>
					</Tooltip>
					<Menu
						id="basic-menu-column-dropdown"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							'aria-labelledby': 'basic-column-dropdown',
						}}
					>
						<MenuItem>
							<ListItemIcon>
								<ContentCut fontSize="small" />
							</ListItemIcon>
							<ListItemText>Cut</ListItemText>
						</MenuItem>
						<MenuItem>
							<ListItemIcon>
								<ContentCopy fontSize="small" />
							</ListItemIcon>
							<ListItemText>Copy</ListItemText>
						</MenuItem>
						<MenuItem>
							<ListItemIcon>
								<ContentPaste fontSize="small" />
							</ListItemIcon>
							<ListItemText>Paste</ListItemText>
						</MenuItem>

						<Divider />
						<MenuItem>
							<ListItemIcon>
								<DeleteForeverIcon fontSize="small" />
							</ListItemIcon>
							<ListItemText>Remove this column</ListItemText>
						</MenuItem>
						<MenuItem>
							<ListItemIcon>
								<Cloud fontSize="small" />
							</ListItemIcon>
							<ListItemText>Archive this column</ListItemText>
						</MenuItem>
					</Menu>
				</Box>
			</Box>

			{/* Box colum list card */}

			<ListCards cards={orderedCard} />
			{/* Box colum footer */}
			<Box
				sx={{
					height: (theme)=> theme.trello.columnFooterHeight,
					p: 2,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Button startIcon={<AddCardIcon />}>Add new card</Button>
				<Tooltip title="drag and drop">
					<DragHandleIcon />
				</Tooltip>
			</Box>
		</Box>
	);
}

export default Column;
