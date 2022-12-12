
import './App.css';
import Home from './Pages/Home/Home/Home';
import {  Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router =createBrowserRouter([
    {path:'/',element:<Home></Home>}
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
