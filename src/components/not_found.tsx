"use client"
import { useNotFoundPageContext } from "@/context/notFoundPageContext";
import { useEffect } from "react";

const NotFound = () => {
    const { toggleIs404 } = useNotFoundPageContext();

    useEffect(() => {
        toggleIs404(true);
    }, [toggleIs404]);

  return (
    <div>
      <div
        style={{
          fontFamily:
            'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
          height: "100vh",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="text-primary">
          <h1
            style={{
              display: "inline-block",
              margin: "0 20px 0 0",
              padding: "0 23px 0 0",
              fontSize: "24px",
              fontWeight: "500",
              verticalAlign: "top",
              lineHeight: "49px",
            }}
          >
            404
          </h1>

          <div style={{ display: "inline-block" }}>
            <h2
              style={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "49px",
                margin: "0",
              }}
            >
              This page could not be found.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
