import React from 'react'

function Table(props) {
    return (

        <div>
            <table  className="mt-5 shadow bg-white rounded  table table-hover " align="center">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                    </tr>
                </thead>
                {console.log('asdf',props.data)}
                {props.data?.map((item,index) => {
                    return<tbody> <tr key={index}>
                        <td >{item.firstName}</td>
                        <td >{item.lastName}</td>
                        <td >{item.gender}</td>
                        <td >{item.phoneNumber}</td>
                        <td >{item.email}</td>
                    </tr>
                    </tbody>})}
            </table>
        </div>

    )
}

export default Table
