"use client";
import{
    Dialog
} from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
interface ResponsiveDialogueProps {
    title: string;
    description: string;
    children: React.ReactNode;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}



export const  ResponsiveDialogue = ({
    title,
    description,
    children,
    open,
    onOpenChange
}:ResponsiveDialogueProps) => {
const isMobile = useIsMobile();
if(isMobile){
    return(
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>{title}</DrawerTitle>
                    <DrawerDescription>{description}</DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                    {children}
                </div>
            </DrawerContent>
        </Drawer>
    )

}
return(
    <Dialog open={open} onOpenChange={onOpenChange}>
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>{title}</DrawerTitle>
                <DrawerDescription>{description}</DrawerDescription>
            </DrawerHeader>
            {children}
        </DrawerContent>
    </Dialog>
)

   
}

