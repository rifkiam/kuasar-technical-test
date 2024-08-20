import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { JsonResponseCountries, JsonResponseCountry } from '../types/country.type';

const backendUrl = 'https://countries.trevorblades.com'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: backendUrl
})

export async function getCountries(): Promise<JsonResponseCountries> {
  const baseCountriesQuery = await client.query({
    query: gql`
    query getCountries {
      countries {
        name
        emoji
        capital
        currency
        code
      }
    }`
  });

  return baseCountriesQuery;
}

export async function getCountry(countryCode: string): Promise<JsonResponseCountry> {
  const baseCountryQuery = await client.query({
    query: gql`
    query getCountry {
      country(code: "${countryCode}") {
        capital
        currency
        code
        continent {
          name
          code
        }
        currencies
        name
        emoji
        languages {
          name
        }
      }
    }`
  });

  return baseCountryQuery;
}
