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
  accBtn: {
    borderRadius: theme.shape.borderRadius,
    filter: 'drop-shadow(0px 2px 6px rgba(74,106,149,0.2))',
    backgroundColor: '#ffffff',
    color: 'red',
    boxShadow: 'none',
  },
}));

export default useStyles;
