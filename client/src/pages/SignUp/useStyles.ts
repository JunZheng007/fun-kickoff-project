import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingTop: 23,
  },
  welcome: {
    '&&': {
      fontSize: 30,
      fontFamily: 'Roboto, sans-serif',
      paddingBottom: 20,
      fontWeight: 700,
      textAlign: 'center',
    },
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
