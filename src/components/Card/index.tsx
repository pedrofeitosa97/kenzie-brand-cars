import { CardStyle } from "./style";
import { themes } from '../../styles/variables';

export function Card({ iten }: any) {
  return (
    <CardStyle color={themes.colors.grey7}>
      <div className="div--img">
        <img src={`${iten.image}`} alt="car img" />
      </div>
      <h2 className="h2--car-name">{`${iten.mark} - ${iten.model}`}</h2>
      <p>{iten.description}</p>
      <div className="div--name-logo">
        <div>IDK</div>
        <div className="div--seller-name">{iten.owner}</div>
      </div>
      <div>
        <div>
          <div className="div--description-tag">{iten.km} KM</div>
          <div className="div--description-tag">{iten.year}</div>
        </div>
        <div>
          <h2 className="h2--price">R$ {iten.price},00</h2>
        </div>
      </div>
    </CardStyle>
  );
}
