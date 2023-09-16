import React, { useEffect } from 'react';

function Complier() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://rcw.s3.ap-southeast-1.amazonaws.com/widget.js';
    script.async = true;
    document.getElementById('runcode').appendChild(script);

    return () => {
      document.getElementById('runcode').removeChild(script);
    };
  }, []);

  return (
    <div id="runcode" data-key="a047f18b25e2f0211c07ce67d52ce048">
        
    </div>
  );
}

export default Complier;
