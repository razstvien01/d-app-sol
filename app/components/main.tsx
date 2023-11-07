"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { UserDetails } from "./user-details";
import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { AddQuote } from "./add-quote";
import { QuoteCard } from "./quote-card";

// Define the type for the data structure
interface Quote {
  author: string;
  quote: string;
}

interface MainProps {
  wallet: string | null;
  setWallet: Dispatch<SetStateAction<string>>;
}

export const Main = ({ wallet, setWallet }: MainProps) => {
  const [quotes, setQuotes] = useState<Quote[]>([
    {
      author: "Albert Einstein",
      quote:
        "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    },
    {
      author: "Maya Angelou",
      quote:
        "You will face many defeats in life, but never let yourself be defeated.",
    },
    {
      author: "Winston Churchill",
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    },
    {
      author: "Oscar Wilde",
      quote: "Be yourself; everyone else is already taken.",
    },
    {
      author: "Mark Twain",
      quote: "The secret of getting ahead is getting started.",
    },
    {
      author: "Nelson Mandela",
      quote: "It always seems impossible until it's done.",
    },
    {
      author: "Confucius",
      quote: "It does not matter how slowly you go as long as you do not stop.",
    },
    {
      author: "Marilyn Monroe",
      quote:
        "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    },
    {
      author: "Theodore Roosevelt",
      quote: "Do what you can, with what you have, where you are.",
    },
    {
      author: "Franklin D. Roosevelt",
      quote:
        "When you reach the end of your rope, tie a knot in it and hang on.",
    },
  ]);

  return (
    <>
      {/* <div className="flex flex-col">
        <div className="flex justify-end">
          <AddQuote />
        </div>
        {quotes.map((quoteItem, index) => (
          <div key={index} className="flex flex-col gap-16">
            <blockquote>{quoteItem.quote}</blockquote>
            <p>- {quoteItem.author}</p>
          </div>
        ))}
      </div> */}
      <div className="flex">
        <div className="mt-20">
          {quotes.map((quoteItem, index) => (
            <QuoteCard key={index} author={quoteItem.author} quote={quoteItem.quote}/>
          ))}
        </div>
        <div className="justify-end">
          <AddQuote />
        </div>

        <aside className="w-1/4 p-4 h-screen sticky top-0">
          <div>
            <UserDetails wallet={wallet} setWallet={setWallet} />
          </div>
        </aside>
      </div>
    </>
  );
};
