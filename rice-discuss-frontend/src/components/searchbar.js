import React from 'react';
import {Grid, Box, Text, Image, TextInput} from 'grommet';
//import {ImageStamp} from 'grommet-controls';
import Calendar from './assets/calendar.jpg';
import Bell from './assets/bell.jpg';
import Question from './assets/question.jpg';
//import images from './assets'
import './empty.css'

//you can see the images show up in the inspect thing
console.log(Calendar);
console.log(Question);
console.log(Bell);

//images.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} />)

function searchbar(){
    //state = {text: ''}
    //const[value, setValue] = React.useState('');
    
    //const {text} = this.state;
    return(
        
        <div style = {{backgroundColor: '#F9FAFB'}}>
            <Grid           
            rows={['xxsmall']}
            columns={['small', 'large', 'small', 'xsmall']}
            areas={[
            { name: 'space1', start: [0, 0], end: [0, 0] },
            { name: 'searchbar', start: [1, 0], end: [1, 0] },
            {name: 'space2', start: [2, 0], end: [2, 0]},
            {name: 'icon', start: [3, 0], end: [3, 0] },
            ]}
        >
            <Box gridArea='space1'>
            </Box>
            <Box gridArea='searchbar' margin = {{'vertical': 'small'}}>
                    <TextInput size = 'small' 
                        placeholder="Search"
                        //value={text}
                        //onChange={event => this.setState({text: event.target.value})}
                    />
            </Box >
            <Box gridArea='space2'>
            </Box>
            <Box gridArea='icon' direction = 'row' gap = 'large' align = 'center'>
                <React.Fragment>
                    <Box direction = 'row' pad = 'small'>
                        <Image src = {Question} />
                    </Box>
                    <Box direction = 'row' pad = 'small'>
                        <Image src = {Calendar} />
                    </Box>
                    <Box direction = 'row' pad = 'small'> 
                        <Image src = {Bell} />
                    </Box>
                    
                        {/* <Image src = {Question} />
                        <Image src = {Calendar}/>
                        <Image src = {Bell} /> */}
                        {/* <Image src = {UserIcon} /> */} 
                </React.Fragment>
                {/* {['start', 'center', 'end'].map(align =>(
                    <React.Fragment>
                        <Image src = {Calendar} />
                        <Image src = {Bell} />
                        <Image src = {Question} />
                    </React.Fragment>

                ))}         */}
            </Box>

        </Grid>

        </div>
    );
}

export default searchbar;