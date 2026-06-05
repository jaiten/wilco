export type SubmissionKind = "contact" | "quote" | "documentation" | "careers" | "general" | "newsletter";

export interface StoredSubmission {
  id: string;
  kind: SubmissionKind;
  createdAt: string;
  payload: Record<string, string | boolean | null>;
}

const STORAGE_KEY = "wilco-civil-form-submissions";

const canUseStorage = () => typeof window !== "undefined" && typeof window.localStorage !== "undefined";

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
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([submission, ...existing].slice(0, 100)));
  }

  return submission;
}

function safeParseSubmissions(raw: string) {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed as StoredSubmission[] : [];
  } catch {
    return [];
  }
}
