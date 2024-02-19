import React from 'react'
import { useUser } from '../hooks/useUser';

const UserForm = () => {
    const { user ,handleChange, handleNewUser, navigate } = useUser();
  return (
     <div>
      <p className="font-bold text-xl pb-4">
        Add New Customer
          </p>
          <hr />
      <div className="flex flex-col gap-3 mt-4">
 
        <div className="flex flex-col gap-2">
          <label for="default-input" className="font-semibold">
            First Name
          </label>
          <input
            type="text"
            id="default-input"
            name="fname"
            value={user?.fname}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5"
            onChange={handleChange}
          ></input>
        </div>
 
        <div className="flex flex-col gap-2">
          <label for="default-input" className="font-semibold">
            Last Name
          </label>
          <input
            type="text"
            id="default-input"
            name="lname"
            value={user?.lname}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5"
            onChange={handleChange}
          ></input>
        </div>
 
        <div className="flex flex-col gap-2">
          <label for="default-input" className="font-semibold">
            Phone Number
          </label>
          <input
            type="text"
            id="default-input"
            name="phone"
            value={user?.phone}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5"
            onChange={handleChange}
          ></input>
              </div>
        <div className="flex flex-col gap-2">
          <label for="default-input" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            id="default-input"
            name="email"
            value={user?.email}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5"
            onChange={handleChange}
          ></input>
              </div>
      
        <div className="flex flex-col gap-2">
          <label for="message" className="font-semibold">
           Address
          </label>
          <textarea
            id="message"
            name="address"
            value={user?.address}
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border"
            onChange={handleChange}
          ></textarea>
        </div>
    <div className="flex flex-col gap-2">
          <label for="default-input" className="font-semibold">
           Delivery Boy
          </label>
          <input
            type="text"
            id="default-input"
            name="deliBoy"
            value={user?.deliBoy}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5"
            onChange={handleChange}
          ></input>
              </div>
      </div>
      <div className="my-6 flex justify-between">
        <button
          type="button"
          style={{ backgroundColor: "#00AB7F", color: "#FFFFFF" }}
          className="text-white px-8 py-1"
          onClick={handleNewUser}
        >
          Submit
        </button>
        <button
          type="button"
          style={{ backgroundColor: "#047DCE", color: "#FFFFFF" }}
          className="text-white px-8 py-1"
          onClick={() => navigate("/user")}
        >
          Back
        </button>
      </div>
    </div>
  )
}

export default UserForm
