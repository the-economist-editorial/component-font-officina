import React from 'react';

export default class FontOfficina extends React.Component {

  static get propTypes() {
    return {
      children: React.PropTypes.node.isRequired,
    };
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
