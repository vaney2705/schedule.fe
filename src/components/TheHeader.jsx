import {Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import {Link as RouterLink} from "react-router-dom";

export default function TheHeader({name}) {
    return (

        <Navbar position="sticky" height={'64px'} maxWidth={'xl'} >
            <NavbarBrand>
              <RouterLink to={`/`}>
                <div className="text-2xl font-mono ...">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
                    {name}
                  </span>
                </div>
              </RouterLink>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button color="white" >Регистрация</Button>
                </NavbarItem>
                <NavbarItem>
                    <Button color="primary" variant="bordered">Вход</Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}