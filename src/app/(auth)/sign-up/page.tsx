
import {SignUpView }from "@/modules/auth/ui/views/sign-up-view"

const page = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50"></div>
      <div className="absolute inset-0 bg-black opacity-25"></div> */}

      <SignUpView />
    </div>
  )
}

export default page