'use client';

import BaseModal from './BaseModal';
import { Button } from '@/components/ui/button';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">🎬</span>
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Video in development
        </h3>
        <p className="text-secondary mb-4">
          We're working on creating a demo video. It will be ready soon!
        </p>
        <p className="text-secondary text-sm">
          <strong className="text-primary">Coming soon:</strong> Community forum where you can share tips, showcase work, and connect with other creators.
        </p>
      </div>

      {/* Button */}
      <button
        onClick={onClose}
        className="w-full mt-6 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
      >
        Got it
      </button>
    </BaseModal>
  );
}
