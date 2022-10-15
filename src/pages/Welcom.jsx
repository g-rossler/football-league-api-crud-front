import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <main>
      <h1>
        Welcome
      </h1>
      <div>
        <Link to="/teams">Teams</Link>
        <Link to="/add-team">New Team</Link>
      </div>

    </main>
  );
}

export default WelcomePage;
