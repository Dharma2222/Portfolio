export const site = {
  name: "Dharma Kevadiya",
  role: "Software Engineer",
  summary:
    "",
  location: "Halifax, NS",
  email: "jh692444@dal.ca",
  socials: {
    github: "https://github.com/Dharma2222",
    linkedin: "https://www.linkedin.com/in/dharma-kevadiya",
    x: ""
  },
  nav: [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ],
  
  projects: [
    {
      title: "DALScooter — Serverless Scooter Platform",
      description:
        "Multi-cloud scooter rental app with secure sign-in (MFA) and async workflows for bookings/notifications. Automated IaC and dashboards; cut booking approvals from minutes to seconds with SQS-triggered Lambdas..",
      tags: ["AWS", "Cognito", "Lambda", "DynamoDB", "SQS/SNS", "React", "CloudFormation", "GCP (Pub/Sub, Cloud Run)"],
      link: "https://github.com/Dharma2222/dal-scooter"
    },
    {
      title: "MediLink — Telehealth Video Calls",
      description:
        "Tokenized, role-based video rooms with waiting room + in-call controls; doctor-only medical-record upload and a nearby-pharmacy finder. Security checked with OWASP ZAP; APIs load-tested in JMeter..",
      tags: ["Node.js", "React", "Twilio", "MongoDB", "JWT", "OWASP ZAP", "Apache JMeter"],
      link: "https://github.com/priyanshsolanki/medilink"
    },
    {
      title: "BugBoard — Collaborative Bug Tracking & Live Debugging",
      description:
        "Full-stack platform for reporting bugs, real-time collaborative debugging with a built-in Monaco editor, solution reviews, email notifications, and rich search/filters; Spring Boot backend + React frontend with JWT.",
      tags: ["React 18", "Spring Boot", "Axios", "GitHub Action CI/CD", "Firebase (storage/auth)","MySQL", "Designite (SOLID smell)"],
      link: "https://github.com/Dharma2222/BugBoard"
    },
    {
      title: "Jenkins Automation Demo",
      description:
        "Hands-on pipeline that builds a Java app with Maven, packages it with Docker, then deploys to Kubernetes on AWS EKS via Jenkinsfile. Great for showcasing CI/CD fundamentals.",
      tags: ["Jenkins", "Maven", "Java", "Docker", "Kubernetes","bash", "YAML"],
      link: "https://github.com/Dharma2222/jenkins-automation-demo"
    },
    {
      title: "E-commerce Application",
      description:
        "Microservices-style e-commerce with admin & customer roles, catalog, cart/checkout, and order tracking. CI/CD to AWS EKS with Jenkins; infra bootstrapped via eksctl & Ansible.",
      tags: ["Node.js/Express", "React", "Kubernetes", "Jenkins CI/CD", "Ansible"],
      link: "https://github.com/Dharma2222/ecommerce_application"
    },
    {
      title: "Multimodal Assistant Chat — OpenAI Assistants API",
      description:
        "Next.js + TypeScript chat app using the OpenAI Assistants API; supports threads, file uploads for analysis, optional vision, and serverless API routes. Ships with a modular ChatManager and one-click Vercel deploy.",
      tags: ["Next.js", "TypeScript", "Tailwind", "OpenAI Assistants API", "Vercel", "API Routes"],
      link: "https://github.com/Dharma2222/multimodal-assistant-chat"
    },
  ]
};

