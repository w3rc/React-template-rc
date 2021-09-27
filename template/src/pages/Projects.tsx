import React from 'react'
import styled from 'styled-components';

const Project: React.FC = () => {
    return (
        <Text>
            Project Dashboard
        </Text>
    )
}

export default Project;

const Text = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    color: #000000;
`;