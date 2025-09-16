import React from "react";
import StandardServicePageLayout from "@/components/StandardServicePageLayout";
import { 
  Brain, 
  Bot, 
  Database, 
  Search, 
  Cpu,
  Users,
  Zap,
  Settings,
  Globe,
  ArrowRight,
  Shield,
  Star,
  TrendingUp,
  Target,
  Phone,
  MessageCircle,
  MapPin,
  Lightbulb
} from "lucide-react";
import { SiPython, SiTensorflow, SiPytorch, SiJupyter, SiGoogle } from "react-icons/si";

export default function AIMachineLearningService() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI & Machine Learning Services",
    "description": "Harness the power of artificial intelligence to transform your business operations and decision-making",
    "provider": {
      "@type": "Organization",
      "name": "InfiniQode",
      "url": "https://theinfiniqode.com"
    },
    "areaServed": "Worldwide",
    "serviceType": "AI & Machine Learning"
  };

  const serviceData = {
    seo: {
      title: "AI & Machine Learning Services - Intelligent Business Solutions",
      description: "Harness the power of artificial intelligence and machine learning to transform your business operations, improve decision-making, and create intelligent applications.",
      keywords: "artificial intelligence, machine learning, AI development, neural networks, deep learning, automation",
      serviceName: "AI & Machine Learning",
      serviceType: "AI & Machine Learning"
    },
    hero: {
      mainTitle: "AI & Machine Learning",
      subtitle: "Services",
      description: "At INFINIQODE, we harness the power of artificial intelligence to transform business operations and unlock new possibilities. Our team creates intelligent solutions that learn, adapt, and evolve. From predictive analytics to automated decision-making systems, we deliver AI that drives real business value.",
      primaryCTA: "Transform with AI",
      secondaryCTA: "View AI Solutions",
      contactTitle: "Ready to Start Your AI Project?",
      contactDescription: "Let's discuss your AI needs and create intelligent solutions that drive business growth.",
      badges: [
        "Machine Learning",
        "Neural Networks", 
        "Computer Vision",
        "Natural Language Processing"
      ]
    },
    process: {
      steps: [
        { 
          icon: Settings, 
          title: "Data Analysis & Strategy", 
          step: "Step 1", 
          description: "Analyze your data landscape and identify AI opportunities that align with your business objectives for maximum impact." 
        },
        { 
          icon: Brain, 
          title: "Model Development", 
          step: "Step 2", 
          description: "Design and train custom machine learning models tailored to your specific use case and data requirements." 
        },
        { 
          icon: Bot, 
          title: "AI Implementation", 
          step: "Step 3", 
          description: "Deploy intelligent solutions with proper integration, testing, and validation to ensure optimal performance." 
        },
        { 
          icon: Globe, 
          title: "Optimization & Scaling", 
          step: "Step 4", 
          description: "Continuously monitor, optimize, and scale AI systems to maximize ROI and business value over time." 
        }
      ]
    },
    includes: {
      title: "What Our AI & Machine Learning Service Includes",
      description: "Our professional AI and machine learning service is designed to help businesses of all sizes harness the power of artificial intelligence. We work closely with your team to understand your unique challenges and implement AI solutions that drive real business value and competitive advantage.",
      features: [
        {
          title: "Custom AI Model Development",
          description: "Design tailored AI models to solve unique business challenges with high accuracy and efficiency."
        },
        {
          title: "Natural Language Processing",
          description: "Develop NLP solutions for text analysis, chatbots, and sentiment detection to enhance user interactions."
        },
        {
          title: "Computer Vision Solutions",
          description: "Create vision-based systems for image recognition, object detection, and automated visual inspections."
        },
        {
          title: "Predictive Analytics Implementation",
          description: "Implement predictive models to forecast trends, optimize decisions, and drive business growth."
        }
      ],
      stats: [
        { value: "95%", label: "Model Accuracy" },
        { value: "60%", label: "Process Efficiency" },
        { value: "40%", label: "Cost Reduction" }
      ]
    },
    useCases: {
      title: "All AI & Machine Learning Usecase",
      subtitle: "Discover how our AI and machine learning services have transformed businesses across various industries with intelligent automation and insights.",
      cases: [
        { 
          title: "Healthcare Diagnostics", 
          subtitle: "95% Accuracy in Medical Image Analysis", 
          description: "AI-powered medical imaging system that detects diseases with 95% accuracy, reducing diagnosis time by 60% and improving patient outcomes."
        },
        { 
          title: "Financial Fraud Detection", 
          subtitle: "99.5% Fraud Detection Rate", 
          description: "Machine learning model that identifies fraudulent transactions in real-time, preventing $2M+ in losses with minimal false positives."
        },
        { 
          title: "Supply Chain Optimization", 
          subtitle: "30% Cost Reduction with Predictive Analytics", 
          description: "Predictive analytics solution that optimizes inventory management and logistics, reducing costs by 30% and improving delivery times."
        }
      ]
    },
    serviceDetails: {
      description: "Our professional AI and machine learning service combines cutting-edge algorithms with deep business understanding to create intelligent solutions that transform operations. We specialize in developing custom neural networks, implementing computer vision systems, and building natural language processing applications that learn and adapt to your specific needs. From predictive analytics that forecast market trends to automated decision-making systems that optimize workflows, our AI solutions are designed to deliver measurable results and sustainable competitive advantages.",
      features: [
        { icon: Brain, title: "Machine", subtitle: "Learning Models" },
        { icon: Bot, title: "AI", subtitle: "Automation" },
        { icon: Database, title: "Data", subtitle: "Analytics" },
        { icon: Lightbulb, title: "Intelligent", subtitle: "Insights" }
      ]
    },
    technologies: {
      title: "Technologies We Use",
      techs: [
        { icon: SiPython, name: "Python", description: "Primary programming language for AI development with extensive machine learning libraries and frameworks." },
        { icon: SiTensorflow, name: "TensorFlow", description: "Open-source machine learning framework for building and deploying neural networks at scale." },
        { icon: SiPytorch, name: "PyTorch", description: "Dynamic neural network framework preferred for research and rapid prototyping of AI models." },
        { icon: SiGoogle, name: "OpenAI", description: "Advanced AI models and APIs for natural language processing and generative AI applications." },
        { icon: SiGoogle, name: "AWS ML", description: "Cloud-based machine learning services for scalable AI model training and deployment." },
        { icon: SiGoogle, name: "Azure AI", description: "Microsoft's AI platform providing cognitive services and machine learning capabilities." },
        { icon: SiGoogle, name: "Google AI", description: "Google Cloud AI platform with pre-trained models and AutoML capabilities for businesses." },
        { icon: SiJupyter, name: "Jupyter", description: "Interactive development environment for data science, machine learning experimentation, and analysis." }
      ]
    },
    faq: {
      items: [
        {
          question: "How do I know if my business needs AI?",
          answer: "AI can benefit any business with repetitive processes, large datasets, or complex decision-making needs. We conduct assessments to identify the best AI opportunities for your specific situation."
        },
        {
          question: "How long does it take to develop an AI solution?",
          answer: "Development time varies from 3-12 months depending on complexity. Simple automation projects take 3-6 months, while complex neural networks may require 6-12 months including data preparation and testing."
        },
        {
          question: "What data do you need to build AI models?",
          answer: "We need relevant historical data for training. The amount varies by project - typically thousands to millions of data points. We can work with various formats and help clean and prepare your data."
        },
        {
          question: "How do you ensure AI model accuracy?",
          answer: "We use rigorous testing methodologies, cross-validation, and performance monitoring. Models are trained on separate datasets and continuously evaluated to maintain high accuracy rates."
        },
        {
          question: "Can AI integrate with our existing systems?",
          answer: "Yes, our AI solutions are designed to integrate seamlessly with existing infrastructure through APIs, cloud services, and custom connectors to minimize disruption to your operations."
        }
      ]
    }
  };

  return <StandardServicePageLayout data={serviceData} />;
}