import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

render() {
    return(
        <div>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' style={{margin:"0 20px 0 0"}}/></NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link"  to='/'><span className="fa fa-users fa-lg"></span> Nhân Viên</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/Section'><span className="fa fa-id-card fa-lg"></span> Phòng Ban</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link"  to='/salary'><span className="fa fa-money fa-lg"></span> Bảng Lương</NavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
  }
}

export default Header;