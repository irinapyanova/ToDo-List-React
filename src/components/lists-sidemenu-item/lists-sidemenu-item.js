import './lists-sidemenu-item.css';

const ListsSidemenuItem = (props) => {
    const {name, complete} = props;

    let classNames = 'lists-sidemenu-item';
    if (complete) {
        classNames += ' complete'
    }

    return (
        <li className={classNames}>
            <a href="#" className="lists-sidemenu-item-link">
                <span className="lists-sidemenu-icon"></span>
                <p className="lists-sidemenu-item-text">{name}</p>
            </a>
        </li>
    )
}

export default ListsSidemenuItem;