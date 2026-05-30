import LegalPageLayout from "./LegalPageLayout";

export default function TermsAndConditions() {
  return (
    <LegalPageLayout title="Terms and Conditions" updatedOn="May 30, 2026">
      <div>
        <h2 className="text-2xl font-semibold text-[#1e1c1a]">
          Use of This Website
        </h2>
        <p className="mt-3">
          By using this website, you agree to use it lawfully and respectfully.
          The content is provided for general information about coaching,
          services, and contact opportunities.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-[#1e1c1a]">
          Coaching Information
        </h2>
        <p className="mt-3">
          Any training, nutrition, or wellbeing information shared on this site
          is general in nature unless provided as part of a personalised
          coaching service. Results vary based on the individual, consistency,
          and lifestyle factors.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-[#1e1c1a]">Bookings and Fees</h2>
        <p className="mt-3">
          Coaching availability, pricing, and package details may change over
          time. Any specific service agreement, payment terms, or support level
          will be confirmed directly at the time of booking or application.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-[#1e1c1a]">Intellectual Property</h2>
        <p className="mt-3">
          Website copy, branding, and original materials remain the property of
          Fit by Simona unless otherwise stated. They may not be copied or
          reused without permission.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-[#1e1c1a]">Contact</h2>
        <p className="mt-3">
          If you need clarification on any of these terms, please get in touch
          before purchasing or starting a coaching service.
        </p>
      </div>
    </LegalPageLayout>
  );
}
