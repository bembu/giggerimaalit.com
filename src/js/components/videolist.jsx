import React from 'react';

export default React.createClass({

  render: function() {
    var list = this.props.videos.map(function (vid) {
      return (<li key={vid} onClick={this.props.selectVideo.bind(null, vid)}>{vid}</li>);
    }, this);

    return (
      <ul>
        {list}
      </ul>
    );
  }
});
