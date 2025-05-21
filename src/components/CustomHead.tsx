import { Helmet } from "react-helmet";

export const CustomHead = () => {
  return (
    <Helmet>
      {/* Favicon */}
      <link 
        rel="icon" 
        href="/public/901661ac-f28e-4815-8069-61ae5363a100/logo-color.png" 
        type="image/png" 
      />
      <link 
        rel="shortcut icon" 
        href="/public/901661ac-f28e-4815-8069-61ae5363a100/logo-color.png" 
        type="image/png" 
      />
      
      {/* Page title */}
      <title>LouFrank TV | Premium IPTV Service</title>

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
};
