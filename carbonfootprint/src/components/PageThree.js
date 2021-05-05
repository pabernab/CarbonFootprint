import React from "react";
import Page from "./Page";

export default function PageThree(props) {
  return (
    <Page color="#1d2124" background="#f8f9fa">
      <div style={{ textAlign: "center", paddingTop: "10%" }}>
        <p style={{ marginBottom: "1%" }}>
          Your average car carbon footprint would be:
        </p>

        <p>Placeholder</p>

        <a class="btn btn-primary" href="/pagetwo" role="button">
          Learn more
        </a>
      </div>
    </Page>
  );
}
