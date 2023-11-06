"use client";

import { Dispatch, SetStateAction } from "react";
import { UserDetails } from "./user-details";
import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";

interface MainProps {
  wallet: string | null;
  setWallet: Dispatch<SetStateAction<string>>;
}

export const Main = ({ wallet, setWallet }: MainProps) => {
  return (
    <div className="flex justify-end">
      <Button className="m-10 mt-15 w-auto">
        <PlusCircledIcon className="mr-2 h-4 w-4" />
        Create Post
      </Button>
      <aside className="w-1/4 p-4 h-screen sticky top-0">
        <div>
          <UserDetails wallet={wallet} setWallet={setWallet} />
        </div>
      </aside>
    </div>
  );
};
