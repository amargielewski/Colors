import { Colors } from "types/colors";
import { Badge } from "components/Badge/Badge";
import { CSSProperties } from "react";
import "./List.scss";

type ListProps = { data: Colors; handleRemove: (id: string) => void };

export const List = ({ data, handleRemove }: ListProps) => {
  return (
    <div className="color-list-wrapper">
      {data.map(({ id, hex, rgb, defaultItem }) => (
        <div className="color-list-item" key={id}>
          <div
            style={{ "--box-color": hex } as CSSProperties}
            className="color-list-box-value"
          ></div>
          <div className="color-list-text-container">
            <p className="color-list-item-text color-list-item-text--hex">
              {hex}
            </p>
            <p className="color-list-item-text color-list-item-text--rgb">
              {rgb}
            </p>
          </div>
          <div className="color-list-badge">
            {!defaultItem ? (
              <Badge variant="remove" onClick={() => handleRemove(id)}>
                remove
              </Badge>
            ) : (
              <Badge>default</Badge>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
