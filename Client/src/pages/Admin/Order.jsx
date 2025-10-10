import React from 'react'
import { useAppContext } from '../../context/AppContext'
import { MdOutlineDeleteForever } from "react-icons/md";
import toast from 'react-hot-toast';

function Order() {

  const {orders,axios, fetchOrders} = useAppContext();

  const deleteOrder = async (id) =>{
    try {
      const {data} = await axios.post('/api/order/delete',{id})
      if(data.success){
        fetchOrders();
        toast.success(data.message)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='w-[350px] sm:w-[600px] lg:w-full p-4 dark:bg-darkBg'>
     {/* <table className='table-fixed md:table-auto w-full overflow-x-auto'>
      <thead>
        <tr className='dark:text-white border-b-2 border-gray-300'>
          <th>Product</th>
          <th className='py-4 hidden md:block'>Email</th>
          <th>Mobile</th>
          <th className='py-4'>City</th>
          <th className='hidden md:block'>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className='text-center'>
        {orders.map((order,index)=>(
          <tr key={index} className='border-b-2 border-gray-300 dark:text-white py-3 overflow-x-auto'>
          <td className='py-4'>{order.product_name}</td>
          <td className='py-4'>{order.email}</td>
          <td className='py-4'>{order.mobile}</td>
          <td className='py-4'>{order.city}</td>
          <td>{order.name}</td>
          <td className='py-4'><span className='text-red-600 text-2xl cursor-pointer'><MdOutlineDeleteForever /></span></td>
        </tr>
        ))}
     
      </tbody>
     </table> */}
     <div className='overflow-x-auto bg-white dark:bg-darkBg rounded-lg shadow-lg'>
       <table data-slot="table" className="w-full text-left overflow-hidden">
          <thead data-slot="table-header" className="bg-gray-50 dark:bg-secondary/50">
            <tr data-slot="table-row" className='font-medium text-gray-500 dark:text-white'>
              <th data-slot="table-head" className="px-4 py-3 text-xs  uppercase tracking-wider md:px-6">
                Product
              </th>
              <th data-slot="table-head" className="px-4 py-3 text-xs  uppercase tracking-wider md:px-6">
                Email
              </th>
              <th data-slot="table-head" className="px-4 py-3 text-xs  uppercase tracking-wider md:px-6">
                Mobile
              </th>
              <th data-slot="table-head" className="px-4 py-3 text-xs  uppercase tracking-wider md:px-6">
                City
              </th>
              <th data-slot="table-head" className="px-4 py-3 text-xs  uppercase tracking-wider md:px-6">
                Name
              </th>
              <th data-slot="table-head" className="px-4 py-3 text-xs uppercase tracking-wider md:px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody data-slot="table-body" className="bg-white divide-y divide-gray-200 dark:bg-darkBg">
            {orders.map((order, index) => (
              <tr
                key={index}
                data-slot="table-row"
                className="border-b text-gray-900 border-gray-200 dark:text-gray-200"
              >
                <td
                  className="px-4 py-2 text-sm  md:table-cell"
                  data-slot="table-cell"
                >
                  {order.product_name}
                </td>
                <td
                  className="px-4 py-2 text-sm  md:table-cell"
                 data-slot="table-cell"
                >
                  {order.email}
                </td>
                <td
                  className="px-4 py-2 text-sm  md:table-cell"
               data-slot="table-cell"
                >
                  {order.mobile}
                </td>
                <td
                  className="px-4 py-2 text-sm md:table-cell"
                  data-slot="table-cell"
                >
                  {order.city}
                </td>
                <td
                  className="px-4 py-2 text-sm  md:table-cell"
          data-slot="table-cell"
                >
                  {order.name}
                </td>
                <td data-slot="table-cell" className="px-4 py-2 text-sm md:table-cell">
                  <span onClick={()=>deleteOrder(order._id)} className="text-red-600 text-2xl cursor-pointer">
                    <MdOutlineDeleteForever />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
     </div>
     </div>
  )
}

export default Order