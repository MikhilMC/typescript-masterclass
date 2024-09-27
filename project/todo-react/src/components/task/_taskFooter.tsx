import React, { FC, ReactElement } from "react";
import { Box, Switch, FormControlLabel, Button } from "@mui/material";
import PropTypes from "prop-types";
import { ITaskFooter } from "./interfaces/ITaskFooter";

export const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  // Destructure Props
  const {
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={<Switch color="warning" onChange={(e) => onStatusChange(e)} />}
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: "white" }}
        onClick={(e) => onClick(e)}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
};
