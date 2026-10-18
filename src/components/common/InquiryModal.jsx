import { useState } from "react";
import { X } from "lucide-react";
import { useGlobalUI } from "../../context/GlobalUIContext";

const InquiryModal = () => {
  const { activePanel, inquirySubject, closePanel } = useGlobalUI();
  const [submitted, setSubmitted] = useState(false);

  if (activePanel !== "inquiry") return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    closePanel();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) handleClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-title"
        className="relative w-full max-w-lg border border-[#51452e] bg-[#151514] p-6 text-[#e8e2d8] sm:p-8"
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close enquiry form"
          className="absolute right-4 top-4 text-[#aaa39a] hover:text-[#d7ad38]"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#d7ad38]">
              Request prepared
            </p>
            <h2 className="mt-3 font-serif text-3xl">Thank you.</h2>
            <p className="mt-3 text-sm leading-6 text-[#aaa39a]">
              This demo form has recorded the interaction in the current view.
              Connect a backend or form service to send enquiries to your team.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-6 border border-[#9e824c] px-5 py-3 text-xs uppercase tracking-widest text-[#d7ad38]"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#d7ad38]">
              Maison Élysée · Private contact
            </p>
            <h2 id="inquiry-title" className="mt-3 font-serif text-3xl">
              Request an audience
            </h2>
            <p className="mt-2 text-sm text-[#aaa39a]">
              Enquiry: {inquirySubject}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <label className="block text-xs uppercase tracking-wider text-[#b8b0a3]">
                Full name
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="mt-2 w-full border border-[#34312b] bg-[#0d0d0e] px-3 py-3 text-sm normal-case tracking-normal outline-none focus:border-[#9e824c]"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-xs uppercase tracking-wider text-[#b8b0a3]">
                Email address
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="mt-2 w-full border border-[#34312b] bg-[#0d0d0e] px-3 py-3 text-sm normal-case tracking-normal outline-none focus:border-[#9e824c]"
                  placeholder="you@example.com"
                />
              </label>
              <label className="block text-xs uppercase tracking-wider text-[#b8b0a3]">
                Message
                <textarea
                  name="message"
                  rows="3"
                  className="mt-2 w-full border border-[#34312b] bg-[#0d0d0e] px-3 py-3 text-sm normal-case tracking-normal outline-none focus:border-[#9e824c]"
                  placeholder="Tell us how we may assist you."
                />
              </label>
              <button
                type="submit"
                className="w-full bg-[#d7ad38] px-5 py-3 text-xs uppercase tracking-[0.16em] text-black transition hover:bg-[#e8c34d]"
              >
                Prepare enquiry
              </button>
            </form>
          </>
        )}
      </section>
    </div>
  );
};

export default InquiryModal;
