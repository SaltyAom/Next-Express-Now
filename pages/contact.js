import React from 'react'
import Nav from "../components/nav"

function Home() {
  return (
    <>
    <Nav />
    <main>
        <form card="" large="">
            <h3 margin-y-small="" primary="">Sign in</h3>
            <input type="text" placeholder="Username" />
            <div row="" left="">
                <input type="checkbox" />
                <p grey="">Remember me</p>
            </div>
            <button contain="" primary="" margin-top-medium="">Button</button>
        </form>
    </main>
    </>
  );
}

export default Home;
