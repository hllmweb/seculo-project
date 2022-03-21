import Link from "next/link";
import styled from "styled-components";

const Header = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: yellow;
`;
const Logo = styled.div`
  background: blue;
  color: black;
`;

const Nav = styled.div`
  color: #000;

  ul{
    list-style:none;
    display:flex;
    flex-direction:row;
    justify-content: flex-end;
  }
  li{
    margin: 0 20px;
  }
  a{
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1rem;
  }
`;

export default function Home() {
  return (
    <Header>
      <Logo><Link href="/"><a><img src="./images/logo-seculo.png" alt="Escola do Futuro | Colégio Centro Educacional Século"/></a></Link></Logo>
      <Nav>
        <ul>
          <li><Link href="/"><a>O Século</a></Link></li>
          <li><Link href="/"><a>Educação Infantil</a></Link></li>
          <li><Link href="/"><a>Ensino Fundamental</a></Link></li>
          <li><Link href="/"><a>Ensino Médio</a></Link></li>
          <li><Link href="/"><a>Blog</a></Link></li>
          <li><Link href="/"><a>Contato</a></Link></li>
          <li><Link href="/"><a>Portal</a></Link></li>
        </ul>
      </Nav>
    </Header>
  )
}