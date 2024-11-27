import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCookieValue } from "@/api/cookies";

export function withAuth<P extends object>(Component: React.ComponentType<P>) {
  return function AuthenticatedComponent(props: P) {
    const router = useRouter();

    useEffect(() => {
      const token = getCookieValue("authToken");
      if (!token) {
        router.replace("/");
      }
    }, [router]);

    return <Component {...props} />;
  };
}
