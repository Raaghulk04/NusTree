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

export default function Settings() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 md:px-6 md:py-12 space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Settings
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl">
            Manage your account details and security preferences.
          </p>
        </header>

        <div className="max-w-2xl">
          <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-6">Profile Information</h2>
            <form className="space-y-6">
              <FieldGroup className="space-y-6">
                {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
                
                <Field className="space-y-2">
                  <FieldLabel htmlFor="name" className="text-sm font-semibold">Change your Name</FieldLabel>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    onChange={(e) => setName(e.target.value)}
                    className="bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800"
                  />
                </Field>

                <Field className="space-y-2">
                  <FieldLabel htmlFor="email" className="text-sm font-semibold">Change your Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800"
                  />
                </Field>

                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-6">
                  <h3 className="text-lg font-bold">Security</h3>
                  
                  <Field className="space-y-2">
                    <FieldLabel htmlFor="password" className="text-sm font-semibold">New Password</FieldLabel>
                    <Input
                      id="password"
                      type="password"
                      placeholder="At least 8 characters long"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800"
                    />
                  </Field>

                  <Field className="space-y-2">
                    <FieldLabel htmlFor="confirmPassword" className="text-sm font-semibold">
                      Confirm New Password
                    </FieldLabel>
                    <Input
                      id="confirmPassword"
                      type="password"
                      required
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800"
                    />
                  </Field>
                </div>

                <Field className="pt-4">
                  <Button type="button" className="w-full md:w-auto px-8 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:opacity-90 transition-opacity">
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
