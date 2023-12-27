import { useColorScheme } from '@mui/material/styles';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function ModeSelect() {
	//  const [age, setAge] = React.useState('');
	const { mode, setMode } = useColorScheme();

	const handleChange = (event) => {
		setMode(event.target.value);
	};

	return (
		<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
			<InputLabel id="lable-select-dark-light-mode">Mode</InputLabel>
			<Select
				labelId="lable-select-dark-light-mode"
				id="select-dark-light-mode"
				value={mode}
				label="mode"
				onChange={handleChange}
			>
				<MenuItem value={'light'}>Light</MenuItem>
				<MenuItem value={'dark'}>Dark</MenuItem>
				<MenuItem value={'system'}>System</MenuItem>
			</Select>
		</FormControl>
	);
}

export default ModeSelect;
