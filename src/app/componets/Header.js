import Link from "next/link"

function Header() {
  return (
<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <Link href="/" className="navbar-brand">
      News APp
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link href="/" className="nav-link text-white">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/personal" className="nav-link text-white">
          personalized news
          </Link>
        </li>
        <li className="nav-item">
        <Link href="/login" className="nav-link text-white">
        Login
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Header