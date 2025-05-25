import { lazy, type ReactNode, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { userRoutes } from "./user-routes";

export const SuspenseWrapper = ({ children }: { children: ReactNode }) => {
  // Using a simple div as a fallback. You can replace this with a spinner or any loading UI.
  // Adding minHeight to prevent layout shifts if the fallback is visually empty.
  return <Suspense fallback={<div style={{ minHeight: '100vh', width: '100%' }} />}>{children}</Suspense>;
};

import NotFoundPage from "./pages/NotFoundPage";
import SomethingWentWrongPage from "./pages/SomethingWentWrongPage";

export const router = createBrowserRouter([
  ...userRoutes.map((route) => ({
    ...route,
    // route.element is still lazy (defined in user-routes.tsx), so it needs SuspenseWrapper
    element: <SuspenseWrapper>{route.element}</SuspenseWrapper>,
    // SomethingWentWrongPage is now directly imported, so no SuspenseWrapper needed for it here
    errorElement: <SomethingWentWrongPage />,
  })),
  {
    path: "*",
    // NotFoundPage is now directly imported
    element: <NotFoundPage />,
    // SomethingWentWrongPage is now directly imported
    errorElement: <SomethingWentWrongPage />,
  },
]);