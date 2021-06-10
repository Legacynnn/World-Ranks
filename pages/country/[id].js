import React, { useState, useEffect } from "react";
import Layout from '../../components/Layout/index'
import { Container, Overview, PopulationDiv, Population, Area, Details, DetailsPanel } from "./style";


const getCountry = async (id) => {
  const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`)
  const country = await res.json()

  return country
}


const Country = ({ country }) => {
  
  const [borders, setBorders] = useState()
  
  const getBorders = async () => {
    const borders = await Promise.all(
      country.borders.map(border => getCountry(border))
    )
    setBorders(borders)
  }

  useEffect(() => {
    getBorders()
  }, [])


  console.log(borders)

  return(
    <Layout titl={country.name} >
      <Container>
        <Overview>
          <img src={country.flag} alt="Country Flag" />

          <h1>{country.name}</h1>
          <p>{country.region}</p>

          <PopulationDiv>
            <Population>
              <p className="number">{country.population}</p>
              <p>Population</p>
            </Population>

            <Area>
              <p className="numberCount">{country.area}</p>
              <p>Area</p>
            </Area>
          </PopulationDiv>
        </Overview>


        <Details>
          <h4>Details</h4>


          <DetailsPanel>
            <p>Capital:</p>
            <p>{country.capital}</p>
          </DetailsPanel>

          <DetailsPanel>
            <p>SubRegion:</p>
            <p>{country.subregion}</p>
          </DetailsPanel>

          <DetailsPanel>
            <p>Languages:</p>
            <p>{country.languages.map(({name}) => name).join(", ")}</p>
          </DetailsPanel>

          <DetailsPanel>
            <p>Currencies:</p>
            <p>{country.currencies.map(({name}) => name).join(", ")}</p>
          </DetailsPanel>

          <DetailsPanel>
            <p>Native Name:</p>
            <p>{country.nativeName}</p>
          </DetailsPanel>

          <DetailsPanel>
            <p>Gini:</p>
            <p>{country.gini} %</p>
          </DetailsPanel>

        </Details>


      </Container>
    </Layout>
  )
};

export default Country;

export const getServerSideProps = async ({ params }) => {
  const country = await getCountry(params.id);

  return {
    props: {
      country,
    },
  };
};
