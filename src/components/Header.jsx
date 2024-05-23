import React from "react";
import {Navbar, NavbarContent, NavbarItem} from "@nextui-org/react";
import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <Navbar shouldHideOnScroll>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <NavLink to="/mishistorias">
                    Mis Historias
                    </NavLink>
                </NavbarItem>
                <NavbarItem >
                    <NavLink to="/gitlog">
                        GitLog
                    </NavLink>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
