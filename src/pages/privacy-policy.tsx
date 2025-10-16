const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-10 text-gray-800 leading-relaxed">
      <header className="border-b border-gray-200 pb-4 mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-2xl p-6">
        <h1 className="text-2xl font-semibold text-gray-900">Privacy Policy</h1>
        <p className="text-sm text-gray-500">
          Pro Daddy Agency — Digital Marketing & Web Development
        </p>
      </header>

      <section className="space-y-6">
        <p>
          This Privacy Policy describes how <strong>Pro Daddy Agency</strong>{" "}
          ("we", "us", or "our") collects, uses, and protects your personal
          information when you use our services or visit our website.
        </p>

        <div>
          <h2 className="text-lg font-medium mb-2">
            1. Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Personal details such as name, email address, and phone number.
            </li>
            <li>
              Website usage data like pages visited, time spent, and browser
              information.
            </li>
            <li>Communication data when you contact us directly.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-2">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              To provide and improve our digital marketing and web development
              services.
            </li>
            <li>
              To communicate with you about updates, promotions, and support.
            </li>
            <li>To ensure website security and enhance user experience.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-2">3. Data Protection</h2>
          <p>
            We use industry-standard security measures to safeguard your
            information. However, no online transmission is fully secure, and we
            cannot guarantee absolute protection.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-2">
            4. Sharing of Information
          </h2>
          <p>
            We do not sell, rent, or trade your data. Information may be shared
            with trusted partners only to provide our services or comply with
            legal obligations.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-2">5. Your Rights</h2>
          <p>
            You can request to access, update, or delete your data by contacting
            us at{" "}
            <a
              href="mailto:info@prodaddyagency.com"
              className="text-blue-600 hover:underline"
            >
              info@prodaddyagency.com
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-2">
            6. Updates to This Policy
          </h2>
          <p>
            We may revise this policy from time to time. Any updates will be
            reflected on this page with a new effective date.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-2">7. Contact Us</h2>
          <p>
            For any questions regarding this Privacy Policy, please contact:
          </p>
          <address className="not-italic mt-2">
            <strong>Pro Daddy Agency</strong>
            <br />
            2-148, Edarada, High School Road
            <br />
            Tatipaka, Konaseema, Andhra Pradesh — 533247
            <br />
            Email:{" "}
            <a
              href="mailto:info@prodaddyagency.com"
              className="text-blue-600 hover:underline"
            >
              info@prodaddyagency.com
            </a>
          </address>
        </div>
      </section>

      <footer className="mt-10 text-sm text-gray-400 border-t border-gray-200 pt-4 text-center">
        © {new Date().getFullYear()} Pro Daddy Agency. All rights reserved.
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
