import LegalPageLayout from "./LegalPageLayout";

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Privacy Policy" updatedOn="May 30, 2026">
      <div>
        <h2 className="text-2xl font-semibold text-[#1e1c1a]">Overview</h2>
        <p className="mt-3">
          Fit by Simona respects your privacy and is committed to protecting
          your personal information. This policy explains what data may be
          collected when you use this website, enquire about coaching, or
          interact with support forms and contact features.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-[#1e1c1a]">
          Information We May Collect
        </h2>
        <p className="mt-3">
          This may include your name, email address, phone number, coaching
          enquiry details, goals, and any information you choose to share when
          contacting the business.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-[#1e1c1a]">
          How Your Data Is Used
        </h2>
        <p className="mt-3">
          Your information may be used to respond to enquiries, provide coaching
          support, improve services, manage bookings, and communicate important
          updates related to your coaching journey.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-[#1e1c1a]">Cookies</h2>
        <p className="mt-3">
          This website may use cookies or similar technologies to improve
          performance, remember preferences, and understand general site usage.
          You can manage cookie preferences through your browser settings.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-[#1e1c1a]">Your Rights</h2>
        <p className="mt-3">
          You may request access to, correction of, or deletion of your personal
          data where applicable. If you have questions about how your data is
          handled, you can contact the business directly.
        </p>
      </div>
    </LegalPageLayout>
  );
}
