export default function AmountInput({ inputValue, getInputValue, rateInfo, isLoading, convertAmount }) {
  return (
    <>
      <div className="number-input">
        <input type="number" className="currency-amount input-style" value={inputValue} onChange={getInputValue} />
        <p>{rateInfo}</p>
      </div>
      <div className={isLoading ? 'loader' : 'loader-hidden'}></div>
      <button className="button" onClick={convertAmount}>
        Convert
      </button>
    </>
  );
}
