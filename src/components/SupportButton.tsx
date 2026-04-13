'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { AlertCircle, CheckCircle2, MessageCircle, Send, X } from 'lucide-react';

type SupportForm = {
  name: string;
  email: string;
  question: string;
  company: string;
};

const initialForm: SupportForm = {
  name: '',
  email: '',
  question: '',
  company: '',
};

const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function SupportButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<SupportForm>(initialForm);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const focusTimeout = window.setTimeout(() => {
      nameInputRef.current?.focus();
    }, 150);

    return () => window.clearTimeout(focusTimeout);
  }, [isOpen]);

  const updateField = (field: keyof SupportForm, value: string) => {
    setForm((currentForm) => ({ ...currentForm, [field]: value }));
    setError(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const question = form.question.trim();

    if (name.length < 2) {
      setError('Please enter your name.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (question.length < 10) {
      setError('Please write a little more about your question.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/support', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          question,
          company: form.company,
        }),
      });

      if (!response.ok) {
        throw new Error('Support request failed');
      }

      setIsSuccess(true);
      setForm(initialForm);
    } catch (submitError) {
      console.error('Error submitting support request:', submitError);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          id="support-widget-panel"
          className="fixed bottom-28 right-4 z-50 w-[calc(100vw-2rem)] max-w-md rounded-lg border border-border bg-white/95 p-5 shadow-xl shadow-gray-950/15 backdrop-blur-xl md:bottom-32 md:right-6"
        >
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Support
              </p>
              <h2 className="mt-1 text-2xl font-heading font-bold text-foreground">
                Ask us anything
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-secondary">
                Leave your question and email. We&apos;ll reply directly to your inbox.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-2 text-secondary transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Close support form"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {isSuccess ? (
            <div className="rounded-lg border border-green-200 bg-green-50 p-5 text-center">
              <CheckCircle2 className="mx-auto h-10 w-10 text-green-600" aria-hidden="true" />
              <h3 className="mt-3 text-lg font-bold text-foreground">
                Message sent
              </h3>
              <p className="mt-2 text-sm text-secondary">
                Thanks. We&apos;ll reply to the email address you provided.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false);
                  setIsOpen(false);
                }}
                className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={(event) => updateField('company', event.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div>
                <label htmlFor="support-name" className="mb-2 block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  ref={nameInputRef}
                  id="support-name"
                  type="text"
                  value={form.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  className="w-full rounded-lg border-2 border-border px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="support-email" className="mb-2 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="support-email"
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  className="w-full rounded-lg border-2 border-border px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="support-question" className="mb-2 block text-sm font-medium text-foreground">
                  Question
                </label>
                <textarea
                  id="support-question"
                  value={form.question}
                  onChange={(event) => updateField('question', event.target.value)}
                  className="min-h-32 w-full resize-none rounded-lg border-2 border-border px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="How can we help?"
                />
              </div>

              {error && (
                <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">
                  <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                {isSubmitting ? 'Sending...' : 'Send question'}
              </button>
            </form>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={() => {
          setIsOpen((currentValue) => !currentValue);
          setIsSuccess(false);
          setError(null);
        }}
        aria-label="Open support form"
        aria-expanded={isOpen}
        aria-controls="support-widget-panel"
        className="fixed bottom-8 right-5 z-40 rounded-lg bg-primary px-4 py-3 text-white shadow-lg shadow-primary/20 transition-colors duration-300 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 md:bottom-10 md:right-6"
      >
        <span className="relative flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/15 backdrop-blur-sm">
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <MessageCircle className="h-6 w-6" aria-hidden="true" />
            )}
          </span>
          <span className="hidden pr-1 text-sm font-semibold sm:block">
            Support
          </span>
        </span>
      </button>
    </>
  );
}
