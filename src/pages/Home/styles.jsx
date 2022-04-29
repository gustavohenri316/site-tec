import styled from "styled-components";

export const Infos = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 14%;
`
export const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    
`
export const Image = styled.div`
    padding: 0 8rem;
    img{
        margin-top: 50px;
        width: 700px;
        height: 500px;
    }
`
export const Text = styled.h2`
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    color: #01032D;
    
    `

export const TextTypical = styled.h2`
    margin-top: -50px;
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    color: #6E37E1;
    `
export const Botao = styled.button`
    width: 200px;
    height: 60px;
    background: #6E37E1;
    border-radius: 35.5px;
    border: none;
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    cursor: pointer;

    a{
        text-decoration: none;
        color: #FFFFFF;
    }

`

export const Inovacao = styled.div`
    padding-top: 10rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    h2{
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 42px;
        color: #01032D;
    }
    div{
        padding-bottom: 8rem;
        display:flex;
        align-items: center;
        justify-content: space-evenly;
    }
`

export const BemVindo = styled.div`
    text-align: center;
    h4{
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 26px;
        color: #595959;
    }
    h3{
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 42px;
        color: #01032D;
    }
    p{
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 37px;
        text-align: center;
        color: #595959;

    }
    div{
        padding-top: 3rem;
        display: flex;
        justify-content: space-around;
    }
`