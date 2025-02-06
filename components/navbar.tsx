import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-10 py-4 bg-white shadow-md z-50">
      <h1 className="text-purple-600 text-2xl font-extrabold">ILOVATION</h1>
      <div className="flex gap-6">
        <Button variant="ghost" className="text-black font-medium">Home</Button>
        <Button variant="ghost" className="text-black font-medium">About</Button>
        <Button variant="ghost" className="text-black font-medium">Contact</Button>
        <Button variant="outline" className="text-white border-white bg-purple-600 px-6 py-2 rounded-lg">Sign In</Button>
        <Button variant="outline" className="text-white border-white bg-purple-600 px-6 py-2 rounded-lg">Sign Up</Button>
      </div>
    </nav>
  )
}

export default Navbar
