import React from 'react'

function Order() {

  const orderList = [
    {
      product: "Doctile iron",
      email: "rohit@gmail.com",
      mobile: "9830264585",
      city: "Kolkata",
      subject: "Need 400 tons of Steel"
    },
    {
      product: "Doctile iron",
      email: "rohit@gmail.com",
      mobile: "9830264585",
      city: "Kolkata",
      subject: "Need 400 tons of Steel"
    },
    {
      product: "Doctile iron",
      email: "rohit@gmail.com",
      mobile: "9830264585",
      city: "Kolkata",
      subject: "Need 400 tons of Steel"
    },
    {
      product: "Doctile iron",
      email: "rohit@gmail.com",
      mobile: "9830264585",
      city: "Kolkata",
      subject: "Need 400 tons of Steel"
    },
    {
      product: "Doctile iron",
      email: "rohit@gmail.com",
      mobile: "9830264585",
      city: "Kolkata",
      subject: "Need 400 tons of Steel"
    },
    {
      product: "Doctile iron",
      email: "rohit@gmail.com",
      mobile: "9830264585",
      city: "Kolkata",
      subject: "Need 400 tons of Steel"
    },
    {
      product: "Doctile iron",
      email: "rohit@gmail.com",
      mobile: "9830264585",
      city: "Kolkata",
      subject: "Need 400 tons of Steel"
    },
    {
      product: "Doctile iron",
      email: "rohit@gmail.com",
      mobile: "9830264585",
      city: "Kolkata",
      subject: "Need 400 tons of Steel"
    },
    {
      product: "Doctile iron",
      email: "rohit@gmail.com",
      mobile: "9830264585",
      city: "Kolkata",
      subject: "Need 400 tons of Steel"
    },
    {
      product: "Doctile iron",
      email: "rohit@gmail.com",
      mobile: "9830264585",
      city: "Kolkata",
      subject: "Need 400 tons of Steel"
    },
    {
      product: "Doctile iron",
      email: "rohit@gmail.com",
      mobile: "9830264585",
      city: "Kolkata",
      subject: "Need 400 tons of Steel"
    },
    {
      product: "Doctile iron",
      email: "rohit@gmail.com",
      mobile: "9830264585",
      city: "Kolkata",
      subject: "Need 400 tons of Steel"
    },
    {
      product: "Doctile iron",
      email: "rohit@gmail.com",
      mobile: "9830264585",
      city: "Kolkata",
      subject: "Need 400 tons of Steel"
    },
    {
      product: "Doctile iron",
      email: "rohit@gmail.com",
      mobile: "9830264585",
      city: "Kolkata",
      subject: "Need 400 tons of Steel"
    },
    {
      product: "Doctile iron",
      email: "rohit@gmail.com",
      mobile: "9830264585",
      city: "Kolkata",
      subject: "Need 400 tons of Steel"
    }
  ]
  return (
    <div className='p-3 sm:p-5 pt-[60px] dark:bg-darkBg'>
     <table className='table-fixed md:table-auto w-full overflow-hidden'>
      <thead>
        <tr className='dark:text-white border-b-2 border-gray-300'>
          <th>Product</th>
          <th className='py-4 hidden md:block'>Email</th>
          <th>Mobile</th>
          <th>City</th>
          <th className='hidden md:block'>Subject</th>
        </tr>
      </thead>
      <tbody className='text-center'>
        {orderList.map((order,index)=>(
          <tr key={index} className='border-b-2 border-gray-300 dark:text-white py-3'>
          <td className='py-4'>{order.product}</td>
          <td className='py-4 hidden md:block'>{order.email}</td>
          <td className='py-4'>{order.mobile}</td>
          <td className='py-4'>{order.city}</td>
          <td className='py-4 hidden md:block'>{order.subject}</td>
        </tr>
        ))}
     
      </tbody>
     </table>
    </div>
  )
}

export default Order