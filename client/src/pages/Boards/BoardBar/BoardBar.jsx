import React from 'react';
import Box from '@mui/material/Box';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Chip from '@mui/material/Chip';
import LockIcon from '@mui/icons-material/Lock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import FilterListIcon from '@mui/icons-material/FilterList';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
const MENU_STYLES = {
	color: (theme) => theme.palette.primary.main,
	borderRadius: '4px',
};
function BoardBar() {
	return (
		<Box
			px={2}
			sx={{
				width: '100%',
				height: (theme) => theme.trello.navbarBoard,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				gap: 2,
				paddingX: 2,
				bgcolor: (theme) =>
					theme.palette.mode === 'dark' ? '#2c3e50' : '#fff',
				borderTop: '1px solid #00bfa5',
				overflowY: 'hidden',
				overflowX: 'auto',
			}}
		>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
				<Chip
					sx={MENU_STYLES}
					icon={<DashboardIcon />}
					label="app English"
					onClick={() => {}}
				/>

				<Chip
					sx={MENU_STYLES}
					icon={<LockIcon />}
					label="Public/private workspaces"
					onClick={() => {}}
				/>
				<Chip
					sx={MENU_STYLES}
					icon={<AddToDriveIcon />}
					label="Add to Drive"
					onClick={() => {}}
				/>
				<Chip
					sx={MENU_STYLES}
					icon={<FilterListIcon />}
					label="Filters"
					onClick={() => {}}
				/>
			</Box>

			<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
			<Button variant="outlined" color='success' startIcon={<AddIcon/>}>Invite</Button>
				<AvatarGroup max={4}>
					<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
					<Avatar
						alt="Travis Howard"
						src="/static/images/avatar/2.jpg"
					/>
					<Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
					<Avatar
						alt="Agnes Walker"
						src="/static/images/avatar/4.jpg"
					/>
					<Avatar
						alt="Trevor Henderson"
						src="/static/images/avatar/5.jpg"
					/>
				</AvatarGroup>
			</Box>
		</Box>
	);
}

export default BoardBar;
