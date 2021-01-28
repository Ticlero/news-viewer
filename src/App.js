import { useState } from "react";
import getAllNewsData from "./Modules/getNewsData";

function App() {
  const [data, setData] = useState(null);
  const onClick = async (e) => {
    try {
      const response = await getAllNewsData();
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>클릭</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 4)}
          readOnly={true}
        ></textarea>
      )}
    </div>
  );
}

export default App;
