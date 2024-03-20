import { useState } from "react";
import { motion } from "framer-motion";
function App() {
  const [rotate, setrotate] = useState(false);

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-gradient-to-tr from-pink-600 to-blue-700">
        <motion.div
          animate={{rotate:rotate ? 180 : 0 }}
          // transition={{type:"tween",duration:1}}
          transition={{type:"spring",damping:20}}
          drag dragConstraints={{left:10,right:10}}
          onClick={()=>{
            setrotate(!rotate)
          }}
          className="w-44 h-32 rounded-xl shadow-xl bg-white cursor-pointer"
        >
          hello
        </motion.div>
      </div>
    </>
  );
}

export default App;
