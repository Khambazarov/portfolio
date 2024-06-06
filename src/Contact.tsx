const Contact = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-5">
      <h1 className="mb-5 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
        Contact Me
      </h1>
      <form className="w-full max-w-md">
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-300"
              htmlFor="grid-first-name"
            >
              Your Firstname
            </label>
            <input
              className="mb-3 block w-full appearance-none rounded border border-gray-700 bg-gray-800 px-4 py-3 leading-tight text-gray-300 focus:bg-gray-700 focus:outline-none"
              id="grid-first-name"
              type="text"
              placeholder="John"
            />
          </div>
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-300"
              htmlFor="grid-last-name"
            >
              Your Lastname
            </label>
            <input
              className="mb-3 block w-full appearance-none rounded border border-gray-700 bg-gray-800 px-4 py-3 leading-tight text-gray-300 focus:bg-gray-700 focus:outline-none"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
          <div className="mt-6 w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-300"
              htmlFor="grid-email"
            >
              Your Email
            </label>
            <input
              className="mb-3 block w-full appearance-none rounded border border-gray-700 bg-gray-800 px-4 py-3 leading-tight text-gray-300 focus:bg-gray-700 focus:outline-none"
              id="grid-email"
              type="email"
              placeholder="john.doe@example.com"
            />
          </div>
          <div className="mt-6 w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-300"
              htmlFor="grid-message"
            >
              Message
            </label>
            <textarea
              className="mb-3 block w-full appearance-none rounded border border-gray-700 bg-gray-800 px-4 py-3 leading-tight text-gray-300 focus:bg-gray-700 focus:outline-none"
              id="grid-message"
              rows={5}
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <div className="mt-6 w-full px-3">
            <button className="rounded bg-teal-500 px-4 py-2 text-center text-gray-900 transition-colors duration-300 hover:bg-teal-400">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
