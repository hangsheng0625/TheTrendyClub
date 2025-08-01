import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <div className="my-20 px-4 sm:px-0">
      <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 translate-x-16 translate-y-16"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Emoji and heading */}
          <div className="mb-6">
            <span className="text-4xl mb-4 block">📧</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient mb-4">
              Stay in the Loop!
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Subscribe now & get 20% off your first order
            </p>
            <p className="text-gray-500 mb-8">
              Be the first to know about new arrivals, exclusive deals, and
              fashion tips. Join our community of trendsetters!
            </p>
          </div>

          {/* Subscription form */}
          {!isSubmitted ? (
            <form
              onSubmit={onSubmitHandler}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <div className="flex-1 relative">
                <input
                  className="input-field w-full text-center sm:text-left pr-12"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  ✉️
                </span>
              </div>
              <button type="submit" className="btn-primary whitespace-nowrap">
                🎉 SUBSCRIBE
              </button>
            </form>
          ) : (
            <div className="animate-fadeInUp">
              <div className="bg-green-100 border border-green-300 rounded-lg p-6 max-w-md mx-auto">
                <span className="text-3xl block mb-2">🎉</span>
                <h3 className="text-green-800 font-bold text-lg mb-1">
                  Welcome aboard!
                </h3>
                <p className="text-green-600">
                  Check your email for your 20% discount code!
                </p>
              </div>
            </div>
          )}

          {/* Social proof */}
          <div className="mt-12 flex justify-center items-center gap-8 flex-wrap text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-2xl">👥</span>
              <span>50K+ Subscribers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📮</span>
              <span>Weekly Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span>No Spam Promise</span>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-8 flex justify-center gap-6 flex-wrap text-xs text-gray-400">
            <span>✨ Exclusive Offers</span>
            <span>🎯 Personalized Recommendations</span>
            <span>🚀 Early Access</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
