export default function Select({ getCurrency }) {
  return (
    <div className="select-menu">
      <select onChange={getCurrency}>
        <option value="USD" defaultValue>
          USD
        </option>
        <option value="CHF">CHF</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
}
