<script>
    // Sample data for the work timeline
    let work_experience = [
      {
        timeline: "Aug 2024 - May 2025",
        company: "University of Illinois Urbana-Champaign",
        position: "Course Assistant - CS222, CS461",
        details: [
          "— Mentored multiple teams of students with their semester-wide software projects including code reviews, programming, debugging and design.",
          "— Holding office hours to help with the course's security exploit project, dealing with Application vulnerabilites (buffer overflows, control-flow hijacking, ROP), Web (SQL Injections, CSRF, XSS), Cryptographic and Network attacks (MITM, ARP Poisioning, Mitnick Attack). "
        ]
      },
      {
        timeline: "July 2019 – Nov 2023",
        company: "Logmein / GoTo",
        position: "Senior Engineer",
        details: [
            "— Architected and deployed cloud-native applications across AWS, OpenStack, and Oracle Cloud, including designing cross-cloud solutions for over 20+ services for GoToMeeting’s backend application.",
            "— Engineered and maintained code for DNS automation, real-time monitoring, and cross-cloud migration, and disaster recovery frameworks.",
            "— On-call for 3 major products spanning 50+ services, debugging critical production issues, networking failures, and infrastructure outages for 4+ years.",
            "— Deployed a cloud security monitoring tool across multiple AWS accounts and Oracle Cloud, incorporating compliance scanning and real-time alerting. This reduced compliance violations and increased threat detection.",
            "— Optimized AWS resource usage with FinOps teams, cutting costs by $100K+ annually through automated orphaned resource shutdowns."
        ]
        },
      {
        timeline: "Aug 2017 - Sept 2018",
        company: "Center for Cloud Computing and Big Data",
        position: "Student Researcher",
        details: [
          "— Explored the ways in which storage could bottleneck big data applications.",
          "— Analysed the performance of a Hadoop cluster on SSD and HDD storage, using various benchmark tests."
        ]
      }
    ];
  </script>
  
  <div class="timeline-container">
    <div class="timeline">
      {#each work_experience as work}
        <div class="timeline-item">
          <div class="timeline-icon"></div>
          <div class="timeline-content">
            <!-- Company name first -->
            <h4 class="text-lg font-semibold">{work.company}</h4>
            <!-- Position and timeline on the same line in dull text -->
            <p class="inline-heading">
              <span class="position">{work.position}</span>
              <span class="year"> | {work.timeline}</span>
            </p>
            <!-- Optional bullet details -->
            {#if work.details && work.details.length}
              <ul class="dull-text mt-2">
                {#each work.details as detail}
                  <li>{detail}</li>
                {/each}
              </ul>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
  
  <style>
    .timeline-container {
      margin: 80px auto;
      max-width: 800px;
    }
  
    .timeline {
      position: relative;
      padding: 0 1rem;
    }
  
    /* Vertical line */
    .timeline::after {
      content: '';
      position: absolute;
      left: 30px;
      top: 0;
      bottom: 0;
      width: 3px;
      background-color: #fff9c4;
      border: 0.7px solid #1e0b2c;
    }
  
    .timeline-item {
      position: relative;
      margin-bottom: 2rem;
    }
  
    .timeline-icon {
      position: absolute;
      left: 22px;
      width: 8px;
      height: 8px;
      border: 2px solid #fff9c4;
      border-radius: 50%;
      background: #1e0b2c;
      top: 0.5rem;
    }
  
    .timeline-content {
      margin-left: 40px;
    }
  
    .timeline-content h4 {
      margin: 0;
      padding: 0.2rem 0;
    }
  
    /* Inline heading for position and year */
    .inline-heading {
      margin: 0.2rem 0;
    }
  
    /* Dull text styling */
    .dull-text {
      filter: brightness(0.8);
    }
  
    .timeline-content ul {
      margin: 0.5rem 0 0 0;
      padding-left: 1.2rem;
    }
  
    .timeline-content li {
      margin: 0.3rem 0;
    }
  </style>
  