import React from 'react'

const Projects = () => {
  return (
    <div className="content-page projects">
      <h1>Projects.</h1>
      <div className="projects-grid">
        <div className="project-item">
          <h3>VectorFlow - Enterprise RAG & Observability Pipeline</h3>
          <ul>
            <li>Developed a production-ready Retrieval-Augmented Generation pipeline using TypeScript and LangChain.js for automated knowledge retrieval.</li>
            <li>Engineered a multi-stage ingestion worker that handles document chunking, metadata extraction, and upserting to Pinecone with retry logic.</li>
            <li>Implemented a Semantic Cache using Redis to reduce LLM API costs by serving cached responses for similar user queries.</li>
          </ul>
        </div>
        <div className="project-item">
          <h3><a href="https://job-llama.vercel.app/" target="_blank" rel="noopener noreferrer">Jobllama</a> - a curated job board for newgrads and interns (used by 100s of job hunters)</h3>
          <ul>
            <li>Built using React.js and Node.js. CI/CD using Vercel and cronjobs using Vercel cron.</li>
            <li>Scrapes job listings from sites by reverse engineering their API calls.</li>
          </ul>
        </div>
        <div className="project-item">
          <h3><a href="https://historical-mysteries.vercel.app/" target="_blank" rel="noopener noreferrer">Hist-Mist</a> - A social site for history readers.</h3>
          <ul>
            <li>Created a discovery platform for historical mysteries using React.js and Node.js.</li>
            <li>Implemented real-time community interaction via Socket.io for chatrooms.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Projects
