import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import HomePage from "../pages/LandingPage/HomePage";
import ListCategoryPage, {
  loader as loaderListCategorys,
} from "../pages/ListProductos";

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
    ],
  },
]);

const Routes = () => {
  return <RouterProvider fallbackElement={<HomePage />} router={routes} />;
};

export default Routes;
