"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Placeholder logic for form submission
      console.log("Email:", email, "Password:", password);
    };
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4"> 
        <Card className="w-full max-w-sm mt-10">
          <div className="bg-gray-200">
          <CardHeader>
          <CardTitle className="text-2xl font-bold text-purple-600 text-center">ILOVATION</CardTitle>
            <CardTitle className="text-center">Sign In</CardTitle>
          </CardHeader>
          </div>
          <div>
          <CardContent className="mt-4">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="remember" className="w-4 h-4" />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <Button type="submit" className="w-full">Sign In</Button>
            </form>
            <p className="mt-4 text-center text-sm">
              Don't have an account yet? <Link href="/sign-up" className="text-blue-500">Sign Up</Link>
            </p>
          </CardContent>
          </div>
        </Card>
      </div>
  )
}

export default SignIn