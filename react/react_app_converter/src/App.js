import React, { useEffect, useState } from "react";
import "./App.css";
import CurrencyRow from "./CurrencyRow";
import CountryRow from "./CountryRow";

const BASE_URL = "https://api.exchangeratesapi.io/latest";

function App() {
	const [currencyOptions, setCurrencyOptions] = useState([]);
	const [fromCurrency, setFromCurrency] = useState();
	const [toCurrency, setToCurrency] = useState();
	const [exchangeRate, setExchangeRate] = useState();
	const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

	let toAmount, fromAmount;
	if (amountInFromCurrency) {
		fromAmount = amount;
		toAmount = (amount * exchangeRate).toFixed(2);
	} else {
		toAmount = amount;
		fromAmount = (amount / exchangeRate).toFixed(2);
	}

	useEffect(() => {
		fetch(BASE_URL)
			.then((res) => res.json())
			.then((data) => {
				const firstCurrency = Object.keys(data.rates)[12];
				setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
				setToCurrency(firstCurrency);
				setExchangeRate(data.rates[firstCurrency]);
			});
	}, []);

	useEffect(() => {
		if (fromCurrency != null && toCurrency != null) {
			fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
				.then((res) => res.json())
				.then((data) => setExchangeRate(data.rates[toCurrency]));
		}
	}, [fromCurrency, toCurrency]);

	//---------------------------------------------------------------
	useEffect(() => {
		fetch(BASE_URL)
			.then((res) => res.json())
			.then((data) => {
        console.log(data)
        // const BRLCurrency = Object.keys(data.rates)[12];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        // setFromCurrency("USD");
        // console.log(data.base)
        // console.log(data.date)
        // console.log(data.rates["CAD"])
        const brasil = data.rates["BRL"];
        const uStates = data.rates["USD"];
        const dolarReal = (brasil / uStates)
        console.log(brasil);
        console.log(uStates);
        console.log(dolarReal)
				// setExchangeRate(data.rates[BRLCurrency]);
				// setToCurrency("CAD");
        // console.log(BRLCurrency)
        // console.log(data.rates[BRLCurrency]);
        // console.log(data.rates[data.base]);
			});
	}, []);

	//----------------------------------------------------------------

	function handleFromAmountChange(e) {
		setAmount(e.target.value);
		setAmountInFromCurrency(true);
	}

	function handleToAmountChange(e) {
		setAmount(e.target.value);
		setAmountInFromCurrency(false);
	}

	return (
		<>
			<h2>Currency Converter</h2>
			<CurrencyRow
				currencyOptions={currencyOptions}
				selectedCurrency={fromCurrency}
				onChangeCurrency={(e) => setFromCurrency(e.target.value)}
				OnChangeAmount={handleFromAmountChange}
				amount={fromAmount}
			/>
			<div className="myDiv">=</div>
			<CurrencyRow
				currencyOptions={currencyOptions}
				selectedCurrency={toCurrency}
				onChangeCurrency={(e) => setToCurrency(e.target.value)}
				OnChangeAmount={handleToAmountChange}
				amount={toAmount}
			/>
			<br></br>
			<CountryRow/>
		</>
	);
}

export default App;
