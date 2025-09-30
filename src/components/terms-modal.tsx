"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/config";

export function TermsModal() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const lastUpdated = "September 30, 2025";
  const contactEmail = "info@vertechx-collective.com";
  const termsUrl = "www.weivly.com";

  // Handle closing the modal
  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen && pathname === "/terms") {
      // Navigate back to home when modal is closed from /terms route
      router.push("/");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button className="text-[15px]/normal font-medium text-muted-foreground transition-all duration-100 ease-linear hover:text-foreground hover:underline hover:underline-offset-4">
          Terms & Conditions
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">Terms & Conditions</DialogTitle>
          <DialogDescription>
            <div className="text-left space-y-4 text-foreground">
              <div>
                <p className="font-semibold text-lg">1. Terms of Use</p>
                <div className="space-y-2">
                  <p>By downloading and using {siteConfig.name}, you agree to these Terms of Use and our Privacy Policy. If you do not agree, do not use the App.</p>

                  <p className="font-medium">Eligibility</p>
                  <p>You must be at least 16 years old (or the age of digital consent in your region). If under 18, you must have parental or guardian consent.</p>

                  <p className="font-medium">Subscriptions & Billing</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Some features require a paid subscription via the Apple App Store or Google Play.</li>
                    <li>Free trials convert to paid unless canceled at least 24 hours before the trial ends.</li>
                    <li>Subscriptions auto‑renew and can be managed/canceled in your app store settings.</li>
                    <li>Payments and refunds are handled by your app store and subject to its terms.</li>
                  </ul>

                  <p className="font-medium">Fitness & Non‑Medical Disclaimer</p>
                  <p>{siteConfig.name} is a fitness support and progress‑tracking tool. It does not provide medical advice, diagnosis, or treatment and is not a medical device. Always consult a qualified healthcare professional before changing your diet, exercise, or health routine. Do not use the App for emergencies or to manage medical conditions.</p>

                  <p className="font-medium">Acceptable Use</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Do not misuse, disrupt, or attempt to reverse engineer the App.</li>
                    <li>Do not upload unlawful, harmful, or infringing content.</li>
                    <li>Respect others’ intellectual property and privacy rights.</li>
                  </ul>

                  <p className="font-medium">Your Account</p>
                  <p>You are responsible for safeguarding your login credentials and all activity under your account. Notify us of unauthorized use.</p>

                  <p className="font-medium">Intellectual Property</p>
                  <p>The App and its content are owned by us or our licensors. We grant you a limited, non‑exclusive, non‑transferable license to use the App for personal, non‑commercial purposes.</p>

                  <p className="font-medium">Third‑Party Services</p>
                  <p>The App may link to or integrate with third‑party services. We are not responsible for their content or practices. Your use of them is subject to their terms.</p>

                  <p className="font-medium">Termination</p>
                  <p>We may suspend or terminate your access at any time for any reason, including violations of these Terms.</p>

                  <p className="font-medium">Disclaimers</p>
                  <p>The App is provided “AS IS” and “AS AVAILABLE”, without warranties of any kind.</p>

                  <p className="font-medium">Limitation of Liability</p>
                  <p>To the maximum extent permitted by law, we are not liable for indirect, incidental, special, consequential, or punitive damages, or loss of data or profits arising from your use of the App.</p>

                  <p className="font-medium">Indemnification</p>
                  <p>You agree to defend, indemnify, and hold us harmless from claims and expenses arising from your use of the App or breach of these Terms.</p>

                  <p className="font-medium">Governing Law</p>
                  <p>These Terms are governed by the laws of the Netherlands, without regard to conflict‑of‑law principles.</p>

                  <p className="font-medium">Changes to Terms</p>
                  <p>We may update these Terms. Material changes will be indicated by updating the “Last updated” date below.</p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg">2. Privacy Policy</p>
                <div className="space-y-2">
                  <p>Last updated: {lastUpdated}</p>

                  <p>This Privacy Policy explains how we collect, use, and disclose information when you use {siteConfig.name}, and describes your privacy rights.</p>

                  <p className="font-semibold mt-4">Interpretation and Definitions</p>
                  <div className="space-y-2">
                    <p className="font-medium">Definitions</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Account</strong>: a unique account to access the Service.</li>
                      <li><strong>Application</strong>: {siteConfig.name}, the software provided by us.</li>
                      <li><strong>Personal Data</strong>: information that relates to an identified or identifiable individual.</li>
                      <li><strong>Usage Data</strong>: data collected automatically from using the App or its infrastructure.</li>
                      <li><strong>Service Provider</strong>: an entity that processes data on our behalf.</li>
                      <li><strong>You</strong>: the individual or organization using the App.</li>
                    </ul>
                  </div>

                  <p className="font-semibold mt-4">Collecting and Using Your Personal Data</p>
                  <div className="space-y-2">
                    <p className="font-medium">Types of Data Collected</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Account & Profile Data</strong>: information you provide when creating or managing an account.</li>
                      <li><strong>Input & Progress Data</strong>: entries you log (e.g., weight and related metrics), goals, preferences, and notes.</li>
                      <li><strong>Usage & Device Data</strong>: interactions, diagnostics, device type, OS, language, IP address, and identifiers.</li>
                      <li><strong>Purchase Data</strong>: subscription status and transactions processed by your app store (we do not store full card details).</li>
                    </ul>

                    <p className="font-medium">Information from Third‑Party Services</p>
                    <p>If you choose to use sign‑in or integrations provided by third‑party services, we may receive information as permitted by their policies and your settings.</p>
                  </div>

                  <p className="font-semibold mt-4">Use of Your Personal Data</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Provide, operate, and maintain the App and your account.</li>
                    <li>Improve features, performance, and user experience.</li>
                    <li>Provide customer support and respond to requests.</li>
                    <li>Send service‑related notices, updates, and offers (where permitted).</li>
                    <li>Detect, prevent, and address fraud, abuse, and security issues.</li>
                    <li>Comply with legal obligations.</li>
                  </ul>

                  <p className="font-semibold mt-4">Legal Bases (EEA/UK where applicable)</p>
                  <p>Contract performance, legitimate interests, legal obligations, and consent where required.</p>

                  <p className="font-semibold mt-4">Sharing of Information</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>With service providers under appropriate safeguards.</li>
                    <li>With app stores for purchases and account management.</li>
                    <li>For legal reasons or to protect rights and safety.</li>
                    <li>In connection with a merger, acquisition, or asset sale.</li>
                  </ul>

                  <p className="font-semibold mt-4">Data Retention</p>
                  <p>We retain data as long as needed to provide the App and for legitimate business or legal purposes. You may request deletion subject to certain exceptions.</p>

                  <p className="font-semibold mt-4">International Transfers</p>
                  <p>Your information may be transferred to and processed in other countries with appropriate safeguards where required.</p>

                  <p className="font-semibold mt-4">Security</p>
                  <p>We implement technical and organizational measures to protect your data, but no method is 100% secure.</p>

                  <p className="font-semibold mt-4">Your Rights</p>
                  <p>Depending on your location, you may have rights to access, correct, delete, restrict, or object to processing, and data portability. You may withdraw consent where processing is based on consent.</p>

                  <p className="font-semibold mt-4">Children’s Privacy</p>
                  <p>The App is not directed to children under 16. If we learn we collected personal data from a child, we will delete it.</p>

                  <p className="font-semibold mt-4">Changes</p>
                  <p>We may update this Policy. Material changes will be indicated by updating the “Last updated” date.</p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg">3. Contact Us</p>
                <p>If you have questions about these Terms or this Privacy Policy, contact us:</p>
                <ul className="list-disc pl-6">
                  <li>Email: <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">{contactEmail}</a></li>
                </ul>
              </div>

              <p className="text-sm text-muted-foreground mt-6">Last updated: {lastUpdated}</p>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
} 