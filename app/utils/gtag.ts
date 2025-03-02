// utils/gtag.ts

export const GA_TRACKING_ID = process.env.PUBLIC_GA_TRACKING_ID;
export const GA_CONVERSION_LABEL = process.env.PUBLIC_GA_CONVERSION_LABEL;

declare global {
  interface Window {
    gtag: (
      command: 'event',
      action: string,
      params: {
        send_to: string;
        value?: number;
        currency?: string;
        event_callback?: () => void;
      }
    ) => void;
  }
}

export const gtag_report_conversion = (url?: string) => {
  const callback = () => {
    if (typeof url !== 'undefined') {
      window.location.href = url;
    }
  };

  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'conversion', {
      'send_to': `${GA_TRACKING_ID}/${GA_CONVERSION_LABEL}`,
      'value': 1.0,
      'currency': 'EUR',
      'event_callback': callback
    });
  }

  return false;
};
