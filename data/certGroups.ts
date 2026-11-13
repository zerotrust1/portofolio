export type CertGroup = {
  title: string;
  slug: string;
  description: string;
  badge?: string;
  certifications: Array<{
    title: string;
    date: string;
    credentialId?: string;
    url: string;
  }>;
};

export const certGroups: CertGroup[] = [
  {
    title: "Juniper Networks",
    slug: "juniper-networks",
    description: "Enterprise network security & Junos OS architecture credentials",
    badge: "JNCIA-SEC",
    certifications: [
      {
        title: "JNCIA-SEC (Juniper Networks Certified Associate - Security)",
        date: "2026",
        credentialId: "Credential ID: 991865-12052",
        url: "https://www.juniper.net/us/en/training/certification/certification-tracks/security-track.html",
      },
    ],
  },
  {
    title: "Google",
    slug: "google",
    description: "Threat analysis, SIEM forensics, and incident response specialization",
    badge: "Professional Certificate",
    certifications: [
      {
        title: "Google Cybersecurity Professional Certificate",
        date: "2025",
        credentialId: "Specialization Credential",
        url: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/8086EVABJ3QT",
      },
    ],
  },
  {
    title: "Cisco",
    slug: "cisco",
    description: "Enterprise networking fundamentals, IP addressing, and troubleshooting",
    badge: "Networking",
    certifications: [
      {
        title: "Network Addressing and Basic Troubleshooting",
        date: "2026",
        credentialId: "Credly Badge",
        url: "https://www.credly.com/badges/1c8eec23-e881-42fa-b4ba-5e4efe5d31a1/linked_in_profile",
      },
    ],
  },
  {
    title: "Anthropic Academy",
    slug: "anthropic-academy",
    description: "AI system architecture, prompt engineering, and LLM foundations",
    badge: "AI Systems",
    certifications: [
      {
        title: "Claude 101",
        date: "2026",
        credentialId: "Skilljar Verified",
        url: "https://verify.skilljar.com/c/qqviqc9t5p8z",
      },
      {
        title: "AI Fluency: Framework & Foundation",
        date: "2026",
        credentialId: "Skilljar Verified",
        url: "https://verify.skilljar.com/c/xcsy7tk5hyx2",
      },
    ],
  },
];
