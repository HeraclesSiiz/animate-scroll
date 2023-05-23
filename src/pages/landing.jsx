import React, { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

import {
} from "mdb-react-ui-kit";
import {
  Container,
  Grid,
  Box,
  Typography,
  Backdrop,
  CircularProgress,
} from '@mui/material';
import {
} from '@mui/lab';

import {
} from '@mui/icons-material';

import axios from '../config/server.config';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Landing(props) {
  AOS.init();
  const loading = false;
  return (
    <div className="landing">
      <Grid>
        <Box 
          sx={{
            width: '99vw',
            height: '100vh',
          }}
        >
          <Typography variant="h1" color="primary" className='text-center' pt={5}>
            HERACLES
          </Typography>
          <Typography variant="h1" color="primary" className='text-center' pt={5}>
            DEVELOPMENT TEAM
          </Typography>
        </Box>
      </Grid>
      <Container>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h2" color="secondary" className='text-center header-text' m={3} p={2}>
                Open AI - ChatGpt
              </Typography>
            </Grid>
            <Grid item container direction="row" justifyContent="flex-start">
              <Grid item>
                <div data-aos="zoom-in" className='gallery chatgpt_1'>
                </div>
              </Grid>
            </Grid>
            <Grid item container direction="row" justifyContent="flex-end">
              <Grid item>
                <div data-aos="zoom-in" className='gallery chatgpt_2'>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h2" color="secondary" className='text-center header-text' m={3} p={2}>
                GoLang
              </Typography>
            </Grid>
            <Grid item container direction="row" justifyContent="flex-start">
              <Grid item>
                <div data-aos="zoom-in" className='gallery golang_1'>
                </div>
              </Grid>
            </Grid>
            <Grid item container direction="row" justifyContent="flex-end">
              <Grid item>
                <div data-aos="zoom-in" className='gallery golang_2'>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h2" color="secondary" className='text-center header-text' m={3} p={2}>
                Grapes JS
              </Typography>
            </Grid>
            <Grid item container direction="row" justifyContent="flex-start">
              <Grid item>
                <div data-aos="zoom-in" className='gallery grapesjs_1'>
                </div>
              </Grid>
            </Grid>
            <Grid item container direction="row" justifyContent="flex-end">
              <Grid item>
                <div data-aos="zoom-in" className='gallery grapesjs_2'>
                </div>
              </Grid>
            </Grid>
            <Grid item container direction="row" justifyContent="flex-start">
              <Grid item>
                <div data-aos="zoom-in" className='gallery grapesjs_3'>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h2" color="secondary" className='text-center header-text' m={3} p={2}>
                Three JS
              </Typography>
            </Grid>
            <Grid item container direction="row" justifyContent="flex-start">
              <Grid item>
                <div data-aos="zoom-in" className='gallery threejs_1'>
                </div>
              </Grid>
            </Grid>
            <Grid item container direction="row" justifyContent="flex-end">
              <Grid item>
                <div data-aos="zoom-in" className='gallery threejs_2'>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Backdrop
      sx={{ color: '#fff', zIndex: 2 }}
      open={loading}
      >
      <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}