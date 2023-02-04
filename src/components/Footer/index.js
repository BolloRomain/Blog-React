import { Link } from 'react-router-dom';
import './styles.scss';

function Footer() {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer className="copyright">
      DevOfThrones, le blog du développeur React - {year} ©

      <Link to="/contact">Contact</Link>
    </footer>
  );
}

export default Footer;
