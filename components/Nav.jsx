"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';


const Nav = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);

  useEffect(()=>{
    const setProviders = async() => {
      const response = await getProviders();
      setProviders(response);
    }
    setProviders();
  },[])
  return (
    <nav className="flex justify-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src="/assets/images/logo-text.svg"
        alt="Promptopia Logo"
        width={100}
        height={100}
        className="object-contain"
        /> 
      </Link>

      <div>
        {isUserLoggedIn ? (
          <div className="sm:flex hidden gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Prompt
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image
              src="/assets/images/logo.svg"
              alt="Profile"
              width={37}
              height={37}
              className="rounded-full"
              />
            </Link>
          </div>
        ): (
          <div>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.Id)}
                    className="black_btn"
                    >
                      Sign In
                  </button>
              ))}
                
          </div>
        )}
      </div>
    </nav>
  )
}

export default Nav