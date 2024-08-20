import { useEffect, useState } from "react"
import { getCountries, getCountry } from "../lib/graphql"
import { JsonResponseCountries, JsonResponseCountry } from "../types/country.type";

export default function CountriesList() {
  const [countries, setCountries] = useState<JsonResponseCountries | null>(null);
  let [country, setCountry] = useState<JsonResponseCountry | null>(null);
  let [selectedCountryId, setSelectedCountryId] = useState<string | null>(null)

  const fetchCountriesData = async () => {
    try {
      const result = await getCountries();
      setCountries(result);
    } catch (error) {
      console.error("Failed to fetch countries:", error);
    }
  };

  const fetchCountryData = async (countryId: string) => {
    try {
      const result = await getCountry(countryId);
      setCountry(result);
    } catch (error) {
      console.error("Failed to fetch country:", error);
    }
  };

  const handleCountryClick = (countryId: string) => {
    setSelectedCountryId(countryId)
  }

  const handleCloseClick = () => {
    setSelectedCountryId(null)
  }

  useEffect(() => {
    fetchCountriesData();
  }, [])

  useEffect(() => {
    if (selectedCountryId) {
      fetchCountryData(selectedCountryId);
    }
    else {
      setSelectedCountryId(null)
      setCountry(null)
    }
  }, [selectedCountryId]);

  if (!countries) {
    return <div className="loader"></div>;
  }

  return (
    <div className='country-grids'>
      {countries.data.countries.map((item, idx) => (
        <div 
          key={idx} 
          className="country-grid"
          onClick={() => handleCountryClick(item.code)}  
        >
          <p>{item.name}</p>
        </div>
      ))}

      {country &&
        <div
          className="modal"
        >
          <div className="modal-card">
            <button className="modal-close-button" onClick={handleCloseClick}>X</button>
            <div className="cc-header">
              <div className="cc-header-left">
                <p id="country-name">{country.data.country.name}{' '}<span id="country-code">({country.data.country.code})</span></p>
                <p id="country-capital">{'Capital: '}{country.data.country.capital}</p>
              </div>
              <p>{country.data.country.continent.name}</p>
            </div>
            <div className="additional-info">
              <p>{'Flag: '}{country.data.country.emoji}</p>
              <p>{'Currency(s): '}{country.data.country.currencies}</p>
              <p>{'Language(s): '}{country.data.country.languages.map((item, idx) => (
                  <span>
                    {idx === country!.data.country.languages.length - 1
                      ?
                        item.name
                      :
                        item.name + ', '
                    }
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      }
    </div>
  )
}