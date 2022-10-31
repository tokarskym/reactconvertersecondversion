import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header>
      <h2 className="header-text">Exchange Rate</h2>
      <FontAwesomeIcon className="logo" size="3x" icon={faCircleDollarToSlot} />
    </header>
  );
}
