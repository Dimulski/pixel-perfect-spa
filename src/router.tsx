import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { paths } from "./config/paths";
import AppRoot, { ErrorBoundary as AppErrorBoundary } from "pages/AppRoot";
import MultistepForm from "components/form-control/MultistepForm";
import { multistepFormRoutes } from "routes";

const createAppRouter = () =>
  createBrowserRouter([
    {
      path: paths.root.path,
      element: <AppRoot />,
      ErrorBoundary: AppErrorBoundary,
      children: [
        {
          element: <MultistepForm />,
          children: multistepFormRoutes,
        },
      ],
    },
  ]);

export const AppRouter = () => {
  const router = createAppRouter();

  return <RouterProvider router={router} />;
};
