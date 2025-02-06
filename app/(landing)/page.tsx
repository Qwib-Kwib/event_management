import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SignIn = () => {
  const [hostName, setHostName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder logic for form submission
    console.log("Host Name:", hostName, "Email:", email, "Password:", password);
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Left side - Login Form */}
      <div className="w-1/2 flex items-center justify-center bg-white p-8">
        <div className="w-[400px] space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold text-purple-600">ILOVATION</h1>
            <h2 className="text-2xl font-semibold">Sign In</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            
            <div className="space-y-2">
              <label className="text-sm text-gray-600" htmlFor="hostName">
                Host Name
              </label>
              <Input
                id="hostName"
                placeholder="Name"
                type="text"
                value={hostName}
                onChange={(e) => setHostName(e.target.value)}
                required
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-gray-600" htmlFor="email">
                YOUR EMAIL
              </label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm text-gray-600" htmlFor="password">
                  PASSWORD
                </label>
                <a 
                  href="#" 
                  className="text-sm text-gray-500 hover:text-purple-600"
                >
                  Forgot your password?
                </a>
              </div>
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full"
              />
            </div>

            <p className="mt-4 text-center text-sm">
              Don't have an account yet? <Link href="/sign-up" className="text-blue-500">Sign Up</Link>
            </p>

            <Button 
              type="submit" 
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              Sign in
            </Button>
          </form>
        </div>
      </div>
      
      {/* Right side - Image */}
      <div className="w-1/2 relative">
        <img
          src="/images/login.png"
          alt="Login background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30">
          <div className="h-full flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">ILOVATION</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;