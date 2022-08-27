const Page = function () {
  return (
    <div>
      <h1>Example of frameworks</h1>
      <ul>
        <li>React.JS</li>
        <li>Angular.JS</li>
        <li>View.JS</li>
        <li>Next.JS</li>
        <li>Node.JS</li>
        <li>Express.JS</li>
      </ul>
    </div>
  );
};

const divRoot = ReactDOM.createRoot(document.getElementById("root"));
divRoot.render(<Page />);
