"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import * as Web3 from "@solana/web3.js";
import Image from "next/image";

interface UserDetailsProps {
  wallet: string | null;
  setWallet: Dispatch<SetStateAction<string>>;
}

export function UserDetails({ wallet, setWallet }: UserDetailsProps) {
  const [balance, setBalance] = useState(0);

  const getBalance = useCallback(async () => {
    try {
      const publicKey = new Web3.PublicKey(wallet as string);

      const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"));

      const balance = await connection.getBalance(publicKey);
      setBalance(balance / Web3.LAMPORTS_PER_SOL);
      return balance;
    } catch (error) {
      console.error(error);
      return 0;
    }
  }, [wallet]);

  useEffect(() => {
    getBalance();

    return () => {};
  }, [getBalance, balance]);
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-4xl">User Profile</CardTitle>
        <CardTitle>ID</CardTitle>
        <CardDescription>{wallet}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="necessary" className="flex flex-col space-y-1">
            {/* <Image
              className="border-r-8 overflow-hidden inline-block"
              src="https://w7.pngwing.com/pngs/56/620/png-transparent-sol-solana-solana-coin-solana-crypto-solana-logo-solana-sign-3d-icon-thumbnail.png"
              width={100} // Replace with your desired width
              height={100} // Replace with your desired height
              alt="Solana Logo"
              // layout="intrinsic" // This is optional, default is "intrinsic"
            /> */}
            <span>Balance:</span>
            <span className="text-xl">{balance} SOL</span>
          </Label>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        <div className="w-full">
          <Button
            variant="link"
            className="w-full"
            onClick={() => {
              window.open(
                `https://explorer.solana.com/address/${wallet}?cluster=devnet`,
                "_blank"
              );
            }}
          >
            View Transaction History
          </Button>
        </div>
        <div className="mt-5 w-full">
          <Button
            variant="default"
            className="w-full"
            onClick={() => {
              setWallet("");
            }}
          >
            Disconnect Wallet
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
