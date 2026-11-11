import resumeAsset from '@/imports/Samyuktha_Resume.pdf';
import confetti from 'canvas-confetti';

// Confetti animation for resume download celebration
const triggerConfetti = () => {
  const colors = ['#FFB6C1', '#FFF0F5', '#87CEEB', '#DDA0DD', '#FF95A8'];

  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors,
    shapes: ['circle', 'square'],
    scalar: 1.2,
  });

  setTimeout(() => {
    confetti({ particleCount: 50, angle: 60, spread: 55, origin: { x: 0 }, colors });
  }, 250);

  setTimeout(() => {
    confetti({ particleCount: 50, angle: 120, spread: 55, origin: { x: 1 }, colors });
  }, 400);
};

export const downloadResume = () => {
  triggerConfetti();

  setTimeout(async () => {
    try {
      // fetch() works for both asset URL paths ("/assets/foo.pdf") and data URLs
      const response = await fetch(resumeAsset);
      if (!response.ok) throw new Error(`fetch failed: ${response.status}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Samyuktha_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => URL.revokeObjectURL(blobUrl), 2000);
    } catch {
      // Fallback: open in a new tab so the user can save manually
      window.open(resumeAsset, '_blank');
    }
  }, 300);
};
