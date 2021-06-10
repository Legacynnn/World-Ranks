import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Overview = styled.div`
    padding: 20px;
    border-radius: 7px;
    box-shadow: var(--box-shadow);
    background-color: var(--background-color-light);
    
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }

    h1 {
        text-align: center;
        font-size: 32px;
        margin-bottom: 0;
    }
    p {
        text-align: center;
        font-size:  14px;
        font-weight: 300;
        margin-top: 4px;
        margin-bottom: 24px;

    }

`

export const PopulationDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    text-align: center;
`
export const Population = styled.div`
    p.number {
        font-size: 14px;
        color: var(--text-color);
    }
    p {
        font-size: 13px;
        color: var(--text-secondary)
    }
`
export const Area = styled.div`
    p.numberCount {
        font-size: 14px;
        color: var(--text-color)
    }
    p{
        font-size: 13px;
        color: var(--text-secondary);
    }
`

export const Details = styled.div`
    background-color: var(--background-color-light);
    box-shadow: var(--box-shadow);
    border-radius: 8px;

    h4 {
        padding: 20px;
        padding-bottom: 0;
    }
`

export const DetailsPanel = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 20px;
    border-bottom: 1px solid #e0e0e0; 
`