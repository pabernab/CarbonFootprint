import React from "react";
import Page from "./Page";
export default function Home(props) {
  return (
    <Page color="#1d2124" background="#f8f9fa">
      <p>
        The average carbon footprint for a person in the United States is 16
        tons, one of the highest rates in the world.
      </p>

      <a class="btn btn-primary" href="/pagetwo" role="button">
        Calculate your carbon footprint
      </a>
    </Page>
  );
}
