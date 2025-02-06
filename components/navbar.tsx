import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (
    <>
      <div className="h-16" /> 
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-purple-600/80 backdrop-blur-sm border-b border-purple-600 z-50">
      <h1 className="text-white text-2xl font-bold">ILOVATION</h1>
      <div className="flex gap-4 items-center">
          <Button variant="ghost" className="text-white">HOME</Button>
                    <Button variant="ghost" className="text-white">ABOUT</Button>
                    <Button variant="ghost" className="text-white">CONTACT</Button>
                    <Button variant="outline" size="lg" className="text-black border-white hover:bg-white hover:text-purple-600">BOOK EVENT</Button>
                    <Button variant="outline" size="lg" className="text-black border-white hover:bg-white hover:text-purple-600">SIGN UP</Button>
        </div>
      </nav>
    </>
  )
}

export default Navbar