import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {
  resumeData = [
    {
      type: "Experience",
      date: "July 2023 - Present",
      role: "SDE-2",
      company: "Opentext, Hyderabad",
      details: [
        "Contributed to the complete redesign and integration, following the decision to switch to a new design.",
        "Worked with the Content Management team, overseeing new features such as seamless file uploads with document types and categories.",
        "Followed Agile methodology to manage project timelines and deliverables, and regularly participated in daily stand-up meetings, sprint and daily scrums."
      ]
    },
    {
      type: "Experience",
      date: "Aug 2021 - June 2023",
      role: "SDE-1 Frontend",
      company: "Keka HR, Hyderabad",
      details: [
        "Performed integrations with Rest Api's.",
        "Worked with PSA/Timesheet team to build Project and Billing management system.",
        "Followed Agile methodology to manage project timelines and deliverables, and regularly participated in daily stand-up meetings, sprint and daily scrums."
      ]
    },
    {
      type: "Experience",
      date: "Feb 2021 - Aug 2021",
      role: "SDE-1 Frontend Intern",
      company: "Keka HR, Hyderabad",
      details: [
        "Gained hands-on experience in HTML, CSS, JavaScript and TypeScript and responsive design, cross-browser compatibility.",
        "Contributed to the development of technical documentation and implemented a documentation website from scratch."
      ]
    },
    {
      type: "Education",
      date: "July 2017 - May 2021",
      role: "Btech",
      company: "Chandigarh Group of Colleges, Mohali",
      details: []
    }
  ];

  scrollPercent: any;
  constructor() {

  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    this.scrollPercent = Math.round((document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100);
  };

}
