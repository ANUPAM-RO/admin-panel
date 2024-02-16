import React from "react";
import { useNavigate } from "react-router-dom";

const Modal = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center backdrop-blur-sm overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6  mx-auto w-1/2">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full px-6 bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between py-5 rounded-t ">
              <h3 className="text-xl font=semibold">{props.name}</h3>
              <button
                className="bg-transparent border-0 text-black float-right"
                onClick={() => {
                  props.setShowModal(false);
                  props.setIsEdit(false);
                  navigate('/category')
                }}
              >
                <img src={props.isEdit ?  "../Vector.svg" : "./Vector.svg"} alt="" className="w-10 h-6" />
              </button>
            </div>
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
