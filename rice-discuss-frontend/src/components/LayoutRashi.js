import React from 'react';
import {Grid, Box, Stack} from 'grommet';
import TopHit from './TopHits';
import Uploads from './Uploads';
import Sidebar from './sidebar';

function Layout () {
    return (
        <Grid 
            rows = {["xsmall", "flex", "flex"]}
            columns = {["small", "large", "small"]}
            gap="small"
            areas={[
                { name: 'search', start: [1, 0], end: [1, 0] },
                { name: 'topHit', start: [1, 1], end: [1, 1] },
                { name: 'posts', start: [1, 2], end: [1, 2] },
              ]}
        >
            <Box gridArea="search" background="blue"/>
            <Stack gridArea="topHit">
                <Box as={TopHit}/>
            </Stack>
            <Stack gridArea="posts">
                <Box gridArea="posts" background="blue" as={Uploads}/>
            </Stack>
            <Stack gridArea="right" background="light-5">
                <Box as={Sidebar} />
            </Stack>
        </Grid>
    )
}

export default Layout;