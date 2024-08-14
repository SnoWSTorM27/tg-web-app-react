import React from "react";

export type NavItem = {
  id: string,
  title?: string,
  icon: React.ReactNode,
  path: string
};