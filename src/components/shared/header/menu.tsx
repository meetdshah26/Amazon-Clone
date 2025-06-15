import { ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import CartButton from "./cart-button";
import UserButton from "./user-button";

const Menu = () => {
  return (
    <div className="flex justify-end">
      <nav className="flex gap-3 w-full">
        {/* <Link href="/cart" className="header-button">
          <UserIcon className="h-8 w-8" />
          <span className="font-bold">Signin</span>
        </Link> */}

        {/* <Link href="/cart" className="header-button">
          <ShoppingCartIcon className="h-8 w-8" />
          <span className="font-bold">Cart</span>
        </Link> */}

        <Link href="/sign-in" className="flex items-center header-button">
          - Hello, Sign in -{" "}
        </Link>
        <UserButton />

        <CartButton />
      </nav>
    </div>
  );
};

export default Menu;
