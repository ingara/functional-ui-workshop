import React from 'react';
import { connect } from 'react-redux';

import Form from './Form';
import Overview from './WindowList';
import OpenClose from '../components/OpenClose';
import { AppActions } from '../actions';

function Admin({openAllWindows, closeAllWindows}) {
  return (
    <div className="admin-wrapper">
      <div className="left-menu">
        <OpenClose openAll={openAllWindows}
                   closeAll={closeAllWindows}/>
        <Form/>
      </div>
      <Overview />
    </div>
  );
}

export default connect(null, {openAllWindows: AppActions.openAllWindows, closeAllWindows: AppActions.closeAllWindows})(Admin);
