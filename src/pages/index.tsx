import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";
import { AuthLogin } from "../components/AuthButtons";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();

  return (
    <>
      <Head>
        <title>Quest</title>
        <meta name="description" content="Quest: a quiz app" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="">
        <div className="flex min-h-screen flex-col items-center justify-center">
          {!sessionData && <LoginPage />}
          {sessionData && <LandingPage />}
        </div>
        <AuthLogin />
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();
  /*
  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );
  */

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};

const LoginPage = () => {
  return (
    <>
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Welcome to <span className="text-[hsl(280,100%,70%)]">Quest</span>
        </h1>
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-white">
            Please log in to create a{" "}
            <span className="text-[hsl(280,100%,70%)]">quiz</span>
          </p>
          <AuthShowcase />
          <p className="mt-20 text-2xl text-white">
            or enter a quiz number below
          </p>
          <input />
        </div>
      </div>
    </>
  );
};

const LandingPage = () => {
  return (
    <>
      <h1 className="text-white">Logged in</h1>
      <AuthShowcase />
    </>
  );
};
