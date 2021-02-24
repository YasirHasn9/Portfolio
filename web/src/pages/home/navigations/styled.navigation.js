import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
`;

export const Navbar = styled.nav`
  display: flex;
  width: 100%;

  .logo {
    flex-grow: 1;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: #33ff33;
      font-size: 2rem;
      border: 1px solid #33ff33;
      padding: 2rem;
      border-radius: 100%;
    }
  }
  ul {
    flex-grow: 3;
    height: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    li {
      margin-right: 2%;
      padding: 1rem 2rem;
      border: 1px solid #000;
      a {
        width: 100%;
        text-decoration: none;
        color: #33ff33;
        font-size: 1.6rem;
      }
    }
  }
`;
