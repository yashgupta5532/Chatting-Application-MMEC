import React from "react";
import { Stack, Avatar, Typography } from "@mui/material";
import {
  Face as FaceIcon,
  AlternateEmail as UsernameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";

import moment from "moment";

const Profile = () => {
  return (
    <Stack spacing="2rem" direction="column" alignItems="center">
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard text={"Let me Love you"} heading={"Bio"} />
      <ProfileCard
        text={"yash@gmail.com"}
        heading={"Username"}
        Icon={<UsernameIcon />}
      />
      <ProfileCard text={"Yash Gupta"} heading={"Name"} Icon={<FaceIcon />} />
      <ProfileCard
        text={moment("2024-02-25T05:54:05.522Z").fromNow()}
        heading={"Joined"}
        Icon={<CalendarIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}
    <Stack>
      <Typography variant="body1"> {text}</Typography>
      <Typography color="gray" variant="caption">
        {" "}
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;
