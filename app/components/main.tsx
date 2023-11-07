"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { UserDetails } from "./user-details";
import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { AddQuote } from "./add-quote";
import { QuoteCard } from "./quote-card";
import { ScrollArea } from "@/components/ui/scroll-area";

// Define the type for the data structure
interface QuoteDataType {
  author: string;
  quote: string;
}

interface MainProps {
  wallet: string | null;
  setWallet: Dispatch<SetStateAction<string>>;
}

export const Main = ({ wallet, setWallet }: MainProps) => {
  const [quotes, setQuotes] = useState<QuoteDataType[]>([
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
  
  useEffect(() => {
    
  
    return () => {
      
    }
  }, [])
  

  return (
    <>
      <div className="flex">
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-4">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pl-10">
              SOL QUOTES
            </h1>
            <AddQuote quotes={quotes} setQuotes={setQuotes} />
          </div>
          <ScrollArea className="h-[800px] w-full rounded-md border">
            {/* {quotes.map((quoteItem, index) => (
              <QuoteCard
                key={index}
                author={quoteItem.author}
                quote={quoteItem.quote}
              />
            ))} */}
            {quotes
              .slice()
              .reverse()
              .map((quoteItem, index) => (
                <QuoteCard
                  key={index}
                  author={quoteItem.author}
                  quote={quoteItem.quote}
                />
              ))}
          </ScrollArea>
        </div>

        <aside className="w-1/2 p-4 h-screen sticky top-0">
          <div>
            <UserDetails wallet={wallet} setWallet={setWallet} />
          </div>
        </aside>
      </div>
    </>
  );
};
