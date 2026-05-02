import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="mx-auto flex max-w-xl flex-1 flex-col px-4 pb-20 pt-28">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <p className="mt-2 text-sm text-text-muted">We&apos;d love to hear from you</p>
      </div>

      <section className="mt-10">
        <h2 className="text-sm font-medium text-text-muted">Send a message</h2>
        <div className="mt-3 rounded-[28px] bg-surface p-5 sm:p-6">
          <div className="space-y-4">
            <Field label="Name">
              <input className="w-full rounded-xl bg-bg px-3 py-2.5 text-sm outline-none transition focus:ring-1 focus:ring-primary" />
            </Field>

            <Field label="Email">
              <input
                type="email"
                className="w-full rounded-xl bg-bg px-3 py-2.5 text-sm outline-none transition focus:ring-1 focus:ring-primary"
              />
            </Field>

            <Field label="Message">
              <textarea
                rows={5}
                className="w-full resize-y rounded-xl bg-bg px-3 py-2.5 text-sm outline-none transition focus:ring-1 focus:ring-primary"
              />
            </Field>

            <button className="w-full rounded-xl bg-primary py-3 text-sm font-medium text-bg transition hover:bg-primary-hover">
              Send message
            </button>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-medium text-text-muted">Support email</h2>
        <div className="mt-3 rounded-2xl bg-surface px-4 py-4">
          <div className="flex items-center justify-center gap-2 text-sm text-text-muted">
            <Mail className="h-4 w-4" />
            <span>support@realvs.ai</span>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-xs text-text-muted">{label}</label>
      {children}
    </div>
  );
}
