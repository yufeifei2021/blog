import React from 'react';
import { useForm, Controller } from "react-hook-form";
import './BlogEditor.css';
import pageThreeoBg from './pagethreebg.jpg';
import { AppBar, Toolbar, Typography, IconButton, Input, Button } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

const Blogeditor = () => {

    const { control, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

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
            <form className="form" action="form_action.asp" method="get" onSubmit={handleSubmit(onSubmit)}> 
                <p>博文名称: </p>
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <Input 
                    className="blog-content"
                    placeholder=" name"
                    {...field} />}
                />
                <p>内容摘要: </p>
                <Controller
                    name="summary"
                    control={control}
                    render={({ field }) => <Input 
                    className="blog-content"
                    placeholder=" summary"
                    multiline
                    rows="2"
                    {...field} 
                    />}
                />
                <p>正文: </p>
                <Controller
                    name="content"
                    control={control}
                    render={({ field }) => <Input 
                    className="blog-content"
                    placeholder=" content"
                    multiline
                    rows="10"
                    {...field} 
                    />}
                />
                <Button className="submit" variant="contained" type="submit" >提交博文</Button>
            </form>
        </div>
        <div className="picture-container1">
            <img className="picture1" src={pageThreeoBg}/>
        </div>
        </>

    );

};

export default Blogeditor;
