import React from 'react';
import "./Sidebar.css";
import SidebarOption from "./SidebarOption"
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';
const Sidebar = () => {
  return (
      
    <div className="sidebar">
        <TwitterIcon className="sidebar_twitterIcon"/>
        <SidebarOption active Icon={HomeIcon}  text="Home" />
        <SidebarOption Icon={ExploreIcon} text="Explore" />
        <SidebarOption Icon={NotificationsNoneIcon}text="Notification" />
        <SidebarOption Icon={MailOutlineIcon}text="Message" />
        <SidebarOption Icon={BookmarksIcon}text="BookMarks" />
        <SidebarOption Icon={ListAltIcon}text="List" />
        <SidebarOption Icon={PermIdentityIcon}text="Profile" />
        <SidebarOption Icon={MoreHorizIcon}text="More" />
     <Button variant="outlined" className="sidebar_tweet"fullWidth>Tweet</Button>

    </div>
  );
};
export default Sidebar;
