export default function Portfolio() {
  return (
    <main style={{ padding: '2rem 1rem', maxWidth: '1350px', margin: '0 auto' }}>
      <section className="text-center">
      <img
        src="/nailah.jpg"
        alt="Nailah Sirjue"
        style={{ width: '150px', height: '200px', borderRadius: '50%', display: 'block', margin: '0 auto' }}
      />
        <h1 className="text-1xl font-bold mt-4" style={{ textAlign: 'center' }}>Nailah Sirjue</h1>
        <p className="text-lg mt-2" style={{ textAlign: 'center' }}>
          Data Enthusiast | Future Data Scientist| M.S. Computer Science </p>
      </section>

      <section>
        <h2 className="text-4xl font-semibold mb-4">About Me</h2>
        <p>
          I’m a data-driven problem solver with a background in pharmaceutical market research and a growing skill set in data analytics, software development, and backend systems.
          After five years of helping clients uncover insights from healthcare data, I transitioned into a Master’s in Computer Science to deepen my technical expertise.
        </p>
        <p className="mt-2">
          I've built full-stack applications and data pipelines, including Python-based ETL workflows, FastAPI + SQLite backends, and Java + MySQL login systems. My passion lies in turning complex data into clear insights that drive business strategy.
        </p>
      </section>

      <section>
        <h2 className="text-4xl font-semibold mb-4" style={{ marginTop: '4rem'}}>Featured Projects:</h2>
        <div className="space-y-6">
          <div className="border p-4 rounded-xl shadow">
            <h3 className="text-xl font-bold">Customer Orders Data Automation (Python + FastAPI) </h3>
            <p style={{marginLeft: '4rem'}}>
              Built a Python pipeline to clean and structure JSON order data, and created a REST API using FastAPI with full CRUD operations stored in SQLite.
            </p>
          </div>

          <div className="border p-4 rounded-xl shadow">
            <h3 className="text-xl font-bold">Secure Login System (Java + MySQL)</h3>
            <p style={{marginLeft: '4rem'}}>
              Developed a Java servlet connected to a MySQL database for authenticating users via login credentials, including real-time feedback and error handling.
            </p>
          </div>

          <div className="border p-4 rounded-xl shadow">
            <h3 className="text-xl font-bold">COVID-19 Dashboard Insights (SQL + Tableau)</h3>
            <p style={{marginLeft: '4rem'}}>
              Analyzed open government data using SQL and built an interactive Tableau dashboard to communicate pandemic trends across regions and timeframes.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4" style={{ marginTop: '4rem'}}> Skills </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Python, SQL, Java, FastAPI, SQLite, MySQL</li>
          <li>Tableau, Power BI, Git, Regex, REST APIs</li>
          <li>Data Cleaning, Predictive Modeling, Backend Integration</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4" style={{ marginTop: '4rem'}}>Contact</h2>
        <p>Email: <a className="text-blue-600" href="mailto:nrvsirjue@gmail.com">nrvsirjue@gmail.com</a></p>
        <p>LinkedIn: <a className="text-blue-600" href="https://www.linkedin.com/in/nailah-sirjue/" target="_blank">linkedin.com/in/nailah-sirjue</a></p>
      </section>
    </main>
  );
}
