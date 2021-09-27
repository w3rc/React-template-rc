import Joi from 'joi';

export const validateLimit = (
	name: string,
	value: number,
	min: number,
	max: number
) => {
	const schema = Joi.number().min(min).max(max);
	const validation = schema.validate(value);

	if (validation.error) {
		let err = new Error(
			'Enter a valid ' + name.charAt(0).toUpperCase() + name.slice(1)
		);
		err.name = name;
		throw err;
	}
	return validation;
};
