import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css';

function Footer() {
  return (
    <>
    
    <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className = 'box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className = 'textos'>Acompanhe:</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/pedrocadeoz" target="_blank">
                                <GitHubIcon className = 'redes' />
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                <LinkedInIcon className = 'redes' />
                            </a>
                            <a href="pedrorodrigues199767@gmail.com" target="_blank">
                                <EmailIcon className = 'redes' />
                            </a>
                        </Box>
                    </Box>
                    <Box className = 'box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className = 'textos' >© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom className = 'textos' align="center">https://github.com/pedrocadeoz</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
    
    </>
  )
}

export default Footer;