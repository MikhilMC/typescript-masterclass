import React, { FC, ReactElement } from "react";
import { Grid2 } from "@mui/material";

import { Profile } from "../profile/profile";
import { CreateTaskForm } from "../createTaskForm/createTaskForm";

export const Sidebar: FC = (): ReactElement => {
  return (
    <Grid2
      component="div"
      size={{ xs: 12, md: 4 }}
      sx={{
        height: "100vh",
        position: "fixed",
        right: 0,
        top: 0,
        width: "100%",
        backgroundColor: "background.paper",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Profile name="Mikhil" />
      <CreateTaskForm />
    </Grid2>
  );
};
