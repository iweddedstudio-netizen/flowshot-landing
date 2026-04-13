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
        <div className="py-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-green-100">
            <span className="text-3xl">✓</span>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            You&apos;re on the list!
          </h3>
          <p className="text-secondary">
            We&apos;ll email you as soon as early access opens.
            Keep an eye on your inbox — spots are limited.
          </p>
        </div>
      ) : (
        /* Form State */
        <>
          {/* Icon */}
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
            <Mail className="w-8 h-8 text-primary" />
          </div>

          {/* Content */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Get early access
            </h3>
            <p className="text-secondary text-sm leading-relaxed">
              FlowShot is launching soon. Join the waitlist to be first in line.
              Early adopters get:
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-secondary text-left max-w-xs mx-auto">
              <li className="flex items-center gap-2">
                <span className="text-primary font-bold">✓</span> Extended free trial
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-bold">✓</span> Locked-in early pricing
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-bold">✓</span> Priority onboarding & support
              </li>
            </ul>
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
                className={`w-full rounded-lg border-2 px-4 py-3 transition-colors focus:outline-none ${
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
                className={`w-full rounded-lg border-2 px-4 py-3 transition-colors focus:outline-none ${
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
              <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : error ? 'Try again' : 'Join the waitlist'}
            </button>
          </form>
        </>
      )}
    </BaseModal>
  );
}
