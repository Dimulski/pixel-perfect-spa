import { paths } from "./config/paths";
import CreateProfilePage from "pages/create-profile";
import CreateProfileSuccessPage from "pages/create-profile-success";
import { createRef } from "react";

export const multistepFormRoutes = [
  {
    path: paths.createProfile.index.path,
    element: <CreateProfilePage />,
    nodeRef: createRef(),
    handle: { step: 1 },
  },
  {
    path: paths.createProfile.success.path,
    element: <CreateProfileSuccessPage />,
    nodeRef: createRef(),
    handle: { step: 2 },
  },
];
