import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FormikHelpers } from 'formik';
import useStyles from './useStyles';
import register from '../../helpers/APICalls/register';
import SignUpForm from './SignUpForm/SignUpForm';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';

export default function Register(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { username, email, password }: { email: string; password: string; username: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string; username: string }>,
  ) => {
    register(username, email, password).then((data) => {
      if (data.error) {
        console.error({ error: data.error.message });
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <Grid container component="main" className={classes.root} justifyContent="center">
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        lg={5}
        xl={3}
        elevation={6}
        component={Paper}
        alignSelf="center"
        className={classes.paper}
      >
        <Box width="100%" maxWidth={450} p={5} alignSelf="center">
          <Grid container direction={'column'} justifyContent="center" alignItems="center">
            <Grid item xs>
              <Typography variant="h1">Sign up</Typography>
            </Grid>
            <Grid item xs component={SignUpForm} handleSubmit={handleSubmit} />
            <Grid item xs component={AuthHeader} linkTo="/login" asideText="Already a member?" btnText="Login" />
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
