import React from 'react';
//import react-bootstrap
import {Grid, Stack, Box} from 'grommet';
import Sidebar from './sidebar';
import Searchbar from './searchbar';
import Menubar from './menubar';
//import PostDisplay from './PostDisplay';
import PostArea from './postarea';
//import Post from './Post';

function Layout (){
    return (
        <div style = {{backgroundColor:'brand'}}>
            <Grid           
                rows={['xxsmall', ['large', 'flex']]}
                //rows={['1/2', '2/3']}
                columns={[['small', 'flex'], ['large', 'flex'], ['medium', 'flex']]}
                background = "Brand"
                gap = 'medium'
                fill = {true}
                areas={[
                { name: 'header', start: [0, 0], end: [2, 1] },
                { name: 'left', start: [0, 1], end: [0, 1] },
                { name: 'main', start: [1, 1], end: [1, 1] },
                { name: 'right', start: [2, 1], end: [2, 1] },
                ]}
            >
                <Stack gridArea="header" background="brand" fill = {true}>
                    {/* <Box as={Searchbar}/> */}
                </Stack>
                <Stack gridArea = "left">
                    <Box as={Menubar} />                   
                </Stack>
                <Stack gridArea="main" background="light-2">
                    <Box as={PostArea}/>
                </Stack>
                { <Stack gridArea="right" background="light-5" fill = {true}>
                     <Box as={Sidebar} />
                </Stack>}
            </Grid>
        </div>

    );
}

export default Layout;