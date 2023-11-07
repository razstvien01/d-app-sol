import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

interface Quote {
  author: string;
  quote: string;
}

export function QuoteCard({ author, quote }: Quote) {
  return (
    <Card className="w-full">
      <CardHeader>
        {/* <CardTitle>Quote</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription> */}
        <CardTitle>
          <blockquote className="mt-6 border-l-2 pl-6 italic text-3xl">
            {`"${quote}"`}
          </blockquote>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* <blockquote className="mt-6 border-l-2 pl-6 italic text-3xl">
          {quote}
        </blockquote> */}
        <p className="pl-6">- {author}</p>
      </CardContent>
      <CardFooter className="flex justify-between ">
        {/* <p className="pl-6">- {author}</p> */}
      </CardFooter>
    </Card>
  );
}
