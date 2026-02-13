'use client';

import BaseModal from './BaseModal';
import { Mail, AlertCircle } from 'lucide-react';
import { useWaitlistForm } from '@/hooks/useWaitlistForm';
import { useRef, useEffect } from 'react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const nameInputRef = useRef<HTMLInputElement>(null);

  const {
    name,
    email,
    isSubmitting,
    isSuccess,
    error,
    nameError,
    emailError,
    handleNameChange,
    handleEmailChange,
    handleSubmit,
  } = useWaitlistForm(onClose);

  // Автофокус на поле имени при открытии модалки
  useEffect(() => {
    if (isOpen && nameInputRef.current) {
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-lg">
      {isSuccess ? (
        /* Success State */
        <div className="text-center py-8 animate-in fade-in duration-300">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-in zoom-in duration-500">
            <span className="text-3xl">✓</span>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Thank you!
          </h3>
          <p className="text-secondary">
            We&apos;ll send you an email when the service launches
          </p>
        </div>
      ) : (
        /* Form State */
        <>
          {/* Icon */}
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-primary" />
          </div>

          {/* Content */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Launching soon!
            </h3>
            <p className="text-secondary text-sm leading-relaxed">
              The service is in its final stage of development and testing.
              Leave your email and we&apos;ll notify you when the service goes live.
              <strong className="text-primary"> First users will get several months free.</strong>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                ref={nameInputRef}
                type="text"
                id="name"
                value={name}
                onChange={(e) => handleNameChange(e.target.value)}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                  nameError
                    ? 'border-red-500 focus:border-red-600'
                    : 'border-gray-200 focus:border-primary'
                }`}
                placeholder="Your name"
              />
              {nameError && (
                <p className="text-sm text-red-600 mt-1">{nameError}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                  emailError
                    ? 'border-red-500 focus:border-red-600'
                    : 'border-gray-200 focus:border-primary'
                }`}
                placeholder="your@email.com"
              />
              {emailError && (
                <p className="text-sm text-red-600 mt-1">{emailError}</p>
              )}
            </div>

            {/* Error Display */}
            {error && (
              <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl animate-in fade-in slide-in-from-top-2 duration-300">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : error ? 'Try again' : 'Join the waitlist'}
            </button>
          </form>
        </>
      )}
    </BaseModal>
  );
}
