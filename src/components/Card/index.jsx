import { CardStyle } from "./style";

export function Card({ iten }) {
  return (
    <CardStyle>
      <div className="div--img">
        <img src={`${iten.image}`} alt="car img" />
      </div>
      <h2 className="h2--car-name">{`${iten.mark} - ${iten.model}`}</h2>
      <p>{iten.description}</p>
      <div className="div--name-logo">
        <div className="div--seller-logo">
          {iten.owner
            .split(" ")
            .slice(0, 2)
            .map((parte) => parte.charAt(0).toUpperCase())
            .join("")}
        </div>
        <div className="div--seller-name">{iten.owner}</div>
      </div>
      <div className="div--price--description">
        <div className="div--descriptions">
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
