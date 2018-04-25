import React from "react";
import Relay from "react-relay";

// Your React component
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.latestPost.text}</h1>
        <span>Post ID : {this.props.latestPost.id}</span>
        <br />
        <span>Author ID : {this.props.currentAuthor.id}</span>
        <br />
        <span>Author Name : {this.props.currentAuthor.name}</span>
      </div>
    );
  }
}

// Your Relay container.
// Compose your React components with a declaration of
// the GraphQL query fragments that fetch their data.
export default Relay.createContainer(App, {
  fragments: {
    latestPost: () => Relay.QL`
      fragment on Post {
        id
        text
      }
    `,
    currentAuthor: () => Relay.QL`
      fragment on Author {
        id
        name
      }
    `
  }
});
