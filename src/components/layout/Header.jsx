import React, { Suspense, useState,lazy } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Backdrop
} from "@mui/material";
import { orange } from "../constants/color";


const SearchDialog=lazy(()=>import ("../specific/Search"))
const NotificationsDialog=lazy(()=>import ("../specific/Notifications"))
const NewGroupDialog=lazy(()=>import ("../specific/NewGroup"))
const LayoutLoader =lazy(()=>import ("./Loaders"))

import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon,
  Notifications as NotificationsIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const navigate = useNavigate();
  const handleMobile = () => {
    console.log("Mobile");
    setIsMobile((prev) => !prev);
  };
  const openSearchDialog = () => {
    console.log("searching");
    setIsSearch((prev) => !prev);
  };
  const openNewGroup = () => {
    console.log("new Group");
    setIsNewGroup((prev) => !prev);
  };
  const navigateToGroup = () => {
    navigate("/groups");
  };
  const openNotification = () => {
    setIsNotification((prev) => !prev);
  };
  const logoutUser = () => {
    console.log("logout");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: orange }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              Chat-App
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconBtn
                title={"Search"}
                icon={<MenuIcon />}
                onClick={handleMobile}
              />
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconBtn
                title={"Search"}
                icon={<SearchIcon />}
                onClick={openSearchDialog}
              />
              <IconBtn
                title={"New Group"}
                icon={<AddIcon />}
                onClick={openNewGroup}
              />
              <IconBtn
                title={"Manage Group"}
                icon={<GroupIcon />}
                onClick={navigateToGroup}
              />
              <IconBtn
                title={"Notifications"}
                icon={<NotificationsIcon />}
                onClick={openNotification}
              />
              <IconBtn
                title={"Logout"}
                icon={<LogoutIcon />}
                onClick={logoutUser}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>


      {
        isSearch && (
            <Suspense fallback={<Backdrop open />}>
                <SearchDialog/>
            </Suspense>
        )
      }
      {
        isNewGroup && (
            <Suspense fallback={<Backdrop open />}>
                <NewGroupDialog/>
            </Suspense>
        )
      }
      {
        isNotification && (
            <Suspense fallback={<Backdrop open />}>
                <NotificationsDialog/>
            </Suspense>
        )
      }
    </>
  );
};

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="larger" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
