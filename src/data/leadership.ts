import { Advisor, StudentLeader } from '../types';

export const advisors: Advisor[] = [
  {
    id: 'adv-1',
    name: 'Dr. Avadhesh Kumar',
    title: 'Branch Counselor / Mentor',
    subtitles: [
      'Pro Vice Chancellor - Galgotias University',
      'Vice Chair - IEEE UP Section'
    ],
    description: 'Guiding academic direction, cross-institutional collaborations, and overseeing strategic research initiatives across the Uttar Pradesh section.',
    photoUrl: '/avadhesh.png'
  },
  {
    id: 'adv-2',
    name: 'Dr. Aanjey Mani Tripathi',
    title: 'Branch Counselor',
    subtitles: [
      'Professor - Galgotias University',
      'Counsellor - IEEE GU Student Branch'
    ],
    description: 'Providing student development pathways, evaluating engineering curriculums, and mentoring technical projects at the Student Branch level.',
    photoUrl: '/aanjey.png'
  },
  {
    id: 'adv-3',
    name: 'Dr. Meenakshi Awasthi',
    title: 'Faculty Advisor',
    subtitles: [
      'HoD, Dept. of Electrical, Electronics and Communication Engineering',
      'Galgotias University',
      'Faculty Advisor IEEE IAS - Galgotias University'
    ],
    description: 'Bridging classroom knowledge with professional societies, guiding power systems, control systems, and electronics research programs.',
    photoUrl: '/meenakshi.png'
  },
  {
    id: 'adv-4',
    name: 'Dr. Aditya Nath Bhatt',
    title: 'Convenor',
    subtitles: [
      'Assistant Professor, Dept. of Electrical, Electronics and Communication Engineering',
      'Galgotias University',
      'Convenor IEEE IAS - Galgotias University'
    ],
    description: 'Organizing technical symposiums, research conferences, and facilitating collaborative learning loops within the Industry Applications Society.',
    photoUrl: '/aditya.png'
  }
];

export const studentLeaders: StudentLeader[] = [
  {
    id: 'lead-1',
    role: 'Chairperson',
    name: 'Shubham Pal',
    email: 'shubham0568@ieee.org',
    description: 'Leads chapter strategy, external collaborations, budget planning, and overall functioning of the IEEE Galgotias University Student Branch.',
    photoUrl: '/shubham.png'
  },
  {
    id: 'lead-2',
    role: 'Vice-Chairperson',
    name: 'Adarsh Upadhaya',
    description: 'Supports leadership initiatives, acts as the core liaison for society chairs, and directly oversees student member engagement programs.',
    photoUrl: '/adarsh.png'
  },
  {
    id: 'lead-3',
    role: 'Secretary',
    name: 'Urvashi Rawat',
    description: 'Handles official chapter documentation, project tracking, compliance, reporting, and maintains high-tempo internal branch communication.',
    photoUrl: '/urvashi.png'
  },
  {
    id: 'lead-4',
    role: 'Treasurer',
    name: 'Anant Chaubey',
    description: 'Manages chapter finances, event budgeting worksheets, sponsorships, corporate accounts, and ensures efficient resource allocation.',
    photoUrl: '/anant.png'
  }
];
