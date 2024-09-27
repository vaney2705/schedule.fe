import TheHeader from "../components/TheHeader.jsx";
import {Outlet, useLocation} from "react-router-dom";
import HomePage from "../pages/home/HomePage.jsx";
import {ScrollShadow} from "@nextui-org/react";

export default function MainLayout(props) {
  const location = useLocation();

  return (
      <>
        <TheHeader name={'Schedule.fe'}/>
        <ScrollShadow>
          {location.pathname !== '/' ?
              <Outlet/> :
              <HomePage />
          }
        </ScrollShadow>

      </>
  )
}