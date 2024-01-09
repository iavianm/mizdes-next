"use client";
import React, { createContext, useState, useEffect, useContext } from "react";

interface IAdminStateContext {
  adminState: boolean;
  setAdminState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AdminStateContext = createContext<IAdminStateContext>({
  adminState: false,
  setAdminState: () => {},
});

export const useAdminState = () => useContext(AdminStateContext);

export const AdminStateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [adminState, setAdminState] = useState(false);

  return (
    <AdminStateContext.Provider value={{ adminState, setAdminState }}>
      {children}
    </AdminStateContext.Provider>
  );
};
