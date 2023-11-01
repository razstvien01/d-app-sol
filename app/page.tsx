import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container relative min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div
        className="relative h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="absolute inset-0" />
        <div className="relative">
          {/* <div className="absolute top-1 right-4 flex items-center text-lg font-medium md:right-8 md:bottom-8">
            &nbsp;&nbsp;Buggy Cat, Inc
          </div> */}
        </div>
        {/* <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg w-1/2">
              &ldquo;
              {
                "The Track Flaw's powerful features have saved me countless hours of work and allowed me to deliver flawless software to my clients faster than ever before."
              }
              &rdquo;
            </p>
            <footer className="text-sm">Mr. Robot</footer>
          </blockquote>
        </div> */}
      </div>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] text-center">
        <h1 className="text-6xl font-bold tracking-tight mb-8">dApp</h1>
        <h1 className="text-2xl font-semibold tracking-tight">
          Connect Wallet
        </h1>
        <p className="text-sm text-muted-foreground">
          Make sure you have installed Phantom
        </p>
        <Button>Connect Wallet</Button>
      </div>
    </main>
  );
}
