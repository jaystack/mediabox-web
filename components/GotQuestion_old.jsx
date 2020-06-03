import React from 'react';
import clsx from 'clsx';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import SectionFrame from './SectionFrame';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  callToActionText: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      flexGrow: 0,
      marginBottom: theme.spacing(4),
    }
  },
  mobileColumn: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
}));

function GotQuestion_old({ bottom, top }) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <SectionFrame
      backgroundImage="question.jpg"
      backgroundColor={theme.palette.primary.main}
      topSeparator={top || '#fafafa'}
      bottomSeparator={bottom || '#fafafa'}
    >
      <Container style={{
        position: 'relative',
      }}>
        <div className={clsx(classes.flex, classes.mobileColumn)}>
          <Typography
            component="p"
            variant="h3"
            className={classes.callToActionText}
            style={{fontWeight: 700}}
          >
            Got a question?
          </Typography>
          <div>
            <Link href="/contact" passHref>
              <Button variant="contained" size="large" color="secondary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </SectionFrame>
  )
}

export default GotQuestion_old;
