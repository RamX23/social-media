
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Container from '@mui/material/Container';
import PublishIcon from '@mui/icons-material/Publish';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link,NavLink} from 'react-router-dom'
import Imagegallery from '../pages/Imagegallery';
const drawerWidth = 240;

const Navbar = (props:Props) => {

    const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List > 
        <ListItemButton>
            <ListItemText>
            <Link to='/home' style={{textDecoration:'none',color:'black'}}>Home</Link>
            </ListItemText>
        </ListItemButton>
        {[ 'Post'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
         
                <ListItemText>
              <Link to='/upload' style={{textDecoration:'none',color:'black'}}>Post</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider style={{marginTop:'20rem'}} />
      <List>

               <ListItemButton>
            <ListItemText>
                Contact Us
            </ListItemText>
        </ListItemButton>
               <ListItemButton>
            <ListItemText>
                View Privacy Policy
            </ListItemText>
        </ListItemButton>
        {['Logout'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
       
             <Link to='/login' style={{textDecoration:'none',color:'black'}}>Logout</Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );



  return (
    <div>
         <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{backgroundColor:'black'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
           
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           SociaoMe
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
         
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: 'black',
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` },display:'flex',justifyContent:"center"}}
      >
        <Toolbar />
        <Imagegallery/>
      </Box>
    </Box>
    </div>
  )
}

export default Navbar
