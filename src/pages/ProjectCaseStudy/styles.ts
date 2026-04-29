import styled from "styled-components";
import { Link } from "react-router-dom";

export const Page = styled.main`
  max-width: 1180px;
  margin: 0 auto;
  padding: 52px 24px 100px;
`;

export const PageEmpathy = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;

  div {
    display: flex;
    gap: 20px;
  }
`;

export const BackLink = styled(Link)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.accentStrong};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Hero = styled.header`
  display:grid;
  grid-template-columns:.6fr .9fr;
  gap:20px;
  align-items:center;
  margin:20px 0 40px;
  
  @media(max-width:900px){
   grid-template-columns:1fr;
  }
`;

export const HeroContent = styled.header`
  margin: 20px 0 40px;

  h1 {
    font-size: clamp(38px, 5vw, 64px);
    margin: 8px 0;
    letter-spacing: -0.06em;
  }

  p,
  span {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const Description = styled.p`
  font-size: 22px;
  line-height: 1.6;
  font-weight: 400;
  max-width: 620px;
  margin: 18px 0 28px;
`;

export const HeroVisual = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  
  img{
   width:100%;
   max-width:520px;
   height:auto;
   display:block;
  }
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 64px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const SideNav = styled.nav`
  position: sticky;
  top: 96px;
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: 12px;

  a {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textSecondary};
    text-decoration: none;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.accentStrong};
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

export const Section = styled.section`
  scroll-margin-top: 96px;

  h2 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.7;
    max-width: 760px;
  }
`;

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const MetricCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align:center;
  min-height: 110px;
  padding: 24px;
  border-radius: 20px;
  border: solid 1px ${({ theme }) => theme.colors.accentStrong};
  background: ${({ theme }) => theme.colors.surface};

  h3 {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const Image = styled.div`
  margin-top: 32px;
//   min-height: 520px;
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const CaseFooter = styled.section`
  margin-top:140px;
  padding-top:72px;
  border-top:1px solid ${({theme}) => theme.colors.borderSoft};
  
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;
  gap:28px;
  
  h3{
   font-size:24px;
   margin:0 0 20px;
   font-weight: 500;
   letter-spacing:-0.03em;
  }
  
  div{
   display:flex;
   gap:16px;
   flex-wrap:wrap;
   justify-content:center;
  }
`;

export const FooterButton = styled(Link)<{variant?: "primary" | "secondary";}>`
  display:inline-flex;
  align-items:center;
  justify-content:center;
  
  padding:14px 28px;
  border-radius:999px;
  text-decoration:none;
  font-weight:500;
  font-size: 14px;
  
  transition:.25s ease;

  background:
  ${({variant,theme}) =>
  variant === "primary"
  ? theme.colors.accentStrong
  : "transparent"};
  
  color:
  ${({variant,theme}) =>
  variant === "primary"
  ? "#fff"
  : theme.colors.accentStrong};
  
  border:1px solid
  ${({theme})=>theme.colors.accentStrong};
  
  &:hover{
   transform:translateY(-2px);
  }
`;