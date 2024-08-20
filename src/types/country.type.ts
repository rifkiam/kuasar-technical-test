export type Country = {
  capital: string,
  currency: string,
  code: string,
  continent: {
    name: string,
    code: string
  },
  currencies: string[],
  name: string,
  emoji: string,
  languages: {
    name: string
  }[]
}

export type Countries = Country[]

export type JsonResponseCountry = {
  data: {
    country: Country
  }
}

export type JsonResponseCountries = {
  data: {
    countries: Countries
  }
}