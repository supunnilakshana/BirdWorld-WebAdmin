import React from 'react'
import './featured.scss'

import {MdMoreVert} from 'react-icons/md'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
               <h1 className="title">Total Revenue</h1>
               <MdMoreVert fontSize="small" />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={90} text={"90%"} strokeWidth={5}/>
                </div>

                <p className="title">Total sales made today</p>
                <p className="amount">$380</p>
                <p className="desc">
                    Previous transactions processing. Last payments may not be included.
                </p>

                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult positive">
                                <MdOutlineKeyboardArrowDown className="icon" fontSize= "small" />
                                <div className="resultAmount">$12.4k</div>
                            </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult negative">
                                <MdOutlineKeyboardArrowDown className="icon" fontSize= "small" />
                                <div className="resultAmount">$12.4k</div>
                            </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult">
                                <MdOutlineKeyboardArrowDown className="icon" fontSize= "small" />
                                <div className="resultAmount">$12.4k</div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
