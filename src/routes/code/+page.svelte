<script>
// Example projects data
let projects = [
    {
    title: "Distributed Stream Processing System",
    technologies: "Golang, gRPC, Stream Processors",
    details:
        "A stream processing framework built on top of HyDFS (custom storage) based on the MillWheel paper and Apache Spark."
    },
    {
    title: "Distributed File Storage System (HyDFS)",
    technologies: "Golang, TCP, Sockets, gRPC",
    details:
        "Developed a ring-based Append-only storage system using consistent hashing (MurmurHash), inspired by HDFS and Cassandra."
    },
    {
    title: "Parallel Garbage Collection in SSDs",
    technologies: "Python, Wiscsim, SSD, Storage",
    details:
        "Evaluated and improved garbage collection in SSD devices. Modified WiscSim (discrete-event SSD Simulator) to use channel-level parallelism, reducing tail-latency by 50%."
    },
    {
    title: "Security Exploits Project",
    technologies: "Security, Networks, Python, C, Assembly",
    details:
        "Exploited applications using security techniques (buffer overflows, control-flow hijacking, ROP) to bypass DEP. Executed persistent XSS attacks and performed MITM attacks (ARP spoofing, HTTP/TCP manipulation) over network traffic."
    },
    {
    title: "Identity System using Blockchains",
    technologies: "Python, NodeJS, Blockchain, Multichain",
    details:
        "Designed a decentralized, secure platform utilizing blockchains to create an identity datastore.  Addresses data oversharing through identity-forms."
    },
    {
    title: "Cloud Agnostic Kubernetes",
    technologies: "Ansible, Kubernetes, AWS, Linux, Bash",
    details:
        "A deployment tool capable of automating the setup of cross-cloud Kubernetes clusters on Linux servers, with real-time monitoring and autoscaling."
    }
];
</script>

<!-- A grid of project cards -->
<div class="card-grid">
{#each projects as project}
    <div class="card">
    <h3>{project.title}</h3>
    
    <!-- Technologies in individual pill boxes -->
    <div class="tech-list">
        {#each project.technologies.split(',') as tech}
        <span class="tech-pill">{tech.trim()}</span>
        {/each}
    </div>
    
    <p class="details">{project.details}</p>
    </div>
{/each}
</div>

<style>
/* Container for the card layout */
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
    max-width: 1200px;
    margin: 30px auto; 
    padding: 0 1rem;
}

/* Each card */
.card {
    border: 2px solid #1e0b2c; /* Darkish purple border */
    border-radius: 8px;
    padding: 1rem;
    background-color: #424141; /* 1e1e1e Dark background to mimic your screenshot */
    color: #fff; /* Light text color for contrast */
}

/* Project title: 16px font */
.card h3 {
    margin: 0 0 0.5rem;
    font-size: 16px;
}

/* Pill container for technologies */
.tech-list {
    margin-bottom: 0.5rem;
}

/* Pill styling for each technology:
    12px font, mild yellow background, black text, slightly rounded corners */
.tech-pill {
    display: inline-block;
    font-size: 12px;
    background-color: #fff9c4; /* fff9c4 Mild yellow */
    color: #000; /* Black text */
    border-radius: 3px; /* Slight rounding */
    padding: 2px 6px;
    margin: 0 4px 4px 0;
}

/* Details text: 14px font */
.details {
    font-size: 14px;
    line-height: 1.4;
    margin: 0.2rem 0 0 0;
}
</style>
  