import { useEffect, useState } from "react";
import axios from "axios";
import Display from "./Display";

const App = () => {
  const [data, setData] = useState(null);
  const [btn, setBtn] = useState(false);

  const info = async function () {
    return await axios.get("https://randomuser.me/api/?results=50");
  };
  useEffect(() => {
    info()
      .then((resp) => {
        console.log(resp.data.results);
        return setData(resp.data.results);
      })
      .catch((err) => console.log(err));
  }, [btn]);

  return (
    <>
      {btn && <Display data={data} />}
      <button onClick={() => setBtn(true)}>Get Info</button>
    </>
  );
};
export default App;
