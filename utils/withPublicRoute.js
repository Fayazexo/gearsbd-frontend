import { useRouter } from "next/router";
const withPublicRoute = (WrappedComponent) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const Router = useRouter();

      const accessToken = localStorage.getItem("jwt");

      if (accessToken) {
        Router.replace("/");
        return null;
      }

      return <WrappedComponent {...props} />;
    }

    return null;
  };
};

export default withPublicRoute;
