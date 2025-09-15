import React from 'react';

const TrustIndicators = () => {
    return (
         <div className="flex justify-center items-center gap-8 mt-12 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <span><Lock /></span>
                <span>SSL secure</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Money-back guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <span><Star/></span>
                <span>Satisfaction guaranteed</span>
              </div>
            </div>
    );
};

export default TrustIndicators;