import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";

interface ConnectProps {
  wallet: string | null;
  setWallet: Dispatch<SetStateAction<string>>;
}

export const Connect = ({ wallet, setWallet }: ConnectProps) => {
  const connectWallet = async () => {
    console.log('CLICKED')
    const { solana } = window as any;
    const response = await solana.connect();
    setWallet(response.publicKey.toString());
  };
  
  const parseWalletKey = (string: string) => {
    return `${string.slice(0, 5)}......${string.slice(-5)}`;
  };
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div
        className="relative h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      ></div>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] text-center">
        <h1 className="text-6xl font-bold tracking-tight mb-8">dApp</h1>
        <h1 className="text-2xl font-semibold tracking-tight">
          Connect Wallet
        </h1>
        <p className="text-sm text-muted-foreground">
          Make sure you have installed Phantom
        </p>
        <Button onClick={connectWallet} variant={"default"}>
          {wallet ? parseWalletKey(wallet) : "Connect Wallet"}
        </Button>
      </div>
    </div>
  );
};
