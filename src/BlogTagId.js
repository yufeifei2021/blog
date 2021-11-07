import React from 'react';
import './BlogTagId.css';
import pageThreeoBg from './pagethreebg.jpg';
import { AppBar, Toolbar, Typography, IconButton, Chip } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import axios from 'axios';


const Blogcategory = () => {

    const [tags, setTags] = React.useState([]);

    const gettags = () => {
        axios.get('http://127.0.0.1:8000/blog/tags/')
        .then(function (response) {
            setTags(response.data);
        })
    };  

    React.useEffect(() => {
        gettags();
    },[]);

    return (
        <><div className="page5">
            <AppBar className="app-bar5" position="sticky">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        博文标签ID
                    </Typography>
                </Toolbar>
            </AppBar>
            <form className="form5"> 
                <p>名称: </p>
                <div className="chips-wrapper5">
                    {tags.map(item => ( 
                        <Chip 
                            className="chip2" 
                            color="primary" 
                            label={item.name}
                            key={item.id}
                        /> 
                    ))}
                </div>
            </form>
        </div>
        <div className="picture-container5">
            <img className="picture5" src={pageThreeoBg}/>
        </div></>

    );

};

export default Blogcategory;
