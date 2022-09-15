import React from 'react'

const ChartContainer = ({ charts }) => {
  return (
    <div className="max-w-[95vw] h-fit mx-auto bg-gray-100 rounded-md shadow-lg pb-3 mb-5 ">
      <p className='font-bold text-black text-4xl p-5 mt-3'>Charts</p>
      <div className='grid  grid-cols-2  mb-3 place-items-center h-fit md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
        {charts.map(chart => (
          
          <div key={chart.name} className=' even:bg-green-500 rounded-lg shadow-m hover:opacity-75 hover:scale-105 duration-300 cursor-pointer ease odd:bg-gradient-to-b from-indigo-500 via-purple-600 to-pink-400   text-white mb-3 p-4 w-40 h-56 md:w-60 md:h-56'>
            <p className="pl-1 pr-3 text-2xl font-bold pt-3">{chart.name}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default ChartContainer