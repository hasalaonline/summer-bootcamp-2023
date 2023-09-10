import "./ListItems.css";

const ListItems = (props) => {
  const { title, items, selectedItem = null, onSelect } = props;

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => {
          const isSelected = selectedItem === item;
          return (
            <li
              className={isSelected ? "list-item-selected" : "list-item"}
              key={item}
              onClick={() => onSelect(item, index)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListItems;
