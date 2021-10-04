export const isValidEmail = (value) => {
	const regex =
		/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
	return regex.test(value);
};
