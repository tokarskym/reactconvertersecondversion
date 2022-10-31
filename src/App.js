import './App.css';
import Header from './Components/Header/Header';
import Select from './Components/SelectMenu/Select';
import AmountInput from './Components/AmountInput/AmountInput';
import AmountOutput from './Components/AmountOutput/AmountOutput';
import { fetchCurrencies } from '../src/Services/ApiCurrencies';
import { useState } from 'react';

function App() {
  const [currency, setCurrency] = useState('USD');
  const [inputValue, setInputValue] = useState('');
  const [plnValue, setPlnValue] = useState('');
  const [rateInfo, setRateInfo] = useState('');
  const [plnInfo, setPlnInfo] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getCurrency = (e) => {
    setCurrency(e.target.value);
    setPlnValue('');
    setRateInfo('');
    setPlnInfo('');
    setInputValue('');
  };

  const getInputValue = (e) => {
    if (e.target.value < 0) {
      e.target.value = e.target.value * -1;
    }
    setInputValue(e.target.value);
  };

  const convertAmount = () => {
    if (inputValue !== '') {
      setIsLoading(true);
      fetchCurrencies(currency).then((data) => {
        const rate = data.rates[0].mid;
        const calculation = (rate * inputValue).toFixed(2);
        setPlnValue(calculation);
        setRateInfo('1 ' + currency + ' = ' + rate + ' PLN');
        setPlnInfo('PLN');
        setIsLoading(false);
      });
    } else {
      alert('Please fill in amount!');
    }
  };

  return (
    <div className="container">
      <Header />
      <main>
        <Select getCurrency={getCurrency} />
        <div className="convert">
          <AmountInput inputValue={inputValue} rateInfo={rateInfo} isLoading={isLoading} getInputValue={getInputValue} convertAmount={convertAmount} />
          <AmountOutput plnValue={plnValue} plnInfo={plnInfo} />
        </div>
      </main>
    </div>
  );
}
export default App;
