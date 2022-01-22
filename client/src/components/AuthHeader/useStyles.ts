import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  authHeader: {
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  accAside: {
    '&&': {
      fontSize: 14,
      fontWeight: 900,
      fontFamily: 'Roboto',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      display: 'flex',
      alignItems: 'center',
      padding: '1rem',
    },
  },
  authLink: {
    color: 'red',
  },
}));

export default useStyles;
