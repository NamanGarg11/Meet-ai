"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { authClient } from '@/lib/auth-client'
import { ro } from 'date-fns/locale'
import React, { useState } from 'react'
import { useRouter } from "next/navigation"
export const HomeView = () => {
    const { 
        data: session } = authClient.useSession() 
    const router = useRouter();
 if(!session) {
  return (
<p>loagin...</p>
  )}
 
     return (
      <div>
      <p>logged in as {session.user.name}</p>
      <Button onClick={()=>{
        authClient.signOut({
            fetchOptions: {
                onSuccess: () =>  router.push("/sign-in") ,
            }
        })
      }} >sign out </Button>
      </div>
     )

  
}

