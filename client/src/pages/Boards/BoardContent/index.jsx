import Box from '@mui/material/Box';
function BoardContent() {
  return (
	<Box
	sx={{
		backgroundColor: 'primary.light',
		width: '100%',
		height: (theme) =>
			`calc(100vh - ${theme.trello.navbarBoard} - ${theme.trello.boardBar})`,
		display: 'flex',
		alignItems: 'center',
	}}
>
	content
</Box>
  )
}

export default BoardContent