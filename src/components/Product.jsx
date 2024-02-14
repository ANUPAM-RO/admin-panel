import React from 'react'

const Product = () => {
  return (
    <div>
     

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead style={{color:"#121212"}}>
            <tr>
                <th scope="col" class="px-6 py-3">
                    S.no
                </th>
                <th scope="col" class="px-6 py-3">
                    Image
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    MRP
                </th>
                <th scope="col" class="px-6 py-3">
                    Stock
                </th>
                <th scope="col" class="px-6 py-3">
                    Credited
                </th>
                <th scope="col" class="px-6 py-3">
                    Invoice
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    #1
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="pl-10">
                    <img src="./Frame 48095891.svg" alt="" />
                </td>
                <td class="flex gap-8 py-4 text-right">
                    <img src="./Group 60.svg" alt="" className='cursor-pointer'/>
                   <img src="./Group 76.svg" alt="" className='cursor-pointer'/>
                   <img src="./Group 8.svg" alt="" className='cursor-pointer'/>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    #2
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    1999
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="pl-10">
                    <img src="./Frame 48095891.svg" alt="" />
                </td>
                <td class="flex gap-8 py-4 text-right">
                <img src="./Group 60.svg" alt="" className='cursor-pointer'/>
                   <img src="./Group 76.svg" alt="" className='cursor-pointer'/>
                   <img src="./Group 8.svg" alt="" className='cursor-pointer'/>
                </td>
            </tr>
         
        </tbody>
    </table>
</div>

    </div>
  )
}

export default Product
