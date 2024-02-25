import React, { useState } from "react";
import {
  Dialog,
  Stack,
  TextField,
  DialogTitle,
  InputAdornment,
  List,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useInputValidation } from "6pp";
import UserItem from "../shared/UserItem";
import { sampleUsers } from "../constants/sampleChats";

const Search = () => {
  const search = useInputValidation("");
  const [users, setUsers] = useState(sampleUsers);
  const isLoadingSendFriendRequest = false;
  const addFriendHandler = (id) => {
    console.log("id ", id);
  };
  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign="center">Find People</DialogTitle>
        <TextField
          label={""}
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List>
          {users.map((user) => (
            <UserItem
              user={user}
              handler={addFriendHandler}
              handlerIsLoading={isLoadingSendFriendRequest}
              key={user._id}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
