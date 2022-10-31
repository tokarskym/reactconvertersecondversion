export default function Select({ onCurrencyChange }) {
  return (
    <div className="select-menu">
      <select onChange={onCurrencyChange}>
        <option value="USD" defaultValue>
          USD
        </option>
        <option value="CHF">CHF</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
}
