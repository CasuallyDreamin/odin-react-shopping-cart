// pages/ContactPage.jsx
export default function ContactPage() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
      <p className="mb-4 text-gray-700">
        Have questions? Reach out to us and we’ll get back as soon as possible.
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded-md px-3 py-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border rounded-md px-3 py-2"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full border rounded-md px-3 py-2"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
          Send Message
        </button>
      </form>
    </div>
  );
}
