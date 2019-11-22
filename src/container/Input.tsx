import React from 'react';
import styled from 'styled-components';

interface IProps {
    setTitle(title: string): void
}

const StyledInput = styled.input`
height: 100px;
width:  400px;
font-size: 40px;
padding: 10px 20px 10px 20px;
`;

const StyledClearButton = styled.div`
background-color: 'red';
width: 200px;
height: 200px;
`;

export class Input extends React.Component<IProps>{

    private onInput = (e: any) => {
        const { setTitle } = this.props;
        e.preventDefault();
        setTitle(e.target.value)
    }

    private onClear = () => {
        const { setTitle } = this.props;
        setTitle(' ');
    }

    public render() {
        return (
            <>
                <StyledInput onInput={this.onInput} />
                <StyledClearButton onClick={this.onClear}>
                    <button onClick={this.onClear}>Clear</button>
                </StyledClearButton>
            </>
        )
    }
}