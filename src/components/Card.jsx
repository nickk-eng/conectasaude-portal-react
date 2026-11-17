import { ArrowUpRight } from "lucide-react";
import Icon from "./Icon";
export default function Card({ item, index = 0, onDetails }) {
  return (
    <article className={"feature-card feature-card--" + item.icon}>
      <div className="card-top">
        <span className="icon-box">
          <Icon name={item.icon} />
        </span>
        <span className="card-number">0{index + 1}</span>
      </div>
      <span className="card-category">{item.category}</span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      {onDetails && (
        <button className="text-link" onClick={() => onDetails(item)}>
          Explorar módulo <ArrowUpRight size={17} />
        </button>
      )}
    </article>
  );
}
