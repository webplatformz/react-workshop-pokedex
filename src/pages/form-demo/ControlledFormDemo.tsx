import { ChangeEvent, useEffect, useState } from "react";
import DefaultLayout from "../../shared/default-layout/DefaultLayout";

let renderCount = 1;

function ControlledFormDemoPage(): JSX.Element {
  const [username, setUsername] = useState<string>("");

  // change handlers
  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  // whenever the function is called i.e. the template is rendered
  // increase the count by 1
  useEffect(() => {
    renderCount++;
  });

  return (
    <DefaultLayout>
      <h1>Controlled Form Demo</h1>
      <div>
        <label htmlFor="controlled">Username</label>
        <input
          type="text"
          id="controlled"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <p>Render Count: {renderCount}</p>
    </DefaultLayout>
  );
}

export default ControlledFormDemoPage;
