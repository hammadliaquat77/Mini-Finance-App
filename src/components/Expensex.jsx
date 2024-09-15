
import React from 'react'

function Expensex({
  setAmount,
  setType,   
  handleeAddTransactions, 
  tranction,
  totalIncome,
  totalExpense,
  balanceAmount,
  amount,
  type 
}) {



  return (
    <>
    <div className='mt-20 w-full flex justify-center items-center flex-col'>
          
          <div className='border-2 border-black w-2/5 flex flex-col justify-center items-center rounded-2xl'>

          <div className='flex justify-center items-center gap-5 my-4'>
             <div className='p-4 px-5 border-2 border-blue-950 rounded-md'>
                <h1>Total Income</h1>
                <h1 className='text-center'>{totalIncome}</h1>
             </div>

             <div className='p-4 px-5 border-2 border-blue-950 rounded-md'>
                <h1>Total Expense</h1>
                <h1 className='text-center'>{totalExpense}</h1>
             </div>

             <div className={`p-4 px-5 border-2 border-blue-950 rounded-md ${balanceAmount > 0 ? 'bg-green-100' : 'bg-red-100'}`}>
                <h1>Balance</h1>
                <h1>{balanceAmount}</h1>
             </div>
          </div>

          <div className='flex my-4'>
  
              <input value={amount}
              onChange={ (e)=> setAmount(e.target.value)}
              className='border-2 rounded-md border-blue-950 mx-2 p-1' type="number" placeholder='Add Amount' />
              
              <select value={type} 
              onChange={ (e)=> setType(e.target.value)}
              className='border-2 rounded-md border-blue-950 mx-2 p-1'>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
              
              <button 
               onClick={handleeAddTransactions}
              className='border-2 rounded-md border-blue-950 mx-2 px-2 p-1'>
                Submit
              </button>

          </div>


          <div>
              {tranction.map((data, index)=>{
                return(
                  <div key={index} className='flex my-2'>
                     <h1 className='font-bold underline text-3xl w-60'>{index + 1}{')'} {data.amount}</h1>
                     <h1 className={`font-bold underline text-3xl ${data.type === 'income' ? 'text-green-700' : 'text-red-700'}`}>{data.type}</h1>
                  </div>
                )
              })}
            </div>
              </div>
            
      </div>
    </>
  )
}

export default Expensex