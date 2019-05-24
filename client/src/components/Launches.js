import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const LAUNCHES_QUERY = gql`
  query LAUNCHES_QUERY {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

class Launches extends Component {
  render() {
    return (
      <div>
        <h2>Hey</h2>
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <div>Loading, Please Wait :)</div>;

            if (!loading) {
              console.log(data);
              return <div>Here!</div>;
            }
          }}
        </Query>
      </div>
    );
  }
}

export default Launches;
