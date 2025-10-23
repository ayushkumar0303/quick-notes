import React from "react";

function TaskCard() {
  return (
    <div className="w-full flex items-start p-4 rounded-sm shadow-md gap-3 border-1">
      <input type="checkbox" id="checks" className="m-1.5" />
      <label htmlFor="checks" className="flex flex-col justify-start">
        <p>Peer React</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim cumque
          libero perferendis eos.
        </p>
      </label>
    </div>
  );
}

export default TaskCard;
