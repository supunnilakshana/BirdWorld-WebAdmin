import React, { useState } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { MdFavorite } from 'react-icons/md';
import { GiChatBubble } from 'react-icons/gi';
import img1 from '../../assets/img1.jpg';
import './posts.css';
import Dropdown from '../dropdown/Dropdown';

const Data = [
  {
    id: 1,
    avatar: 'R',
    userName: 'Don_',
    time: '12h ago',
    imgSrc: img1,
    description:
      'This is the description about the birds. This very endemic bird for America. They are living as pairs',
    liked: 'Liked by 22 People',
    comment: '33 Comments',
  },
];

const Posts = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    Data.map(({ id, avatar, userName, time, imgSrc, liked, description }) => {
      return (
        <div key={id} className="posts">
          <div className="post_header">
            <div className="post_headerAuthor">
              <RxAvatar>{avatar}</RxAvatar>
              {userName} . <span>{time}</span>
            </div>
            
           
            <BiDotsHorizontalRounded onClick={toggleDropdown} />
            
         
            {isDropdownVisible && <Dropdown />}
          </div>
          <div className="des">{description}</div>
          <div className="post_image">
            <img src={imgSrc} alt="" />
          </div>
          <div className="post_footer">
            <div className="post_footerIcons">
              <div className="post_iconsMain">
                <MdFavorite className="favorite" />
                <GiChatBubble className="comment" />
              </div>
            </div>
          </div>
        </div>
      );
    })
  );
};

export default Posts;
