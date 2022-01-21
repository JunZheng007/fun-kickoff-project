import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    minHeight: '100vh',
    paddingTop: 23,
  },
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    verticalAlign: 'middle',
  },
}));

export default useStyles;
