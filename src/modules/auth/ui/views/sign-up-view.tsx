import { Card } from "@/components/ui/card"

export const SignUpView = () => {
    return (
        <Card className="w-full max-w-md p-6">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" id="email" className="w-full p-2 border rounded" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                    <input type="password" id="password" className="w-full p-2 border rounded" required />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Sign Up</button>
            </form>
        </Card>
    )
}