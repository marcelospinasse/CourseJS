import React from 'react'

export default function CurrencyRow(props) {
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        OnChangeAmount,
        amount
    } = props
    return (
			<div>
				<input type="number" value={amount} onChange={OnChangeAmount}/>
				<select value={selectedCurrency} onChange={onChangeCurrency}>
					{currencyOptions.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
			</div>
		);
}
