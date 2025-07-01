import { CommandResponsiveDialog, CommandInput, CommandItem, CommandList } from "@/components/ui/command"

import { Command } from "lucide-react"
import { Dispatch, SetStateAction } from "react";
interface Props{
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const DashBoardCommand = ({ open, setOpen }: Props) => {
  return (
   <CommandResponsiveDialog open={open} onOpenChange={setOpen}>
    <CommandInput
    placeholder="Find a meeting or agent"
    />
    <CommandList>
        <CommandItem>
            Test
        </CommandItem>
    </CommandList>
   </CommandResponsiveDialog>
  )
}   

export default DashBoardCommand