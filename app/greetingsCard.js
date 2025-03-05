'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GreetingsCard = () => {
    const [isUnfolded, setIsUnfolded] = useState(false);

    return (
      <div className="w-[100%] h-[80%] flex justify-center items-center overflow-hidden">
        <motion.div 
          className="relative w-full h-[82%] origin-center justify-center items-center"
          onClick={() => setIsUnfolded(!isUnfolded)}
        >
          {/* Card Container */}
          <motion.div 
            className="absolute justify-center items-center inset-0 bg-gray-100 shadow-lg overflow-hidden rounded-3xl"
            initial={{ 
              width: '50%', 
              left: '25%'
            }}
            animate={{ 
              width: isUnfolded ? '40%' : '20%',
              left: isUnfolded ? '30%' : '40%'
            }}
            transition={{ 
              duration: 0.6, 
              type: "spring", 
              stiffness: 300, 
              damping: 30 
            }}
          >
            {/* Folded Half (Cover) */}
            <motion.div 
              className="absolute left-0 w-full h-full bg-gradient-to-br from-pink-400 to-pink-600 flex justify-center items-center"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: isUnfolded ? -180 : 0 }}
              transition={{ 
                duration: 0.6, 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }}
            >
              <h2 className="text-xl font-bold text-white text-center">
                {isUnfolded ? '' : 'Click to Open'}
              </h2>
            </motion.div>
  
            {/* Unfolded Content */}
            {isUnfolded && (
              <motion.div 
                className="absolute inset-0 bg-white flex flex-col justify-start items-start p-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h1 className="text-xl font-bold mb-2 text-gray-800 text-center">
                  HIII, DEAAAR! HAHAHAHAHA
                </h1>
                <p className="text-md text-justify text-gray-700">
                  Happy 23rd birthday pooo! 🎉 HAHAHAHAHA. Seriously, since there's no way man
                  to give you a card today kay you wanna have the day for yourself man, Imma do it like this nalang
                  HAHAHAHAHA (even though I know cornyhan ka ani ba). Anywaysss, have a wonderful birthday nya pooo.
                  Bought you Palagi tix for TJ's concert as a gift, I hope that would be enough to put a smile on your
                  face for your birthday. Always remember that this world is better having you in it (bringer of positivity yarn HAHAHAHA).
                  Stay pretty (though given naman ni). Thank you for existing dear ❤. Rooting for more good things to happen to you.
                  <br/>
                  <br/>
                  "suddenly, of all there is to see in this world, I see only you."
                  <br/>
                  <br/>
                  -K
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    );
};

export default GreetingsCard;