import emailjs from "@emailjs/browser";

export type SubmissionKind = "contact" | "quote" | "documentation" | "careers" | "general" | "newsletter";

export interface StoredSubmission {
  id: string;
  kind: SubmissionKind;
  createdAt: string;
  payload: Record<string, string | boolean | null>;
}

const STORAGE_KEY = "wilco-civil-form-submissions";
const TO_EMAIL = "jaitenkangis@gmail.com";

const EJS_SERVICE   = import.meta.env.VITE_EMAILJS_SERVICE_ID   ?? "";
const EJS_KEY       = import.meta.env.VITE_EMAILJS_PUBLIC_KEY   ?? "";
const TPL_CONTACT   = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT     ?? "";
const TPL_QUOTE     = import.meta.env.VITE_EMAILJS_TEMPLATE_QUOTE        ?? "";
const TPL_NEWSLETTER = import.meta.env.VITE_EMAILJS_TEMPLATE_NEWSLETTER  ?? "";

const emailEnabled = () => !!(EJS_SERVICE && EJS_KEY);

const canUseStorage = () =>
  typeof window !== "undefined" && typeof window.localStorage !== "undefined";

async function fireEmail(templateId: string, params: Record<string, string>) {
  if (!emailEnabled() || !templateId) return;
  try {
    await emailjs.send(EJS_SERVICE, templateId, params, { publicKey: EJS_KEY });
  } catch {
    // Email send failure is non-fatal — submission is already saved to localStorage
  }
}

function buildEmailParams(
  kind: SubmissionKind,
  payload: StoredSubmission["payload"],
): { templateId: string; params: Record<string, string> } | null {
  const str = (v: unknown) => (v == null ? "" : String(v));

  if (kind === "contact") {
    return {
      templateId: TPL_CONTACT,
      params: {
        to_email:   TO_EMAIL,
        from_name:  str(payload.name),
        from_email: str(payload.email),
        from_phone: str(payload.phone),
        subject:    str(payload.subject),
        message:    str(payload.message),
        service_area: str(payload.serviceArea),
      },
    };
  }

  if (kind === "quote" || kind === "documentation" || kind === "general") {
    return {
      templateId: TPL_QUOTE,
      params: {
        to_email:     TO_EMAIL,
        from_name:    str(payload.name),
        from_email:   str(payload.email),
        from_phone:   str(payload.phone),
        company:      str(payload.company),
        form_type:    str(payload.formType),
        project_type: str(payload.projectType),
        timeline:     str(payload.timeline),
        budget:       str(payload.budget),
        scope:        str(payload.scope),
      },
    };
  }

  if (kind === "newsletter") {
    const subscriberEmail = str(payload.email);
    return {
      templateId: TPL_NEWSLETTER,
      params: {
        to_email:         subscriberEmail,
        subscriber_email: subscriberEmail,
        notify_email:     TO_EMAIL,
      },
    };
  }

  return null;
}

export function submitForm(kind: SubmissionKind, payload: StoredSubmission["payload"]) {
  const submission: StoredSubmission = {
    id: `WCG-${Date.now().toString(36).toUpperCase()}`,
    kind,
    createdAt: new Date().toISOString(),
    payload,
  };

  if (canUseStorage()) {
    const existingRaw = window.localStorage.getItem(STORAGE_KEY);
    const existing = existingRaw ? safeParseSubmissions(existingRaw) : [];
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([submission, ...existing].slice(0, 100)),
    );
  }

  const emailJob = buildEmailParams(kind, payload);
  if (emailJob) {
    fireEmail(emailJob.templateId, emailJob.params);
  }

  return submission;
}

function safeParseSubmissions(raw: string) {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as StoredSubmission[]) : [];
  } catch {
    return [];
  }
}
