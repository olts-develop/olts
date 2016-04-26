import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


class appNavigation extends React.Component {

      render(){


            return(

                  <Navbar>
                        <Nav>
                              <NavDropdown eventKey={1} id="order" title="Order">
                                    <MenuItem eventKey={1.1} href="/app/order">Order</MenuItem>
                                    <MenuItem eventKey={1.2} href="/app/agenda">Agenda</MenuItem>
                                    <MenuItem eventKey={1.3} href="/app/actionlist">Order action list</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={1.3}>Search allotment</MenuItem>
                              </NavDropdown>
                              <NavDropdown eventKey={2} id="data" title="Data">
                                    <MenuItem eventKey={2.1}>Flight</MenuItem>
                                    <MenuItem eventKey={2.2}>Train</MenuItem>
                                    <MenuItem eventKey={2.3}>Bus</MenuItem>
                                    <MenuItem eventKey={2.3}>Ship</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={2.4}>Car</MenuItem>
                                    <MenuItem eventKey={2.5}>Hotel</MenuItem>
                                    <MenuItem eventKey={2.6}>Arrangement</MenuItem>
                                    <MenuItem eventKey={2.7}>Misc</MenuItem>
                                    <MenuItem eventKey={2.8}>Text</MenuItem>
                              </NavDropdown>
                              <NavItem eventKey={3} id="customer">Customer</NavItem>
                              <NavItem eventKey={4} id="dms">DMS</NavItem>
                              <NavDropdown eventKey={5} id="cash" title="Cash">
                                    <MenuItem eventKey={5.1}>Impersonal acount booking</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={5.2}>Cash up</MenuItem>
                                    <MenuItem eventKey={5.3}>Cash history</MenuItem>
                                    <MenuItem eventKey={5.4}>open cash</MenuItem>
                              </NavDropdown>
                              <NavItem eventKey={6} id="statistic">Statistic</NavItem>
                              <NavItem eventKey={7} id="parameter">Parameter</NavItem>
                              <NavDropdown eventKey={8} id="setup" title="Setup">
                                    <MenuItem eventKey={8.1} href="/app/userauth">User Accounts</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={8.2} href="/app/employee">Employee</MenuItem>
                              </NavDropdown>
                              <NavItem eventKey={9} id="system">System</NavItem>
                        </Nav>

                  </Navbar>

            )
      }
};

export default appNavigation;
