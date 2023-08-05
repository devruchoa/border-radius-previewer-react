import React, { useState } from 'react';
import { styled } from 'styled-components';

const BoxBorderRadius = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 400px;
    background-color: #7EAA92;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: ${({ borderRadius }) => borderRadius};
`;

const Title = styled.h2`
    letter-spacing: 2px;
    font-size: 2rem;
    text-shadow: 4px 2px grey;
    text-align: center;
`;

const BoxItem = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
`;

const Option = styled.button`
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
`;

const Input = styled.input`
    border-radius: 5px;
    border: none;
    padding: 5px;
`;


export default function Box() {

    const [borderValues, setBorderValues] = useState({
        topLeft: 0,
        topRight: 0,
        bottomRight: 0,
        bottomLeft: 0
    })

    const [borderRadius, setBorderRadius] = useState(0);

    function handleChange(event) {
        const { name, value } = event.target;

        setBorderValues({
            ...borderValues,
            [name]: parseInt(value, 10)
        })
    }

    function handleClick() {
        const newBorderRadius = `${borderValues.topLeft}px ${borderValues.topRight}px ${borderValues.bottomRight}px ${borderValues.bottomLeft}px`;
        setBorderRadius(newBorderRadius);
    }

    function handleSubmit() {
        const textCss = 'border-radius: ' + borderRadius + ';';

        navigator.clipboard.writeText(textCss)
            .then(() => {
                alert('CSS style copied to clipboard!');
            })
            .catch((error) => {
                alert('Unable to copy CSS style:' + error)
            })
    }

    return (
        <BoxBorderRadius borderRadius={borderRadius}>
            <Title>Border Radius Previewer</Title>
            <BoxItem>
                <Input type='number' name='topLeft' value={borderValues.topLeft} onChange={handleChange}></Input>
                <Option onClick={handleClick}>Modify</Option>
            </BoxItem>
            <BoxItem>
                <Input type='number' name='topRight' value={borderValues.topRight} onChange={handleChange}></Input>
                <Option onClick={handleClick}>Modify</Option>
            </BoxItem>
            <BoxItem>
                <Input type='number' name='bottomRight' value={borderValues.bottomRight} onChange={handleChange}></Input>
                <Option onClick={handleClick}>Modify</Option>
            </BoxItem>
            <BoxItem>
                <Input type='number' name='bottomLeft' value={borderValues.bottomLeft} onChange={handleChange}></Input>
                <Option onClick={handleClick}>Modify</Option>
            </BoxItem>
            <Option type='submit' onClick={handleSubmit} > Copiar</Option>
        </BoxBorderRadius>
    )

}
