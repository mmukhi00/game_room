import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import * as React from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./searchInput";

interface Props{
  onSearch:(searchText:string)=>void;
}
const NavBar = ({onSearch}:Props) => {
  
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
