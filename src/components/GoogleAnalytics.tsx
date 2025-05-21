import React from "react";
import { Helmet } from "react-helmet";

export function GoogleAnalytics() {
  return (
    <Helmet>
      {/* Google Analytics GA4 Tracking Code */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=G-N423PGHLZL`}></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-N423PGHLZL');
        `}
      </script>
    </Helmet>
  );
}
