import React from 'react';
import './style.css';
const demos = {
  soundcloud:
    '<iframe style="position: absolute;width:100%;height:100%;" scrolling="no" frameborder="no" allow="autoplay" src="https://kalburgimanjunath.github.io/danceforme/kids#/search/videos"></iframe>',
};

//codesandbox.io/s/react-iframe-demo-g3vst codePen =
function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : '' }}
    />
  );
}

export default function App() {
  return (
    <div className="App">
      <Iframe iframe={demos['soundcloud']} allow="autoplay" />,
    </div>
  );
}
