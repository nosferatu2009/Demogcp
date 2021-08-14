import React from 'react';
//import Post from './Post';
import {Grid, Box, Text} from 'grommet';
import './empty.css';
function TopHits () {

    // const posts = [<Post author="david yi" body="hello"/>,
    // <Post author="victor" body="what a cool kid"/>
// ];
    return (
        <div className="tophits">
            <Grid           
            rows={['xxsmall', 'xxsmall', 'xxsmall', 'xxsmall', 'xxsmall']}
            columns={['medium']}
            areas={[
            { name: 'post1', start: [0, 0], end: [0, 0] },
            { name: 'post2', start: [0, 1], end: [0, 1] },
            { name: 'post3', start: [0, 2], end: [0, 2] },
            { name: 'post4', start: [0, 3], end: [0, 3] },
            { name: 'post5', start: [0, 4], end: [0, 4] }
            ]}
        >
                <Box gridArea='post1'>
                    <Text text="small">Post 1</Text>
                </Box>
                <Box gridArea='post2'>
                    <Text>Post 2</Text>
                </Box >
                <Box gridArea='post3'>
                    <Text>Post 3</Text>
                </Box>
                <Box gridArea='post4'>
                    <Text>Post 4</Text>
                </Box>
                <Box gridArea='post5'>
                    <Text>Post 5</Text>
                </Box>
        </Grid>
            

            {/* {posts} */}
        </div>
    )
}

export default TopHits;