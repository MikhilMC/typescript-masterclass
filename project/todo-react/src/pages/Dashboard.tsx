import React, { FC, ReactElement } from "react";
import Grid from "@mui/material/Grid2";

import { TaskArea } from "../components/taskArea/taskArea";
import { Sidebar } from "../components/sidebar/sidebar";

export const Dashboard: FC = (): ReactElement => {
  return (
    <Grid
      container
      sx={{ minHeight: "100vh", padding: 0, margin: 0 }}
      columns={12}
    >
      <TaskArea />
      <Sidebar />
    </Grid>
  );
};
