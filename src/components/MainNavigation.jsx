import { NavLink } from 'react-router-dom';

function MainNavigation() {
  return (
    <header>
      <nav>
        <div>
          <h2>English Football League</h2>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
              {/* TODO: ADD CLASS STYLE TO NAVLINK */}
            </li>
            <li>
              <NavLink to="/add-team">New Team</NavLink>
              {/* TODO: ADD CLASS STYLE TO NAVLINK */}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
