const heading = React.createElement("h1", { id: "heading" }, [
  React.createElement("div", null, "Iam sibling one"),
  React.createElement("div", null, "Iam sibling two"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
