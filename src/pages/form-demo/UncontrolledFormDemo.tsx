import { FormEvent, useEffect, useRef, useState } from "react";
import DefaultLayout from "../../shared/default-layout/DefaultLayout";

let renderCount = 1;

function UncontrolledFormDemoPage(): JSX.Element {
  const usernameInputRef = useRef<HTMLInputElement | null>(null);
  const [username, setUsername] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // otherwise the page will reload
    event.preventDefault();
    if (!usernameInputRef.current) throw new Error("current is not set");
    setUsername(usernameInputRef.current.value);
  };

  // whenever the function is called i.e. the template is rendered
  // increase the count by 1
  useEffect(() => {
    renderCount++;
  });

  return (
    <DefaultLayout>
      <h1>Uncontrolled Form Demo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="uncontrolled">Username</label>
          <input type="text" id="uncontrolled" ref={usernameInputRef} />
          <input type="submit" value="Submit" />
        </div>
        <p>Render Count: {renderCount}</p>
        <p>Saved Username: {username}</p>
      </form>
    </DefaultLayout>
  );
}

export default UncontrolledFormDemoPage;
