import React from 'react';
import { useForm, Controller } from "react-hook-form";
import './BlogEditor.css';
import pageThreeoBg from './pagethreebg.jpg';
import { AppBar, Toolbar, Typography, IconButton, Input, Button, TextField, MenuItem } from '@material-ui/core';
import { Menu as MenuIcon, NorthWest } from '@material-ui/icons';
import axios from 'axios';

const Blogeditor = () => {

    const { control, handleSubmit, reset } = useForm();
    const [categorylist, setCategoryList] = React.useState([]);
    const onSubmit = data => console.log(data);

    const getlist = () => {
        axios.get('http://127.0.0.1:8000/blog/categories/')
        .then(function (response) {
            setCategoryList(response.data);
        })
    };  

    React.useEffect(() => {
        getlist();
    },[]);

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
            <form className="form" onSubmit={handleSubmit(onSubmit)}> 
                <p>类别: </p>
                <Controller
                    name="category_id"
                    control={control}
                    // 设置或返回文本框的初始内容
                    defaultValue={null}
                    render={({ field: { onChange, value, ref } }) =>
                        <TextField
                            className="category_select"
                            select
                            variant="filled"
                            label="类别"
                            // 引用
                            ref={ref}
                            onChange={onChange}
                            value={value}
                        >
                           { categorylist.map(item => (
                               <MenuItem value={item.id} key={item.id}>
                                   {item.name}
                               </MenuItem>
                           )) }
                        </TextField>}
                />
                <p>标题: </p>
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <Input 
                    className="blog-content"
                    placeholder="name"
                    {...field} />}
                />
                <p>副标题: </p>
                <Controller
                    name="subname"
                    control={control}
                    // 设置或返回文本框的初始内容
                    defaultValue=""
                    render={({ field }) => <Input 
                    className="blog-content"
                    placeholder="subname"
                    {...field} />}
                />
                <p>导语: </p>
                <Controller
                    name="summary"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <Input 
                    className="blog-content"
                    placeholder="summary"
                    // multiline
                    // rows="2"
                    {...field} 
                    />}
                />
                <p>发表时间: </p>
                <Controller
                    name="time"
                    control={control}
                    render={({ field }) => <Input 
                    className="blog-content"
                    placeholder="time"
                    type="date"
                    // 可以设置默认值
                    value="2021-10-29"
                    {...field} 
                    />}
                />
                <p>正文: </p>
                <Controller
                    name="content"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <Input 
                    className="blog-content"
                    placeholder="content"
                    // multiline
                    // rows="10"
                    {...field} 
                    />}
                />
                <p>分类: </p>
                <Controller
                    name="tags"
                    control={control}
                    render={({ field }) => <Input 
                    className="blog-content"
                    placeholder="tags"
                    {...field} 
                    />}
                />
                <div className="button-container">
                    <Button className="reset" variant="contained" type="reset" onClick={() => reset()}>重置内容</Button>
                    <Button className="submit" variant="contained" type="submit" >提交博文</Button>
                </div>
            </form>
        </div>
        <div className="picture-container1">
            <img className="picture1" src={pageThreeoBg}/>
        </div>
        </>

    );

};

export default Blogeditor;
