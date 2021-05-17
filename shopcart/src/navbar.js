import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Navbar,NavbarBrand,Nav} from 'reactstrap';

export default function NavBar() {
    return (
        {},
        <Navbar color="primary" light expand="md">
            <NavbarBrand>Shop to React</NavbarBrand>
            <Nav>
            </Nav>
            <FontAwesomeIcon icon={faShoppingCart} /> 0 items
</Navbar>
    )
}

