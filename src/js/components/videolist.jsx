import React from 'react';

export default React.createClass({

  render: function() {

    var videos = this.props.videoInfo ? this.props.videoInfo["files"] : [];
    var info = this.props.videoInfo;

    var list = videos.map(function (filename) {
      console.log(info);

      var name = filename;
      info["videos"].forEach(function(v) {
        if (filename === v["file"]) {
          name = v["name"];
        }
      });

      return (<li key={filename} onClick={this.props.selectVideo.bind(null, filename)}>{name}</li>);
    }, this);

    return (
      <ul>
        {list}
      </ul>
    );
  }
});
