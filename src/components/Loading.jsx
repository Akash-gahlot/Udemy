import React from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const RootContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
});

const Spinner = styled(CircularProgress)({
  marginBottom: theme => theme.spacing(2),
});

const Loading = () => {
  return (
    <RootContainer>
      <Spinner size={60} />
      <Typography variant="h5">Loading...</Typography>
    </RootContainer>
  );
};

export default Loading;
