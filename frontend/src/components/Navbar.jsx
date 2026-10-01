import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Events', path: '/events' },
  { label: 'Feedback', path: '/feedback' },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <NavLink to="/" className="brand" aria-label="Event Feedback Management System home">
          <span className="brand-mark">EF</span>
          <span>Event Feedback</span>
        </NavLink>

        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
