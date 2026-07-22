import { ResearchPaper } from '../types';

export const papers: ResearchPaper[] = [
  {
    id: '10314',
    title: 'A Multimodal Vision Model for Automated Industrial Safety and Workforce Monitoring',
    authors: 'Swarnim Deshpande¹, Zaidaan Shiraz¹, Issa Ilyas¹, Priyanka Chavan², Dr. K. S. Ananda Kumar²',
    affiliations: [
      '¹ Department of CSE (Data Science), Atria Institute of Technology, Visvesvaraya Technological University, Belagavi, India',
      '² Department of ISE, Atria Institute of Technology, Visvesvaraya Technological University, Belagavi, India'
    ],
    authorEmails: [
      'Swarnim242004@gmail.com',
      'zaidaanshiraz8@gmail.com',
      'issailyas05@gmail.com',
      'priyankachavan@ieee.org',
      'anandakumar.ks@atria.edu'
    ],
    date: 'May 2026',
    category: 'Computer Vision & Deep Learning',
    abstract: 'Industrial workplaces continue to face persistent safety challenges that manual supervision alone cannot adequately address. This paper describes the design and implementation of a real-time safety monitoring system that combines computer vision, deep learning, and cloud-based analytics to automate key aspects of workplace hazard detection and access control. Rather than relying on periodic human inspection, the system continuously processes video feeds from standard cameras to identify unsafe conditions as they occur. The system covers several practical safety scenarios: PPE compliance detection (helmets, safety vests), fall detection, restricted zone intrusion detection, Automatic Number Plate Recognition (ANPR), and MQ-3 alcohol impairment screening with real-time biometric face recognition attendance logging.',
    openAccess: true,
    pdfUrl: '/manuscript-10314.pdf'
  },
  {
    id: 'IEEE-GU-2024-008',
    title: 'Quantum Entanglement in Large-Scale Distributed Sensor Networks: A Novel Framework',
    authors: 'Dr. A. Sharma',
    date: 'Oct 2024',
    category: 'Quantum Computing',
    abstract: 'This comprehensive study outlines the implementation of quantum-resistant protocols within mesh-topologies. We propose a new architectural model that reduces latency by 42% while maintaining absolute data integrity across heterogeneous nodes, allowing secure state distribution over ultra-low-bandwidth environments.',
    openAccess: true,
    pdfUrl: '#'
  },
  {
    id: 'IEEE-GU-2024-012',
    title: 'Neural-Optic Integration in Edge Devices',
    authors: 'Dr. Rahul Varma, Siddharth Mehra',
    date: 'Aug 2024',
    category: 'Edge Computing',
    abstract: 'Exploration of hybrid semiconductor materials for high-speed signal processing in limited-power environments. The research integrates neural co-processors with optical bus systems to optimize power-efficiency and inference speeds.',
    openAccess: true,
    pdfUrl: '#'
  },
  {
    id: 'IEEE-GU-2024-045',
    title: 'Decentralized Power Grids in Rural India',
    authors: 'Dr. Meenakshi Awasthi, Kabir Singh',
    date: 'Jun 2024',
    category: 'Power Systems',
    abstract: 'A longitudinal case study on the impact of micro-grid technology on local agricultural productivity. Implements smart load balancing algorithms across local cooperative fields to increase total yield stability.',
    openAccess: true,
    pdfUrl: '#'
  },
  {
    id: 'IEEE-GU-2024-092',
    title: 'Ethical Frameworks for Generative AI',
    authors: 'Dr. Aanjey Mani Tripathi, Ananya Kapoor',
    date: 'Apr 2024',
    category: 'Artificial Intelligence',
    abstract: 'Defining boundaries for intellectual property rights and data validation protocols in academic research using LLM assistance. Recommends strict audit trails and automated source verification structures.',
    openAccess: true,
    pdfUrl: '#'
  }
];
