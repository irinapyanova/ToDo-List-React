import ListsSidemenuItem from '../lists-sidemenu-item/lists-sidemenu-item';
import './lists-sidemenu.css';

const ListSidemenu = ({allLists}) => {
    const elements = allLists.map(item => {
        const {id, ...itemProps} = item;
        return(
            <ListsSidemenuItem
            key={id}
            {...itemProps}
            />
        );
    })
    return (
        <div>
            <h2 className='sidemenu-title'>My lists</h2>
            <ul className="sidemenu-items">
                {elements}
            </ul>
        </div>
    )
}

export default ListSidemenu;