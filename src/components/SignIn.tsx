import Link from "next/link";
// import { Icons } from "./Icons";
import UserAuthForm from "./UserAuthForm";
import logo from "../icons/logo.jpg";
import Image from "next/image";

const SignIn = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        {/* <Icons.google className="mx-auto h-6 w-6" /> */}
        <Image
          className="mx-auto"
          alt="logo"
          src={logo}
          height={32}
          width={32}
        />
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm max-w-xs mx-auto">
          By continuing, you are setting up a ReEdit account and agree to our
          User Agreement and Privacy Policy.
        </p>

        {/* Sign in Form */}
        <UserAuthForm />

        <p className="px-8 text-center text-sm text-zinc-700">
          New to ReEdit?{" "}
          <Link
            href="/sign-up"
            className="hover:text-zinc-800 text-sm underline underline-offset-4"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
