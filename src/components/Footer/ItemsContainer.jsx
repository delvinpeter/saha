import Item from "./Item";
import "./footer.css"
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT,Icons } from "./Menus";
const ItemsContainer = () => {
  return (
    <>
    <div className="total">
    <div className="link-main">
      <Item Links={PRODUCTS} title="PRODUCTS" />
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={COMPANY} title="COMPANY" />
    
    </div>
    <div className="soical">
    <Item Links={Icons} title="SUPPORT" />
    </div>
    </div>
    </>
  );
};

export default ItemsContainer;
