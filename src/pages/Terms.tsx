const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-10 text-gray-800 leading-relaxed">
      <header className="border-b border-gray-200 pb-4 mb-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-t-2xl p-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500">
          Pro Daddy Agency — Digital Marketing & Web Development
        </p>
      </header>

      <section className="space-y-6">
        <p>
          Welcome to <strong>Pro Daddy Agency</strong>. By accessing or using
          our website and services, you agree to comply with these Terms of
          Service. Please read them carefully. and comply with them.
        </p>

        <div>
          <h2 className="text-lg font-medium mb-2">1. Use of Services</h2>
          <p>
            You agree to use our services only for lawful purposes and in
            accordance with applicable laws. Misuse of our website or services
            may result in suspension or termination.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-2">2. Intellectual Property</h2>
          <p>
            All content, logos, and materials provided by{" "}
            <strong>Pro Daddy Agency</strong> are the property of the agency and
            protected by copyright and trademark laws.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-2">3. Service Modifications</h2>
          <p>
            We reserve the right to modify, suspend, or discontinue any part of
            our services at any time without prior notice.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-2">
            4. Limitation of Liability
          </h2>
          <p>
            <strong>Pro Daddy Agency</strong> is not responsible for any
            indirect, incidental, or consequential damages resulting from the
            use or inability to use our services.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-2">5. Governing Law</h2>
          <p>
            These terms are governed by the laws of India. Any disputes will be
            resolved in the jurisdiction of Andhra Pradesh courts.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-2">6. Contact Us</h2>
          <p>
            If you have questions about these Terms, contact us at{" "}
            <a
              href="mailto:info@prodaddyagency.com"
              className="text-blue-600 hover:underline"
            >
              info@prodaddyagency.com
            </a>
            .
          </p>
        </div>
      </section>

      <footer className="mt-10 text-sm text-gray-400 border-t border-gray-200 pt-4 text-center">
        © {new Date().getFullYear()} Pro Daddy Agency. All rights reserved.
      </footer>
    </div>
  );
};
export default Terms;
