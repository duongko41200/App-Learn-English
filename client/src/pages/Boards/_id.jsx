// import {
// 	useColorScheme,
// } from '@mui/material/styles';

// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

import Container from '@mui/material/Container';
import AppBar from '~/components/AppBar'
import BoardBar from '../Boards/BoardBar';
import BoardContent from '../Boards/BoardContent';
function Board() {
	return (
		<>
			<Container
				maxWidth={false}
				disableGutters
				sx={{ height: '100vh', backgroundColor: 'primary.main' }}
			>
				<AppBar />

				<BoardBar />
				<BoardContent />
			</Container>
		</>
	);
}

export default Board;
