'use client';

interface VideoTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoTourModal({ isOpen, onClose }: VideoTourModalProps) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-2xl p-8 max-w-md w-full shadow-2xl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
            </svg>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">
            Coming Soon
          </h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            We're preparing a comprehensive video tour of FlowShot. It will showcase all features and workflows in action.
          </p>

          <p className="text-sm text-gray-400">
            Stay tuned for updates!
          </p>
        </div>
      </div>
    </div>
  );
}
