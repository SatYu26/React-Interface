import React, { Component } from "react";

class ListAppointments extends Component {
  render() {
    const ListItems = this.props.appointments.map((item) => {
      return (
        <div>
          <div>{item.petName}</div>
          <div>{item.ownerName}</div>
        </div>
      );
    });

    return <div>{ListItems}</div>;
  }
}

export default ListAppointments;
