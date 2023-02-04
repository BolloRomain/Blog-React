import PropTypes from 'prop-types';
import { Link, NavLink } from "react-router-dom";
import './styles.scss';

function Header({ categories, isZen, toggleIsZen }) {

  return (
    <header className="menu">
      <nav>
        {
          categories.map((item) => (
            <NavLink
              to={item.route}
              key={item.label}
              className={({ isActive }) => {
                const className = isActive
                  ? 'menu-link menu-link--selected'
                  : 'menu-link';

                return className;
              }}
            >
              {item.label}
            </NavLink>
          ))
        }
        <button className="menu-btn" type="button" onClick={toggleIsZen}>
          {isZen ? 'Désactiver' : 'Activer'} le mode zen
        </button>
      </nav>
    </header>
  );
}

Header.propTypes = {
  categories: PropTypes.array.isRequired,
  isZen: PropTypes.bool.isRequired,
  toggleIsZen: PropTypes.func.isRequired,
};

export default Header;
