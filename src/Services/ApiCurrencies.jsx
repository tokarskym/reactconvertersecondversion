const url = 'https://api.nbp.pl/api/exchangerates/rates/a/';

export const fetchCurrencies = (currency) => {
  return fetch(url + currency)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
};
