import { BiMap, BiMaleFemale, BiSolidCity } from 'react-icons/bi';

const Welcome = () => {
  return (
    <section className="py-24">
      <div className="md:container md:flex md:flex-row md:justify-center md:bg-cyan-700 md:max-w-5xl md:bg-opacity-40 md:rounded-lg">
        <div className="flex flex-wrap ">
          <div className="mx-3 my-4 flex flex-col">
            <label className="font-medium text-lg" htmlFor="location">
              <BiMap className="inline" />
              Location
            </label>
            <select name="location" id="location" className="border border-green-200 w-40 bg-green-200 rounded-md px-5 py-2">
              <option value="Bali" className="bg-green-200 rounded-md text-sm hover:bg-green-400">
                Bali
              </option>
              <option value="Bali" className="bg-green-200 rounded-md text-sm hover:bg-green-400">
                Bali
              </option>
              <option value="Bali" className="bg-green-200 rounded-md text-sm hover:bg-green-400">
                Bali
              </option>
              <option value="Bali" className="bg-green-200 rounded-md text-sm hover:bg-green-400">
                Bali
              </option>
              <option value="Bali" className="bg-green-200 rounded-md text-sm hover:bg-green-400">
                Bali
              </option>
              <option value="Bali" className="bg-green-200 rounded-md text-sm hover:bg-green-400">
                Bali
              </option>
            </select>
          </div>

          <div className="mx-3 my-4 flex flex-col">
            <label className="font-medium text-lg" htmlFor="city">
              <BiSolidCity className="inline" /> City
            </label>
            <select name="city" id="city" className="border border-green-200 w-40 bg-green-200 rounded-md px-5 py-2">
              <option value="Bali" className="bg-green-200 rounded-md text-sm hover:bg-green-400">
                Bali
              </option>
              <option value="Bali" className="bg-green-200 rounded-md text-sm hover:bg-green-400">
                Bali
              </option>
              <option value="Bali" className="bg-green-200 rounded-md text-sm hover:bg-green-400">
                Bali
              </option>
              <option value="Bali" className="bg-green-200 rounded-md text-sm hover:bg-green-400">
                Bali
              </option>
              <option value="Bali" className="bg-green-200 rounded-md text-sm hover:bg-green-400">
                Bali
              </option>
              <option value="Bali" className="bg-green-200 rounded-md text-sm hover:bg-green-400">
                Bali
              </option>
            </select>
          </div>
        </div>
        <div className="mx-3 my-4 flex flex-col">
          <label className="font-medium text-lg" htmlFor="guest">
            <BiMaleFemale className="inline" /> Guest
          </label>
          <input type="number" name="guest" id="guest" className="border border-green-200  bg-green-200 rounded-md px-5 py-2" placeholder="5 person" />
        </div>

        <div className="mx-3 my-8 ">
          <form>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-green-200 focus:ring-green-500 focus:border-green-500 "
                placeholder="Search Mockups, Logos..."
                required
              />
              <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 ">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
