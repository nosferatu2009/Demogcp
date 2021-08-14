import React from 'react';
import {Grid, Stack, Text, Box} from 'grommet';
//import Post from './Post';

function PostDisplay (){
    return (
        <Grid           
                rows={['small', ['large', 'flex']]}
                columns={['full']}
                background = "Brand"
                gap = 'medium'
                fill = {true}
                areas={[
                { name: 'Highlight', start: [0, 0], end: [0, 0] },
                { name: 'OtherPosts', start: [0, 1], end: [0, 1] },       
                ]}
        >
            <Stack gridArea= 'Highlight' background='brand' fill = {true}>
                <Text textAlign='start' color='#839CBE' font='Medium Helvetica Neue' size='large' opacity='1'>Highlights</Text>
                <Box margin = {{'vertical': 'large'}}> 
                        {/* <Box as={Post}/> */}
                </Box>
                
            </Stack>
            <Stack gridArea= 'OtherPosts' background='brand' fill = {true}>
                <Text textAlign='start' color='#839CBE' font='Medium Helvetica Neue' size='large' opacity='1'>Posts</Text>
                <Box margin = {{'vertical': 'large'}}> 
                        {/* <Box as={Post}/>
                        <Box as={Post}/>
                        <Box as={Post}/> */}
                </Box>
            </Stack>
                
        </Grid>

    );

 }

 export default PostDisplay;

