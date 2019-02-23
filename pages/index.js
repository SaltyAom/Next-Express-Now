import React, {useState} from 'react'
import Nav from "../components/nav"

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <main>
        <p>You clicked {count} times</p>
        <button contain="" primary="" onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </main>
    </>
  );
}

export default Home
