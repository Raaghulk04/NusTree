"use client";
import { Navbar } from "@/components/navbar";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { revokeOtherSessions } from "better-auth/api";
import { LucideTruckElectric } from "lucide-react";

export default function Settings() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { data: session, isPending, error1, refetch } = authClient.useSession();

  if (isPending) return <p>Loading session...</p>;
  if (error1) return <p>Error loading session: {error1.message}</p>;
  if (!session) return <p>Not logged in</p>;

  console.log(session);

  const handleNewName = async (Name) => {
    const result = await authClient.updateUser({
      name: Name,
    });

    if (result.error) {
      console.log(result.error);
    } else {
      console.log(result.data);
    }
  };

  const handleNewEmail = async (newemail) => {
    const result = await authClient.changeEmail({
      newEmail: newemail,
      callbackURL: "/settings", // to redirect after this process
    });
  };

  const handleNewPassword = async (newpassword, oldpassword) => {
    await authClient.changePassword({
      newPassword: newpassword,
      currentPassword: oldpassword,
      revokeOtherSessions: true,
    });
  };

  const handleSave = () => {
    handleNewName(name);
    handleNewEmail(email);
    handleNewPassword(password, currentPassword);
  };
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-4 md:px-10 overflow-hidden flex flex-col items-center justify-center space-y-6">
        <header className="space-y-2 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Settings
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-lg">
            Manage your account details and security preferences.
          </p>
        </header>

        <div className="w-full max-w-lg">
          <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 md:p-6 shadow-sm">
            <h2 className="text-base font-bold mb-4">Profile Information</h2>
            <form className="space-y-4">
              <FieldGroup className="space-y-4">
                {error && (
                  <p className="text-red-500 text-xs font-medium">{error}</p>
                )}

                <Field className="space-y-1">
                  <FieldLabel htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                    Full Name
                  </FieldLabel>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    onChange={(e) => setName(e.target.value)}
                    defaultValue={session.user.name}
                    className="bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 h-9 text-sm"
                  />
                </Field>

                <Field className="space-y-1">
                  <FieldLabel htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                    Email Address
                  </FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    defaultValue={session.user.email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 h-9 text-sm"
                  />
                </Field>

                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 space-y-4">
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50">Security</h3>

                  <Field className="space-y-1">
                    <FieldLabel
                      htmlFor="currentPassword"
                      className="text-[10px] font-bold uppercase tracking-wider text-zinc-500"
                    >
                      Current Password
                    </FieldLabel>
                    <Input
                      id="currentPassword"
                      type="password"
                      placeholder="Enter current password"
                      required
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 h-9 text-sm"
                    />
                  </Field>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Field className="space-y-1">
                      <FieldLabel
                        htmlFor="password"
                        className="text-[10px] font-bold uppercase tracking-wider text-zinc-500"
                      >
                        New Password
                      </FieldLabel>
                      <Input
                        id="password"
                        type="password"
                        placeholder="8+ characters"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 h-9 text-sm"
                      />
                    </Field>

                    <Field className="space-y-1">
                      <FieldLabel
                        htmlFor="confirmPassword"
                        className="text-[10px] font-bold uppercase tracking-wider text-zinc-500"
                      >
                        Confirm
                      </FieldLabel>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Re-type password"
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 h-9 text-sm"
                      />
                    </Field>
                  </div>
                </div>

                <Field className="pt-1">
                  <Button
                    type="button"
                    onClick={handleSave}
                    className="w-full bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:opacity-90 transition-opacity h-10 font-bold text-sm"
                  >
                    Save Changes
                  </Button>
                </Field>
              </FieldGroup>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}
