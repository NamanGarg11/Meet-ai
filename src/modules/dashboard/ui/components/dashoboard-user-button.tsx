import { GeneratedAvatar } from "@/components/generated-avatar";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { DropdownMenu,DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger  } from "@radix-ui/react-dropdown-menu";
import { Separator } from "@radix-ui/react-separator";
import { ChevronDown, ChevronDownIcon, ChevronUpIcon, CreditCard, CreditCardIcon, LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
const DashboardUserButton = () => {
const router = useRouter();
    if (!authClient) {
      return null;
    }
    // Check if the user is authenticated
  const { data, isPending } = authClient.useSession();
    if (isPending || !data?.user) {
      return null;
    }
const onLogout = async () => {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        router.push("/sign-in");
      }
    }
  });
};
    return (
<DropdownMenu>
  <DropdownMenuTrigger className="rounded-lg border border-border/10 p-3 w-full flex items-center justify-between bg-white/5 hover:bg-white/10 overflow-hidden">
  {data.user.image ? (
    <Avatar className="size-9 mr-3">
      <AvatarImage src={data.user.image} />
    </Avatar>
  ) : (
    <GeneratedAvatar seed={data.user.name} 
    variant="initials"
    className="size-9 mr-3" />
  )}

<div className="flex flex-col gap-0.5 text-left overflow-hidden flex-1 min-w-0">
  <p className="text-sm truncate w-full">
    {data.user.name}
  </p>
  <p className="text-xs truncate w-full">
    {data.user.email}
  </p>
</div>
</DropdownMenuTrigger>
<DropdownMenuContent
  align="end"
  side="right"
  className="w-72 bg-popover text-popover-foreground p-2 rounded-md shadow-md space-y-2"
>
  {/* Label section */}
  <DropdownMenuLabel>
    <div className="flex flex-col gap-1 px-2 py-1.5">
      <span className="font-medium truncate">{data.user.name}</span>
      <span className="text-sm font-normal text-muted-foreground truncate">
        {data.user.email}
      </span>
    </div>
  </DropdownMenuLabel>

  <DropdownMenuSeparator className="my-1" />

  {/* Menu Items */}
  <DropdownMenuItem className="cursor-pointer flex items-center justify-between px-2 py-2 rounded-md hover:bg-muted">
    Billing
    <CreditCardIcon className="size-4" />
  </DropdownMenuItem>

  <DropdownMenuItem
    onClick={onLogout}
    className="cursor-pointer flex items-center justify-between px-2 py-2 rounded-md hover:bg-muted"
  >
    Logout
    <LogOutIcon className="size-4" />
  </DropdownMenuItem>
</DropdownMenuContent>


</DropdownMenu>
  )
}

export default DashboardUserButton;