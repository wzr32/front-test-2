import { Button } from '@mui/material';
import { withStyles } from '@mui/styles';

export const OutlinedRoundButtonBorder = withStyles(() => ({
  root: {
    borderRadius: '50px',
    background: 'transparent',
    border: '2px solid #fff',
    color: '#fff',
    textTransform: 'capitalize',
    fontSize: '.9rem',
    paddingRight: '1.5em',
    paddingLeft: '1.5em',
  }
}))(Button);

export const OutlinedRoundButtonBlue = withStyles(() => ({
  root: {
    borderRadius: '50px',
    border: '2px solid #14dcf3',
    background: '#14dcf3',
    color: '#fff',
    textTransform: 'capitalize',
    fontSize: '.9rem',
    paddingRight: '1.5em',
    paddingLeft: '1.5em',
  }
}))(Button);