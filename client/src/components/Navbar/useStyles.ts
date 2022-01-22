import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  photoButton: {
    width: '64px',
    height: '64px',
  },
  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
  },
}));

export default useStyles;
