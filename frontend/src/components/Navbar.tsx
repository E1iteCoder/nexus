import React from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";      // ← import it!
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Navbar(): JSX.Element {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
  return (
    <nav className="navbar">
      <NavLink className="nav-link" to="/home">
        <img
          className="nav-link"
          id="logo-nav"
          src={logo}
          alt="Nexus logo"
        />
      </NavLink>
      <ul className="nav-links">
        <li>
          <NavLink className="nav-link" to="/library">
            Library
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/create">
            Create
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/login">
            Log in
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/search">
            <SearchIcon />
          </NavLink>
        </li>
        <li>
            <Button
                id="account-button"
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                className="accountButton"
                onClick={handleClick}
            >
                <AccountCircleIcon />
            </Button>
            <Menu
                id="account-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'account-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <NavLink className="dropdown-item" to="/profile">
                        Profile
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavLink className="dropdown-item" to="/settings">
                        Settings
                    </NavLink>
                </MenuItem>
            </Menu>
        </li>
      </ul>
    </nav>
  );
}
