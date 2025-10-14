import { useState } from 'react';

interface UseWaitlistFormReturn {
  // Form state
  name: string;
  email: string;
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  nameError: string | null;
  emailError: string | null;

  // Handlers
  handleNameChange: (value: string) => void;
  handleEmailChange: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  handleRetry: () => void;
  resetForm: () => void;
}

const SUCCESS_TIMEOUT = 3000; // 3 seconds for better UX

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxqT19HYWxhQHaz292LuQoNgChNuHfkEQtl7UVGzmc80T2KgftQPQSFZrIpDem2nv38/exec';

export function useWaitlistForm(onSuccess?: () => void): UseWaitlistFormReturn {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const validateName = (value: string): string | null => {
    if (!value.trim()) {
      return 'Name is required';
    }
    if (value.trim().length < 2) {
      return 'Name must be at least 2 characters';
    }
    return null;
  };

  const validateEmail = (value: string): string | null => {
    if (!value.trim()) {
      return 'Email is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Please enter a valid email address';
    }
    return null;
  };

  const handleNameChange = (value: string) => {
    setName(value);
    if (nameError) {
      setNameError(null);
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (emailError) {
      setEmailError(null);
    }
  };

  const handleRetry = () => {
    setError(null);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setError(null);
    setNameError(null);
    setEmailError(null);
    setIsSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const nameValidationError = validateName(name);
    const emailValidationError = validateEmail(email);

    setNameError(nameValidationError);
    setEmailError(emailValidationError);

    if (nameValidationError || emailValidationError) {
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      if (!GOOGLE_SCRIPT_URL) {
        throw new Error('Google Script URL is not configured');
      }

      const params = new URLSearchParams({
        name: name,
        email: email,
      });

      await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, {
        method: 'GET',
        mode: 'no-cors',
      });

      setIsSuccess(true);
      setTimeout(() => {
        if (onSuccess) {
          onSuccess();
        }
        resetForm();
      }, SUCCESS_TIMEOUT);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
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
    handleRetry,
    resetForm,
  };
}
