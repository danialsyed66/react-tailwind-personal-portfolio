import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useCallback, useEffect, useRef } from 'react';

// Full-screen image viewer. Keyboard: Esc closes, ←/→ move between images.
export const Lightbox = ({ images, index, onClose, onChange }) => {
  const closeRef = useRef(null);
  const count = images.length;
  const image = images[index];

  const go = useCallback(
    step => onChange((index + step + count) % count),
    [index, count, onChange],
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && count > 1) go(1);
      if (e.key === 'ArrowLeft' && count > 1) go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, onClose, count]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      className="fixed inset-0 z-100 bg-background/95 backdrop-blur-sm flex flex-col animate-fade-in"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 text-sm text-muted-foreground">
        <span>
          {index + 1} / {count}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="p-2 rounded-full glass hover:text-primary cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="relative flex-1 flex items-center justify-center px-4 sm:px-16 min-h-0">
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
          onClick={e => e.stopPropagation()}
        />
        {count > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={e => {
                e.stopPropagation();
                go(-1);
              }}
              className="absolute left-2 sm:left-4 p-3 rounded-full glass hover:text-primary cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={e => {
                e.stopPropagation();
                go(1);
              }}
              className="absolute right-2 sm:right-4 p-3 rounded-full glass hover:text-primary cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {image.caption && (
        <p
          className="px-6 py-5 text-center text-sm text-muted-foreground max-w-3xl mx-auto"
          onClick={e => e.stopPropagation()}
        >
          {image.caption}
        </p>
      )}
    </div>
  );
};
