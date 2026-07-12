"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle, UserRound } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { CONTACT_INFO, GET_INVOLVED_CONTACT } from "@/lib/content";
import { submitContactForm } from "@/lib/contact";

type Status = "idle" | "submitting" | "success" | "error";
type FieldName = "name" | "email" | "message";
type Errors = Partial<Record<FieldName, string>>;
type Values = Record<FieldName, string>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_RE.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.message.trim()) {
    errors.message = "Tell us a bit about what you need.";
  }
  return errors;
}

export function Contact() {
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function setField(name: FieldName, value: string) {
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((e) => (e[name] ? { ...e, [name]: undefined } : e));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      await submitContactForm(values);
      setStatus("success");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div id="contact" className="bg-[#f0f2f5] py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-16 px-6 md:px-10 lg:grid-cols-2">
        <Reveal variant="left">
          <SectionLabel
            eyebrow="Reach Out"
            title={
              <>
                Let&apos;s
                <br />
                Connect
              </>
            }
            subtitle="Have questions, ideas, or want to get involved? We'd love to hear from you."
          />
          <div className="mt-8 space-y-6">
            {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-[12px] bg-navy">
                  <Icon size={19} className="text-gold" />
                </div>
                <div>
                  <div className="mb-0.5 text-[0.72rem] font-semibold uppercase tracking-wide text-[#888]">
                    {label}
                  </div>
                  <div className="text-[0.95rem] font-semibold text-navy">
                    {value}
                  </div>
                </div>
              </div>
            ))}
            <div className="flex items-start gap-4">
              <div className="flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-[12px] bg-navy">
                <UserRound size={19} className="text-gold" />
              </div>
              <div>
                <div className="mb-0.5 text-[0.72rem] font-semibold uppercase tracking-wide text-[#888]">
                  {GET_INVOLVED_CONTACT.name} · {GET_INVOLVED_CONTACT.role}
                </div>
                <div className="flex flex-col gap-0.5">
                  {GET_INVOLVED_CONTACT.methods.map((method) => (
                    <a
                      key={method.href}
                      href={method.href}
                      className="text-[0.95rem] font-semibold text-navy transition-colors hover:text-gold"
                    >
                      {method.value}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal variant="right" delay={0.1}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-[20px] bg-white p-8 shadow-[0_8px_40px_rgba(15,30,46,0.07)] sm:p-10"
          >
            <h3 className="mb-7 font-display text-[1.3rem] font-black uppercase tracking-[-0.3px] text-navy">
              Send Us a Message
            </h3>

            <Field label="Your Name" error={errors.name}>
              <input
                type="text"
                placeholder="Full name"
                value={values.name}
                onChange={(e) => setField("name", e.target.value)}
                className={inputClass(!!errors.name)}
              />
            </Field>
            <Field label="Email Address" error={errors.email}>
              <input
                type="email"
                placeholder="you@example.com"
                value={values.email}
                onChange={(e) => setField("email", e.target.value)}
                className={inputClass(!!errors.email)}
              />
            </Field>
            <Field label="Message" error={errors.message}>
              <textarea
                placeholder="Share your question, idea, or how you'd like to get involved..."
                value={values.message}
                onChange={(e) => setField("message", e.target.value)}
                className={`${inputClass(!!errors.message)} min-h-[120px] resize-y`}
              />
            </Field>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-[10px] bg-navy px-4 py-3.5 font-display text-[0.82rem] font-extrabold uppercase tracking-wide text-white transition-all hover:bg-navy-light disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={15} />
                </>
              )}
            </button>

            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 flex items-center gap-2 overflow-hidden rounded-[10px] bg-green-50 px-4 py-3 text-[0.85rem] text-green-700"
                >
                  <CheckCircle2 size={16} className="flex-shrink-0" />
                  Thanks — we&apos;ll be in touch soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 flex items-center gap-2 overflow-hidden rounded-[10px] bg-red-50 px-4 py-3 text-[0.85rem] text-red-600"
                >
                  <AlertCircle size={16} className="flex-shrink-0" />
                  Something went wrong — please try again.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-[10px] border px-4 py-3 text-[0.88rem] text-ink outline-none transition-colors focus:border-navy ${
    hasError ? "border-red-400" : "border-[#dde1e7]"
  }`;
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-[1.1rem]">
      <label className="mb-1.5 block text-[0.75rem] font-semibold uppercase tracking-wide text-[#666]">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-1.5 overflow-hidden text-[0.75rem] text-red-500"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
