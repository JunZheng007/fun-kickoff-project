import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import useStyles from './useStyles';

interface Props {
  handleSubmit: (
    {
      username,
      email,
      password,
    }: {
      email: string;
      password: string;
      username: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      email: string;
      password: string;
      username: string;
    }>,
  ) => void;
}

const SignUpForm = ({ handleSubmit }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        username: '',
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required('Username is required').max(40, 'Username is too long'),
        email: Yup.string().required('Email is required').email('Email is not valid'),
        password: Yup.string()
          .required('Password is required')
          .max(100, 'Password is too long')
          .min(6, 'Password too short'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Box display="flex" flexDirection={'column'} alignItems="start" marginTop={3}>
            <Typography className={classes.label}>EMAIL ADDRESS</Typography>
            <TextField
              id="email"
              fullWidth
              placeholder="Your email"
              InputProps={{
                classes: { input: classes.inputs },
              }}
              name="email"
              autoComplete="email"
              helperText={touched.email ? errors.email : ''}
              error={touched.email && Boolean(errors.email)}
              value={values.email}
              onChange={handleChange}
            />
          </Box>
          <Box display="flex" flexDirection={'column'} alignItems="start" marginTop={3}>
            <Typography className={classes.label}>NAME</Typography>
            <TextField
              id="username"
              fullWidth
              placeholder="Your name"
              InputProps={{
                classes: { input: classes.inputs },
              }}
              name="username"
              autoComplete="username"
              autoFocus
              helperText={touched.username ? errors.username : ''}
              error={touched.username && Boolean(errors.username)}
              value={values.username}
              onChange={handleChange}
            />
          </Box>
          <Box display="flex" flexDirection={'column'} alignItems="start" marginTop={3}>
            <Typography className={classes.label}>PASSWORD</Typography>
            <TextField
              id="password"
              fullWidth
              placeholder="Create a password"
              InputProps={{
                classes: { input: classes.inputs },
              }}
              type="password"
              autoComplete="current-password"
              helperText={touched.password ? errors.password : ''}
              error={touched.password && Boolean(errors.password)}
              value={values.password}
              onChange={handleChange}
            />
          </Box>
          <Box textAlign="center" marginTop={5}>
            <Button type="submit" size="large" variant="contained" color="error" className={classes.submit}>
              {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'SIGN UP'}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default SignUpForm;
