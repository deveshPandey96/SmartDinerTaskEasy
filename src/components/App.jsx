import React, { useState } from 'react';
import Modal from './Modal';



function App() {
    const [show, visible] = useState(false);

    function Close(){
        visible(false);
      
    }

    return (
      <div>
        <button onClick={()=> visible(true)}>Show Modal</button>
        <Modal 
          onClose={Close}
          show={show}
        />
      </div>
    );
}

export default App;
