import { getSession } from "next-auth/react";

import UserProfile from "../components/profile/user-profile";
import { redirect } from "next/dist/server/api-utils";

function ProfilePage() {
  return <UserProfile />;
}

export async function getServerSideProps(context) {
  const session = await getSession({
    req: context.req,
  });

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        // 임시적으로 리다이렉트 되는걸로 처리
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default ProfilePage;
