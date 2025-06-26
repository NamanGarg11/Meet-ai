"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { authClient } from '@/lib/auth-client'
import React, { useState } from 'react'

const page = () => {
    const { 
        data: session } = authClient.useSession() 
 
  const [name , setName] = useState("")
  const [email, setEmail] = useState("")
  const [password,setpassword] = useState("")
  
  
  const submit = ()=>authClient.signUp.email({
  
   email,
   name,
   password 
  },{
    onError:()=>{
      window.alert("error");
      
    },
    onSuccess:()=>{
      window.alert("success");
    }
  })
  if(session) {
     return (
      <div>
      <p>logged in as {session.user.name}</p>
      <Button onClick={()=>{
        authClient.signOut()
      }} >sign out </Button>
      </div>
     )
  }
   return (
 <div>
  <Input placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}></Input>
 <Input placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}></Input>
 <Input placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}></Input>
<Button onClick={submit}>Create User</Button>
 </div>
  )
}

export default page
