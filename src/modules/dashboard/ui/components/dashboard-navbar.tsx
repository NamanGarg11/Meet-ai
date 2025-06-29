"use client";
import { Button } from '@/components/ui/button'
import { useSidebar } from '@/components/ui/sidebar'
import { is } from 'drizzle-orm';
import { PanelBottom, PanelLeftCloseIcon, PanelLeftIcon, SearchIcon, Sidebar } from 'lucide-react'
import React, { use, useEffect, useState } from 'react'
import DashBoardCommand from '../../dashboard-command';
import { se } from 'date-fns/locale';

const DashboardNavbar = () => {
const [keyLabel, setKeyLabel] = useState("Ctrl");
const [commandOpen, setCommandOpen] = useState(false);

 useEffect(() => {
  const down = (e: KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      setCommandOpen((open) => !open);
    }
  };

  // Always add listener after mount
  window.addEventListener("keydown", down);

  return () => window.removeEventListener("keydown", down);
}, []);

  const {state , toggleSidebar, isMobile} = useSidebar()
  return (
    <>
    <DashBoardCommand open={commandOpen} setOpen={setCommandOpen} />
   <nav className='flex px-4 gap-2 items-center py-3 border-b bg-background'>
    <Button className='size-9' variant="outline" onClick={toggleSidebar}>
      {state==="collapsed"|| isMobile ? (<PanelLeftIcon className='size-4'/>) : (<PanelLeftCloseIcon className='size-4'/>)}
    </Button>
    <Button 
    className='h-9 w-[200px] justify-start font-normal text-muted-foreground'
    variant="outline" 
    size="sm"
    onClick={() =>setCommandOpen(open => !open)}>
      <SearchIcon/>
      Search
  <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
  <span className="text-xs">&#8984;</span>K
</kbd>


    </Button>
   </nav>
   </>
  )
}

export default DashboardNavbar