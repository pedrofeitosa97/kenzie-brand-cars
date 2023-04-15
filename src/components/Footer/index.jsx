import { FooterDivStyle } from "./style";

export default function Footer() {
  return (
    <FooterDivStyle>
      <div className="nav_div_1">
        <h2>Motors</h2>
        <p>shop</p>
      </div>
      <div>© 2022 - Todos os direitos reservados.</div>
      <a href="#footer-anchor">
        <div className="anchor_main">^</div>
      </a>
    </FooterDivStyle>
  );
}
