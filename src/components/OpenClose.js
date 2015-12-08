import React from 'react';

function OpenClose({openAll, closeAll}) {
  return (<div>
    <button onClick={openAll} className="button button-big"><h3>Open all windows</h3></button>
    <button onClick={closeAll} className="button button-big"><h3>Close all windows</h3></button>
  </div>
  );
}

export default OpenClose;
