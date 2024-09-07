// import React, { Component } from 'react';
// import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

// interface State {
//   open: boolean;
// }

// class Sidebar extends Component<{}, State> {
//   state: State = { open: true };

//   toggleDrawer = (open: boolean) => () => {
//     this.setState({ open });
//   };

//   render() {
//     return (
//       <div>
//         <IconButton onClick={this.toggleDrawer(true)}>
//           <MenuIcon />
//         </IconButton>
//         <Drawer anchor="left" open={this.state.open} onClose={this.toggleDrawer(false)}>
//           <List>
//             {['Home', 'About', 'Services', 'Contact','Product Details'].map((text) => (
//               <ListItem  key={text} component="a" href="#">
//                 {/* 'component' prop is used to specify that this ListItem acts as an anchor tag */}
//                 <ListItemIcon>{/* You can add an icon here */}</ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
//         </Drawer>
//       </div>
//     );
//   }
// }

// export default Sidebar;

///////////////////////////////////render//////////////////////////////////////////////

// import React, { Component } from 'react';
// import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Box, Typography } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

// interface State {
//   open: boolean;
//   selectedItem: string;
// }

// class Sidebar extends Component<{}, State> {
//   state: State = { open: true, selectedItem: 'Home' }; 

//   handleItemClick = (item: string) => () => {
//     this.setState({ selectedItem: item }); // Update the selected item on click.
//   };

//   renderContent = () => {
//     const { selectedItem } = this.state;

//     switch (selectedItem) {
//       case 'Home':
//         return <Typography variant="h6">Welcome to the Home page!</Typography>;
//       case 'About':
//         return <Typography variant="h6">About Us: We are a company that values excellence.</Typography>;
//       case 'Services':
//         return <Typography variant="h6">Our Services: We offer a range of services including web development and design.</Typography>;
//       case 'Contact':
//         return <Typography variant="h6">Contact Us: Feel free to reach out via email or phone.</Typography>;
//       case 'Product Details':
//         return <Typography variant="h6">Product Details: Here are the details of our products.</Typography>;
//       default:
//         return <Typography variant="h6">Select an option from the sidebar.</Typography>;
//     }
//   };

//   render() {
//     return (
//       <Box sx={{ display: 'flex' }}>
//         <Drawer anchor="left" open={this.state.open} >
//           <List>
//             {['Home', 'About', 'Services', 'Contact', 'Product Details'].map((text) => (
//               <ListItem key={text} component="a" href="#"  onClick={this.handleItemClick(text)}>
               
//                 <ListItemText primary={text}  />
//               </ListItem>
//             ))}
//           </List>
//         </Drawer>
//         <Box sx={{ flexGrow: 1, p: 3,marginLeft:'8rem' }} > {/* Main content area */}
//           {this.renderContent()} {/* Render the selected content */}
//         </Box>
//       </Box>
//     );
//   }
// }

// export default Sidebar;


///////////////////fix detail///////////////////////////////////

// import React, { Component } from 'react';
// import { Drawer, List, ListItem, ListItemText, Box, Typography } from '@mui/material';

// interface State {
//   open: boolean;
// }

// class Sidebar extends Component<{}, State> {
//   state: State = { open: true }; // Sidebar is open by default.

//   renderContent = () => {
//     return (
//       <div>
//         <Typography variant="h4" gutterBottom>Home</Typography>
//         <Typography variant="body1">Welcome to the Home page!</Typography>
        
//         <Typography variant="h4" gutterBottom>About</Typography>
//         <Typography variant="body1">About Us: We are a company that values excellence.</Typography>
        
//         <Typography variant="h4" gutterBottom>Services</Typography>
//         <Typography variant="body1">Our Services: We offer a range of services including web development and design.</Typography>
        
//         <Typography variant="h4" gutterBottom>Contact</Typography>
//         <Typography variant="body1">Contact Us: Feel free to reach out via email or phone.</Typography>
        
//         <Typography variant="h4" gutterBottom>Product Details</Typography>
//         <Typography variant="body1">Product Details: Here are the details of our products.</Typography>
//       </div>
//     );
//   };

//   render() {
//     return (
//       <Box sx={{ display: 'flex' }}>
//         <Drawer anchor="left" open={this.state.open}>
//           <List>
//             {['Home', 'About', 'Services', 'Contact', 'Product Details'].map((text) => (
//               <ListItem key={text} component="a" href="#">
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
//         </Drawer>
//         <Box sx={{ flexGrow: 1, p: 3, marginLeft: '8rem' }}> {/* Main content area */}
//           {this.renderContent()} {/* Render all content */}
//         </Box>
//       </Box>
//     );
//   }
// }

// export default Sidebar;





import React, { Component } from 'react';
import { Drawer, List, ListItem, ListItemText, Box, Typography } from '@mui/material';

interface State {
  open: boolean;
  items: string[];
}

class Sidebar extends Component<{}, State> {
  state: State = {
    open: true,
    items: ['Home', 'About', 'Services', 'Contact', 'Product Details'],
  };

  handleItemClick = (item: string) => () => {
    this.setState((prevState) => {
      const updatedItems = [item, ...prevState.items.filter((i) => i !== item)];
      return { items: updatedItems }; 
    });
  };

  renderContent = () => {
    const { items } = this.state;
    return items.map((item) => {
      switch (item) {
        case 'Home':
          return (
            <div key={item}>
              <Typography variant="h4" gutterBottom>Home</Typography>
              <Typography variant="body1">Welcome to the Home page!</Typography>
            </div>
          );
        case 'About':
          return (
            <div key={item}>
              <Typography variant="h4" gutterBottom>About</Typography>
              <Typography variant="body1">About Us: We are a company that values excellence.</Typography>
            </div>
          );
        case 'Services':
          return (
            <div key={item}>
              <Typography variant="h4" gutterBottom>Services</Typography>
              <Typography variant="body1">Our Services: We offer a range of services including web development and design.</Typography>
            </div>
          );
        case 'Contact':
          return (
            <div key={item}>
              <Typography variant="h4" gutterBottom>Contact</Typography>
              <Typography variant="body1">Contact Us: Feel free to reach out via email or phone.</Typography>
            </div>
          );
        case 'Product Details':
          return (
            <div key={item}>
              <Typography variant="h4" gutterBottom>Product Details</Typography>
              <Typography variant="body1">Product Details: Here are the details of our products.</Typography>
            </div>
          );
        default:
          return null;
      }
    });
  };

  render() {
    return (
      <Box sx={{ display: 'flex' }}>
        <Drawer anchor="left" open={this.state.open}>
          <List>
            {['Home', 'About', 'Services', 'Contact', 'Product Details'].map((text) => (
              <ListItem  key={text} onClick={this.handleItemClick(text)}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box sx={{ flexGrow: 1, p: 3, marginLeft: '8rem' }}>
          {this.renderContent()} 
        </Box>
      </Box>
    );
  }
}
export default Sidebar;

