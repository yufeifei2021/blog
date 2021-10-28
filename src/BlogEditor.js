import React from 'react';
import './BlogEditor.css';
import pageThreeoBg from './pagethreebg.jpg';
import { AppBar, Toolbar, Typography, IconButton, Input, Button } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

const Blogeditor = () => {

    return (
        <>
        <div className="page1">
            <AppBar className="app-bar1" position="sticky">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        博文编辑
                    </Typography>
                </Toolbar>
            </AppBar>
            <form className="form" action="form_action.asp" method="get"> 
                <p>博文名称: </p>
                <Input className="blog-content " type="text" name="name" placeholder=" name" />
                <p>内容摘要: </p>
                <Input className="blog-content " type="text" name="summary" placeholder=" summary" />
                <p>正文: </p>
                <Input className="blog-content" multiline rows="10" type="text" name="content" placeholder=" content" />
                <Button className="submit" variant="contained" htmlType="submit">提交博文</Button>
            </form>
        </div>
        <div className="picture-container1">
            <img className="picture1" src={pageThreeoBg}/>
        </div>
        </>

    );

};

export default Blogeditor;
