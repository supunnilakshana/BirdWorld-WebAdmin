import React from 'react'
import {RxAvatar} from "react-icons/rx";
import {BiDotsHorizontalRounded} from "react-icons/bi"
import {MdFavorite} from "react-icons/md"
import {GiChatBubble} from "react-icons/gi"


import img1 from "../../assets/img1.jpg"
import "./posts.css"

const Data = [
    {
       id: 1,
       avatar: "R",
       userName: "Don_",
       time:"12h ago",
       imgSrc:img1,
       liked: "Liked by 22 People",
       comment: "33 Comments",
    },
]

const Posts = () => {
    return(

    Data.map(({id,avatar,userName,time,imgSrc,liked})=>{
        return(
            <div key={id} className="posts">
           <div className="post_header">
               <div className="post_headerAuthor">
               <RxAvatar>{avatar}</RxAvatar>
               {userName} . <span>{time}</span>
               </div>
               <BiDotsHorizontalRounded/>
           </div>
           <div className="post_image">
           <img src={imgSrc} alt=""/>
           </div>
           <div className="post_footer">
               <div className="post_footerIcons">
                   <div className="post_iconsMain">
                       <MdFavorite className="favorite"/>
                       <GiChatBubble className="comment" />
                   </div>
               </div>
           </div>
       </div>
        )
    }

    )
    )
    
}

export default Posts
