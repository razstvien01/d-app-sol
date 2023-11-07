"use client";

import { useState } from "react";
import { Connect, Main } from "./components";

export default function Home() {
  const [wallet, setWallet] = useState<string>("");

  return (
    <main>
      {wallet || wallet !== "" ? (
        <Main wallet={wallet} setWallet={setWallet} />
      ) : (
        <Connect wallet={wallet} setWallet={setWallet} />
      )}
    </main>
  );
}
