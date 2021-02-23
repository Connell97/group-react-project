import React from 'react';
import "./Sidebar.css";
import SidebarOption from "./SidebarOption"
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import ListIcon from '@material-ui/icons/List';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/More';
const Sidebar = () => {
  return (
      
    <div className="sidebar">
        <TwitterIcon/>
        <SidebarOption Icon={HomeIcon}  text="Home" />
        <SidebarOption Icon={ExploreIcon} text="Explore" />
        <SidebarOption Icon={NotificationsNoneIcon}text="Notification" />
        <SidebarOption Icon={MailOutlineIcon}text="Message" />
        <SidebarOption Icon={BookmarksIcon}text="BookMarks" />
        <SidebarOption Icon={ListIcon}text="List" />
        <SidebarOption Icon={AccountCircleIcon}text="Profile" />
        <SidebarOption Icon={MoreIcon}text="More" />
       

    </div>
  );
};
export default Sidebar;
