<script>
    // Sample data for the coursework timeline
    let coursework_uiuc = [
      {
        term: "SP25",
        courses: [
          "CS 598 FTS: Fault-tolerant and consistent data center systems",
          "CS 598 FAL: Systems for GenAI",
        ]
      },
      {
        term: "FA24",
        courses: [
          "CS 425: Distributed Systems",
          "CS 424: Real-time Systems",
          "ECE 522: Memory and Storage Systems",
        ]
      },
      {
        term: "SP24",
        courses: [
          "CS 461: Computer Security",
          "CS 433: Computer System Organization",
        ]
      }
    ];
    let coursework_pes = [
      {
        term: "Year 4",
        courses: [
          "CS 401: Object Oriented Modeling and design",
          "CS 415: Advanced Machine Learning",
          "CS 404: Term Paper - steganography techniques",
          "CS 434: Design of Bitcoin and Blockchain systems",
          "CS 492: Capstone Project - Identity management using Blockchains"
        ]
      },
      {
        term: "Year 3",
        courses: [
          "CS 301: Computer Networks",
          "CS 302: Introduction to Operating Systems",
          "CS 314: Big Data",
          "CS 331: Computer Network Security",
          "CS 351: Cmpiler Design",
          "CS 352: Unix Systems Programming",
          "CS 353: Machine Learning"
        ]
      },
      {
        term: "Year 2",
        courses: [
          "CS 201: Computer Organization",
          "CS 202: Data Structures",
          "CS 253: Microprocessors and Computer Architecture",
          "CS 254: Theory of Computation",
          "CS 255: Design and Analysis of Algorithms",
          "MA 251: Linear Algebra"
        ]
      },
      {
        term: "Year 1",
        courses: [
          "CS 101: Intro to Computing",
          "MA 101: Enginering Mathematics 1",
          "CS 151: Problem Solving with C",
          "MA 151: Enginering Mathematics 2"
        ]
      }
    ];
  </script>
  
  <!-- Add a container with margins to avoid overlap with header and footer -->
  <div class="timeline-container">
    <div class="mt-8">
        <h2 class="text-lg font-semibold">University of Illinois Urbana-Champaign</h2>
        <p><span class="dull-text">Master of Computer Science</span></p>
    </div>
    <div class="timeline">
      {#each coursework_uiuc as c}
        <div class="timeline-item">
          <div class="timeline-icon"></div>
          <div class="timeline-content">
            <h3>{c.term}</h3>
            <ul class="dull-text">
              {#each c.courses as course}
                <li>{course}</li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
    </div>
    <div class="mt-8">
        <h2 class="text-lg font-semibold">PES University</h2>
        <p><span class="dull-text">Bachelor's in Computer Science and Enginering</span></p>
    </div>
    <div class="timeline">
        {#each coursework_pes as c}
          <div class="timeline-item">
            <div class="timeline-icon"></div>
            <div class="timeline-content">
              <h3>{c.term}</h3>
              <ul class="dull-text">
                {#each c.courses as course}
                  <li>{course}</li>
                {/each}
              </ul>
            </div>
          </div>
        {/each}
    </div>

    
  </div>
  
  <style>
    /* Add some space so it doesn't overlap with header/footer */
    .timeline-container {
      margin: 80px auto; /* Adjust as needed */
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
      margin-bottom: 2rem; /* Spacing between items */
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
      margin-left: 40px; /* Shift the content so it doesn't overlap the icon */
    }
  
    .timeline-content h3 {
      margin: 0 0 0.5rem 0;
    }
  
    .timeline-content ul {
      margin: 0;
      padding-left: 1.2rem;
    }
  
    .timeline-content li {
      margin: 0.3rem 0;
    }
  </style>
  