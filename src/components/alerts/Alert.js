import React from 'react'

const Feature = () => {
  return (
    <div
    class="relative mx-2 p-4 max-w-4xl flex space-x-2 shadow rounded bg-green-50 text-sm"
    bis_skin_checked="1"
  >
    <h3 class="whitespace-nowrap text-green-800 font-semibold">Well done!</h3>
    <p class="text-green-600 font-medium antialiased">
      You successfully read this important alert message.
    </p>
    <button
      type="button"
      class="group absolute -top-2 -right-2 w-6 h-6 inline-flex justify-center items-center rounded-full bg-green-100 hover:bg-green-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        class="w-4 h-4 text-green-600 group-hover:text-white"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
  
  )
}

export default Feature