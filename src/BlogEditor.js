import React from 'react';
import { useForm, Controller } from "react-hook-form";
import './BlogEditor.css';
import pageThreeoBg from './pagethreebg.jpg';
import { AppBar, Toolbar, Typography, IconButton, Input, Button, TextField, MenuItem } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import axios from 'axios';

const Blogeditor = () => {

    const { control, handleSubmit, reset } = useForm();
    const [categorylist, setCategoryList] = React.useState([]);
    const [tags, setTags] = React.useState([]);

    const getlist = () => {
        axios.get('http://127.0.0.1:8000/blog/categories/')
        .then(function (response) {
            setCategoryList(response.data);
        })
    };  

    const gettags = () => {
        axios.get('http://127.0.0.1:8000/blog/tags/')
        .then(function (response) {
            setTags(response.data);
        })
    }; 

    React.useEffect(() => {
        getlist();
        gettags();
    },[]);

    const onSubmit = (data) => {
        // 因为序列化更改 不能仅传id，相反需要传入obj
        // for (let i = 0; i < categorylist.length; i++) {
        //     if (data.category == categorylist[i].id) {
        //         data.category =  {
        //             id: categorylist[i].id,
        //             name: categorylist[i].name
        //         };
        //     }
        // }

        axios.post('http://127.0.0.1:8000/blog/articles/', data)
        .then(function () {
            getlist();
        })
    };

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
                    name="category"
                    control={control}
                    defaultValue={null}
                    render={({ field: { onChange, value, ref } }) =>
                        <TextField
                            className="category-select"
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
                    name="title"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <Input 
                    className="blog-content"
                    placeholder="title"
                    {...field} />}
                />
                <p>副标题: </p>
                <Controller
                    name="subtitle"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <Input 
                    className="blog-content"
                    placeholder="subtitle"
                    {...field} />}
                />
                <p>导语: </p>
                <Controller
                    name="introduction"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <Input 
                    className="blog-content"
                    placeholder="introduction"
                    multiline
                    rows="2"
                    {...field} 
                    />}
                />
                <p>发表时间: </p>
                <Controller
                    name="publish_time"
                    control={control}
                    render={({ field }) => <Input 
                    className="blog-content"
                    placeholder="publish_time"
                    type="datetime-local"
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
                    multiline
                    rows="10"
                    {...field} 
                    />}
                /> 
                <div className="button-container1">
                    <Button className="reset" variant="contained" type="reset" onClick={() => reset()}>重置内容</Button>
                    <Button className="submit" variant="contained" type="submit" >提交博文</Button>
                </div>
            </form>
            
            <form className="form" >
                <p>标签: </p>
                <TextField
                    className="tags-select"
                    select
                    variant="filled"
                    label="标签"
                >
                { tags.map(item => (
                    <MenuItem value={item.id} key={item.id}>
                        {item.name}
                    </MenuItem>
                )) }
                </TextField>
                <div className="get-tags">
                    asdkj
                </div>
                <div className="button-container2">
                    <Button className="submit" variant="contained" type="submit" >提交标签</Button>
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
