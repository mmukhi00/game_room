import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import * as React from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./searchInput";
import { Link } from "react-router-dom";


const NavBar = () => {
  
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Link to="/">
      <Image src={logo} boxSize="60px" objectFit="cover"></Image>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
