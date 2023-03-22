import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  return (
    <div>
      <h1>Some react App</h1>
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
};

export default App;
