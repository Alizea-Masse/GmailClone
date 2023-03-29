import React from "react";
import "./style.css";
import Button from "@mui/material/Button";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import SidebarOption from "./sidebarOption.js";
import InboxIcon from "@mui/icons-material/Inbox";
import StarPurple500OutlinedIcon from "@mui/icons-material/StarPurple500Outlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DuoOutlinedIcon from "@mui/icons-material/DuoOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { openSendMessage } from "../../features/mailSlice";
import { useDispatch } from "react-redux";
function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button onClick={() => dispatch(openSendMessage())}
        className="sidebar__button"
        startIcon={
          <CreateOutlinedIcon fontSize="large" className="sidebar__compose" />
        }
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={16}
        selected={true}
      />
      <SidebarOption
        Icon={StarPurple500OutlinedIcon}
        title="Starred"
        number={6}
      />
      <SidebarOption
        Icon={QueryBuilderOutlinedIcon}
        title="Snoozed"
        number={4}
      />
      <SidebarOption
        Icon={LabelImportantOutlinedIcon}
        title="Important"
        number={12}
      />
      <SidebarOption Icon={SendOutlinedIcon} title="Sent" number={145} />
      <SidebarOption Icon={SummarizeOutlinedIcon} title="Draft" number={3} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" />
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
            <IconButton>
                <PersonOutlineOutlinedIcon />
            </IconButton>
            <IconButton>
                <DuoOutlinedIcon />
            </IconButton>
            <IconButton>
                <PhoneOutlinedIcon />
            </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
