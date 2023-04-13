import { HeaderStyle } from "./style";
import { themes } from '../../styles/variables';

export default function Header() {
  return (
    <HeaderStyle whiteFixed={themes.colors.whiteFixed} grey2={themes.colors.grey2} >
      <div className="header_fade">
        <h1>Motors Shop</h1>
        <p>A melhor plataforma de anúncios de carro do país</p>
      </div>
    </HeaderStyle>
  );
}
