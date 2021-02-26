export function Home() {
  return (
    <>
      <header
        style={{
          width: "100vw",
          height: "100vh",
          background: "blue",
        }}
      >
        <nav
          style={{
            width: "100%",
            height: "8rem",
            background: "lightblue",
          }}
        >
          navbar
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>Projects</li>
          </ul>
        </nav>
        background image
        <h1>header</h1>
      </header>
      <main>contains images of the projects</main>
      <footer>
        <h3>footer</h3>
        <ul>
          <li>email</li>
          <li>number</li>
          <li>github</li>
          <li>linkedin</li>
          <li>twitter</li>
        </ul>
      </footer>
    </>
  );
}
