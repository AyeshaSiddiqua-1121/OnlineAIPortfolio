import React from 'react'

function ContactForm() {
  return (
    <div className="w-100%flex  mt-6 ">
      <form class="w-full max-w-lg ">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-dark-purple text-md font-bold mb-2"
              for="grid-password"
            >
              E-mail
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-default border-gray-200  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700  text-xs font-bold mb-2"
              for="grid-password"
            >
              Message
            </label>
            <textarea
              class=" no-resize appearance-none rounded-lg block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
            ></textarea>
            <p class="text-gray-600 text-xs italic">
              If you have any queries, feel free to contact me through my official gmail link and online presence accounts. Your opinions matter. Thanks!
            </p>
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-2/3">
            <button class=" mt-4 px-4 py-2 rounded-default bg-orange font-Dosis text-xl text-normal">
              Submit Query
            </button>
          </div>
          <div class="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm