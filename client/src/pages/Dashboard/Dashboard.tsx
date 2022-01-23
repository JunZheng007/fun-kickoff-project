import React, { useEffect } from 'react';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import { CircularProgress, Grid, Typography } from '@mui/material';
import { Navbar } from '../../components/Navbar/Navbar';
import ChatSideBanner from '../../components/ChatSideBanner/ChatSideBanner';

export default function Dashboard(): JSX.Element {
  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();
  const history = useHistory();
  const { path } = useRouteMatch();

  useEffect(() => {
    initSocket();
  }, [initSocket]);

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }

  return (
    <>
      <Navbar />
      <Grid sx={{ padding: 5 }} container rowSpacing={5} columnSpacing={2}>
        <Grid item xs={12}>
          <Switch>
            <Route path={`${path}/profile`}>
              <ChatSideBanner loggedInUser={loggedInUser} />
            </Route>
            <Route path="*">
              <Typography variant="h4" component="h1">
                Default content of dashboard
              </Typography>
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </>
  );
}
