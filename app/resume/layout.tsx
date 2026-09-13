import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume - Kanchana Walagambahu",
  description:
    "Resume for Kanchana Walagambahu, Senior Software Engineer, Frontend.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
