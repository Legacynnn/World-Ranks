import styled from 'styled-components';

export const Container = styled.div`
    `;

export const Wrapper = styled.div`
    display: flex;
`

export const ButtonName = styled.button`
    width: 20%;
    
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    flex: 1;
    padding: 20px;
    color: var(--text-secondary);
    font-weight: 500;

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: left;
    justify-content: flex-start;
    
`

export const ButtonPopu = styled.button`
    width: 20%;
    
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    flex: 1;
    padding: 20px;
    color: var(--text-secondary);
    font-weight: 500;

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: left;
    justify-content: flex-start;
`

export const Divzada = styled.div`
    text-align: left;
    justify-content: flex-start;
`

export const Row = styled.div`
    display: flex;
    padding: 20px;
    cursor: pointer;

    text-align: center;
    background-color: var(--background-color-light);
    border-radius: 8px;
    margin-bottom: 16px;

    box-shadow: var(--box-shadow);

    transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;

    :hover {
        transform: translateY(-4px);
        box-shadow: 0px, 4px, 16px, rgba(0, 0, 0, 0.1)
    }
`

export const Name = styled.div`
    flex: 1;
    text-align: left;
`

export const Population = styled.div`
    flex: 1;

    text-align: left;
    justify-content: flex-start;

    padding-left: 50px;
`

export const HeadingArrow = styled.div`
    color: var(--primary-color);
    
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 2px;
`