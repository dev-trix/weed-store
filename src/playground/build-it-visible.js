let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  renderTemplate();
};

const renderTemplate = () => {
  const template = (
    <div onClick={toggleVisibility}>
      <h1>Visibility Toggle</h1>
      <button>{visibility ? "Hide Details" : "Show Details"}</button>
      {visibility && (
        <div>
          <p>Hey, these are some details you can now see!</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(template, appRoot);
};
const appRoot = document.getElementById("app");

renderTemplate();
