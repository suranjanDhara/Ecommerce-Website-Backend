import { Rating } from '@mui/material';
import React, { Component } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../Css/Item.css'
import { pink } from '@mui/material/colors';

export default class Item extends Component {

    // constructor(props){
    //     super(props);
    // }
    render() {
        return (
            <>
                <div className="main-container">
                    <div className="card">
                        <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/y/0/5/s-bmrhenful-z14-blive-original-imaghau6cw8g3gjy.jpeg?q=70" alt="" />
                        <div className="container">
                            <p className="itemName">T-Shirt</p>
                            <p className="content-type">T-Shirt</p>
                            <Rating name="read-only" defaultValue={4.5} precision={0.1} readOnly />
                            <h4 className="price">&#x20B9; 500</h4>
                            {this.props.flag ? <FavoriteIcon sx={{ color: pink[500] }}/> : <FavoriteBorderIcon/>}
                            
                            
                        </div>
                    </div>
                </div>
                
            </>
        )
    }
}
