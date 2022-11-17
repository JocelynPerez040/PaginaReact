import React from 'react';
import '../css/galaxy.css';

function galaxy(props) {
  return (
    <div>
      <img class='App-logo'
        src={require(`../images/galaxy-${props.imagen}.png`)}
        alt='' />
      <div>
        <p>
          <strong>{props.titulo}</strong>
        </p>
        <p>
          {props.definicion}
        </p>
      </div>
    </div>
  );
}

export default galaxy;