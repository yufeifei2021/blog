import React from 'react';
import './BlogArticle.css';
import pageThreeoBg from './pagethreebg.jpg';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

const Blogarticle = () => {

    return (
        <><div className="page2">
            <AppBar className="app-bar2" position="sticky">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        博文分享
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
        <div className="picture-container2">
            <img className="picture2" src={pageThreeoBg}/>
        </div></>

    );

};

export default Blogarticle;
