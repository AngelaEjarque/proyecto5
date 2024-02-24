import { useState } from 'react';
import './App.css'
import Home from './views/Home/Home';
import Button from './components/Button/Button'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  //let onTest : boolean = false;
  const [onTest, setOnTest] = useState(false);

  const titulo : string = "Titulo"
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/test",
      element: <div>
      {titulo}
    <Button color={"red"} > buenas tardes   </Button> 
    <Button color={"blue"}/>
    <Button color={"green"}/>
    <Button color={"yellow"}/>
    </div>,
    },
  ]);

  return (
    <>
 <RouterProvider router={router} />
    </>
  )
}

export default App
