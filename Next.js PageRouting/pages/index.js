import Link from "next/link";

function Homepage() {
  return (
    <div>
      <h1>The Homepage</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">The Client Page</Link>
        </li>
      </ul>
    </div>
  );
}

export default Homepage;
