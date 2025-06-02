// import styles from "./Footer.module.css";
import styled from "styled-components";
import Typography from "../UI/typography/Index";

const StyledFooter = styled.footer`
  background-color: #4361ee;
  color: #fff;
  padding: 1rem;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <Typography.Heading>Movie App</Typography.Heading>
      <Typography.Paragraph>Created By Sri Lusiana</Typography.Paragraph>
    </StyledFooter>
  );
}

export default Footer;
