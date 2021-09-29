import React, { useState, useEffect } from 'react';
// import './App.css';
import About from 'src/components/About';
import Projects from 'src/components/Projects';

import { Container, Grid, Typography } from '@mui/material';

interface DataObject {
  [key: string]: any;
}

const App = () => {
  const [data, setData] = useState<DataObject>({});

  const fetchData = async () => {
    const resp = await fetch('assets/data.json');
    const data = await resp.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={5} direction="column" marginTop={1}>
        <Grid item xs>
          <About {...data.about} />
        </Grid>
        <Grid item xs>
          <Projects projects={data.projects} />
        </Grid>
        <Grid item xs>
          <Typography variant="body1" align="center">
            © Jinhan Choi | Last Updated: {data.updated}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
