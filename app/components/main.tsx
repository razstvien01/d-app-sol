"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { UserDetails } from "./user-details";
import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { AddQuote } from "./add-quote";
// import 

interface MainProps {
  wallet: string | null;
  setWallet: Dispatch<SetStateAction<string>>;
}

export const Main = ({ wallet, setWallet }: MainProps) => {
  const [addQuote, setAddQuote] = useState<boolean>(false);

  return (
    <>
      <div className="flex justify-end">
        <AddQuote />
        <aside className="w-1/4 p-4 h-screen sticky top-0">
          <div>
            <UserDetails wallet={wallet} setWallet={setWallet} />
          </div>
        </aside>
      </div>
    </>
  );
};
