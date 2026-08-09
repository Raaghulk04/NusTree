"use client";
import { Navbar } from "@/components/navbar";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { PageLoader } from "@/components/page-loader";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function Settings() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const { data: session, isPending, error1 } = authClient.useSession();

  if (isPending) {
    return <PageLoader message="Loading settings..." subtext="Retrieving profile preferences..." />;
  }

  if (error1) {
    return (
      <div className="flex flex-col min-h-screen bg-[#161822] text-zinc-100">
        <Navbar />
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="p-4 rounded-xl bg-red-950/30 border border-red-900/50 text-red-400 text-center max-w-sm">
            <p className="font-semibold text-sm">Error loading session</p>
            <p className="text-xs mt-1">{error1.message}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex flex-col min-h-screen bg-[#161822] text-zinc-100">
        <Navbar />
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="p-6 rounded-xl bg-[#1c202e]/60 backdrop-blur-md border border-white/[0.08] text-center max-w-sm">
            <p className="font-semibold text-sm text-zinc-200">Not logged in</p>
            <p className="text-xs text-zinc-400 mt-1">Please sign in to view settings.</p>
          </div>
        </div>
      </div>
    );
  }

  const handleNewName = async (Name) => {
    return await authClient.updateUser({
      name: Name,
    });
  };

  const handleNewEmail = async (newemail) => {
    return await authClient.changeEmail({
      newEmail: newemail,
      callbackURL: "/settings",
    });
  };

  const handleNewPassword = async (newpassword, oldpassword) => {
    return await authClient.changePassword({
      newPassword: newpassword,
      currentPassword: oldpassword,
      revokeOtherSessions: true,
    });
  };

  const handleSave = async () => {
    setError("");
    setSuccessMsg("");
    setIsSaving(true);

    try {
      if (name && name !== session.user.name) {
        const res = await handleNewName(name);
        if (res?.error) throw new Error(res.error.message);
      }

      if (email && email !== session.user.email) {
        const res = await handleNewEmail(email);
        if (res?.error) throw new Error(res.error.message);
      }

      if (password) {
        if (password.length < 8) {
          throw new Error("New password must be at least 8 characters long");
        }
        if (password !== confirmPassword) {
          throw new Error("New passwords do not match");
        }
        if (!currentPassword) {
          throw new Error("Please enter your current password to confirm changes");
        }
        const res = await handleNewPassword(password, currentPassword);
        if (res?.error) throw new Error(res.error.message);
      }

      setSuccessMsg("Settings updated successfully!");
    } catch (err) {
      setError(err?.message || "Failed to update settings");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#161822] text-zinc-100">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 md:px-8 max-w-lg space-y-6">
        <header className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-100">
            Account Settings
          </h1>
          <p className="text-xs text-zinc-400">
            Manage your account credentials and security preferences.
          </p>
        </header>

        <section className="bg-[#1c202e]/65 backdrop-blur-md border border-white/[0.08] rounded-xl p-5 md:p-6 shadow-sm">
          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
            <FieldGroup className="space-y-4">
              {/* Feedback Alerts */}
              {error && (
                <div className="flex items-center gap-2 p-3 text-xs text-red-400 bg-red-950/30 border border-red-900/50 rounded-lg">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}
              {successMsg && (
                <div className="flex items-center gap-2 p-3 text-xs text-emerald-400 bg-emerald-950/30 border border-emerald-900/50 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{successMsg}</span>
                </div>
              )}

              <Field className="space-y-1.5">
                <FieldLabel htmlFor="name" className="text-xs font-medium text-zinc-300">
                  Full Name
                </FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  onChange={(e) => setName(e.target.value)}
                  defaultValue={session.user.name}
                  className="bg-[#131520] border-zinc-700/60 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-zinc-400 focus-visible:border-zinc-400 h-10 rounded-md"
                />
              </Field>

              <Field className="space-y-1.5">
                <FieldLabel htmlFor="email" className="text-xs font-medium text-zinc-300">
                  Email Address
                </FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  defaultValue={session.user.email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#131520] border-zinc-700/60 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-zinc-400 focus-visible:border-zinc-400 h-10 rounded-md"
                />
              </Field>

              <div className="pt-3 border-t border-white/[0.08] space-y-3">
                <p className="text-xs font-semibold text-zinc-300">Security</p>

                <Field className="space-y-1.5">
                  <FieldLabel
                    htmlFor="currentPassword"
                    className="text-xs font-medium text-zinc-400"
                  >
                    Current Password
                  </FieldLabel>
                  <Input
                    id="currentPassword"
                    type="password"
                    placeholder="Enter current password"
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="bg-[#131520] border-zinc-700/60 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-zinc-400 focus-visible:border-zinc-400 h-10 rounded-md"
                  />
                </Field>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Field className="space-y-1.5">
                    <FieldLabel
                      htmlFor="password"
                      className="text-xs font-medium text-zinc-400"
                    >
                      New Password
                    </FieldLabel>
                    <Input
                      id="password"
                      type="password"
                      placeholder="8+ characters"
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-[#131520] border-zinc-700/60 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-zinc-400 focus-visible:border-zinc-400 h-10 rounded-md"
                    />
                  </Field>

                  <Field className="space-y-1.5">
                    <FieldLabel
                      htmlFor="confirmPassword"
                      className="text-xs font-medium text-zinc-400"
                    >
                      Confirm
                    </FieldLabel>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Re-type password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="bg-[#131520] border-zinc-700/60 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-zinc-400 focus-visible:border-zinc-400 h-10 rounded-md"
                    />
                  </Field>
                </div>
              </div>

              <Field className="pt-2">
                <Button
                  type="button"
                  onClick={handleSave}
                  disabled={isSaving}
                  className="w-full h-10 bg-zinc-100 text-zinc-950 hover:bg-white font-medium text-sm transition-colors rounded-md shadow-sm cursor-pointer disabled:opacity-60"
                >
                  {isSaving ? "Saving changes..." : "Save Changes"}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </section>
      </main>
    </div>
  );
}
