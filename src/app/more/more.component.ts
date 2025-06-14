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
        "Contributed to the migration of the admin panel from Backbone.js to React.",
        "Worked on a Content Management project, implementing new features and improving app performance by identifying and resolving memory leaks due to improper cleanup during component unmounting."
      ]
    },
    {
      type: "Experience",
      date: "Aug 2021 - June 2023",
      role: "SDE-1 Frontend",
      company: "Keka HR, Hyderabad",
      details: [
        "Built a Project and Billing Management System with the PSA/Timesheet team.",
        "Contributed to the development of reusable components and libraries, streamlining the development process.",
        "Integrated REST APIs for smooth data exchange.",
        "Reduced CSS file size and page load time by 70%, improving performance."
      ]
    },
    {
      type: "Experience",
      date: "Feb 2021 - Aug 2021",
      role: "SDE-1 Frontend Intern",
      company: "Keka HR, Hyderabad",
      details: [
        "Gained hands-on experience with HTML, CSS, JavaScript, Angular, responsive design, and cross-browser compatibility.",
        "Developed technical documentation and built a documentation website from scratch."
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
