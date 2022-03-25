import React from 'react'
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
                    <Box className = 'cursor'>
                        <Typography variant="h4" color="inherit">
                            Porco Tech
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className = 'cursor'>
                            <Typography variant="h5" color="inherit">
                              Início
                            </Typography>
                        </Box>
                        <Box mx={1} className = 'cursor'>
                            <Typography variant="h5" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className = 'cursor'>
                            <Typography variant="h5" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} className = 'cursor'>
                            <Typography variant="h6" color="inherit">
                                Entre com um tema
                            </Typography>
                </Box>
                    <Link to='/login' className='text-decorator-none'>
                        <Box mx={1} style={{ cursor: "pointer", color: "white"}}>
                            <Typography variant="h5" color="inherit">
                                Sair
                            </Typography>
                        </Box>
                    </Link>
             </Box>

        </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar;