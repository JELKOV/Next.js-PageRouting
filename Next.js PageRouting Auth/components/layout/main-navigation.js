import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

import classes from "./main-navigation.module.css";

function MainNavigation() {
  const { data: session, status } = useSession();

  function logoutHandler() {
    const confirm = window.confirm("정말 로그아웃하시겠습니까?");
    if (confirm) {
      signOut({ callbackUrl: "/" });
    }
  }

  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Next Auth</div>
      </Link>
      <nav>
        <ul>
          {status === "loading" && <p>Loading...</p>}

          {status === "unauthenticated" && (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}

          {status === "authenticated" && (
            <>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
