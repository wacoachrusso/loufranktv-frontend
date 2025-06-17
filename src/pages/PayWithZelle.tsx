import { SEO } from "../components/SEO";

export default function PayWithZelle() {
  return (
    <>
      {/* SEO & robots: noindex so it isn't indexed by search engines */}
      <SEO 
        customTitle="Pay with Zelle - LouFrank TV"
        customMetaTags={[{ name: "robots", content: "noindex, nofollow" }]}
      />
      <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <section className="bg-white w-full max-w-md rounded-xl shadow-md p-8 text-center">
          <img src="https://res.cloudinary.com/dcuwsbzv5/image/upload/v1750102712/Zelle__payment_service_-Logo.wine_i1jfao.png" alt="Zelle logo" className="mx-auto w-32 mb-4" />
          <h1 className="text-2xl font-semibold text-purple-700 mb-4">Pay with&nbsp;Zelle</h1>
          <p className="mb-6">Send payment for your VPN or cable subscription securely from your banking&nbsp;app.</p>
          <ol className="list-decimal text-left ml-6 space-y-2 mb-6">
            <li>Open your banking app and choose “Send&nbsp;Money with&nbsp;Zelle”.</li>
            <li>When prompted for the recipient, enter the email&nbsp;below:</li>
          </ol>
          <div className="select-all font-medium text-lg bg-purple-50 text-purple-900 py-3 rounded-md border border-purple-200 mb-6">
            wacoachrusso@gmail.com
          </div>
          <p className="text-sm text-gray-500">We process transfers manually and will activate your service within <strong>1–2&nbsp;hours</strong> of receiving payment. Thank&nbsp;you for choosing&nbsp;LouFrank&nbsp;TV.</p>
        </section>
      </main>
    </>
  );
}
