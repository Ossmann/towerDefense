// components/GoogleAnalytics.tsx
import Script from 'next/script';

const GoogleTracking = () => {
  return (
    <>
    {/* Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.PUBLIC_GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script>

      {/* Google Adds */}
      <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_G_ADDS}`}
          strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_G_ADDS}');
          `}
      </Script>

    </>
  );
};

export default GoogleTracking;
