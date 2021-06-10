import { KeyboardArrowDownRounded, KeyboardArrowUpRounded } from "@material-ui/icons";
import {React, useState} from "react";
import {
  Container,
  Wrapper,
  ButtonName,
  ButtonPopu,
  Divzada,
  Row,
  Name,
  Population,
  HeadingArrow
} from "./style";
import Link from 'next/link'



const orderBy = (countries, value, direction) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }

  if (direction === "desc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }

  return countries;
};

const SortArrow = (({direction}) => {
  if (!direction) {
    return <></>
  }

  if (direction === 'desc') {
    return (
      <HeadingArrow>
        <KeyboardArrowDownRounded color="inherit" />
      </HeadingArrow>
    )
    
  } else {
    return (
      <HeadingArrow>
        <KeyboardArrowUpRounded color="inherit" />
      </HeadingArrow>
    )
  }
})

const Countries = ({ countries }) => {
  const [direction, setDirection] = useState()
  const [value, setValue] = useState()
  
  const orderedCountries = orderBy(countries, value, direction);

  const switchDirection = () => {
    if (!direction) {
      setDirection('desc')
    } else if (direction === 'desc') {
      setDirection('asc ')
    } else {
      setDirection(null)
    }
  }
 
  const setValueAndDirection = (value) => {
    switchDirection()
    setValue(value)
  }

  return (
    <Container>
      <Wrapper>
        <ButtonName onClick={() => setValueAndDirection('name')} >
          <Divzada>Name</Divzada>

          {value === "name" && <SortArrow direction={direction} />}
        </ButtonName>

        <ButtonPopu onClick={() => setValueAndDirection('population')} >
          <Divzada>Population</Divzada>

          {value === "population" && <SortArrow direction={direction} />}
        </ButtonPopu>
      </Wrapper>

      {orderedCountries.map((country) => (
        <Link href={`/country/${country.alpha3Code}`}>
          <Row>
            <Name>{country.name}</Name>

            <Population>{country.population}</Population>
          </Row>
        </Link>
      ))}
    </Container>
  );
};

export default Countries;
