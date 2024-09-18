import React from "react";
import Card from "./card";

export default function Links() {
  return (
    <div className="grid sm:grid-cols-4 grid-cols-1 mt-10 container">
      <Card
        label="Studio"
        description="Manage your own reusable themes and plugins and create sites."
        url="https://builtjs.com"
      />
      <Card
        label="Examples"
        description="Browse a selection of open source Built.js themes on Github."
        url="https://github.com/search?q=builtjs+theme&type=repositories&s=stars&o=desc"
      />
      <Card
        label="Docs"
        description="Learn more about how to create Built.js themes, plugins and sites."
        url="https://docs.builtjs.com"
      />
      <Card
        label="Reference"
        description="Find in-depth information about the Built.js Data Model."
        url="https://docs.builtjs.com/data-model-reference"
      />
    </div>
  );
}
