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
      padding: '1rem',
    },
  },
  authLink: {
    color: theme.palette.error.light,
  },
}));

export default useStyles;
