import React from 'react'
import './widgets.css'

import {MdOutlineKeyboardArrowUp} from 'react-icons/md'
import {MdOutlinePersonOutline} from 'react-icons/md'
import {BiSmile} from 'react-icons/bi'
import {MdLocalGroceryStore} from 'react-icons/md'

const Widgets = ({type}) => {
    let data;

    //temporary
    const amount = 500;
    const diff = 20;

    switch(type) {
        case "users" :
            data={
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <MdOutlinePersonOutline className='icon' />,
            };
            break;
        case "active" :
            data={
                title: "ACTIVE",
                isMoney: false,
                link: "See all active users",
                icon: <BiSmile className='icon' />,
            };
            break;
        case "order":
            data={
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <MdLocalGroceryStore className='icon' />,
            };
            break;
            default:
                break;
    }
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter_w">
                    {data.isMoney && "$"} {/* {amount} */}
                </span>
                <span className="link">{data.link}</span>
            </div>

            <div className="right">
                <div className="percentage">
                     <MdOutlineKeyboardArrowUp className= 'icon'/>
                     {diff}%
                </div>

                {data.icon}
            </div>
        </div>
    )
}

export default Widgets
