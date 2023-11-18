import React, { useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [operand1, setOperand1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [isResult, setIsResult] = useState(false);

	const NUMS = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];

	const handleDigitClick = (digit) => {
		if (isResult) {
			setOperand1(digit);
			setIsResult(false);
		} else {
			if (operator) {
				setOperand2(operand2 + digit);
			} else {
				setOperand1(operand1 + digit);
			}
		}
	};

	const handleOperatorClick = (op) => {
		if (op === 'C') {
			setOperand1('');
			setOperator('');
			setOperand2('');
			setIsResult(false);
		} else if (op === '=') {
			if (operand2) {
				let result;
				switch (operator) {
					case '+':
						result = parseInt(operand1) + parseInt(operand2);
						break;
					case '-':
						result = parseInt(operand1) - parseInt(operand2);
						break;
					default:
						break;
				}
				setOperand1(result.toString());
				setOperator('');
				setOperand2('');
				setIsResult(true);
			}
		} else {
			setOperator(op);
			setIsResult(false);
		}
	};

	return (
		<div className={styles.calculator}>
			<div className={styles.displayContainer}>
				<div className={`${styles.display} ${isResult ? styles.result : ''}`}>
					{operand1} {operator} {operand2}
				</div>
			</div>
			<div className={styles.buttonsContainer}>
				{NUMS.map((num) => (
					<button key={num} onClick={() => handleDigitClick(num)}>
						{num}
					</button>
				))}
				{['+', '-', '=', 'C'].map((op) => (
					<button key={op} onClick={() => handleOperatorClick(op)}>
						{op}
					</button>
				))}
			</div>
		</div>
	);
};
