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
    description: "Enterprise networking, network automation, addressing, and infrastructure diagnostics",
    badge: "4 Credentials",
    certifications: [
      {
        title: "Understanding Cisco Network Automation Essentials (DEVNAE)",
        date: "2026",
        credentialId: "Credly Badge",
        url: "https://www.credly.com/badges/e3f0960b-a518-497d-9311-c32d782c0398/linked_in_profile",
      },
      {
        title: "Network Technician Career Path",
        date: "2026",
        credentialId: "Credly Badge",
        url: "https://www.credly.com/badges/2ac73c3f-245c-429c-8d79-553767eea348/linked_in_profile",
      },
      {
        title: "Network Addressing and Basic Troubleshooting",
        date: "2026",
        credentialId: "Credly Badge",
        url: "https://www.credly.com/badges/1c8eec23-e881-42fa-b4ba-5e4efe5d31a1/linked_in_profile",
      },
      {
        title: "Networking Basics",
        date: "2026",
        credentialId: "ID: c392b3d1-d6e4-4134-8c11-161354fecb94",
        url: "https://www.netacad.com",
      },
    ],
  },
  {
    title: "Hack The Box",
    slug: "hack-the-box",
    description: "Hands-on offensive & defensive security training on HTB Academy",
    badge: "HTB Academy",
    certifications: [
      {
        title: "Junior Cybersecurity Analyst",
        date: "2026",
        credentialId: "Path ID: 419",
        url: "https://academy.hackthebox.com/achievement/2973766/path/419",
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
