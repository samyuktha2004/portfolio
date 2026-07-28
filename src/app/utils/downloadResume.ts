import resumeDataUrl from '@/imports/Samyuktha_Resume.pdf';

// Confetti animation for resume download celebration
const triggerConfetti = () => {
  // Import confetti dynamically only when needed
  import('canvas-confetti').then((confetti) => {
    const colors = ['#FFB6C1', '#FFF0F5', '#87CEEB', '#DDA0DD', '#FF95A8'];
    
    // First burst
    confetti.default({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: colors,
      shapes: ['circle', 'square'],
      scalar: 1.2,
    });
    
    // Second burst (delayed slightly)
    setTimeout(() => {
      confetti.default({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
    }, 250);
    
    // Third burst (from right)
    setTimeout(() => {
      confetti.default({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });
    }, 400);
  });
};

export const downloadResume = () => {
  triggerConfetti();

  setTimeout(() => {
    try {
      // Convert base64 data URL → Blob → blob URL to avoid browser restrictions on data URL downloads
      const base64 = resumeDataUrl.split(',')[1];
      const binary = atob(base64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      const blob = new Blob([bytes], { type: 'application/pdf' });
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Samyuktha_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 2000);
    } catch {
      // Fallback: open the data URL directly in a new tab
      window.open(resumeDataUrl, '_blank');
    }
  }, 300);
};