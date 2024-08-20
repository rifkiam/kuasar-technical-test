import { useEffect, useState } from "react";
import { getCountry } from "../lib/graphql";
import { JsonResponseCountry } from "../types/country.type";

export default function CountryCard(countryId: string) {
  // const [country, setCountry] = useState<JsonResponseCountry | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await getCountry(countryId);
  //     setCountry(result);
  //   };

  //   fetchData();
  // }, [])

  // if (!country) {
  //   return <div className="loader"></div>;
  // }

  return (
    <div className="country-card">
      <div>
        This is a testing content
      </div>
    </div>
  )
}