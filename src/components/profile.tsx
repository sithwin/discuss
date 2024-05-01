"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return (
      <div>
        <h1>Profile</h1>
        <p>{JSON.stringify(session.data.user)}</p>
      </div>
    );
  }

  return <div>Not signed in</div>;
}
