import { useForm, ValidationError } from "@formspree/react";

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

export const Contact = () => {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);
  if (state.succeeded) {
    return (
      <div className="flex min-h-screen flex-col items-center bg-gray-900 pt-28 text-center font-bold text-white">
        <span className="pb-4">Thank you for your message!</span>
        <span>I will respond as soon as I see it.</span>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-5">
      <h1 className="mb-5 text-4xl font-bold text-white">Contact Me</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
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
              name="firstname"
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
              name="lastname"
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
              name="email"
              placeholder="john.doe@example.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
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
              name="message"
              rows={5}
              placeholder="Write your message here..."
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="mt-6 w-full px-3">
            <button
              type="submit"
              disabled={state.submitting}
              className="rounded bg-teal-500 px-4 py-2 text-center text-gray-900 transition-colors duration-300 hover:bg-teal-400"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
