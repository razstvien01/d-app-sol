"use client"

import { Dispatch, SetStateAction } from "react";
import { UserDetails } from "./user-details";

interface MainProps {
  wallet: string | null;
  setWallet: Dispatch<SetStateAction<string>>;
}

export const Main = ({ wallet, setWallet }: MainProps) => {
  
  return (
    <div className="flex justify-end">
      <aside className="w-1/4 p-4 h-screen sticky top-0">
        <div>
          <UserDetails wallet={wallet} setWallet={setWallet}/>
        </div>
      </aside>
    </div>
  );
};
