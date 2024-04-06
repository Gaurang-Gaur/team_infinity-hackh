import './Inventory.css';
import Filter from '../../components/Filter/Filter';
import ListItems from '../../components/ListItems/ListItems';

const Inventory = () => {
  return (
    <div className="inventory">
        <Filter />
        <ListItems />
    </div>
  )
}

export default Inventory