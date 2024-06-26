import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import HomePage from "../pages/LandingPage/HomePage";
import ListCategoryPage, {
  loader as loaderListCategorys,
} from "../pages/ListProductos";
import CarPage from "../pages/CarPages";

const routes = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      //publicas
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/list-category",
        loader: loaderListCategorys,
        element: <ListCategoryPage />,
      },
      {
        path: "/Home",
        element: <HomePage />,
      },
      {
        path: "/car-page",
        loader: loaderListCategorys,
        element: <CarPage />,
      
      }
    ],
  },
]);

const Routes = () => {
  return <RouterProvider fallbackElement={<div>
    Cargando...
  </div>} router={routes} />;
};

export default Routes;
