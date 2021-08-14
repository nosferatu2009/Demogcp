import React from 'react';
import {Grid, Box, Stack, Text, Image} from 'grommet';
import './empty.css'
import TopHits from './TopHits';
import Uploads from './Uploads'
import Trending from './assets/trending.jpg';


// function TopHits () {

//     const posts = [<Post author="david yi" body="hello"/>,
//     <Post author="victor" body="what a cool kid"/>
// ];
//     return (
//         <div className="tophits">
//             <h1>Top Hits</h1>
//             {posts}
//         </div>
//     )
// }

// function UpcomingEvents() {

//     const posts = [<Post author="david yi" body="hola"/>,
//     <Post author="victor" body="is a kid"/>
// ];
//     return (
//         <div className="upcomingevents">
//             <h1>Upcoming Events</h1>
//             {posts}
//         </div>
//     )
// }

function sidebar(){
    
    return(
        
        <div style= {{backgroundColor: '#FFFFFF'}}>
            <Grid           
            rows={['xxsmall', 'small', 'xxsmall', 'medium']}
            columns={['medium']}
            gap="medium"
            areas={[
            { name: 'top_post_header', start: [0, 0], end: [0, 0] },
            { name: 'top_post_body', start: [0, 1], end: [0, 1] },
            { name: 'upcoming_event_header', start: [0, 2], end: [0, 2] },
            { name: 'upcoming_event_body', start: [0, 3], end: [0, 3] },
            ]}
        >
        
        
            <Stack gridArea = 'top_post_header' anchor = 'top-left'>
                <Box direction = 'row'>
                    <Text textAlign="start" color="#839CBE" font="Medium Helvetica Neue" size="large" opacity="1">Trending</Text>
                 
                </Box>
                <Box margin = {{'vertical': '30px'}}>
                    <hr style = {{width: 350, height: 0}}>
                    </hr>

                </Box>
                
                <Box direction = 'row' margin = {{'horizontal': '90px'}}>
                    <Image src = {Trending} align = 'center'/>
                </Box>
        
            </Stack>
            {/* <hr
                style={{
                    border: "10px black"

                }}
            /> */}
            <Stack gridArea= 'top_post_body' >
                <Box as={TopHits}/>
            </Stack>
            <Stack gridArea= 'upcoming_event_header' anchor = 'top-left'>
                <Box direction = 'row'>
                    <Text textAlign="start" color="#839CBE" font = "Medium Helvetica Neue" size="large" opacity="1" margin = {{"vertical": "large"}}>Upcoming Events</Text>
                </Box>
                <Box margin = {{'vertical': '80px'}}>
                    <hr style = {{width: 350, height: 0}}>
                    </hr>

                </Box>
            </Stack>
            <Box gridArea="upcoming_event_body" margin = {{'vertical': '50px'}} align = 'top-left'>
                    <Box as={Uploads}/>
            </Box>
    
            </Grid>

            {/* <style>
                {'{background-color: red; }'}
            </style> */}
        </div>

    )
}


export default sidebar;