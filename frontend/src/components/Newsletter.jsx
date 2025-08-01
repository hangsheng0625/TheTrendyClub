import React, { useState } from "react";
import { AtSign, Mail, Sparkles, Users, Send, Lock } from "lucide-react";

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
    <div className="my-20">
      <div className="bg-gradient-to-br from-white via-grey-50 to-grey-100 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-grey-300/20 to-grey-400/20 rounded-full opacity-40 -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-grey-400/20 to-grey-500/20 rounded-full opacity-40 translate-x-16 translate-y-16"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-grey-600 to-grey-800 rounded-full flex items-center justify-center">
              <AtSign className="text-white text-xl font-bold w-6 h-6" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-grey-800 mb-4 font-playfair">
              Stay in the Loop!
            </h2>
            <p className="text-xl text-grey-700 mb-2 text-body-primary">
              Subscribe now & get 20% off your first order
            </p>
            <p className="text-grey-600 mb-8 text-body-secondary">
              Be the first to discover our latest collections, exclusive offers,
              and style insights. Join our community of fashion enthusiasts!
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
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-grey-400">
                  <Mail className="w-5 h-5" />
                </span>
              </div>
              <button
                type="submit"
                className="btn-primary whitespace-nowrap bg-grey-800 hover:bg-grey-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-colors duration-300"
              >
                SUBSCRIBE
              </button>
            </form>
          ) : (
            <div className="animate-fadeInUp">
              <div className="bg-grey-100 border border-grey-300 rounded-lg p-6 max-w-md mx-auto">
                <Sparkles className="w-8 h-8" />
                <h3 className="text-grey-800 font-bold text-lg mb-1">
                  Welcome aboard!
                </h3>
                <p className="text-grey-700">
                  Check your email for your 20% discount code!
                </p>
              </div>
            </div>
          )}

          {/* Social proof */}
          <div className="mt-12 flex justify-center items-center gap-8 flex-wrap text-sm text-grey-600">
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6" />
              <span>50K+ Subscribers</span>
            </div>
            <div className="flex items-center gap-2">
              <Send className="w-6 h-6" />
              <span>Weekly Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-6 h-6" />
              <span>No Spam Promise</span>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-8 flex justify-center gap-6 flex-wrap text-xs text-grey-500">
            <span>Exclusive Offers</span>
            <span>Personalized Recommendations</span>
            <span>Early Access</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
