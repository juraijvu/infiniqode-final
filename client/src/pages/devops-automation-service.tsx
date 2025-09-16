import React from "react";
import StandardServicePageLayout from "@/components/StandardServicePageLayout";
import { 
  Settings, 
  GitBranch, 
  Server, 
  Gauge,
  Zap,
  Shield,
  Monitor,
  Code,
  Database,
  Cloud,
  Target,
  TrendingUp
} from "lucide-react";
import { SiDocker, SiKubernetes, SiJenkins, SiGithubactions, SiTerraform, SiAnsible, SiPrometheus, SiGrafana } from "react-icons/si";

export default function DevOpsAutomationService() {
  const serviceData = {
    seo: {
      title: "DevOps Automation Services - Streamline Development Workflows",
      description: "Streamline development workflows with automated CI/CD pipelines, infrastructure as code, and monitoring solutions that accelerate delivery.",
      keywords: "devops, automation, ci/cd, infrastructure as code, docker, kubernetes, jenkins, monitoring",
      serviceName: "DevOps Automation",
      serviceType: "DevOps Automation"
    },
    hero: {
      mainTitle: "DevOps",
      subtitle: "Automation",
      description: "Streamline development workflows with automated CI/CD pipelines, infrastructure as code, and monitoring solutions that accelerate delivery.",
      primaryCTA: "Automate Your Workflow",
      secondaryCTA: "View DevOps Solutions",
      contactTitle: "Ready to Automate Your Workflow?",
      contactDescription: "Let's discuss your DevOps needs and create automation solutions that accelerate your delivery.",
      badges: [
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Container Orchestration"
      ]
    },
    process: {
      steps: [
        { 
          icon: Settings, 
          title: "Assessment & Planning", 
          step: "Step 1", 
          description: "Analyze current workflows, identify bottlenecks, and design automation strategy for maximum efficiency." 
        },
        { 
          icon: GitBranch, 
          title: "CI/CD Implementation", 
          step: "Step 2", 
          description: "Set up continuous integration and deployment pipelines with automated testing and quality gates." 
        },
        { 
          icon: Server, 
          title: "Infrastructure Automation", 
          step: "Step 3", 
          description: "Implement Infrastructure as Code for consistent, scalable, and repeatable deployments." 
        },
        { 
          icon: Gauge, 
          title: "Monitoring & Optimization", 
          step: "Step 4", 
          description: "Deploy professional monitoring and continuously optimize automation for better performance." 
        }
      ]
    },
    includes: {
      title: "What Our DevOps Automation Service Includes",
      description: "Our professional DevOps automation service is designed to help businesses of all sizes streamline their development and deployment processes. We work closely with your team to understand your unique challenges and implement automation solutions that drive efficiency and reliability.",
      features: [
        {
          title: "Continuous Integration/Deployment",
          description: "Automated build, test, and deployment pipelines that ensure consistent and reliable software delivery with minimal manual intervention."
        },
        {
          title: "Infrastructure as Code",
          description: "Version-controlled infrastructure provisioning that enables consistent, scalable, and repeatable deployment environments."
        },
        {
          title: "Container Orchestration",
          description: "Docker and Kubernetes solutions for scalable application deployment and management across different environments."
        },
        {
          title: "Monitoring & Alerting",
          description: "professional monitoring solutions with real-time alerting to ensure optimal performance and quick issue resolution."
        }
      ],
      stats: [
        { value: "80%", label: "Deployment Speed" },
        { value: "60%", label: "Error Reduction" },
        { value: "40%", label: "Cost Savings" }
      ]
    },
    useCases: {
      title: "All DevOps Automation Usecases",
      subtitle: "Discover how our DevOps automation services have transformed development workflows across various industries with intelligent automation and monitoring.",
      cases: [
        { 
          title: "E-commerce Platform", 
          subtitle: "50% Faster Deployments with Zero Downtime", 
          description: "Automated deployment pipeline that reduced deployment time from 2 hours to 30 minutes with zero-downtime deployments, improving customer experience."
        },
        { 
          title: "Financial Services", 
          subtitle: "99.9% Uptime with Automated Monitoring", 
          description: "professional monitoring and automated scaling solution that achieved 99.9% uptime and reduced response times by 40%."
        },
        { 
          title: "Healthcare Application", 
          subtitle: "HIPAA Compliant CI/CD Pipeline", 
          description: "Secure, compliant deployment pipeline that maintains HIPAA standards while enabling rapid feature delivery and bug fixes."
        }
      ]
    },
    serviceDetails: {
      description: "Our professional DevOps automation service combines cutting-edge tools with proven methodologies to create seamless development and deployment workflows. We specialize in implementing CI/CD pipelines, containerization strategies, and infrastructure automation that transform how teams build, test, and deploy applications. From automated testing and quality gates to infrastructure as code and monitoring solutions, our DevOps practices are designed to deliver faster time-to-market and improved reliability.",
      features: [
        { icon: Zap, title: "Automated", subtitle: "Pipelines" },
        { icon: Shield, title: "Secure", subtitle: "Deployments" },
        { icon: Monitor, title: "Real-time", subtitle: "Monitoring" },
        { icon: Code, title: "Infrastructure", subtitle: "as Code" }
      ]
    },
    technologies: {
      title: "Technologies We Use",
      techs: [
        { icon: SiDocker, name: "Docker", description: "Containerization platform for consistent application deployment across different environments." },
        { icon: SiKubernetes, name: "Kubernetes", description: "Container orchestration system for automated deployment, scaling, and management of applications." },
        { icon: SiJenkins, name: "Jenkins", description: "Open-source automation server for building CI/CD pipelines and continuous integration workflows." },
        { icon: SiGithubactions, name: "GitHub Actions", description: "Native CI/CD platform integrated with GitHub for automated workflows and deployments." },
        { icon: SiTerraform, name: "Terraform", description: "Infrastructure as Code tool for provisioning and managing cloud infrastructure across providers." },
        { icon: SiAnsible, name: "Ansible", description: "Automation platform for configuration management, application deployment, and orchestration." },
        { icon: SiPrometheus, name: "Prometheus", description: "Open-source monitoring and alerting toolkit designed for reliability and scalability." },
        { icon: SiGrafana, name: "Grafana", description: "Data visualization and monitoring platform for creating dashboards and analyzing metrics." }
      ]
    },
    faq: {
      items: [
        {
          question: "What is DevOps automation and why do I need it?",
          answer: "DevOps automation streamlines development workflows by automating build, test, and deployment processes. It reduces manual errors, accelerates delivery, and improves reliability of your software releases."
        },
        {
          question: "How long does it take to implement DevOps automation?",
          answer: "Implementation time varies from 2-8 weeks depending on your current infrastructure and complexity. Simple CI/CD setups take 2-4 weeks, while professional automation with monitoring may require 6-8 weeks."
        },
        {
          question: "Can you work with our existing tools and infrastructure?",
          answer: "Yes, we can integrate with most existing tools and infrastructure. We assess your current setup and create a migration strategy that minimizes disruption while maximizing automation benefits."
        },
        {
          question: "What kind of monitoring and alerting do you provide?",
          answer: "We implement professional monitoring covering application performance, infrastructure health, and business metrics. This includes real-time alerts, custom dashboards, and automated incident response."
        },
        {
          question: "How do you ensure security in automated deployments?",
          answer: "Security is built into every automation step through automated security scanning, secrets management, access controls, and compliance checks integrated into the CI/CD pipeline."
        }
      ]
    }
  };

  return <StandardServicePageLayout data={serviceData} />;
}