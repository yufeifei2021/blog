import React from 'react';
import { useForm, Controller } from "react-hook-form";
import './BlogCategory.css';
import pageThreeoBg from './pagethreebg.jpg';
import { AppBar, Toolbar, Typography, IconButton, Input, Button, Chip } from '@material-ui/core';
import { Menu as MenuIcon, Delete as DeleteIcon } from '@material-ui/icons';
import axios from 'axios';


const Blogcategory = () => {

    const { control, handleSubmit } = useForm();
    const [categorylist, setCategoryList] = React.useState([]);
    // const onSubmit = (data) => console.log(data);

    const getlist = () => {
        axios.get('http://127.0.0.1:8000/blog/categories/')
        .then(function (response) {
            setCategoryList(response.data);
        })
    };  

    const onSubmit = (data) => {
        axios.post('http://127.0.0.1:8000/blog/categories/', data)
        .then(function () {
            getlist();
        })
    }
    
    const handleDelete = (id) => {
        axios.delete(`http://127.0.0.1:8000/blog/categories/${id}/`)
        .then(function(){
            getlist();
        })
    };

    React.useEffect(() => {
        getlist();
    },[]);

    return (
        <><div className="page3">
            <AppBar className="app-bar3" position="sticky">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        博文类别
                    </Typography>
                </Toolbar>
            </AppBar>
            <form className="form" onSubmit={handleSubmit(onSubmit)}> 
                <p>名称: </p>
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => <Input 
                    className="blog-content2"
                    placeholder="name"
                    {...field} />}
                />
                <div className="button-container2">
                    <Button className="create" variant="contained" type="submit" >创建类别</Button>
                </div>
                <div className="chips-wrapper">
                    {categorylist.map(item => ( 
                        <Chip 
                            className="chip" 
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
        <div className="picture-container3">
            <img className="picture3" src={pageThreeoBg}/>
        </div></>

    );

};

export default Blogcategory;
