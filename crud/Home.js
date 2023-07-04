import React, { Fragment } from 'react';
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from "./Employee";


const Home= () => {
    const deleteHandler = (id) => {
        var index = Employee.map(function (e) {
            return e.id
        }).indexOf(id);
        Employee.splice(index, 1);
        return (
      
            <Fragment>
              <h1>Sanjay</h1>
                <div style={{ margin: "10rem" }} >
                    <Table stripped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>
                                    <h2>Name</h2>
                                </th>
                                <th>
                                    <h2>Age</h2>
                                </th>
                                <th>
                                    <h2>Actions</h2>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Employee && Employee.length > 0
                                    ?
                                    Employee.map((item) => {
                                        return (
                                            <tr>
                                                <td>
                                                    {item.name}
                                                </td>
                                                <td>
                                                    {item.Age}
                                                </td>
                                                <td>
                                                    <Button onClick={() => (item.id)}>Delete </Button> &nbsp;
                                                    <Button onClick={() => alert(item.id)}>Edit</Button> &nbsp;
                                                    <Button onClick={() => deleteHandler(item.id)}>Update</Button> &nbsp;
                                                </td>
                                            </tr>
                                        )
                                    })
                                    :
                                    "No data available"
                            }
                        </tbody>
                    </Table>
                </div>
            </Fragment>

        );
    }
}
export default Home;
