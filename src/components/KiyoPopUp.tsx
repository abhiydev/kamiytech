"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

/**
 * KiyoPopup renders the Kiyo character floating within the same
 * dimensions as the original Hero image placeholder, plus an always-visible
 * speech bubble popping from her mouth.
 */
export default function KiyoPopup() {
  return (
    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-visible">

      {/* Floating Kiyo image (fills container) */}
      <motion.div
        className="relative w-full h-full"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image
          src="/kiyo.png"
          alt="Kiyo Character"
          fill
          className="object-contain z-10"
        />
      </motion.div>
    
        

    </div>
  );
}


//        {/* </div><motion.div */}
        // {/* </div>  className="absolute top-4 right-4 bg-white rounded-xl p-4 shadow-lg w-40 flex items-start" */}
    //   {/* </div>  initial={{ scale: 0, opacity: 0 }} */}
    //  </div>  animate={{ scale: 1, opacity: 1 }
    //   </div>  transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.3 }}
    //   </div>>
    //   </div>  {/* SVG tail pointing downwards toward Kiyo */}
    //   </div>  <svg
    //   </div>    className="absolute -bottom-3 right-12"
    //   </div>    width="32"
    //   </div>    height="16"
    //   </div>    viewBox="0 0 32 16"
    //   </div>    fill="none"
    //   </div>    xmlns="http://www.w3.org/2000/svg"
    //   </div>  >
    //  </div>    <path
    //   </div>      d="M16 16L4 0H28L16 16Z"
    //   </div>      fill="white"
    //   </div>      stroke="#D1D5DB"
    //   </div>      strokeWidth="1"
    //   </div>    />
    //   </div>  </svg>
// </div>
    //   </div>  <div className="relative z-20 pr">
    //  </div>    <h4 className="text-sm font-bold text-gray-900">Hi, I am Kamiy!</h4>
    //   </div>    <p className="text-xs text-gray-600">Your digital assistant</p>
    //   </div>  </div>
    //   </div></motion.div>