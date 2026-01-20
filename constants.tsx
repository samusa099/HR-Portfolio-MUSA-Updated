
import { PortfolioData } from './types';

export const INITIAL_DATA: PortfolioData = {
  name: "Siam Ahmad Musa",
  role: "Human Resource Executive | Human Resource Certification Institute Associate | 2+ Years Experience | Master of Arts in English | Talent Strategy",
  bio: "2 years’ experience in Human Resource & Administration with a focus on productivity and operational excellence. Expertise in recruitment, onboarding, and employee development aligned to business goals. Master of Arts & Bachelor of Arts in English; certified in Business & Human Resource Management.",
  skills: [
    { name: "Strategic Human Resource Management (SHRM)", level: 98 },
    { name: "Organizational Development", level: 95 },
    { name: "Talent Management", level: 92 },
    { name: "Human Resource Certification Institute Compliance", level: 95 },
    { name: "People Analytics", level: 90 },
    { name: "Strategic Communication", level: 97 }
  ],
  projects: [
    {
      id: "case-study-2025",
      title: "Case Study Competition Module",
      description: "Led a 3-month design module including marking and performance evaluation. Guided 12 trainees, improving execution effectiveness by 70%. Architected a scalable evaluation rubric for future leadership talent identification.",
      tags: ["LEARNING & DEVELOPMENT", "EVALUATION", "STRATEGY"],
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000",
      link: "#"
    },
    {
      id: "analytics-dashboard",
      title: "Internship Analytics Dashboard",
      description: "Developed a comprehensive Excel dashboard for 1,500+ interns to track performance, reducing attrition by 20% and boosting overall administrative efficiency through real-time data visualization.",
      tags: ["HUMAN RESOURCE ANALYTICS", "EXCEL", "RETENTION"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1000",
      link: "#"
    },
    {
      id: "recruitment-pipeline",
      title: "Hyper-Growth Recruitment Engine",
      description: "Optimized end-to-end recruitment for YSSE, facilitating 465+ successful professional onboardings in 24 months. Reduced time-to-hire by 15% through workflow automation.",
      tags: ["PEOPLE OPERATIONS", "SCALING", "WORKFLOW"],
      imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&q=80&w=1000",
      link: "#"
    },
    {
      id: "policy-framework",
      title: "Strategic Human Resource Policy Refresh",
      description: "Revitalized employee handbooks and compliance protocols to align with global Strategic Human Resource Management standards, resulting in an 85% improvement in policy awareness among professional staff.",
      tags: ["COMPLIANCE", "CULTURE", "GOVERNANCE"],
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000",
      link: "#"
    },
    {
      id: "ai-screening-integration",
      title: "Artificial Intelligence-Powered Talent Screening",
      description: "Implemented a semi-automated screening protocol using advanced Large Language Model prompts to filter 5,000+ monthly applications, improving candidate quality index by 25% and saving 40+ hours of manual review weekly.",
      tags: ["ARTIFICIAL INTELLIGENCE", "EFFICIENCY", "TALENT ACQUISITION"],
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000",
      link: "#"
    },
    {
      id: "wellbeing-initiative",
      title: "Work-Life Integration Framework",
      description: "Designed a holistic employee wellness program specifically for remote workers, resulting in a 15% boost in quarterly engagement scores and a measurable decrease in reports of burnout.",
      tags: ["WELLBEING", "CULTURE", "REMOTE OPERATIONS"],
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000",
      link: "#"
    }
  ],
  testimonials: [
    {
      author: "Nusrat Bhuiyan Nowrin",
      role: "Master of Science in Computer Science and Engineering student | Technology Enthusiast | Artificial Intelligence & Machine Learning (Direct Manager at YSSE)",
      content: "I can confidently say that he has been one of the most committed, resourceful, and growth-oriented professionals I've worked with. He successfully led impactful Administrative and Human Resource initiatives, orchestrating structured competitions that measurably boosted participants’ skills.",
      avatar: "https://i.pravatar.cc/150?u=nusrat"
    },
    {
      author: "Md. Mahmudul Hoque Shafin",
      role: "Human Resource Graduate | Administration & Human Resource Operations (Colleague at YSSE)",
      content: "Musa Vai demonstrated a remarkable level of expertise in Human Resource. I observed his valuable contributions including managing weekly virtual meetings and providing technical support for 2-3 monthly evaluation vivas.",
      avatar: "https://i.pravatar.cc/150?u=shafin"
    },
    {
      author: "Syed Samin Yasar",
      role: "Apparel Merchandiser | Textile Engineer (Team Member at YSSE)",
      content: "I was consistently impressed by his dedication, proactive approach, and positive contributions. He demonstrated a strong work ethic, going above and beyond expectations.",
      avatar: "https://i.pravatar.cc/150?u=samin"
    },
    {
      author: "Noor Alam Majumder",
      role: "Intern at Bank Asia | Former Senior Associate of Administration & Human Resource (Direct Manager)",
      content: "Having worked closely with him for nearly two years, I have consistently observed his exceptional work ethic and strong critical thinking skills. He possesses a remarkable ability to tackle challenges effectively.",
      avatar: "https://i.pravatar.cc/150?u=noor"
    }
  ]
};
