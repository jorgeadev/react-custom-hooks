import React from 'react';
import useCoin from "../hooks/useCoin";

function UseCoin() {
	//para el select del useMoneda
	const MONEDAS = [
		{ codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
		{ codigo: 'MXN', nombre: 'Peso Mexicano' },
		{ codigo: 'EUR', nombre: 'Euro' },
		{ codigo: 'GBP', nombre: 'Libra Esterlina' }
	];

	const [coin, SelectCoin] = useCoin('Elige tu moneda', '', MONEDAS);

	console.log(coin);

	return (
		<div>
			<SelectCoin />
		</div>
	);
}

export default UseCoin;