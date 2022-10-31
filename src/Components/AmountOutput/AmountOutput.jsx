export default function AmountOutput({ plnValue, plnInfo }) {
  return (
    <div className="pln-input">
      <input type="number" className="pln-amount input-style" value={plnValue} readOnly />
      <p>{plnInfo}</p>
    </div>
  );
}
