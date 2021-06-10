import { React, useState } from "react";
import Layout from "../components/Layout/index";
import SearchInput from "../components/SearchInput/index";
import { Counts } from "../styles/homeStyle";
import CountriesTable from "../components/CountriesTable/index";

export default function Home({ countries }) {
  const [keyword, setKeyword] = useState();

  const filtredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(keyword) ||
    country.region.toLowerCase().includes(keyword) ||
    country.subregion.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <div>
      <Layout>
        <Counts>Found {countries.length} countries</Counts>
        <SearchInput
          placeholder="Filter by Name, Region or SubRegion"
          onChange={onInputChange}
        />
        <CountriesTable countries={filtredCountries} />
      </Layout>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
