import Link from "next/link";
import Welcome from "@/components/Welcome";

export default function LandingPage() {
  return (
    <main className="landing">
      <h1>Welcome to My Portfolio</h1>
      <Welcome />
      <nav className="landing-nav">
        <ul>
          <li>
            <Link href="/article">Articles</Link>
          </li>
          <li>
            <Link href="/studies">Studies</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/maintenance">Maintenance</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
