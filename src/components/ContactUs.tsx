import React, { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../lib/firebaseConfig'; // adjust the path
import Lanyard from '../hooks/Lanyard/Lanyard';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const { email, username, message } = formData;
    if (!email) return 'Email is required';
    // Simple email regex
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) return 'Invalid email format';
    if (!username) return 'Username is required';
    if (!message) return 'Message is required';
    if (message.length < 10) return 'Message should be at least 10 characters';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      toast.error(error);
      return;
    }
    setLoading(true);

    try {
      await addDoc(collection(db, 'contacts'), {
        email: formData.email,
        username: formData.username,
        message: formData.message,
        createdAt: Timestamp.now(),
      });
      toast.success('Message sent successfully!');
      setFormData({ email: '', username: '', message: '' });
    } catch (err) {
      toast.error('Failed to send message. Try again later.');
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

            <p className="mt-4 text-gray-500">
              Available to collaborate and work together to make innovative and wholesome products
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Username */}
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <div className="relative">
                <input
                  id="username"
                  name="username"
                  type="text"
                  className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter username"
                  value={formData.username}
                  onChange={handleChange}
                  disabled={loading}
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full rounded-lg border border-gray-200 p-4 text-sm shadow-sm resize-none"
                placeholder="Your message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="flex flex-col items-center justify-between">
              <p className="text-sm text-gray-500 mb-4">
                By selecting this, you agree to recruit me
                <a className="underline" href="#"> Right!</a>
              </p>

              <button
                type="submit"
                disabled={loading}
                className="inline-block rounded-lg bg-black hover:bg-gray-200 hover:text-black px-5 py-3 text-sm font-medium text-white disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? 'Sending...' : "Let's Talk"}
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <Lanyard position={[0, 0, 10]} gravity={[0, -40, 0]} />
        </div>
      </section>
    </>
  );
};

export default ContactUs;
