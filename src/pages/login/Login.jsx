import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../../assets/logo.jpeg"
import { Button, Container, Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material';
import { Lock, MailOutline } from '@mui/icons-material';

function Login() {
  return (
    <Container component="main" maxWidth="lg">
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" component="div" mb={3} fontWeight="bold">
              <img src={Logo} alt="Logo" style={{width:'120px', height: '130px'}}/>
            </Typography>
            <Typography variant="h5" component="h3" mb={3} fontWeight="normal" letterSpacing={1}>
              
            </Typography>
            <form>
              <TextField
                fullWidth
                margin="normal"
                label="Email address"
                variant="outlined"
                size="large"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutline />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Password"
                type="password"
                variant="outlined"
                size="large"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                }}
              />
              <Link to ="/">
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                style={{ marginTop: '1rem' }}
              >
                Login
              </Button>
              </Link>
              <Typography variant="body2" component="p" color="textSecondary" mt={3}>
                <a href="#!" className="text-muted">Forgot password?</a>
              </Typography>
              
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ display: { xs: 'none', sm: 'block' }, paddingX: '0' }}>
          <img
            src="https://img.freepik.com/free-photo/flock-canada-geese-flying-great-salt-lake-usa_181624-42797.jpg?size=626&ext=jpg&ga=GA1.1.1550395499.1698851088&semt=ais"
            alt="Login image"
            style={{ width: '100%', objectFit: 'cover', objectPosition: 'left', height:'84vh', borderRedius:'5px'}}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
