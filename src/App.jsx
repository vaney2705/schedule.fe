import {RouterProvider, useNavigate} from "react-router-dom";
import routes from "./router/router.jsx";
import {Suspense} from "react";
import {NextUIProvider} from "@nextui-org/react";


export default function App() {
  return (
      <>
        <NextUIProvider >
          <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={routes}/>
          </Suspense>
        </NextUIProvider>

      </>
  )
}

