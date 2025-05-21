import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Toaster } from "sonner";
import { applyDarkTheme } from "../utils/theme";
import { CustomHead } from "./CustomHead";

export function Layout() {
  // Apply dark theme on mount
  useEffect(() => {
    applyDarkTheme();
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <CustomHead />
      <Navigation />
      <Outlet />
      <Toaster position="top-right" theme="dark" richColors />
    </div>
  );
}
