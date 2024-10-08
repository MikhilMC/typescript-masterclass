import React, { FC, ReactElement } from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { TaskHeader } from "./_taskHeder";
import { TaskDescription } from "./_taskDescription";
import { TaskFooter } from "./_taskFooter";
import { ITask } from "./interfaces/ITask";
import { Priority } from "../createTaskForm/enums/Priority";
import { Status } from "../createTaskForm/enums/Status";
import { renderPriorityBorderColor } from "./helpers/renderPriorityBorderColor";

export const Task: FC<ITask> = (props): ReactElement => {
  // Destructure Props
  const {
    title = "Test Title",
    date = new Date(),
    description = "Lorem ipsum dolor sit amet",
    priority = Priority.normal,
    status = Status.completed,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      justifyContent="flex-start"
      mb={4}
      p={2}
      sx={{
        width: "100%",
        backgroundColor: "background.paper",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: renderPriorityBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter onClick={onClick} onStatusChange={onStatusChange} />
    </Box>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  priority: PropTypes.string,
  status: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
};
