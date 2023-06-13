import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
// export { default } from "next-auth/middleware"
export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    // console.log("Authorization successful");
  },
  {
    callbacks: {
      authorized({ token, req }) {
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ["/"],
};
