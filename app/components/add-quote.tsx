import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Loader } from "lucide-react";

interface QuoteDataType {
  author: string;
  quote: string;
}

const QuoteDataInit: QuoteDataType = {
  author: "",
  quote: "",
};

export function AddQuote() {
  const [quoteData, setQuoteData] = useState<QuoteDataType>(QuoteDataInit);
  const [showDialog, setShowDialog] = useState(false);
  const [isSave, setIsSave] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState({
    success: false,
    error: false,
  });

  const handleOnchangeData = (e: any) => {
    const { id, value } = e.target;
    setQuoteData((prev: QuoteDataType) => ({ ...prev, [id]: value }));
  };
  
  //* Function to handle form submission
  const handleSubmit = async () => {
    setIsSave(true);
    
    console.log(quoteData)
    // const result = await addMemberInOrg({ memberData: addMember, org_id });

    // if (result.success) {
      
    //   const { full_name, user_id, photo_url } = userData
      
    //   const params = {
    //     user_id,
    //     org_id,
    //     photo_url,
    //     title: "Member Added",
    //     description: `${full_name} added ${addMember.user_id} with the role of ${addMember.role} in the ${org_name} organization`,
    //     type: "organization",
    //   };
      
    //   await createNotif(params)
      
    //   setHasSubmitted(true)
    //   setToastParams({
    //     title: "Add Member",
    //     description: "Successfully added a member.",
    //     variant: "default",
    //   });
    //   setMessage(result.data.message);
    //   setIsVisible({
    //     error: false,
    //     success: true,
    //   });
    // } else {
    //   setMessage(result.error.message);
    //   setIsVisible((prev) => ({
    //     ...prev,
    //     error: true,
    //   }));
    // }

    setIsSave(false);
  };

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger asChild>
        <Button className="m-10 mt-15 w-auto">
          <PlusCircledIcon className="mr-2 h-4 w-4" />
          Add Quote
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Quote</DialogTitle>
          <DialogDescription>
            {
              "Quotes provide us with condensed wisdom, inspire us, provoke thought, and can offer guidance or a fresh perspective on life and various situations."
            }
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label>Author</Label>
            <Input
              id="author"
              placeholder="Enter the user's id"
              onChange={(e) => handleOnchangeData(e)}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Quote</Label>
          <Textarea
            id="quote"
            onChange={(e) => handleOnchangeData(e)}
            placeholder="Type your quote here."
          />
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setShowDialog(false)}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={isSave || isVisible.success}
            type="submit"
          >
            {isSave ? <Loader className="mr-2 h-4 w-4 animate-spin" /> : null}
            {isSave ? "Adding Quote" : "Add Quote"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
