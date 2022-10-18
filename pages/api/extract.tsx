import React from "react";
import styled from "@emotion/styled";
import Sidebar from "../../components/Sidebar";

const ExtractContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`
export default function Extract() {
    return (
        <ExtractContainer>
            <Sidebar/>
            <h1>Extrato</h1>
            Aqui virá a listagem de extrato
        </ExtractContainer>
    )
}