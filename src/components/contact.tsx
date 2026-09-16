import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      // TODO: Replace 'your-form-id' with your actual Formspree form ID
      // Get this from https://formspree.io/ after creating a form
      const response = await fetch(
        "https://formspree.io/f/your-form-id", // Replace with actual Formspree ID
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        (e.currentTarget as HTMLFormElement).reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">
          Get In Touch
        </h2>
        <p className="mb-8 text-muted-foreground">
          I'm always interested in discussing new opportunities, projects, or
          just connecting. Feel free to reach out via the form below or
          through my social links.
        </p>
        
        {/* Formspree Setup Instructions */}
        <div className="mb-6 p-4 bg-muted/50 rounded-lg">
          <h3 className="text-sm font-medium text-muted-foreground">Formspree Setup:</h3>
          <p className="text-xs text-muted-foreground">
            1. Go to <a href="https://formspree.io/" className="underline">formspree.io</a>
            2. Create a new form and get your Form ID
            3. Replace 'your-form-id' in the fetch URL above with your actual Form ID
            4. The form will then send emails to your verified email address
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-muted-foreground block mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-muted-foreground block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-muted-foreground block mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="textarea textarea-bordered w-full max-w-xs"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn btn-primary w-full max-w-xs ${isSubmitting ? "opacity-50" : ""}`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          
          {submitStatus === "success" && (
            <div className="bg-green-900/20 border border-green-900/50 text-green-400 px-4 py-3 rounded">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          
          {submitStatus === "error" && (
            <div className="bg-red-900/20 border border-red-900/50 text-red-400 px-4 py-3 rounded">
              Failed to send message. Please try again later.
            </div>
          )}
          
          <div className="space-y-4">
            <h3 className="mb-2 text-xl font-semibold">Connect With Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/alexjohnson-sde"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/alexjohnson-sde"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                LinkedIn
              </a>
              <a
                href="https://leetcode.com/alexjohnson_sde"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                LeetCode
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}