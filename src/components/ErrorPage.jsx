import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ color: "black" }}>Oops!! Something went wrong</h1>
        <h1 style={{ color: "black", marginTop: "20px" }}>
          {err.status} : {err.statusText}
        </h1>
      </div>
    </>
  );
};

export default ErrorPage;
