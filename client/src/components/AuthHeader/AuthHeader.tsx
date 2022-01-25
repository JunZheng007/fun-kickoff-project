import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';

interface Props {
  linkTo: string;
  asideText: string;
  linkText: string;
}

const AuthFooter = ({ linkTo, asideText, linkText }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box p={1} display="flex" justifyContent="center" alignSelf="center" className={classes.authHeader}>
      <Typography className={classes.accAside}>
        {asideText + '\xa0'}
        <Link to={linkTo} className={classes.authLink}>
          {linkText}
        </Link>
      </Typography>
    </Box>
  );
};

export default AuthFooter;
