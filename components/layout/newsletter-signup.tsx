"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, Loader2, Check } from "lucide-react";
import { subscribeToUpdates } from "@/lib/newsletter";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      await subscribeToUpdates(email.trim());
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-2 text-[0.72rem] font-semibold uppercase tracking-wide text-white/70">
        Get event notifications
      </div>
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          className="min-w-0 flex-1 rounded-[8px] border border-white/15 bg-white/5 px-3 py-2 text-[0.82rem] text-white outline-none placeholder:text-white/30 focus:border-gold"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          aria-label="Subscribe"
          className="flex flex-shrink-0 items-center justify-center rounded-[8px] bg-gold px-3.5 text-navy transition-opacity disabled:opacity-60"
        >
          {status === "submitting" ? (
            <Loader2 size={16} className="animate-spin" />
          ) : status === "success" ? (
            <Check size={16} />
          ) : (
            <Mail size={16} />
          )}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-1.5 text-[0.72rem] text-red-400">
          Enter a valid email.
        </p>
      )}
      {status === "success" && (
        <p className="mt-1.5 text-[0.72rem] text-gold-light">
          You&apos;re subscribed.
        </p>
      )}
    </form>
  );
}
