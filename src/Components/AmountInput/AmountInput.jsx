export default function AmountInput({ inputValue, onInputAmount, rateInfo, isLoading, onConvertAmount }) {
  return (
    <>
      <div className="number-input">
        <input type="number" className="currency-amount input-style" value={inputValue} onChange={onInputAmount} />
        <p>{rateInfo}</p>
      </div>
      <div className={isLoading ? 'loader' : 'loader-hidden'}></div>
      <button className="button" onClick={onConvertAmount}>
        Convert
      </button>
    </>
  );
}
