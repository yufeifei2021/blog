import React from 'react';
import { useForm, Controller } from "react-hook-form";
import './BlogTag.css';
import pageThreeoBg from './pagethreebg.jpg';
import { AppBar, Toolbar, Typography, IconButton, Input, Button, Chip } from '@material-ui/core';
import { Menu as MenuIcon, Delete as DeleteIcon } from '@material-ui/icons';
import axios from 'axios';


const Blogcategory = () => {

    const { control, handleSubmit } = useForm();
    const [tags, setTags] = React.useState([]);

    const gettags = () => {
        axios.get('http://127.0.0.1:8000/blog/tags/')
        .then(function (response) {
            setTags(response.data);
        })
    };  

    const onSubmit = (data) => {
        axios.post('http://127.0.0.1:8000/blog/tags/', data)
        .then(function () {
            gettags();
        })
    };
    
    const handleDelete = (id) => {
        axios.delete(`http://127.0.0.1:8000/blog/tags/${id}/`)
        .then(function(){
            gettags();
        })
    };

    React.useEffect(() => {
        gettags();
    },[]);

    return (
        <><div className="page4">
            <AppBar className="app-bar4" position="sticky">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        博文标签
                    </Typography>
                </Toolbar>
            </AppBar>
            <form className="form4" onSubmit={handleSubmit(onSubmit)}> 
                <p>名称: </p>
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => <Input 
                    className="blog-content4"
                    placeholder="name"
                    {...field} />}
                />
                <div className="button-container4">
                    <Button className="create4" variant="contained" type="submit" >创建标签</Button>
                </div>
                <div className="chips-wrapper4">
                    {tags.map(item => ( 
                        <Chip 
                            className="chip1" 
                            color="primary" 
                            label={item.name}
                            key={item.id}
                            onDelete={() => handleDelete(item.id)}
                            deleteIcon={<DeleteIcon />}
                        /> 
                    ))}
                </div>
            </form>
        </div>
        <div className="picture-container4">
            <img className="picture4" src={pageThreeoBg}/>
        </div></>

    );

};

export default Blogcategory;
