import { gql } from '@apollo/client';

export const ADD_USER = gql`
	mutation AddUser(
		$name: String!
		$username: String!
		$email: String!
		$provider: String!
		$password: String!
		$gender: String!
		$dateOfBirth: Float!
		$roles: [Role!]!
		$defaultRole: String!
		$language: String!
		$city: String!
		$country_code: String!
		$country_name: String!
		$latitude: Float!
		$longitude: Float!
		$postal: String!
		$state: String!
		$ip: String!
	) {
		signupUser(
			signupUserInput: {
				name: $name
				username: $username
				email: $email
				provider: $provider
				gender: $gender
				dateOfBirth: $dateOfBirth
				password: $password
				language: $language
				roles: $roles
				defaultRole: $defaultRole
				address: {
					city: $city
					country_code: $country_code
					country_name: $country_name
					latitude: $latitude
					longitude: $longitude
					postal: $postal
					state: $state
				}
				ip: $ip
			}
		) {
			token,
			refreshToken
		}
	}
`;
