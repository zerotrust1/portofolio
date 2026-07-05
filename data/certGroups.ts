export type CertGroup = {
  title: string;
  slug: string;
  description: string;
  certifications: Array<{
    title: string;
    date: string;
    url: string;
  }>;
};

export const certGroups: CertGroup[] = [
  {
    title: "Anthropic Academy",
    slug: "anthropic-academy",
    description: "certifications from Anthropic's educational program",
    certifications: [
      {
        title: "Claude 101",
        date: "2026",
        url: "https://verify.skilljar.com/c/qqviqc9t5p8z",
      },
      {
        title: "AI Fluency: Framework & Foundation",
        date: "2026",
        url: "https://verify.skilljar.com/c/xcsy7tk5hyx2",
      },
    ],
  },
];
