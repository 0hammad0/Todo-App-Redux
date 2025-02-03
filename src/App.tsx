import { GrNotes } from "react-icons/gr";
import { FaCircleCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const App = () => {
  const [isTaskCompleted, setIsTaskCompleted] = useState<boolean>(false);

  return (
    <div className="flex justify-center items-center h-screen py-10 overflow-none w-full bg-gradient-to-br from-indigo-700 to-purple-500">
      <div className="bg-white w-4/5 rounded-xl p-14">

        <h1 className="text-[#00063E] text-3xl font-semibold flex items-center gap-8">To-Do List <GrNotes color="#ff734d" /></h1>

        <div className="flex items-center bg-zinc-200 rounded-full my-5 mb-14">
          <input type="text" name="task" id="task" placeholder="Add your task" className="bg-[inherit] ml-5 p-4 outline-none w-full" />
          <button className="bg-[#FF5942] text-white font-semibold rounded-full p-5 px-20 hover:bg-[#fa4747] duration-200">ADD</button>
        </div>

        <div className="overflow-auto h-[65vh]">

          <div className="flex items-center gap-5 justify-between hover:bg-zinc-100 p-2 rounded-3xl duration-300 cursor-pointer">
            <div className="flex items-center gap-5 w-full" onClick={() => setIsTaskCompleted(!isTaskCompleted)}>
              {isTaskCompleted ? <FaCircleCheck color="FD5749" size={28} /> : <FaRegCircle color="DADADA" size={28} />}

              <p className={`${isTaskCompleted && "line-through text-[#DADADA]"}`}>Complete Todo list using redux</p>
            </div>

            <RxCross2 color="8A8A8A" size={28} />
          </div>

        </div>

      </div>
    </div>
  )
}

export default App
