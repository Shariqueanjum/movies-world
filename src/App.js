import React from 'react'
import { Provider } from "react-redux";
import Body from "./components/Body";
import store from "./utils/store";
import Login from "./components/Login";
import Browse from "./components/Browse";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchTrailer from './components/WatchTrailer';





const appRouter=createBrowserRouter([
  {
      path:"/",
      element:<Body/>,
      children:[
        {
          path:"/",
          element:<Login/>
        },

        {
          path:"browse",
          element:<Browse/>
        },

        {
          path:"watch/:id" ,
          element:<WatchTrailer/>
        }

  
      ]
  },
]);

function App() {

  return (
    <Provider store={store}>
        <div>
        <RouterProvider router={appRouter} />
       </div>

    </Provider>
  );
}

export default App;
