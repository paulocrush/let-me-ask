import styled from "styled-components";
import {Container as LogoContainer} from "../components/Letmeask/styles";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height:100vh;
`;

export const Left = styled.div`
  flex:7;
  background-color:${({ theme }) => theme.title === "light" ? theme.colors.purple.light : theme.colors.purple.dark};

  display:flex;
  flex-direction:column;
  justify-content:center;
  padding:120px 80px;
  color:${({ theme }) => theme.colors.white.medium};

  & > img{
    max-width:320px;
  }
  
  & > strong{
    font: 700 ${({ theme }) => theme.font.sizes.xl} ${({ theme }) => theme.font.primary};
    line-height:4.2rem;
    margin-top:1.6rem;
  }

  & > p{
    font-size: ${({ theme }) => theme.font.sizes.lg};
    line-height:${({ theme }) => theme.spacings.lg};
    margin-top:${({ theme }) => theme.spacings.md};
    color:${({ theme }) => theme.colors.white.light};
  }
`;

export const Right = styled.div`
  flex:8;

  padding:0 ${({ theme }) => theme.spacings.xl};

  display:flex;
  align-items:center;
  justify-content:center;
`;

export const Content = styled.div`
  display:flex;
  flex-direction:column;
  align-items:stretch;
  justify-content:center;

  width:100%;
  max-width:320px;

  text-align:center;

  & > ${LogoContainer}{
    align-self:center;
  }

  h2{ 
    font-size:${({ theme }) => theme.font.sizes.lg};
    margin:${({ theme }) => theme.spacings.xxl} 0 ${({ theme }) => theme.spacings.lg};
    font-family:${({ theme }) => theme.font.primary};
    color:${({ theme }) => theme.title === "light" ? theme.colors.black : theme.colors.white.medium};
  }

  &>p{
    font-size:${({ theme }) => theme.font.sizes.sm};
    color:${({ theme }) => theme.title === "light" ? theme.colors.gray.dark : theme.colors.gray.light};
    margin-top:${({ theme }) => theme.spacings.md};
    
    >a{
      color:${({ theme }) => theme.colors.pink.medium};
      text-decoration:none;
    }
  }
`;

export const Separator = styled.div`
  font-size:${({ theme }) => theme.font.sizes.sm};
  color:${({ theme }) => theme.colors.gray.medium};

  margin:${({ theme }) => theme.spacings.xl} 0;

  display:flex;
  align-items:center;

  &::before{
    content:"";
    flex:1;
    height:1px;
    background:${({ theme }) => theme.colors.gray.medium};
    margin-right:${({ theme }) => theme.spacings.md};
  }
  &::after{
    content:"";
    flex:1;
    height:1px;
    background:${({ theme }) => theme.colors.gray.medium};
    margin-left:${({ theme }) => theme.spacings.md};
  }
`;