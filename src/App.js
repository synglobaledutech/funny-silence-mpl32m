import { useState, useEffect } from "react";

// --- GLOBAL CSS FOR RESPONSIVENESS & ANIMATIONS ---
const globalStyles = `
  body { margin: 0; padding: 0; overflow-x: hidden; }
  
  @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }
  .pulse-animation { animation: pulse 0.5s ease; }
  
  @keyframes scrollMarquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
  
  .hide-scrollbar::-webkit-scrollbar { display: none; }
  .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  
  @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  .fade-in { animation: fadeIn 0.4s ease-out; }

  /* DESKTOP NAVBAR STYLES */
  .nav-container { display: flex; flex-wrap: wrap; gap: 35px; align-items: center; width: 100%; box-sizing: border-box; padding: 0 5%; }
  
  /* MOBILE MENU BAR STYLES */
  .mobile-menu-btn { 
    display: none; 
    width: 100%; 
    font-size: 15px; 
    font-weight: 700; 
    text-transform: uppercase; 
    letter-spacing: 1px; 
    background: #1e3a8a; 
    border: none; 
    color: white; 
    cursor: pointer; 
    padding: 14px 0; 
    text-align: center;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1); 
  }
  
  /* RESPONSIVE HEADER TEXT ALIGNMENT */
  .header-text-container { display: flex; flex-direction: column; align-items: flex-start; justify-content: center; }
  
  @media (max-width: 900px) {
    .mobile-menu-btn { display: block; }
    .nav-container { display: none; flex-direction: column; width: 100%; align-items: flex-start; gap: 0; padding: 10px 5% 20px 5%; box-sizing: border-box; }
    .nav-container.open { display: flex; }
    
    .nav-container > p, .dropdown-wrapper { 
      width: 100%; 
      padding: 16px 0 !important; 
      margin: 0 !important; 
      border-bottom: 1px solid rgba(255,255,255,0.05); 
      height: auto !important; 
      align-items: flex-start !important; 
    }
    
    .dropdown-wrapper > p { width: 100%; text-align: left; }
    .dropdown-wrapper { flex-direction: column; }
    
    .dropdown-content { 
      position: static !important; 
      width: 100% !important; 
      box-shadow: none !important; 
      border: none !important; 
      border-left: 2px solid #3b82f6 !important; 
      margin-top: 15px; 
      border-radius: 0 !important; 
      background: transparent !important; 
      padding-left: 0; 
    }
    
    .dropdown-content div { 
      color: #cbd5e1 !important; 
      background: transparent !important; 
      border-bottom: none !important; 
      padding: 12px 15px !important; 
    }
    
    /* Center the header text and hide the divider on small screens */
    .hide-on-mobile { display: none !important; }
    .header-text-container { align-items: center !important; text-align: center; }
  }

  /* PUBLICATION TABLE STYLES */
  .pub-table { width: 100%; border-collapse: collapse; margin-top: 20px; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
  .pub-table th { background: #1e293b; color: white; padding: 15px 20px; text-align: left; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; }
  .pub-table td { padding: 15px 20px; border-bottom: 1px solid #e2e8f0; background: white; color: #334155; font-size: 15px; }
  @media (max-width: 768px) {
    .pub-table th, .pub-table td { padding: 12px 10px; font-size: 13px; }
  }
`;

// --- REUSABLE SECTION PAGE COMPONENT ---
function SectionPage({ title, image, text }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "clamp(40px, 8vw, 80px) 5%",
        background: "#f8fafc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(15, 23, 42, 0.08)",
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "clamp(200px, 40vw, 450px)",
            objectFit: "cover",
          }}
        />
        <div style={{ padding: "clamp(30px, 6vw, 60px) 5%" }}>
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              color: "#0f172a",
              fontWeight: "800",
              letterSpacing: "-1px",
              marginBottom: "24px",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              color: "#475569",
              lineHeight: "1.8",
              fontSize: "clamp(16px, 3vw, 20px)",
              maxWidth: "800px",
            }}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

// --- PUBLICATIONS PAGE COMPONENT ---
function PublicationsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const domains = [
    {
      title: "Manufacturing & Industrial Engineering",
      count: "50+",
      topics:
        "Lean Manufacturing | TPM | OEE | Industry 4.0 | Smart Factory | Production Systems",
    },
    {
      title: "Quality & Operational Excellence",
      count: "50+",
      topics:
        "IATF 16949 | ISO Standards | Six Sigma | SPC | AIAG Core Tools | Business Excellence",
    },
    {
      title: "ESG, Sustainability & EHS",
      count: "30+",
      topics:
        "ESG Strategy | Carbon Management | Circular Economy | Green Manufacturing | Sustainability",
    },
    {
      title: "Business, Leadership & Human Resources",
      count: "35+",
      topics:
        "Leadership | L&D | HR Analytics | Organizational Excellence | Change Management",
    },
    {
      title: "AI & Digital Transformation",
      count: "20+",
      topics:
        "AI | Machine Learning | Data Analytics | Automation | Digital Quality",
    },
    {
      title: "Supply Chain & Project Management",
      count: "20+",
      topics:
        "Supply Chain Optimization | Logistics | Risk Management | Project Delivery",
    },
    {
      title: "Education & Career Development",
      count: "15+",
      topics:
        "Pedagogy | Skill Development | Career Pathways | Professional Growth",
    },
    {
      title: "Innovation & Emerging Technologies",
      count: "10+",
      topics:
        "Emerging Tech | R&D | Patents | Technology Transfer | Innovation Ecosystems",
    },
  ];

  if (loading) {
    return (
      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            border: "4px solid #f1f5f9",
            borderTop: "4px solid #2563eb",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        ></div>
        <p style={{ fontSize: "16px", color: "#64748b", fontWeight: "600" }}>
          Loading Publications Centre...
        </p>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div
      className="fade-in pulse-animation"
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        paddingBottom: "80px",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          padding: "clamp(40px, 8vw, 80px) 5%",
          color: "white",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50%",
            left: "-10%",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        ></div>
        <h3
          style={{
            color: "#fbbf24",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontSize: "14px",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          SGAAC Accredited Professional Platform
        </h3>
        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 56px)",
            fontWeight: "800",
            marginBottom: "20px",
            letterSpacing: "-1px",
          }}
        >
          Research & Publications Centre
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 3vw, 20px)",
            color: "#cbd5e1",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          A Professional Open Knowledge Platform for Researchers, Academicians,
          Industry Experts & Students.
        </p>
        <div
          style={{
            marginTop: "30px",
            display: "inline-flex",
            gap: "15px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              background: "rgba(255,255,255,0.1)",
              padding: "8px 20px",
              borderRadius: "30px",
              fontSize: "15px",
              fontWeight: "600",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            Research.
          </span>
          <span
            style={{
              background: "rgba(255,255,255,0.1)",
              padding: "8px 20px",
              borderRadius: "30px",
              fontSize: "15px",
              fontWeight: "600",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            Publish.
          </span>
          <span
            style={{
              background: "rgba(255,255,255,0.1)",
              padding: "8px 20px",
              borderRadius: "30px",
              fontSize: "15px",
              fontWeight: "600",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            Inspire.
          </span>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "-30px",
          padding: "0 5%",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
        }}
      >
        {[
          { label: "Research Papers", val: "250+", color: "#2563eb" },
          { label: "Research Domains", val: "10+", color: "#2563eb" },
          { label: "Thematic Tracks", val: "8", color: "#2563eb" },
          { label: "Publication Cost", val: "FREE", color: "#16a34a" },
        ].map((stat, i) => (
          <div
            key={i}
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "16px",
              boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
              textAlign: "center",
              borderBottom: `4px solid ${stat.color}`,
            }}
          >
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 40px)",
                color: stat.color,
                fontWeight: "900",
                margin: "0 0 5px 0",
              }}
            >
              {stat.val}
            </h2>
            <p
              style={{
                color: "#64748b",
                margin: 0,
                fontWeight: "700",
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          padding: "clamp(40px, 8vw, 80px) 5%",
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(24px, 4vw, 36px)",
            color: "#0f172a",
            fontWeight: "800",
            marginBottom: "20px",
          }}
        >
          Welcome to the Centre
        </h2>
        <p
          style={{
            fontSize: "clamp(15px, 3vw, 18px)",
            color: "#475569",
            lineHeight: "1.8",
            maxWidth: "900px",
            margin: "0 auto 30px auto",
          }}
        >
          The Syn Global Research & Publications Centre is dedicated to
          advancing research, innovation, and industry excellence. With a
          repository of 250+ research papers, we connect students, researchers,
          professionals, academicians, and industry experts through
          high-quality, practical, and impact-driven publications.
        </p>
        <div
          style={{
            background: "#eff6ff",
            border: "1px solid #bfdbfe",
            padding: "30px",
            borderRadius: "16px",
            display: "inline-block",
            maxWidth: "900px",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#1e3a8a",
              fontSize: "clamp(15px, 3vw, 17px)",
              fontWeight: "600",
              lineHeight: "1.6",
            }}
          >
            <strong>Our Mission:</strong> To democratize research, encourage
            innovation, and create a global ecosystem where every researcher can
            publish quality work without financial barriers — while building a
            trusted professional knowledge community.
          </p>
        </div>
      </div>

      <div
        style={{
          padding: "0 5% clamp(40px, 8vw, 80px) 5%",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 32px)",
              color: "#0f172a",
              fontWeight: "800",
              marginBottom: "10px",
            }}
          >
            Research Portfolio Overview
          </h2>
          <div
            style={{
              height: "4px",
              width: "60px",
              background: "#2563eb",
              margin: "0 auto",
            }}
          ></div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "25px",
          }}
        >
          {domains.map((dom, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "30px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.04)",
                border: "1px solid #e2e8f0",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  fontSize: "32px",
                  fontWeight: "900",
                  color: "#f1f5f9",
                  zIndex: 0,
                }}
              >
                {dom.count}
              </div>
              <div
                style={{
                  width: "40px",
                  height: "4px",
                  background: [
                    "#3b82f6",
                    "#10b981",
                    "#f59e0b",
                    "#ef4444",
                    "#8b5cf6",
                    "#ec4899",
                    "#14b8a6",
                    "#f97316",
                  ][i],
                  marginBottom: "15px",
                  zIndex: 1,
                }}
              ></div>
              <h3
                style={{
                  fontSize: "18px",
                  color: "#0f172a",
                  fontWeight: "800",
                  marginBottom: "15px",
                  zIndex: 1,
                  paddingRight: "40px",
                  lineHeight: "1.4",
                }}
              >
                {dom.title}
              </h3>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  margin: "auto 0 0 0",
                  zIndex: 1,
                }}
              >
                {dom.topics}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: "#1e293b",
          color: "white",
          padding: "clamp(40px, 8vw, 80px) 5%",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "50px",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1, minWidth: "min(100%, 350px)" }}>
            <span
              style={{
                background: "#16a34a",
                color: "white",
                padding: "6px 12px",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: "800",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "15px",
                display: "inline-block",
              }}
            >
              Zero Cost Guarantee
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 36px)",
                fontWeight: "800",
                marginBottom: "20px",
                lineHeight: "1.2",
              }}
            >
              Publish Your Research <br />
              <span style={{ color: "#4ade80" }}>Absolutely FREE</span>
            </h2>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "16px",
                lineHeight: "1.7",
                marginBottom: "30px",
              }}
            >
              Syn Global Edutech believes that knowledge should be shared
              without barriers. There are NO publication charges for accepted
              research papers. If your manuscript successfully completes the
              editorial review process, you will receive all benefits at zero
              cost.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px",
              }}
            >
              {[
                "100% Free Research Publication",
                "Official Certificate of Publication",
                "Unique Publication ID",
                "Digital Author Recognition",
                "Lifetime Online Visibility",
                "Professional Author Profile",
              ].map((benefit, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#e2e8f0",
                  }}
                >
                  <span style={{ color: "#4ade80" }}>✔</span>{" "}
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              flex: 1,
              minWidth: "min(100%, 350px)",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "20px",
              padding: "40px",
            }}
          >
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "800",
                marginBottom: "15px",
                color: "#fbbf24",
              }}
            >
              Exclusive Research Library Access
            </h3>
            <p
              style={{
                color: "#cbd5e1",
                fontSize: "15px",
                lineHeight: "1.7",
                marginBottom: "25px",
              }}
            >
              Our complete Research Library (250+ Papers) is an exclusive
              knowledge repository. Access is provided only to authors whose
              research papers are successfully approved and published.
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                color: "white",
                fontSize: "15px",
              }}
            >
              <li>🔓 Access premium research papers</li>
              <li>📊 Explore industry case studies</li>
              <li>📥 Download technical resources</li>
              <li>🤝 Connect with fellow researchers</li>
              <li>⭐ Build professional credibility</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        style={{
          padding: "clamp(40px, 8vw, 80px) 5%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(24px, 4vw, 32px)",
            color: "#0f172a",
            fontWeight: "800",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          Submission Guidelines
        </h2>
        <div
          style={{
            height: "4px",
            width: "60px",
            background: "#f59e0b",
            margin: "0 auto 40px auto",
          }}
        ></div>

        <div style={{ overflowX: "auto" }}>
          <table className="pub-table">
            <thead>
              <tr>
                <th>Paper Type</th>
                <th>Word Limit</th>
                <th>Format</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Research Article</strong>
                </td>
                <td>4,000 – 6,000 words</td>
                <td>Abstract + Body + References</td>
              </tr>
              <tr>
                <td>
                  <strong>Case Study</strong>
                </td>
                <td>3,000 – 5,000 words</td>
                <td>Context + Analysis + Learnings</td>
              </tr>
              <tr>
                <td>
                  <strong>Review Paper</strong>
                </td>
                <td>5,000 – 8,000 words</td>
                <td>Systematic Literature Review</td>
              </tr>
              <tr>
                <td>
                  <strong>Practitioner Note</strong>
                </td>
                <td>1,500 – 2,500 words</td>
                <td>Industry Practice Insights</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          style={{
            background: "white",
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
            marginTop: "30px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
          }}
        >
          {[
            {
              label: "Language",
              text: "English only. Clear, concise, and grammatically correct.",
            },
            {
              label: "Referencing",
              text: "APA 7th Edition format for all citations and bibliography.",
            },
            {
              label: "Originality",
              text: "Minimum 80% originality — plagiarism check mandatory.",
            },
            {
              label: "Review Process",
              text: "Double-blind peer review by domain experts.",
            },
            {
              label: "Submission",
              text: "PDF or MS Word (.docx) via email or journal portal.",
            },
            {
              label: "Author Details",
              text: "Full name, designation, organisation, and contact email.",
            },
          ].map((rule, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexWrap: "wrap",
                padding: "15px 20px",
                borderBottom: i !== 5 ? "1px solid #f1f5f9" : "none",
              }}
            >
              <div
                style={{
                  width: "min(100%, 200px)",
                  fontWeight: "800",
                  color: "#1e293b",
                  fontSize: "14px",
                }}
              >
                {rule.label}
              </div>
              <div style={{ flex: 1, color: "#475569", fontSize: "15px" }}>
                {rule.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: "#fffbeb",
          borderTop: "1px solid #fcd34d",
          borderBottom: "1px solid #fcd34d",
          padding: "50px 5%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(24px, 4vw, 32px)",
            color: "#0f172a",
            fontWeight: "800",
            marginBottom: "15px",
          }}
        >
          Submit Your Research Today
        </h2>
        <p
          style={{
            color: "#b45309",
            fontSize: "18px",
            fontWeight: "600",
            marginBottom: "25px",
          }}
        >
          We Accept: Original Research • Review Articles • Technical Papers •
          Case Studies
        </p>
        <p style={{ fontSize: "16px", color: "#475569", fontWeight: "600" }}>
          Send your manuscript to:{" "}
          <a
            href="mailto:info@synglobaledutech.com"
            style={{ color: "#2563eb", textDecoration: "none" }}
          >
            info@synglobaledutech.com
          </a>
        </p>
      </div>
    </div>
  );
}

// --- CSR POLICY PAGE ---
function CsrPolicyPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        paddingBottom: "80px",
      }}
    >
      <div
        style={{
          background: "#2e6a37",
          padding: "clamp(30px, 5vw, 40px) 5%",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(24px, 5vw, 36px)",
            fontWeight: "800",
            margin: 0,
            letterSpacing: "-0.5px",
          }}
        >
          Corporate Social Responsibility (CSR)
        </h1>
      </div>
      <div
        style={{
          padding: "clamp(40px, 8vw, 60px) 5%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(30px, 5vw, 60px)",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div style={{ flex: 1.5, minWidth: "min(100%, 320px)" }}>
            <p
              style={{
                fontSize: "clamp(15px, 3vw, 17px)",
                color: "#1e293b",
                lineHeight: "1.8",
                marginBottom: "30px",
                textAlign: "justify",
              }}
            >
              At SYN Global, we believe in creating opportunities that extend
              beyond business and contribute meaningfully to society. As part of
              our CSR policy, we are committed to inclusivity and empowerment by
              offering{" "}
              <span style={{ color: "#2e6a37", fontWeight: "800" }}>
                20% of our revenue in free training programs
              </span>{" "}
              dedicated to Persons with Disabilities (PWD).
            </p>
            <p
              style={{
                fontSize: "clamp(15px, 3vw, 17px)",
                color: "#1e293b",
                lineHeight: "1.8",
                textAlign: "justify",
              }}
            >
              This initiative ensures that PWD candidates gain access to
              high-quality education, skill development, and certification
              opportunities without financial barriers. By integrating them into
              our training ecosystem, we aim to enhance employability, foster
              independence, and support their transition into meaningful
              careers.
            </p>
          </div>
          <div
            style={{
              flex: 1,
              minWidth: "min(100%, 320px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "15px",
            }}
          >
            <div
              style={{
                background: "#3b763d",
                color: "white",
                padding: "30px 15px",
                borderRadius: "16px",
                textAlign: "center",
                fontWeight: "700",
                fontSize: "clamp(15px, 3vw, 18px)",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
            >
              Equity
            </div>
            <div
              style={{
                background: "#0c8c9a",
                color: "white",
                padding: "30px 15px",
                borderRadius: "16px",
                textAlign: "center",
                fontWeight: "700",
                fontSize: "clamp(15px, 3vw, 18px)",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
            >
              Accessibility
            </div>
            <div
              style={{
                background: "#f5a623",
                color: "white",
                padding: "30px 15px",
                borderRadius: "16px",
                textAlign: "center",
                fontWeight: "700",
                fontSize: "clamp(15px, 3vw, 18px)",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
            >
              100% Placement
            </div>
            <div
              style={{
                background: "#e85d4f",
                color: "white",
                padding: "30px 15px",
                borderRadius: "16px",
                textAlign: "center",
                fontWeight: "700",
                fontSize: "clamp(15px, 3vw, 18px)",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
            >
              Social Impact
            </div>
          </div>
        </div>
        <div
          style={{
            background: "#2e6a37",
            color: "white",
            padding: "25px clamp(20px, 5vw, 40px)",
            borderRadius: "8px",
            textAlign: "center",
            fontSize: "clamp(15px, 3vw, 17px)",
            lineHeight: "1.6",
            boxShadow: "0 10px 30px rgba(46, 106, 55, 0.2)",
          }}
        >
          Our CSR commitment reflects our core values of equity, accessibility,
          and social responsibility — helping PWD candidates move confidently
          from learning to livelihood.
        </div>
      </div>
    </div>
  );
}

// --- MASTER COURSES PAGE ---
function CoursesPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const courseCategories = [
    {
      title: "Management System & Internal Auditor",
      courses: [
        {
          name: "Certified ISO 9001:2015 Internal Auditor",
          price: "Rs.3,499/-",
        },
        {
          name: "Certified IATF 16949:2016 Internal Auditor",
          price: "Rs.3,999/-",
        },
        {
          name: "Certified ISO 14001:2015 Internal Auditor",
          price: "Rs.3,499/-",
        },
        {
          name: "Certified ISO 45001:2018 Internal Auditor",
          price: "Rs.3,499/-",
        },
        {
          name: "Certified ISO 50001:2018 Internal Auditor",
          price: "Rs.3,999/-",
        },
        {
          name: "Certified ISO/IEC 27001:2022 Internal Auditor",
          price: "Rs.3,999/-",
        },
        { name: "Certified SA 8000 Internal Auditor", price: "Rs.3,999/-" },
      ],
    },
    {
      title: "Automotive & VSA Excellence",
      courses: [
        { name: "VSA-MSIL Implementor Certification", price: "Rs.3,999/-" },
        { name: "VSA-MACE Implementor Certification", price: "Rs.3,999/-" },
        { name: "MSIL VSA Critical Clause Champion", price: "Rs.4,999/-" },
        {
          name: "DOJO 1.0 | DOJO 2.0 VSA Clause Champion",
          price: "Rs.3,999/-",
        },
      ],
    },
    {
      title: "Lean, Six Sigma & Operational Excellence",
      courses: [
        {
          name: "Certified Lean Manufacturing Awareness Program",
          price: "Rs.2,999/-",
        },
        { name: "Certified Lean Champion", price: "Rs.8,999/-" },
        { name: "Lean Six Sigma Black Belt (WB+YB+GB)", price: "Rs.39,999/-" },
        { name: "TPM Implementor Certification", price: "Rs.39,999/-" },
        { name: "TPS Implementor Certification", price: "Rs.29,999/-" },
        { name: "Certified TQM Champion", price: "Rs.4,999/-" },
      ],
    },
    {
      title: "Problem Solving & Core Tools",
      courses: [
        {
          name: "8D Problem Solving | Six Sigma | DOE Masterclass",
          price: "Rs.4,999/-",
        },
        {
          name: "Core Tools (AIAG + VDA) Champion Certification",
          price: "Rs.7,999/-",
        },
        { name: "Certified 5S Auditor", price: "Rs.2,999/-" },
      ],
    },
    {
      title: "ESG, Sustainability & Compliance",
      courses: [
        { name: "Certified ESG Professional", price: "Rs.3,999/-" },
        { name: "SOC Champion Certification (IMDS RoHS)", price: "Rs.2,599/-" },
      ],
    },
    {
      title: "CQI & Special Process Auditor",
      courses: [
        { name: "Certified CQI-9 Heat Treatment Auditor", price: "Rs.4,999/-" },
        {
          name: "Certified CQI-11 Electroplating Auditor",
          price: "Rs.4,999/-",
        },
      ],
    },
    {
      title: "HR, L&D & Workplace Excellence",
      courses: [
        {
          name: "Certified Training & Development Professional",
          price: "Rs.3,999/-",
        },
        { name: "Certified POSH Trainer", price: "Rs.3,999/-" },
      ],
    },
    {
      title: "Technical Manufacturing Expert",
      courses: [
        { name: "Certified Stamping & Welding Expert", price: "Rs.5,999/-" },
        { name: "Certified Injection Moulding Expert", price: "Rs.5,999/-" },
        { name: "Certified Machining Process Expert", price: "Rs.5,999/-" },
        { name: "Certified MARU-A Expert", price: "Rs.999/-" },
      ],
    },
  ];

  if (loading) {
    return (
      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            border: "4px solid #f1f5f9",
            borderTop: "4px solid #2563eb",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        ></div>
        <p style={{ fontSize: "16px", color: "#64748b", fontWeight: "600" }}>
          Loading Course Portfolio...
        </p>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div
      className="fade-in pulse-animation"
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        paddingBottom: "80px",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          padding: "clamp(40px, 8vw, 80px) 5%",
          color: "white",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            color: "#fbbf24",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontSize: "14px",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          Professional Course Portfolio
        </h3>
        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 56px)",
            fontWeight: "800",
            marginBottom: "20px",
            letterSpacing: "-1px",
          }}
        >
          Certifications & Excellence Programs
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 3vw, 20px)",
            color: "#cbd5e1",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Empowering Professionals. Driving Excellence. Building Futures.
        </p>
      </div>

      <div
        style={{
          padding: "clamp(40px, 8vw, 60px) 5%",
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          gap: "40px",
          alignItems: "flex-start",
          flexWrap: "wrap-reverse",
        }}
      >
        <div
          style={{
            flex: 3,
            minWidth: "min(100%, 320px)",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "30px",
          }}
        >
          {courseCategories.map((category, idx) => (
            <div
              key={idx}
              id={`cat-${idx}`}
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "clamp(20px, 4vw, 30px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                border: "1px solid #e2e8f0",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(18px, 4vw, 20px)",
                  color: "#0f172a",
                  fontWeight: "800",
                  marginBottom: "20px",
                  paddingBottom: "15px",
                  borderBottom: "2px solid #f1f5f9",
                }}
              >
                {category.title}
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {category.courses.map((course, cIdx) => (
                  <div
                    key={cIdx}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingBottom: "12px",
                      borderBottom: "1px dashed #e2e8f0",
                      gap: "10px",
                    }}
                  >
                    <div style={{ display: "flex", gap: "10px", flex: 1 }}>
                      <span
                        style={{
                          color: "#3b82f6",
                          fontSize: "14px",
                          flexShrink: 0,
                        }}
                      >
                        ▸
                      </span>
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#334155",
                          fontWeight: "600",
                          lineHeight: "1.4",
                        }}
                      >
                        {course.name}
                      </span>
                    </div>
                    <div style={{ flexShrink: 0 }}>
                      <span
                        style={{
                          background: "#f0fdf4",
                          color: "#16a34a",
                          padding: "4px 8px",
                          borderRadius: "6px",
                          fontWeight: "800",
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {course.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            flex: 1,
            minWidth: "min(100%, 300px)",
            background: "white",
            borderRadius: "20px",
            padding: "clamp(25px, 5vw, 40px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            position: "sticky",
            top: "100px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(18px, 4vw, 22px)",
              color: "#0f172a",
              fontWeight: "800",
              marginBottom: "15px",
            }}
          >
            Enroll Instantly
          </h3>
          <img
            src="qr_code.png"
            alt="QR"
            style={{ width: "100%", maxWidth: "200px", marginBottom: "20px" }}
          />
          <p
            style={{ color: "#64748b", fontSize: "14px", marginBottom: "30px" }}
          >
            Scan the QR code below to make a secure payment for your desired
            certification program.
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "#0f172a",
              fontWeight: "700",
              marginBottom: "10px",
            }}
          >
            Accepted Payment Methods:
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              fontSize: "24px",
            }}
          >
            💳 🏦 📱
          </div>
        </div>
      </div>
    </div>
  );
}

// --- LIVE API VERIFICATION PAGE ---
function VerificationPage() {
  const [searchInput, setSearchInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setError("");
    setResult(null);
    if (!searchInput.trim()) {
      setError("Please enter a certificate ID.");
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://script.google.com/macros/s/AKfycbxsoX1_3meFNGvsTFuhAZp24bHLUJZI4a1vi4n9lXqMp8lTmq45z_LL0mKSECa50NYvPg/exec?id=${searchInput.trim()}`
      );
      const data = await response.json();
      if (data && data.length > 0) {
        setResult(data[0]);
      } else {
        setError("Certificate not found. Please check the ID and try again.");
      }
    } catch (err) {
      setError("Database connection error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "90vh",
        background: "linear-gradient(135deg, #1e40af 0%, #2563eb 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "clamp(40px, 8vw, 80px) 5%",
        color: "white",
        textAlign: "center",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.2)",
          padding: "6px 16px",
          borderRadius: "30px",
          fontSize: "11px",
          fontWeight: "700",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          marginBottom: "30px",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <span
          style={{
            height: "8px",
            width: "8px",
            background: "#4ade80",
            borderRadius: "50%",
            display: "inline-block",
          }}
        ></span>{" "}
        Secure Verification System • Live API
      </div>
      <h1
        style={{
          fontSize: "clamp(32px, 6vw, 52px)",
          fontWeight: "bold",
          fontFamily: "Georgia, serif",
          marginBottom: "16px",
        }}
      >
        Certificate Verification
      </h1>
      <p
        style={{
          fontSize: "clamp(15px, 3vw, 17px)",
          color: "#bfdbfe",
          marginBottom: "50px",
          maxWidth: "600px",
          lineHeight: "1.6",
        }}
      >
        Enter a certificate ID below to instantly verify the authenticity of any
        credential issued by SYN Global Edutech.
      </p>

      <div
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "clamp(25px, 5vw, 40px)",
          width: "100%",
          maxWidth: "700px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            color: "#0f172a",
            fontSize: "clamp(18px, 4vw, 20px)",
            marginBottom: "8px",
            fontWeight: "700",
          }}
        >
          Enter Certificate ID
        </h3>
        <p style={{ color: "#64748b", fontSize: "14px", marginBottom: "25px" }}>
          The certificate ID can be found at the bottom-right of your document.
        </p>
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "15px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <input
            type="text"
            placeholder="e.g. KPSGE00133"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            style={{
              flex: 1,
              minWidth: "min(100%, 200px)",
              maxWidth: "400px",
              padding: "16px 20px",
              borderRadius: "8px",
              border: "1px solid #cbd5e1",
              fontSize: "16px",
              outline: "none",
              color: "#0f172a",
              fontWeight: "500",
            }}
            disabled={isLoading}
          />
          <button
            onClick={handleSearch}
            disabled={isLoading}
            style={{
              background: isLoading ? "#94a3b8" : "#2563eb",
              color: "white",
              border: "none",
              padding: "0 30px",
              minWidth: "120px",
              borderRadius: "8px",
              fontWeight: "700",
              fontSize: "16px",
              cursor: isLoading ? "not-allowed" : "pointer",
              height: "54px",
            }}
          >
            {isLoading ? "Searching..." : "Verify"}
          </button>
        </div>
        {error && (
          <p
            style={{
              color: "#ef4444",
              fontSize: "14px",
              fontWeight: "600",
              marginTop: "10px",
            }}
          >
            {error}
          </p>
        )}
      </div>

      {result && (
        <div
          style={{
            background: "white",
            borderRadius: "12px",
            overflow: "hidden",
            width: "100%",
            maxWidth: "900px",
            marginTop: "40px",
            boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
            textAlign: "left",
            color: "#0f172a",
          }}
        >
          <div
            style={{
              background: "#1e3a8a",
              padding: "clamp(25px, 5vw, 40px)",
              color: "white",
              position: "relative",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                opacity: 0.7,
                marginBottom: "15px",
                fontWeight: "600",
              }}
            >
              Certificate of Achievement
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 42px)",
                fontWeight: "bold",
                fontFamily: "Georgia, serif",
                marginBottom: "20px",
                paddingRight: "70px",
              }}
            >
              {result["name"] || "Name Missing"}
            </h2>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "rgba(255,255,255,0.1)",
                padding: "6px 16px",
                borderRadius: "6px",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "clamp(13px, 3vw, 15px)",
                  letterSpacing: "0.5px",
                }}
              >
                {result["course"] || "Course Missing"}
              </span>
            </div>
            <div
              style={{
                position: "absolute",
                top: "30px",
                right: "clamp(20px, 5vw, 50px)",
                height: "70px",
                width: "70px",
                borderRadius: "50%",
                border: "2px dashed rgba(255,255,255,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <span style={{ fontSize: "20px" }}>⭐</span>
              <span
                style={{
                  fontSize: "7px",
                  opacity: 0.8,
                  marginTop: "4px",
                  letterSpacing: "1px",
                }}
              >
                VERIFIED
              </span>
            </div>
          </div>
          <div
            style={{
              padding: "clamp(25px, 5vw, 40px)",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
              gap: "30px",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "12px",
                  color: "#64748b",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                📄 Certificate ID
              </p>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#1e40af",
                }}
              >
                {result["certificates id"]}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "12px",
                  color: "#64748b",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                📅 Issue Date
              </p>
              <p style={{ fontSize: "16px", fontWeight: "600" }}>
                {result["issue date"]}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "12px",
                  color: "#64748b",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                ⏱️ Status
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "800",
                  color: "#16a34a",
                }}
              >
                {result["status"]}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "12px",
                  color: "#64748b",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                ⏳ Validity
              </p>
              <p style={{ fontSize: "16px", fontWeight: "600" }}>
                {result["validity"]}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- SGAAC BOARD PAGE COMPONENT ---
// --- SGAAC BOARD PAGE COMPONENT ---
function SgaacPage() {
  const boardMembers = [
    {
      id: "01",
      name: "Dr. M. Tiwari",
      exp: "25+ Years of Experience",
      role: "COO",
      desc: "Law, Human Resources, Operational Excellence & Education Leadership",
    },
    {
      id: "02",
      name: "Mr. R. P. Pandey",
      exp: "Advocate, Supreme Court of India",
      role: "Director – Judicial Affairs & Policy Governance",
      desc: "Certification Policy, Accreditation Law & Regulatory Compliance",
    },
    {
      id: "03",
      name: "Mr. Ravi Verma",
      exp: "25+ Years | Corporate Quality Head",
      role: "Director — Quality Standards & Technical Accreditation",
      desc: "Quality Management | IATF | ISO Standards | Lean Six Sigma | Business Excellence",
    },
    {
      id: "04",
      name: "Mr. Parth Bhagwanjibhai Vala",
      exp: "Ex. Maruti Suzuki | LSSMBB",
      role: "Director — Lean & Manufacturing Excellence",
      desc: "Lean Six Sigma | TQM | TPM | WCM | Automotive Quality | Process Improvement",
    },
    {
      id: "05",
      name: "Mr. Abhishek Kumar",
      exp: "Leading Governing Council",
      role: "Director — Governing Council & Academic Affairs",
      desc: "Academic Governance | Program Oversight | Curriculum Design | Quality Assurance",
    },
    {
      id: "06",
      name: "Mr. Ranjit Bar",
      exp: "Leading Corporate Affairs",
      role: "Director — Corporate Relations & Industry Engagement",
      desc: "Industry Partnerships, CSR, & Campus-to-Corporate Connect",
    },
    {
      id: "07",
      name: "Mr. Ajeet Singh",
      exp: "15+ Yrs | HR, Legal & ESG | MBA",
      role: "Director — Human Resources, ESG & Workforce Development",
      desc: "HR Certifications | ESG Compliance | Workforce Excellence | Labour Laws | L&D",
    },
    {
      id: "08",
      name: "Ms. Amravati",
      exp: "20 Years | Academic Administration",
      role: "Director — Academic Controlling & Examination Board",
      desc: "Examination Integrity, Assessment Standards & Evaluation",
    },
    {
      id: "09",
      name: "Ms. Sakshi Sinha",
      exp: "12 Years | Marketing & Communications",
      role: "Director — Marketing, Outreach & Brand Strategy",
      desc: "Program Promotion, Learner Outreach & Digital Strategy",
    },
    {
      id: "10",
      name: "Ms. Pinki Rani",
      exp: "Leading Certification & Accreditation",
      role: "Head — Certification, Accreditation & Registry",
      desc: "Certificate Issuance | Verification | Accreditation Support | SGAAC Registry Management",
    },
  ];

  const openPositions = [
    {
      id: "11",
      role: "Director — Technology, Digital Learning & EdTech Innovation",
      focus:
        "E-Learning Platforms, LMS, Digital Certification & AI in Education",
      req: "10+ years in EdTech, IT, or Digital Transformation leadership",
    },
    {
      id: "12",
      role: "Director — International Relations & Global Partnerships",
      focus:
        "Global University Tie-ups, International Certification Equivalency & MoUs",
      req: "Experience in international academia, global standards bodies, or diplomatic relations",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        paddingBottom: "80px",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          padding: "clamp(40px, 8vw, 80px) 5%",
          color: "white",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            color: "#fbbf24",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontSize: "14px",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          Independent Accreditation Body
        </h3>
        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 56px)",
            fontWeight: "800",
            marginBottom: "20px",
            letterSpacing: "-1px",
          }}
        >
          SGAAC Board of Directors
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 3vw, 20px)",
            color: "#cbd5e1",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          SYN Global Assessment & Certification Council — The Global Excellence
          Standard.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "20px",
          marginTop: "-30px",
          padding: "0 5%",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {[
          { num: "10", label: "Board Members" },
          { num: "34+", label: "Certified Programs" },
          { num: "2", label: "Vacant Positions" },
          { num: "2019", label: "Established" },
        ].map((stat, i) => (
          <div
            key={i}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "16px",
              boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 36px)",
                color: "#2563eb",
                fontWeight: "800",
                margin: "0 0 5px 0",
              }}
            >
              {stat.num}
            </h2>
            <p
              style={{
                color: "#64748b",
                margin: 0,
                fontWeight: "600",
                fontSize: "clamp(10px, 2vw, 14px)",
                textTransform: "uppercase",
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          padding: "clamp(40px, 8vw, 80px) 5%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "clamp(30px, 5vw, 50px)",
            borderRadius: "24px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            marginBottom: "60px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 32px)",
              color: "#0f172a",
              fontWeight: "800",
              marginBottom: "20px",
            }}
          >
            About SGAAC
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 3vw, 17px)",
              color: "#475569",
              lineHeight: "1.8",
              marginBottom: "20px",
              textAlign: "justify",
            }}
          >
            The SYN Global Assessment & Certification Council (SGAAC) is an
            independent body formed by a collaborative team. Established to
            uphold the highest standards of integrity and credibility, the
            council is responsible for reviewing, accrediting, and
            authenticating every training and certification process conducted
            through our platform.
          </p>
          <p
            style={{
              fontSize: "clamp(15px, 3vw, 17px)",
              color: "#475569",
              lineHeight: "1.8",
              marginBottom: "30px",
              textAlign: "justify",
            }}
          >
            SGAAC ensures that each program meets rigorous international
            benchmarks, combining global best practices with regional expertise.
            By carefully evaluating course content, delivery methods, and
            certification protocols, the council guarantees that learners and
            professionals receive qualifications that are both recognized and
            respected worldwide.
          </p>
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <span
              style={{
                background: "#f0fdf4",
                color: "#16a34a",
                padding: "8px 16px",
                borderRadius: "8px",
                fontWeight: "700",
                fontSize: "14px",
              }}
            >
              ✔ Transparency
            </span>
            <span
              style={{
                background: "#f0fdf4",
                color: "#16a34a",
                padding: "8px 16px",
                borderRadius: "8px",
                fontWeight: "700",
                fontSize: "14px",
              }}
            >
              ✔ Quality
            </span>
            <span
              style={{
                background: "#f0fdf4",
                color: "#16a34a",
                padding: "8px 16px",
                borderRadius: "8px",
                fontWeight: "700",
                fontSize: "14px",
              }}
            >
              ✔ Trust
            </span>
          </div>
        </div>

        <div style={{ marginBottom: "80px", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 32px)",
              color: "#0f172a",
              fontWeight: "800",
              marginBottom: "40px",
            }}
          >
            Certification Workflow
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {[
              "Training Completed",
              "Give Test",
              "SGAAC Review",
              "Approved",
              "Certificate Issued",
            ].map((step, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    background: i === 4 ? "#fbbf24" : "#1e293b",
                    color: i === 4 ? "#0f172a" : "white",
                    padding: "12px 20px",
                    borderRadius: "12px",
                    fontWeight: "700",
                    fontSize: "clamp(12px, 2vw, 15px)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {step}
                </div>
                {i !== 4 && (
                  <div
                    style={{
                      color: "#94a3b8",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <h2
          style={{
            fontSize: "clamp(24px, 4vw, 32px)",
            color: "#0f172a",
            fontWeight: "800",
            marginBottom: "30px",
          }}
        >
          Current Board Members
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "30px",
            marginBottom: "80px",
          }}
        >
          {boardMembers.map((member, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderTop: "5px solid #2563eb",
                borderRadius: "16px",
                padding: "clamp(25px, 4vw, 40px)",
                boxShadow: "0 15px 30px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  color: "#94a3b8",
                  fontSize: "13px",
                  fontWeight: "800",
                  marginBottom: "10px",
                }}
              >
                POSITION {member.id}
              </div>
              <h3
                style={{
                  fontSize: "clamp(20px, 3vw, 24px)",
                  color: "#0f172a",
                  fontWeight: "800",
                  margin: "0 0 10px 0",
                }}
              >
                {member.name}
              </h3>
              <p
                style={{
                  color: "#d97706",
                  fontSize: "14px",
                  fontWeight: "700",
                  margin: "0 0 20px 0",
                }}
              >
                {member.exp}
              </p>
              <h4
                style={{
                  fontSize: "15px",
                  color: "#1e293b",
                  fontWeight: "700",
                  marginBottom: "10px",
                  lineHeight: "1.4",
                }}
              >
                {member.role}
              </h4>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {member.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            background: "#fffbeb",
            border: "1px solid #fcd34d",
            borderRadius: "24px",
            padding: "clamp(30px, 5vw, 50px)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span
              style={{
                background: "#f59e0b",
                color: "white",
                padding: "6px 16px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "800",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Join The Board
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 32px)",
                color: "#0f172a",
                fontWeight: "800",
                margin: "20px 0 15px 0",
              }}
            >
              Open Positions — SGAAC Board
            </h2>
            <p style={{ fontSize: "clamp(15px, 3vw, 18px)", color: "#64748b" }}>
              We are actively seeking distinguished professionals to strengthen
              the SGAAC Board.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: "30px",
            }}
          >
            {openPositions.map((pos, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  padding: "clamp(25px, 4vw, 30px)",
                  borderRadius: "16px",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    color: "#ef4444",
                    fontSize: "13px",
                    fontWeight: "800",
                    marginBottom: "15px",
                  }}
                >
                  VACANT: POSITION {pos.id}
                </div>
                <h3
                  style={{
                    fontSize: "clamp(16px, 3vw, 18px)",
                    color: "#0f172a",
                    fontWeight: "800",
                    marginBottom: "15px",
                    lineHeight: "1.4",
                  }}
                >
                  {pos.role}
                </h3>
                <p
                  style={{
                    color: "#475569",
                    fontSize: "14px",
                    marginBottom: "15px",
                  }}
                >
                  <strong>Focus:</strong> {pos.focus}
                </p>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "13px",
                    fontStyle: "italic",
                    margin: 0,
                  }}
                >
                  <strong>Preferred:</strong> {pos.req}
                </p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <p
              style={{
                fontSize: "clamp(14px, 3vw, 16px)",
                color: "#475569",
                fontWeight: "600",
                wordBreak: "break-all",
              }}
            >
              To nominate a candidate, contact:{" "}
              <a
                href="mailto:info@synglobaledutech.com"
                style={{ color: "#2563eb", textDecoration: "none" }}
              >
                info@synglobaledutech.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- VISION & MISSION PAGE COMPONENT ---
function VisionMissionPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        paddingBottom: "80px",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          padding: "clamp(40px, 8vw, 80px) 5%",
          color: "white",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            color: "#fbbf24",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontSize: "14px",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          Our Purpose
        </h3>
        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 56px)",
            fontWeight: "800",
            marginBottom: "20px",
            letterSpacing: "-1px",
          }}
        >
          Vision & Mission
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 3vw, 20px)",
            color: "#cbd5e1",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Driving excellence in education and empowering professionals
          worldwide.
        </p>
      </div>

      <div
        style={{
          padding: "clamp(40px, 8vw, 80px) 5%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "40px",
            marginBottom: "80px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "clamp(30px, 5vw, 50px)",
              borderRadius: "24px",
              boxShadow: "0 15px 30px rgba(0,0,0,0.05)",
              borderTop: "5px solid #fbbf24",
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "20px" }}>🔭</div>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 32px)",
                color: "#0f172a",
                fontWeight: "800",
                marginBottom: "20px",
              }}
            >
              Our Vision
            </h2>
            <p
              style={{
                fontSize: "clamp(15px, 3vw, 17px)",
                color: "#475569",
                lineHeight: "1.8",
                textAlign: "justify",
              }}
            >
              To build a globally recognized educational platform that bridges
              the gap between academia and industry. We envision a world where
              high-quality, industry-relevant education is accessible to
              everyone, empowering individuals to innovate, lead, and achieve
              professional excellence in a rapidly evolving global landscape.
            </p>
          </div>
          <div
            style={{
              background: "white",
              padding: "clamp(30px, 5vw, 50px)",
              borderRadius: "24px",
              boxShadow: "0 15px 30px rgba(0,0,0,0.05)",
              borderTop: "5px solid #2563eb",
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "20px" }}>🚀</div>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 32px)",
                color: "#0f172a",
                fontWeight: "800",
                marginBottom: "20px",
              }}
            >
              Our Mission
            </h2>
            <p
              style={{
                fontSize: "clamp(15px, 3vw, 17px)",
                color: "#475569",
                lineHeight: "1.8",
                textAlign: "justify",
              }}
            >
              To deliver world-class training in quality standards and modern
              technologies. We are committed to providing skill-based, globally
              recognized certification programs, fostering corporate readiness,
              and cultivating a community of lifelong learners who drive
              continuous improvement within their organizations.
            </p>
          </div>
        </div>

        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 32px)",
              color: "#0f172a",
              fontWeight: "800",
              marginBottom: "15px",
            }}
          >
            Our Core Values
          </h2>
          <p style={{ fontSize: "clamp(15px, 3vw, 18px)", color: "#64748b" }}>
            The principles that guide everything we do.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              icon: "⭐",
              title: "Excellence",
              desc: "Upholding the highest global standards in every program we deliver.",
            },
            {
              icon: "🤝",
              title: "Integrity",
              desc: "Maintaining transparency, trust, and ethical practices in all our certifications.",
            },
            {
              icon: "💡",
              title: "Innovation",
              desc: "Continuously updating our curriculum to reflect the latest industry trends and technologies.",
            },
            {
              icon: "🌍",
              title: "Accessibility",
              desc: "Making premium education available to learners globally through digital platforms.",
            },
          ].map((value, i) => (
            <div
              key={i}
              style={{
                background: "white",
                padding: "clamp(25px, 4vw, 40px) 20px",
                borderRadius: "16px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "35px", marginBottom: "15px" }}>
                {value.icon}
              </div>
              <h3
                style={{
                  fontSize: "18px",
                  color: "#0f172a",
                  fontWeight: "800",
                  marginBottom: "10px",
                }}
              >
                {value.title}
              </h3>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- ACCREDITATION PAGE COMPONENT ---
function AccreditationPage() {
  const certifications = [
    {
      img: "iso9001.png",
      title: "ISO 9001:2015",
      subtitle: "Quality Management System",
      desc: "International standard ensuring consistent quality in products and service delivery.",
    },
    {
      img: "iso14001.png",
      title: "ISO 14001:2015",
      subtitle: "Environmental Management",
      desc: "Certified for sustainable practices and responsible environmental management.",
    },
    {
      img: "iso21001.png",
      title: "ISO 21001:2018",
      subtitle: "Educational Organizations",
      desc: "Management system standard specifically designed for educational institutions.",
    },
    {
      img: "msme.png",
      title: "MSME Registered",
      subtitle: "Govt. of India",
      desc: "Recognized by Ministry of Micro, Small & Medium Enterprises, Govt. of India.",
    },
    {
      img: "sgaac.png",
      title: "SGAAC Certified",
      subtitle: "Global Excellence Standard",
      desc: "Certified Program under SGAAC — Global Excellence Standard for training bodies.",
    },
  ];

  const whyItMatters = [
    {
      icon: "✔️",
      title: "Quality You Can Trust",
      desc: "ISO 9001:2015 & ISO 21001:2018 certify that our learning systems and delivery processes meet the highest international standards.",
    },
    {
      icon: "🏛️",
      title: "Government Recognized",
      desc: "MSME registration by the Government of India confirms our legal standing as a credible professional training organization.",
    },
    {
      icon: "🌐",
      title: "Globally Accredited",
      desc: "SGAAC Global Excellence Standard certification means our programs are recognized and valued by employers worldwide.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        paddingBottom: "80px",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          padding: "clamp(40px, 8vw, 80px) 5%",
          color: "white",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            color: "#fbbf24",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontSize: "14px",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          Trusted. Certified. Globally Recognized.
        </h3>
        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 56px)",
            fontWeight: "800",
            marginBottom: "20px",
            letterSpacing: "-1px",
          }}
        >
          Associations & Accreditations
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 3vw, 20px)",
            color: "#cbd5e1",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          SYN Global Edutech is proudly registered, certified, and associated
          with leading national and international bodies.
        </p>
      </div>

      <div
        style={{
          padding: "clamp(40px, 8vw, 80px) 5%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              color: "#0f172a",
              fontWeight: "800",
              marginBottom: "15px",
            }}
          >
            Our Certifications & Accreditations
          </h2>
          <p style={{ fontSize: "clamp(15px, 3vw, 18px)", color: "#64748b" }}>
            Globally benchmarked standards that define our quality commitment
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "30px",
            marginBottom: "clamp(60px, 10vw, 100px)",
          }}
        >
          {certifications.map((cert, i) => (
            <div
              key={i}
              style={{
                background: "white",
                padding: "clamp(25px, 5vw, 40px)",
                borderRadius: "20px",
                boxShadow: "0 15px 30px rgba(0,0,0,0.05)",
                borderTop: "5px solid #2563eb",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div
                style={{
                  height: "80px",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={cert.img}
                  alt={cert.title}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <h3
                style={{
                  fontSize: "clamp(18px, 4vw, 22px)",
                  color: "#0f172a",
                  fontWeight: "800",
                  margin: "0 0 5px 0",
                }}
              >
                {cert.title}
              </h3>
              <p
                style={{
                  color: "#2563eb",
                  fontSize: "14px",
                  fontWeight: "700",
                  margin: "0 0 15px 0",
                }}
              >
                {cert.subtitle}
              </p>
              <p
                style={{
                  color: "#475569",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {cert.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            background: "white",
            borderRadius: "24px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              background: "#fbbf24",
              padding: "clamp(30px, 5vw, 40px) 5%",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 32px)",
                color: "#0f172a",
                fontWeight: "800",
                margin: "0 0 15px 0",
              }}
            >
              Why Our Accreditations Matter
            </h2>
            <p
              style={{
                fontSize: "clamp(15px, 3vw, 18px)",
                color: "#0f172a",
                fontWeight: "600",
                margin: 0,
              }}
            >
              Every certification we hold is a promise of quality, transparency,
              and excellence delivered to every learner.
            </p>
          </div>
          <div
            style={{
              padding: "clamp(30px, 5vw, 50px) 5%",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
              gap: "40px",
            }}
          >
            {whyItMatters.map((item, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "30px", marginBottom: "15px" }}>
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    color: "#0f172a",
                    fontWeight: "800",
                    marginBottom: "15px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "#475569",
                    fontSize: "14px",
                    lineHeight: "1.7",
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* NEW COURSE ALIGNMENT SECTION */}
        <div
          style={{
            background: "white",
            borderRadius: "24px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
            overflow: "hidden",
            marginTop: "60px",
          }}
        >
          <div
            style={{
              background: "#1e3a8a",
              padding: "clamp(30px, 5vw, 40px) 5%",
              textAlign: "center",
              color: "white",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 32px)",
                fontWeight: "800",
                margin: "0 0 15px 0",
              }}
            >
              SGAAC Accredited Course Alignment
            </h2>
            <p
              style={{
                fontSize: "clamp(15px, 3vw, 18px)",
                fontWeight: "600",
                margin: 0,
                color: "#bfdbfe",
              }}
            >
              Our programs are designed to meet internationally recognized
              quality & excellence standards
            </p>
          </div>
          <div
            style={{
              padding: "clamp(30px, 5vw, 50px) 5%",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              gap: "40px",
            }}
          >
            {/* Lean Six Sigma / CSSC */}
            <div
              style={{
                textAlign: "center",
                padding: "30px 20px",
                border: "1px solid #e2e8f0",
                borderRadius: "16px",
                background: "#f8fafc",
              }}
            >
              <div
                style={{
                  height: "120px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <img
                  src="image_c1f423.png"
                  alt="CSSC Logo"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <p
                style={{
                  color: "#2563eb",
                  fontWeight: "800",
                  fontSize: "14px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}
              >
                Lean Six Sigma
              </p>
              <h3
                style={{
                  fontSize: "20px",
                  color: "#0f172a",
                  fontWeight: "800",
                  marginBottom: "15px",
                }}
              >
                CSSC Body of Knowledge
              </h3>
              <p
                style={{
                  color: "#475569",
                  fontSize: "15px",
                  lineHeight: "1.7",
                  margin: 0,
                }}
              >
                Curriculum aligned with the Council for Six Sigma Certification
                (CSSC) global standard for Lean Six Sigma excellence.
              </p>
            </div>

            {/* Professional Dev / CPD */}
            <div
              style={{
                textAlign: "center",
                padding: "30px 20px",
                border: "1px solid #e2e8f0",
                borderRadius: "16px",
                background: "#f8fafc",
              }}
            >
              <div
                style={{
                  height: "120px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <img
                  src="image_c1f401.png"
                  alt="CPD Logo"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <p
                style={{
                  color: "#2563eb",
                  fontWeight: "800",
                  fontSize: "14px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}
              >
                Professional Dev
              </p>
              <h3
                style={{
                  fontSize: "20px",
                  color: "#0f172a",
                  fontWeight: "800",
                  marginBottom: "15px",
                }}
              >
                CPD Learning Principles
              </h3>
              <p
                style={{
                  color: "#475569",
                  fontSize: "15px",
                  lineHeight: "1.7",
                  margin: 0,
                }}
              >
                Structured under Continuing Professional Development principles
                ensuring measurable, verified skill advancement.
              </p>
            </div>

            {/* Quality Mgmt / EFQM */}
            <div
              style={{
                textAlign: "center",
                padding: "30px 20px",
                border: "1px solid #e2e8f0",
                borderRadius: "16px",
                background: "#f8fafc",
              }}
            >
              <div
                style={{
                  height: "120px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <img
                  src="image_c1f3e7.png"
                  alt="EFQM Logo"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <p
                style={{
                  color: "#2563eb",
                  fontWeight: "800",
                  fontSize: "14px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}
              >
                Quality Mgmt
              </p>
              <h3
                style={{
                  fontSize: "20px",
                  color: "#0f172a",
                  fontWeight: "800",
                  marginBottom: "15px",
                }}
              >
                EFQM Excellence Model
              </h3>
              <p
                style={{
                  color: "#475569",
                  fontSize: "15px",
                  lineHeight: "1.7",
                  margin: 0,
                }}
              >
                Frameworks grounded in the European Foundation for Quality
                Management model for organizational excellence.
              </p>
            </div>
          </div>
          <div
            style={{
              background: "#f1f5f9",
              padding: "20px",
              textAlign: "center",
              borderTop: "1px solid #e2e8f0",
              color: "#475569",
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            Internationally aligned curriculum | Verified by SGAAC |
            info@synglobaledutech.com
          </div>
        </div>
      </div>
    </div>
  );
}

// --- INTERNSHIP PAGE COMPONENT ---

// --- INTERNSHIP & UPSKILLING PAGE COMPONENT ---
function InternshipPage() {
  // State to track dropdown selections
  const [currentStatus, setCurrentStatus] = useState("");
  const [areaOfInterest, setAreaOfInterest] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Tracks loading state

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
    color: "#334155",
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevents the page from refreshing/redirecting
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      // Sends the email silently in the background
      const response = await fetch(
        "https://formsubmit.co/ajax/synglobaledutech@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        alert("Application submitted successfully! We will contact you soon.");
        // Clear all standard form fields
        form.reset();
        // Reset our dropdown states so "Other" boxes disappear
        setCurrentStatus("");
        setAreaOfInterest("");
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fade-in"
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        paddingBottom: "80px",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          padding: "clamp(40px, 8vw, 80px) 5%",
          color: "white",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            color: "#fbbf24",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontSize: "14px",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          Accelerate Your Career
        </h3>
        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 56px)",
            fontWeight: "800",
            marginBottom: "20px",
            letterSpacing: "-1px",
          }}
        >
          Global Internship & Upskilling Program
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 3vw, 20px)",
            color: "#cbd5e1",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Bridge the gap between academic theory and industry reality, or
          upskill as a working professional. Work alongside global experts on
          live projects.
        </p>
      </div>

      <div
        style={{
          padding: "clamp(40px, 8vw, 60px) 5%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "50px",
        }}
      >
        {/* Left Side - Info */}
        <div style={{ flex: 1, minWidth: "min(100%, 400px)" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 32px)",
              color: "#0f172a",
              fontWeight: "800",
              marginBottom: "20px",
            }}
          >
            Who Is This For?
          </h2>
          <p
            style={{
              color: "#475569",
              fontSize: "16px",
              lineHeight: "1.8",
              marginBottom: "30px",
            }}
          >
            Our program is uniquely designed for ambitious{" "}
            <strong>students</strong>, enthusiastic <strong>learners</strong>,
            and <strong>working professionals</strong> looking to pivot or
            advance. We provide real-world responsibilities, expert mentorship,
            and a platform to elevate your career.
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {[
              {
                icon: "🚀",
                title: "Live Industry Projects",
                desc: "Apply your knowledge to real-world challenges in Manufacturing, Quality, and Tech.",
              },
              {
                icon: "👨‍🏫",
                title: "Expert Mentorship",
                desc: "Get guided by industry veterans with decades of operational excellence experience.",
              },
              {
                icon: "🎓",
                title: "Student to Professional",
                desc: "Learn crucial corporate etiquette, or upgrade your existing industry skills.",
              },
              {
                icon: "📜",
                title: "Official Certification",
                desc: "Receive a verifiable SGAAC accredited certificate upon successful completion.",
              },
              {
                icon: "💼",
                title: "Career Advancement",
                desc: "Top performers are eligible for Pre-Placement Offers (PPOs) or career transition support.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "15px",
                  alignItems: "flex-start",
                  background: "white",
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.03)",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div style={{ fontSize: "28px" }}>{item.icon}</div>
                <div>
                  <h4
                    style={{
                      margin: "0 0 5px 0",
                      color: "#0f172a",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      color: "#64748b",
                      fontSize: "14px",
                      lineHeight: "1.5",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Enquiry Form */}
        <div style={{ flex: 1, minWidth: "min(100%, 400px)" }}>
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "clamp(25px, 5vw, 40px)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
              borderTop: "5px solid #2563eb",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                color: "#0f172a",
                fontWeight: "800",
                marginBottom: "10px",
              }}
            >
              Program Application
            </h3>
            <p
              style={{
                color: "#64748b",
                fontSize: "14px",
                marginBottom: "30px",
              }}
            >
              Fill out the form below and our academic team will get back to you
              with the next steps.
            </p>

            {/* FUNCTIONAL AJAX EMAIL FORM */}
            <form onSubmit={handleFormSubmit}>
              <input
                type="hidden"
                name="_subject"
                value="New Internship/Upskilling Application!"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <input
                type="text"
                name="Full Name"
                placeholder="Full Name *"
                required
                style={inputStyle}
              />
              <input
                type="email"
                name="Email Address"
                placeholder="Email Address *"
                required
                style={inputStyle}
              />
              <input
                type="tel"
                name="Phone Number"
                placeholder="Phone / WhatsApp Number *"
                required
                style={inputStyle}
              />

              {/* CURRENT STATUS DROPDOWN */}
              <select
                name="Current Status"
                required
                style={{ ...inputStyle, cursor: "pointer" }}
                value={currentStatus}
                onChange={(e) => setCurrentStatus(e.target.value)}
              >
                <option value="" disabled>
                  Current Status *
                </option>
                <option value="Student">
                  Student (B.Tech / Diploma / MBA)
                </option>
                <option value="Working Professional">
                  Working Professional
                </option>
                <option value="Learner/Job Seeker">Learner / Job Seeker</option>
                <option value="Other">Other (Please Specify)</option>
              </select>

              {/* CONDITIONAL 'OTHER' INPUT FOR STATUS */}
              {currentStatus === "Other" && (
                <input
                  className="fade-in"
                  type="text"
                  name="Specified Status (Other)"
                  placeholder="Please specify your status *"
                  required
                  style={inputStyle}
                />
              )}

              <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                <input
                  type="text"
                  name="Organization/College"
                  placeholder="College or Organization *"
                  required
                  style={{ ...inputStyle, flex: 1, minWidth: "150px" }}
                />
                <input
                  type="text"
                  name="Degree/Role"
                  placeholder="Degree or Current Role *"
                  required
                  style={{ ...inputStyle, flex: 1, minWidth: "150px" }}
                />
              </div>

              {/* AREA OF INTEREST DROPDOWN */}
              <select
                name="Area of Interest"
                required
                style={{ ...inputStyle, cursor: "pointer" }}
                value={areaOfInterest}
                onChange={(e) => setAreaOfInterest(e.target.value)}
              >
                <option value="" disabled>
                  Select Area of Interest *
                </option>
                <option value="Lean Six Sigma & Quality">
                  Lean Six Sigma & Quality
                </option>
                <option value="Manufacturing & Industrial">
                  Manufacturing & Industrial
                </option>
                <option value="ESG & Sustainability">
                  ESG & Sustainability
                </option>
                <option value="HR & Operations">HR & Operations</option>
                <option value="AI & Digital Transformation">
                  AI & Digital Transformation
                </option>
                <option value="Other">Other (Please Specify)</option>
              </select>

              {/* CONDITIONAL 'OTHER' INPUT FOR AREA OF INTEREST */}
              {areaOfInterest === "Other" && (
                <input
                  className="fade-in"
                  type="text"
                  name="Specified Interest (Other)"
                  placeholder="Please specify your area of interest *"
                  required
                  style={inputStyle}
                />
              )}

              <textarea
                name="Message/Goals"
                placeholder="Briefly describe what you hope to learn... (Optional)"
                rows="4"
                style={{ ...inputStyle, resize: "vertical" }}
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: "100%",
                  background: isSubmitting ? "#94a3b8" : "#2563eb",
                  color: "white",
                  padding: "16px",
                  borderRadius: "8px",
                  border: "none",
                  fontSize: "16px",
                  fontWeight: "700",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  transition: "background 0.3s",
                  boxShadow: "0 4px 15px rgba(37, 99, 235, 0.3)",
                }}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- CONTACT PAGE COMPONENT ---
// --- CONTACT PAGE COMPONENT ---
function ContactPage() {
  return (
    <div
      className="fade-in"
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        paddingBottom: "80px",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          padding: "clamp(40px, 8vw, 80px) 5%",
          color: "white",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            color: "#fbbf24",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontSize: "14px",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          Support & Assistance
        </h3>
        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 56px)",
            fontWeight: "800",
            marginBottom: "20px",
            letterSpacing: "-1px",
          }}
        >
          Get in Touch
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 3vw, 20px)",
            color: "#cbd5e1",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Have questions about our courses, certifications, or corporate
          tie-ups? Our expert support team is here to help.
        </p>
      </div>

      {/* Contact Cards */}
      <div
        style={{
          padding: "clamp(40px, 8vw, 80px) 5%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
            gap: "30px",
            marginTop: "-60px",
          }}
        >
          {/* Email Card */}
          <div
            style={{
              background: "white",
              padding: "40px 20px",
              borderRadius: "20px",
              textAlign: "center",
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              position: "relative",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "70px",
                height: "70px",
                background: "#eff6ff",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
                marginBottom: "20px",
                color: "#2563eb",
              }}
            >
              ✉️
            </div>
            <h3
              style={{
                fontSize: "20px",
                color: "#0f172a",
                fontWeight: "800",
                marginBottom: "10px",
              }}
            >
              Email Us
            </h3>
            <p
              style={{
                color: "#64748b",
                fontSize: "14px",
                marginBottom: "20px",
                lineHeight: "1.6",
                flex: 1,
              }}
            >
              For detailed queries, course information, and official
              correspondence.
            </p>
            <a
              href="mailto:info@synglobaledutech.com"
              style={{
                color: "#2563eb",
                fontWeight: "700",
                fontSize: "15px",
                textDecoration: "none",
                wordBreak: "break-all",
              }}
            >
              info@synglobaledutech.com
            </a>
          </div>

          {/* Phone Card */}
          <div
            style={{
              background: "white",
              padding: "40px 20px",
              borderRadius: "20px",
              textAlign: "center",
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              position: "relative",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "70px",
                height: "70px",
                background: "#eff6ff",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
                marginBottom: "20px",
                color: "#2563eb",
              }}
            >
              📞
            </div>
            <h3
              style={{
                fontSize: "20px",
                color: "#0f172a",
                fontWeight: "800",
                marginBottom: "10px",
              }}
            >
              Call Us
            </h3>
            <p
              style={{
                color: "#64748b",
                fontSize: "14px",
                marginBottom: "20px",
                lineHeight: "1.6",
                flex: 1,
              }}
            >
              Speak directly with our academic counselors and support staff.
            </p>
            <a
              href="tel:+919508213681"
              style={{
                color: "#0f172a",
                fontWeight: "800",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              +91 9508213681
            </a>
          </div>

          {/* WhatsApp Card */}
          <div
            style={{
              background: "white",
              padding: "40px 20px",
              borderRadius: "20px",
              textAlign: "center",
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              position: "relative",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderTop: "5px solid #25D366",
            }}
          >
            <div
              style={{
                width: "70px",
                height: "70px",
                background: "#f0fdf4",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
                marginBottom: "20px",
              }}
            >
              💬
            </div>
            <h3
              style={{
                fontSize: "20px",
                color: "#0f172a",
                fontWeight: "800",
                marginBottom: "10px",
              }}
            >
              WhatsApp Chat
            </h3>
            <p
              style={{
                color: "#64748b",
                fontSize: "14px",
                marginBottom: "25px",
                lineHeight: "1.6",
                flex: 1,
              }}
            >
              Get instant replies, quick assistance, and document verification
              support.
            </p>
            <a
              href="https://wa.me/919508213681"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#25D366",
                color: "white",
                padding: "10px 20px",
                borderRadius: "30px",
                fontWeight: "700",
                textDecoration: "none",
                fontSize: "14px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 10px 20px rgba(37, 211, 102, 0.3)",
              }}
            >
              <span style={{ fontSize: "18px" }}>WA</span> Chat with Us
            </a>
          </div>

          {/* Address Card */}
          <div
            style={{
              background: "white",
              padding: "40px 20px",
              borderRadius: "20px",
              textAlign: "center",
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              position: "relative",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "70px",
                height: "70px",
                background: "#fef2f2",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
                marginBottom: "20px",
              }}
            >
              📍
            </div>
            <h3
              style={{
                fontSize: "20px",
                color: "#0f172a",
                fontWeight: "800",
                marginBottom: "10px",
              }}
            >
              Head Office (India)
            </h3>
            <p
              style={{
                color: "#64748b",
                fontSize: "14px",
                lineHeight: "1.6",
                margin: 0,
                flex: 1,
              }}
            >
              <strong style={{ color: "#334155" }}>SYN Global Edutech</strong>
              <br />
              MLIG 1/27 Sector-H, Jankipuram
              <br />
              Lucknow (UP) - 226021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- CAMPUS TO CORPORATE PAGE COMPONENT ---
// --- CAMPUS TO CORPORATE PAGE COMPONENT ---
function CampusToCorporatePage({ setPage }) {
  return (
    <div
      className="fade-in"
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        paddingBottom: "80px",
      }}
    >
      {/* Hero Section with Background Image */}
      <div
        style={{
          background:
            "linear-gradient(rgba(15, 23, 42, 0.85), rgba(30, 58, 138, 0.85)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop') center/cover",
          padding: "clamp(60px, 10vw, 120px) 5%",
          color: "white",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            color: "#fbbf24",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontSize: "14px",
            fontWeight: "800",
            marginBottom: "15px",
          }}
        >
          Campus to Corporate Connect
        </h3>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: "900",
            marginBottom: "20px",
            letterSpacing: "-1px",
            lineHeight: "1.2",
          }}
        >
          From Campus to Corporate — <br />
          <span style={{ color: "#fbbf24" }}>Your Career Starts Here.</span>
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 3vw, 20px)",
            color: "#e2e8f0",
            maxWidth: "800px",
            margin: "0 auto 30px auto",
            lineHeight: "1.6",
          }}
        >
          Transforming Students into Industry-Ready Professionals.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
            fontSize: "14px",
            fontWeight: "700",
            letterSpacing: "1px",
            color: "#93c5fd",
          }}
        >
          <span>LEARN</span> • <span>PRACTICE</span> • <span>INTERN</span> •{" "}
          <span>PERFORM</span> • <span>GROW</span>
        </div>
      </div>

      {/* Important Alert Banner */}
      <div
        style={{
          background: "#fffbeb",
          borderBottom: "1px solid #fcd34d",
          padding: "15px 5%",
          textAlign: "center",
          color: "#b45309",
          fontWeight: "700",
          fontSize: "15px",
        }}
      >
        🚨 IMPORTANT: This program is exclusively accessible through Internship
        enrollment. You must apply for the Internship to participate.
      </div>

      {/* Main Content Sections */}
      <div
        style={{
          padding: "clamp(40px, 8vw, 80px) 5%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Core Intro */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
            maxWidth: "900px",
            margin: "0 auto 60px auto",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 32px)",
              color: "#0f172a",
              fontWeight: "800",
              marginBottom: "20px",
            }}
          >
            Bridging the Gap to Your Future
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 3vw, 17px)",
              color: "#475569",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            We are committed to creating a seamless pathway from campus to
            corporate for aspiring professionals. We offer structured placement
            through internship opportunities across diverse domains. These
            placements provide practical exposure, industry-relevant skills, and
            real-world experience.
          </p>
        </div>

        {/* Who Can Join & Why Choose Us (2 Columns) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 450px), 1fr))",
            gap: "40px",
            marginBottom: "80px",
          }}
        >
          {/* Left Column: Who Can Join */}
          <div
            style={{
              background: "white",
              padding: "40px",
              borderRadius: "20px",
              boxShadow: "0 15px 30px rgba(0,0,0,0.05)",
              borderTop: "5px solid #2563eb",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                color: "#0f172a",
                fontWeight: "800",
                marginBottom: "25px",
              }}
            >
              Who Can Join?
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px",
              }}
            >
              {[
                { icon: "🛠️", title: "ITI Students" },
                { icon: "📐", title: "Diploma Engineers" },
                { icon: "🎓", title: "B.Tech / B.E. Grads" },
                { icon: "📊", title: "MBA Students" },
                { icon: "🌱", title: "Freshers & Final Year" },
                { icon: "💼", title: "Working Professionals" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "#f8fafc",
                    padding: "12px",
                    borderRadius: "10px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <span style={{ fontSize: "20px" }}>{item.icon}</span>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      color: "#334155",
                      lineHeight: "1.2",
                    }}
                  >
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Why Choose Us */}
          <div
            style={{
              background: "white",
              padding: "40px",
              borderRadius: "20px",
              boxShadow: "0 15px 30px rgba(0,0,0,0.05)",
              borderTop: "5px solid #16a34a",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                color: "#0f172a",
                fontWeight: "800",
                marginBottom: "25px",
              }}
            >
              Why Choose SYN Global?
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              {[
                "Industry-Oriented Curriculum",
                "Live Case Studies & Real Challenges",
                "Training by Industry Experts",
                "Internship-Based Learning",
                "Soft Skills & Corporate Communication",
                "100% Placement Assistance*",
              ].map((text, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    fontSize: "15px",
                    color: "#475569",
                    fontWeight: "600",
                  }}
                >
                  <span style={{ color: "#16a34a", fontSize: "18px" }}>✔</span>{" "}
                  {text}
                </li>
              ))}
            </ul>
            <p
              style={{
                fontSize: "12px",
                color: "#94a3b8",
                marginTop: "20px",
                fontStyle: "italic",
              }}
            >
              *Placement assistance provides career guidance, interview
              opportunities & employer connections. Final selection subject to
              employer requirements.
            </p>
          </div>
        </div>

        {/* 5-Step Learning Journey */}
        <div style={{ marginBottom: "80px" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 32px)",
              color: "#0f172a",
              fontWeight: "800",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Our 5-Step Learning Journey
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {[
              { step: "01", title: "Foundation", sub: "Training" },
              { step: "02", title: "Practical", sub: "Learning" },
              { step: "03", title: "Internship", sub: "Experience" },
              { step: "04", title: "Corporate", sub: "Readiness" },
              { step: "05", title: "Placement", sub: "Assistance" },
            ].map((item, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <div
                  style={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "16px",
                    textAlign: "center",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                    borderBottom: `4px solid ${
                      i === 4 ? "#fbbf24" : "#2563eb"
                    }`,
                    minWidth: "140px",
                  }}
                >
                  <div
                    style={{
                      color: "#cbd5e1",
                      fontSize: "32px",
                      fontWeight: "900",
                      marginBottom: "10px",
                      lineHeight: "1",
                    }}
                  >
                    {item.step}
                  </div>
                  <h4
                    style={{
                      margin: 0,
                      color: "#0f172a",
                      fontSize: "16px",
                      fontWeight: "800",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      color: "#64748b",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    {item.sub}
                  </p>
                </div>
                {i !== 4 && (
                  <div
                    className="hide-on-mobile"
                    style={{
                      color: "#cbd5e1",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Our Promise & Outcomes (3 Cards) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "30px",
            marginBottom: "80px",
          }}
        >
          <div
            style={{
              background: "#1e293b",
              color: "white",
              padding: "40px 30px",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "20px" }}>📖</div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "800",
                marginBottom: "15px",
              }}
            >
              No Real Case Study, <br />
              No Course
            </h3>
            <p
              style={{ color: "#cbd5e1", fontSize: "15px", lineHeight: "1.6" }}
            >
              Every module is built around actual industry scenarios. You learn
              by doing, not just listening.
            </p>
          </div>
          <div
            style={{
              background: "#1e293b",
              color: "white",
              padding: "40px 30px",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "20px" }}>👨‍🏫</div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "800",
                marginBottom: "15px",
              }}
            >
              Expert-Led <br />
              Mentoring
            </h3>
            <p
              style={{ color: "#cbd5e1", fontSize: "15px", lineHeight: "1.6" }}
            >
              Industry veterans with 10–25 years of experience guide you through
              practical learning.
            </p>
          </div>
          <div
            style={{
              background: "#1e293b",
              color: "white",
              padding: "40px 30px",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "20px" }}>🌍</div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "800",
                marginBottom: "15px",
              }}
            >
              Pan India & <br />
              Global Reach
            </h3>
            <p
              style={{ color: "#cbd5e1", fontSize: "15px", lineHeight: "1.6" }}
            >
              Career opportunities across India and selected international
              destinations for top performers.
            </p>
          </div>
        </div>

        {/* Key Domains Tags */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h3
            style={{
              fontSize: "14px",
              color: "#64748b",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontWeight: "800",
              marginBottom: "20px",
            }}
          >
            Key Domains We Cover
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {[
              "QMS",
              "Lean",
              "Six Sigma",
              "ESG",
              "Business Excellence",
              "Production & Operations",
              "Supply Chain",
              "HR",
              "EHS",
            ].map((domain, i) => (
              <span
                key={i}
                style={{
                  background: "white",
                  border: "1px solid #cbd5e1",
                  padding: "8px 16px",
                  borderRadius: "30px",
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#334155",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.02)",
                }}
              >
                {domain}
              </span>
            ))}
          </div>
        </div>

        {/* How to Apply Section */}
        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "clamp(30px, 5vw, 60px)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 32px)",
              color: "#0f172a",
              fontWeight: "800",
              marginBottom: "40px",
            }}
          >
            How to Apply
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            {[
              {
                num: "1",
                title: "Visit Website",
                desc: "Go to the Internship Application page.",
              },
              {
                num: "2",
                title: "Fill Application",
                desc: "Submit your details & area of interest.",
              },
              {
                num: "3",
                title: "Get Shortlisted",
                desc: "Our team reviews & contacts you.",
              },
              {
                num: "4",
                title: "Begin Program",
                desc: "Start your Campus to Corporate journey.",
              },
            ].map((step, i) => (
              <div key={i} style={{ padding: "20px", position: "relative" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "#eff6ff",
                    color: "#2563eb",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    fontWeight: "900",
                    margin: "0 auto 15px auto",
                  }}
                >
                  {step.num}
                </div>
                <h4
                  style={{
                    color: "#0f172a",
                    fontSize: "16px",
                    fontWeight: "800",
                    margin: "0 0 10px 0",
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "14px",
                    margin: 0,
                    lineHeight: "1.5",
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "18px",
              color: "#0f172a",
              fontWeight: "800",
              marginBottom: "25px",
            }}
          >
            Ready to Launch Your Career?
          </p>

          {/* Note: In your App.js routing, make sure this button properly sets the page state if you want it to jump directly there. Otherwise, standard a-href works. */}
          <button
            onClick={() => {
              window.scrollTo(
                0,
                0
              ); /* Optional: add setPage('apply_internship') here if you pass the setPage prop to this component */
            }}
            style={{
              background: "#2563eb",
              color: "white",
              padding: "15px 30px",
              borderRadius: "30px",
              fontSize: "16px",
              fontWeight: "800",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 10px 20px rgba(37, 99, 235, 0.3)",
              transition: "transform 0.2s",
            }}
          >
            Apply for Internship Today
          </button>
        </div>
      </div>
    </div>
  );
}
// --- MAIN APP COMPONENT ---
export default function App() {
  const [page, setPage] = useState("home");
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Dropdown states
  const [showAbout, setShowAbout] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [showInternship, setShowInternship] = useState(false);

  const handleNavClick = (targetPage) => {
    // Make the cursor show a 'loading' icon instantly
    document.body.style.cursor = "wait";
    setPage(targetPage);
    setIsNavOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Reset cursor after a short delay
    setTimeout(() => {
      document.body.style.cursor = "default";
    }, 400);
  };

  const heroSlides = [
    {
      img: "a929d680092ba7dce4ae07f0cdf4eb23491dec8f3effdc14f0e0aa677af516ec.png",
      alt: "Shri Narendra Modi Quote",
    },
    {
      img: "a6465e4a840013ba498d236937b88fab46c27c189ec41e0142d2e014e4a7adf5.png",
      alt: "Shri Ashwini Vaishnaw Quote",
    },
    {
      img: "file_00000000ddd071fa8275e883dc47ec96.png",
      alt: "Taiichi Ohno Quote",
    },
    {
      img: "file_000000006dac71faaff8f3c9a230e66d.png",
      alt: "Bill Smith Quote",
    },
    {
      img: "file_000000006ee871fab821cb11eb093f12.png",
      alt: "Seiichi Nakajima Quote",
    },
  ];

  const courseSlides = [
    {
      img: "file_00000000e968720b95f03d028fe7e519.png",
      alt: "Lean Six Sigma Black Belt",
    },
    {
      img: "file_000000003060720b938ce66def6b814e.png",
      alt: "8D Six Sigma DOE Champion",
    },
    { img: "file_00000000cfec720b9c48d3049824343e.png", alt: "POSH Trainer" },
    {
      img: "file_000000009c04720bb03d1284a370c8c4.png",
      alt: "MSIL MARU-A Expert",
    },
    { img: "esgyoo.png", alt: "ESG Professional" },

    {
      img: "file_00000000e8d0720b896597dab61cc2cc.png",
      alt: "Certified TQM Champion",
    },
    {
      img: "file_000000001b68720bb3552f51cff2565a.png",
      alt: "Certified IATF 16949:2016 Internal Auditor",
    },
  ];

  const testimonials = [
    {
      text: "The course structure was comprehensive and covered advanced Lean Six Sigma concepts thoroughly. The blend of theory and practical case studies made learning engaging.",
      name: "Ananya Mehta",
      role: "40+ Verified Reviewer",
    },
    {
      text: "The trainers were highly knowledgeable and approachable, offering valuable industry insights. The project work helped me gain confidence in applying DMAIC methodology.",
      name: "Karan Mehta",
      role: "Process Manager",
    },
    {
      text: "The training quality was exceptional, with clear explanations. The mentors provided outstanding guidance. This certification has significantly boosted my career growth!",
      name: "Priya Sharma",
      role: "Operations Lead",
    },
  ];

  const alumni = [
    "TOYOTA",
    "BOSCH",
    "TVS",
    "BAJAJ",
    "TATA MOTORS",
    "WAAREE",
    "LGB",
    "SANDHAR",
    "LUMAX",
  ];

  const [currentHero, setCurrentHero] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(heroInterval);
  }, [heroSlides.length]);

  useEffect(() => {
    const testInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(testInterval);
  }, [testimonials.length]);

  const dropItemStyle = {
    padding: "16px 24px",
    cursor: "pointer",
    color: "#334155",
    fontWeight: "500",
    fontSize: "14px",
    borderBottom: "1px solid #f1f5f9",
    background: "white",
    transition: "background 0.2s",
  };

  const navItemStyle = {
    cursor: "pointer",
    fontSize: "15px",
    color: "#f8fafc",
    fontWeight: "500",
    margin: 0,
    letterSpacing: "0.5px",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        background: "#f8fafc",
        overflowX: "hidden",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />

      {/* RESPONSIVE HEADER - Final Polished Version */}
      <header
        style={{
          backgroundColor:
            "#ffffff" /* Fills the left and right edges seamlessly */,
          width: "100%",
          height:
            "clamp(70px, 10vw, 110px)" /* Keeps the header thin, sleek, and professional */,
          margin: 0,
          padding: 0,
          display: "flex",
          justifyContent: "center",
          alignItems:
            "flex-end" /* Pushes the image all the way down to touch the nav bar */,
        }}
      >
        <img
          src="file_00000000739c71f88dbca3b468674ec3.png"
          alt="SYN Global Edutech Banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit:
              "contain" /* Keeps exact original proportions with absolutely zero stretching */,
            objectPosition:
              "center bottom" /* Anchors the colored line perfectly to the dark blue menu */,
            display: "block",
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
      </header>
      {/* Decorative Bottom Bar */}
      <div style={{ height: "4px", width: "100%", display: "flex" }}>
        <div style={{ flex: 7, background: "#1e3a8a" }}></div>
        <div style={{ flex: 3, background: "#ea580c" }}></div>
      </div>

      {/* RESPONSIVE NAVBAR - Full Width Mobile Menu Bar */}
      <nav
        style={{
          background: "#1e293b",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          minHeight: "55px",
          boxShadow: "0 10px 30px rgba(15, 23, 42, 0.1)",
        }}
      >
        {/* Full-width Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? "✕ Close Menu" : "☷ Menu"}
        </button>

        {/* Links Container */}
        <div className={`nav-container ${isNavOpen ? "open" : ""}`}>
          <p
            onClick={() => handleNavClick("home")}
            style={{
              ...navItemStyle,
              color: page === "home" ? "#fbbf24" : "white",
            }}
          >
            Home
          </p>

          <div
            className="dropdown-wrapper"
            style={{
              position: "relative",
              height: "55px",
              display: "flex",
              alignItems: "center",
            }}
            onMouseEnter={() => setShowAbout(true)}
            onMouseLeave={() => setShowAbout(false)}
            onClick={() => setShowAbout(!showAbout)}
          >
            <p style={navItemStyle}>About Us ▾</p>
            {showAbout && (
              <div
                className="dropdown-content"
                style={{
                  position: "absolute",
                  top: "55px",
                  left: 0,
                  background: "white",
                  borderRadius: "0 0 8px 8px",
                  width: "240px",
                  boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                  border: "1px solid #e2e8f0",
                  zIndex: 1001,
                }}
              >
                <div
                  style={dropItemStyle}
                  onClick={() => handleNavClick("vision")}
                >
                  Vision and Mission
                </div>
                <div
                  style={dropItemStyle}
                  onClick={() => handleNavClick("sgaac")}
                >
                  SGAAC Board
                </div>
                <div
                  style={dropItemStyle}
                  onClick={() => handleNavClick("accreditation")}
                >
                  Accreditation
                </div>
              </div>
            )}
          </div>

          <div
            className="dropdown-wrapper"
            style={{
              position: "relative",
              height: "55px",
              display: "flex",
              alignItems: "center",
            }}
            onMouseEnter={() => setShowCourses(true)}
            onMouseLeave={() => setShowCourses(false)}
            onClick={() => setShowCourses(!showCourses)}
          >
            <p
              style={{
                ...navItemStyle,
                color: page === "courses" ? "#fbbf24" : "white",
              }}
            >
              Courses / Certifications ▾
            </p>
            {showCourses && (
              <div
                className="dropdown-content"
                style={{
                  position: "absolute",
                  top: "55px",
                  left: 0,
                  background: "white",
                  borderRadius: "0 0 8px 8px",
                  width: "280px",
                  boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                  border: "1px solid #e2e8f0",
                  zIndex: 1001,
                }}
              >
                <div
                  style={dropItemStyle}
                  onClick={() => {
                    setPage("courses");
                    setTimeout(
                      () =>
                        document
                          .getElementById("cat-0")
                          ?.scrollIntoView({ behavior: "smooth" }),
                      100
                    );
                    setIsNavOpen(false);
                  }}
                >
                  Management Systems
                </div>
                <div
                  style={dropItemStyle}
                  onClick={() => {
                    setPage("courses");
                    setTimeout(
                      () =>
                        document
                          .getElementById("cat-1")
                          ?.scrollIntoView({ behavior: "smooth" }),
                      100
                    );
                    setIsNavOpen(false);
                  }}
                >
                  Automotive & VSA
                </div>
                <div
                  style={dropItemStyle}
                  onClick={() => {
                    setPage("courses");
                    setTimeout(
                      () =>
                        document
                          .getElementById("cat-2")
                          ?.scrollIntoView({ behavior: "smooth" }),
                      100
                    );
                    setIsNavOpen(false);
                  }}
                >
                  Lean & Six Sigma
                </div>
                <div
                  style={dropItemStyle}
                  onClick={() => {
                    setPage("courses");
                    setTimeout(
                      () =>
                        document
                          .getElementById("cat-3")
                          ?.scrollIntoView({ behavior: "smooth" }),
                      100
                    );
                    setIsNavOpen(false);
                  }}
                >
                  Problem Solving Tools
                </div>
                <div
                  style={dropItemStyle}
                  onClick={() => {
                    setPage("courses");
                    setTimeout(
                      () =>
                        document
                          .getElementById("cat-4")
                          ?.scrollIntoView({ behavior: "smooth" }),
                      100
                    );
                    setIsNavOpen(false);
                  }}
                >
                  ESG & Sustainability
                </div>
                <div
                  style={dropItemStyle}
                  onClick={() => {
                    setPage("courses");
                    setTimeout(
                      () =>
                        document
                          .getElementById("cat-5")
                          ?.scrollIntoView({ behavior: "smooth" }),
                      100
                    );
                    setIsNavOpen(false);
                  }}
                >
                  HR & Workplace
                </div>
                <div
                  style={dropItemStyle}
                  onClick={() => {
                    setPage("courses");
                    setTimeout(
                      () =>
                        document
                          .getElementById("cat-7")
                          ?.scrollIntoView({ behavior: "smooth" }),
                      100
                    );
                    setIsNavOpen(false);
                  }}
                >
                  Technical Expert
                </div>
              </div>
            )}
          </div>

          <p
            onClick={() => handleNavClick("csr_policy")}
            style={{
              ...navItemStyle,
              color: page === "csr_policy" ? "#fbbf24" : "white",
            }}
          >
            CSR Policy
          </p>

          <div
            className="dropdown-wrapper"
            style={{
              position: "relative",
              height: "55px",
              display: "flex",
              alignItems: "center",
            }}
            onMouseEnter={() => setShowInternship(true)}
            onMouseLeave={() => setShowInternship(false)}
            onClick={() => setShowInternship(!showInternship)}
          >
            <p style={navItemStyle}>Career Launchpad▾</p>
            {showInternship && (
              <div
                className="dropdown-content"
                style={{
                  position: "absolute",
                  top: "55px",
                  left: 0,
                  background: "white",
                  borderRadius: "0 0 8px 8px",
                  width: "240px",
                  boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                  border: "1px solid #e2e8f0",
                  zIndex: 1001,
                }}
              >
                <div
                  style={dropItemStyle}
                  onClick={() => handleNavClick("apply_internship")}
                >
                  Apply for Internship
                </div>
                <div
                  style={dropItemStyle}
                  onClick={() => handleNavClick("campus_corporate")}
                >
                  Campus to Corporate
                </div>
              </div>
            )}
          </div>

          <p
            onClick={() => handleNavClick("verify")}
            style={{
              ...navItemStyle,
              color: page === "verify" ? "#fbbf24" : "white",
            }}
          >
            Verify Certificate
          </p>
          <p
            onClick={() => handleNavClick("add_publication")}
            style={{
              ...navItemStyle,
              color: page === "add_publication" ? "#fbbf24" : "white",
            }}
          >
            Publications
          </p>
          <p onClick={() => handleNavClick("contact")} style={navItemStyle}>
            Contact
          </p>
        </div>
      </nav>

      {/* --- PAGE RENDERING --- */}
      {page === "home" && (
        <div className="fade-in pulse-animation">
          {/* 1. HERO SECTION */}
          <div
            style={{
              position: "relative",
              minHeight: "85vh",
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.7) 100%)",
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 2,
                width: "100%",
                padding: "clamp(40px, 8vw, 80px) 5%",
                display: "flex",
                flexWrap: "wrap",
                gap: "40px",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  flex: 1,
                  minWidth: "min(100%, 320px)",
                  maxWidth: "650px",
                }}
              >
                <h1
                  style={{
                    fontSize: "clamp(32px, 6vw, 52px)",
                    lineHeight: "1.2",
                    color: "white",
                    fontWeight: "800",
                    letterSpacing: "-1px",
                    marginBottom: "20px",
                  }}
                >
                  Industry-focused{" "}
                  <span style={{ color: "#fbbf24" }}>
                    certification programs
                  </span>
                </h1>
                <p
                  style={{
                    color: "#cbd5e1",
                    fontSize: "clamp(16px, 3vw, 20px)",
                    lineHeight: "1.7",
                    marginBottom: "40px",
                    fontWeight: "400",
                  }}
                >
                  Designed for operation professionals, engineers, quality
                  leaders, and future business excellence experts.
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
                    gap: "20px",
                    marginTop: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "white",
                      fontSize: "clamp(14px, 3vw, 17px)",
                      fontWeight: "600",
                    }}
                  >
                    <span style={{ color: "#fbbf24", fontSize: "20px" }}>
                      🌍
                    </span>{" "}
                    Global Learning
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "white",
                      fontSize: "clamp(14px, 3vw, 17px)",
                      fontWeight: "600",
                    }}
                  >
                    <span style={{ color: "#fbbf24", fontSize: "20px" }}>
                      👨‍🏫
                    </span>{" "}
                    Industry Experts
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "white",
                      fontSize: "clamp(14px, 3vw, 17px)",
                      fontWeight: "600",
                    }}
                  >
                    <span style={{ color: "#fbbf24", fontSize: "20px" }}>
                      🛡️
                    </span>{" "}
                    Digital Verification
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "white",
                      fontSize: "clamp(14px, 3vw, 17px)",
                      fontWeight: "600",
                    }}
                  >
                    <span style={{ color: "#fbbf24", fontSize: "20px" }}>
                      🏢
                    </span>{" "}
                    Corporate Training
                  </div>
                </div>
              </div>
              <div
                style={{
                  flex: 1,
                  minWidth: "min(100%, 320px)",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    maxWidth: "550px",
                    height: "clamp(200px, 50vw, 350px)",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
                    position: "relative",
                    background: "white",
                  }}
                >
                  {heroSlides.map((slide, index) => (
                    <img
                      key={index}
                      src={slide.img}
                      alt={slide.alt}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        opacity: currentHero === index ? 1 : 0,
                        transition: "opacity 1s ease-in-out",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 2. WELCOME SECTION */}
          <div
            style={{
              padding: "clamp(40px, 8vw, 60px) 5%",
              background: "white",
              display: "flex",
              flexWrap: "wrap",
              gap: "40px",
              alignItems: "center",
            }}
          >
            <div style={{ flex: 1, minWidth: "min(100%, 320px)" }}>
              <h2
                style={{
                  fontSize: "clamp(28px, 5vw, 40px)",
                  color: "#0f172a",
                  fontWeight: "800",
                  marginBottom: "25px",
                  letterSpacing: "-0.5px",
                }}
              >
                Welcome to SYN Global Edutech
              </h2>
              <p
                style={{
                  color: "#475569",
                  fontSize: "clamp(15px, 3vw, 17px)",
                  lineHeight: "1.8",
                  marginBottom: "35px",
                  textAlign: "justify",
                }}
              >
                At SGE, Since 2019, we have been a global online platform
                dedicated to advancing knowledge, skills, and career growth for
                learners across industries and academic backgrounds. Our courses
                cover essential areas such as Lean Manufacturing, Six Sigma,
                Project Management, Business Management, ISO Standards, Human
                Resources, and more, ensuring that learners gain both practical
                knowledge and globally recognized certifications. In addition,
                we provide internship & campus placement opportunities for
                B.Tech, MBA, and Diploma students by Campus to corporate connect
                program, helping them bridge the gap between academic learning
                and industry practice.
              </p>
              <div
                style={{
                  borderLeft: "4px solid #fbbf24",
                  background: "#f8fafc",
                  padding: "15px 20px",
                  borderRadius: "0 12px 12px 0",
                }}
              >
                <p
                  style={{
                    color: "#0f172a",
                    fontSize: "clamp(15px, 3vw, 18px)",
                    fontWeight: "700",
                    fontStyle: "italic",
                    margin: 0,
                    lineHeight: "1.6",
                  }}
                >
                  Empowering Global Learners Since 2019 — Bridging Knowledge,
                  Skills, and Industry for a Smarter Future.
                </p>
              </div>
            </div>
            <div
              style={{
                flex: 1,
                minWidth: "min(100%, 320px)",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src="image_592499.jpg"
                alt="Strive for Excellence"
                style={{
                  width: "100%",
                  maxWidth: "550px",
                  borderRadius: "20px",
                  boxShadow: "0 25px 50px rgba(15, 23, 42, 0.15)",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          {/* 3. STATS SECTION */}
          <div
            style={{
              padding: "clamp(30px, 6vw, 50px) 5%",
              background: "#f8fafc",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{ width: "100%", maxWidth: "1200px", textAlign: "center" }}
            >
              <h2
                style={{
                  fontSize: "clamp(28px, 5vw, 40px)",
                  color: "#0f172a",
                  fontWeight: "800",
                  marginBottom: "15px",
                }}
              >
                Why Join SYN Global Edutech?
              </h2>
              <p
                style={{
                  fontSize: "clamp(15px, 3vw, 18px)",
                  color: "#64748b",
                  marginBottom: "40px",
                }}
              >
                Empowering Your Growth with Proven Results Since 2019
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
                  gap: "20px",
                }}
              >
                {[
                  { number: "25000+", text: "Learners worldwide" },
                  { number: "5000+", text: "Paid members" },
                  { number: "17 Lakh+", text: "Hours of content consumed" },
                  { number: "30+", text: "Countries presence" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    style={{
                      background: "white",
                      padding: "30px 15px",
                      borderRadius: "16px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "clamp(26px, 5vw, 36px)",
                        color: "#2563eb",
                        margin: "0 0 10px 0",
                        fontWeight: "800",
                      }}
                    >
                      {stat.number}
                    </h3>
                    <p
                      style={{
                        color: "#475569",
                        margin: 0,
                        fontSize: "clamp(14px, 3vw, 16px)",
                        fontWeight: "500",
                      }}
                    >
                      {stat.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4. POWER OF SGAAC SECTION */}
          <div
            style={{
              padding: "0 5% clamp(40px, 8vw, 80px) 5%",
              background: "#f8fafc",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ width: "100%", maxWidth: "1200px" }}>
              <div
                style={{
                  background: "#1e293b",
                  padding: "30px 15px",
                  textAlign: "center",
                  color: "white",
                  borderTopLeftRadius: "16px",
                  borderTopRightRadius: "16px",
                }}
              >
                <h2
                  style={{
                    fontSize: "clamp(20px, 4vw, 32px)",
                    fontWeight: "800",
                    margin: 0,
                    lineHeight: "1.4",
                  }}
                >
                  The Power of SYN Global & SGAAC Global Certificate
                </h2>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
                  gap: "1px",
                  background: "#cbd5e1",
                  border: "1px solid #cbd5e1",
                  borderBottomLeftRadius: "16px",
                  borderBottomRightRadius: "16px",
                  overflow: "hidden",
                }}
              >
                {[
                  {
                    icon: "🏅",
                    title: "Globally Recognised",
                    desc: "A powerful credential validating your auditing skills across global markets.",
                  },
                  {
                    icon: "💻",
                    title: "Recorded & Self-paced",
                    desc: "Flexible learning that can fit your schedule.",
                  },
                  {
                    icon: "💬",
                    title: "AI Discord Community",
                    desc: "Instant doubt clearing and peer support.",
                  },
                  {
                    icon: "📝",
                    title: "Unlimited Reattempts",
                    desc: "Attempt exams as many times as you need during your access period.",
                  },
                  {
                    icon: "📱",
                    title: "Web & Mobile App",
                    desc: "Flexibility to use laptop, tablet, mobile app, with offline video access.",
                  },
                  {
                    icon: "📚",
                    title: "Study Materials",
                    desc: "Reinforce your learning and exam readiness.",
                  },
                  {
                    icon: "🚪",
                    title: "New Career Prospects",
                    desc: "Boost your earning potential with industry-respected certificate.",
                  },
                  {
                    icon: "❓",
                    title: "Query Support",
                    desc: "Get your queries resolved within 48 hours from expert mentors.",
                  },
                ].map((feature, i) => (
                  <div
                    key={i}
                    style={{
                      background: "white",
                      padding: "30px 20px",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ fontSize: "35px", marginBottom: "15px" }}>
                      {feature.icon}
                    </div>
                    <h3
                      style={{
                        color: "#0f172a",
                        fontSize: "16px",
                        fontWeight: "800",
                        marginBottom: "10px",
                        lineHeight: "1.4",
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      style={{
                        color: "#64748b",
                        fontSize: "13px",
                        lineHeight: "1.6",
                        margin: 0,
                      }}
                    >
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5. COURSES SLIDER SECTION */}
          <div
            style={{
              padding: "clamp(40px, 8vw, 80px) 5%",
              background: "#0f172a",
              color: "white",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: "30px",
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: "clamp(26px, 5vw, 40px)",
                    fontWeight: "800",
                    margin: "0 0 15px 0",
                  }}
                >
                  Our Top Demanding Certification Programs
                </h2>
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "clamp(14px, 3vw, 18px)",
                    margin: 0,
                  }}
                >
                  Get certified with our skill-based, globally recognized
                  certification programs and accelerate your career success.
                </p>
              </div>
            </div>
            <div
              className="hide-scrollbar"
              style={{
                display: "flex",
                gap: "20px",
                overflowX: "auto",
                paddingBottom: "20px",
                alignItems: "stretch",
              }}
            >
              {courseSlides.map((course, i) => (
                <div
                  key={i}
                  style={{
                    minWidth: "min(85vw, 450px)",
                    background: "white",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={course.img}
                    alt={course.alt}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "280px",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 6. ALUMNI MARQUEE SECTION */}
          <div
            style={{
              background: "white",
              padding: "30px 0",
              borderBottom: "1px solid #e2e8f0",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3
              style={{
                color: "#64748b",
                fontSize: "clamp(12px, 3vw, 15px)",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "20px",
                fontWeight: "600",
              }}
            >
              Our Alumni Work At
            </h3>
            <div
              style={{
                width: "100%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  animation: "scrollMarquee 30s linear infinite",
                  width: "max-content",
                }}
              >
                {[...alumni, ...alumni, ...alumni].map((company, i) => (
                  <span
                    key={i}
                    style={{
                      display: "inline-block",
                      margin: "0 clamp(20px, 4vw, 50px)",
                      fontSize: "clamp(18px, 4vw, 24px)",
                      fontWeight: "800",
                      color: "#94a3b8",
                      letterSpacing: "1px",
                    }}
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 7. SAMPLE CERTIFICATE SECTION */}
          <div
            style={{
              padding: "clamp(40px, 8vw, 80px) 5% 0 5%",
              background: "white",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 40px)",
                color: "#0f172a",
                fontWeight: "800",
                marginBottom: "15px",
              }}
            >
              Sample Certification
            </h2>
            <p
              style={{
                fontSize: "clamp(15px, 3vw, 18px)",
                color: "#64748b",
                marginBottom: "40px",
              }}
            >
              A glimpse of the globally recognized credential you will earn upon
              completion.
            </p>
            <div
              style={{
                maxWidth: "800px",
                margin: "0 auto",
                padding: "10px",
                border: "1px solid #e2e8f0",
                borderRadius: "16px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="sample_certificate.jpg"
                alt="Sample Certificate"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* 8. HOW TO GET STARTED */}
          <div
            style={{
              padding: "clamp(40px, 8vw, 60px) 5%",
              background: "white",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 40px)",
                color: "#0f172a",
                fontWeight: "800",
                marginBottom: "40px",
              }}
            >
              How to get started
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
                gap: "30px",
                position: "relative",
              }}
            >
              {[
                {
                  step: "Step 1",
                  title: "Enroll in your course",
                  desc: "Choose from a range of in-demand fields including IATF, internal auditing, and core tools.",
                },
                {
                  step: "Step 2",
                  title: "Learn at your pace",
                  desc: "Study when you want with flexible, self-paced recorded modules.",
                },
                {
                  step: "Step 3",
                  title: "Take the exam",
                  desc: "Attempt your certification exam anytime, with unlimited retakes.",
                },
                {
                  step: "Step 4",
                  title: "Get certified",
                  desc: "Earn a globally accredited certificate that validates your competence.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    border: "2px solid #e2e8f0",
                    borderRadius: "16px",
                    padding: "30px 15px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-15px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#2563eb",
                      color: "white",
                      padding: "4px 16px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "700",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.step}
                  </div>
                  <h3
                    style={{
                      color: "#0f172a",
                      fontSize: "18px",
                      marginBottom: "10px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "#64748b",
                      fontSize: "14px",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 9. FEEDBACK SLIDER */}
          <div
            style={{
              padding: "clamp(40px, 8vw, 80px) 5%",
              background: "#f8fafc",
              display: "flex",
              flexWrap: "wrap",
              gap: "40px",
              alignItems: "center",
            }}
          >
            <div style={{ flex: 1, minWidth: "min(100%, 300px)" }}>
              <h2
                style={{
                  fontSize: "clamp(28px, 5vw, 40px)",
                  color: "#0f172a",
                  fontWeight: "800",
                  marginBottom: "15px",
                }}
              >
                Some valuable feedback
              </h2>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "10px",
                }}
              >
                <span style={{ color: "#f59e0b", fontSize: "20px" }}>
                  ★★★★★
                </span>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "800",
                    color: "#0f172a",
                  }}
                >
                  4.8/5.0
                </span>
              </div>
              <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>
                Based on 432 verified ratings
              </p>
            </div>

            <div
              style={{
                flex: 2,
                minWidth: "min(100%, 300px)",
                background: "white",
                padding: "clamp(25px, 5vw, 40px)",
                borderRadius: "20px",
                boxShadow: "0 15px 30px rgba(0,0,0,0.05)",
                position: "relative",
              }}
            >
              <div
                style={{
                  color: "#f59e0b",
                  fontSize: "18px",
                  marginBottom: "15px",
                }}
              >
                ★★★★★
              </div>
              <div style={{ position: "relative", minHeight: "120px" }}>
                {testimonials.map((test, index) => (
                  <p
                    key={index}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      fontSize: "clamp(15px, 3vw, 18px)",
                      color: "#334155",
                      lineHeight: "1.8",
                      fontStyle: "italic",
                      margin: 0,
                      opacity: currentTestimonial === index ? 1 : 0,
                      transition: "opacity 0.8s ease-in-out",
                    }}
                  >
                    "{test.text}"
                  </p>
                ))}
              </div>
              <div style={{ marginTop: "20px" }}>
                <h4
                  style={{
                    margin: 0,
                    color: "#0f172a",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  {testimonials[currentTestimonial].name}
                </h4>
                <p
                  style={{
                    margin: "5px 0 0 0",
                    color: "#64748b",
                    fontSize: "13px",
                  }}
                >
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>
          </div>

          {/* 10. FOOTER */}
          <footer
            style={{
              background: "#1e293b",
              color: "white",
              padding: "clamp(40px, 8vw, 60px) 5% 30px 5%",
              textAlign: "center",
            }}
          >
            <div
              style={{
                background: "#f59e0b",
                borderRadius: "16px",
                padding: "clamp(25px, 5vw, 40px)",
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "40px",
              }}
            >
              <h3
                style={{
                  color: "#0f172a",
                  fontSize: "clamp(18px, 4vw, 24px)",
                  margin: 0,
                  fontWeight: "800",
                  textAlign: "left",
                  width: "min(100%, 400px)",
                }}
              >
                Subscribe to our Newsletter for Newest Course Updates
              </h3>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  width: "100%",
                  maxWidth: "400px",
                  flexWrap: "wrap",
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    flex: 1,
                    minWidth: "min(100%, 200px)",
                    padding: "12px 15px",
                    borderRadius: "8px",
                    border: "none",
                    outline: "none",
                    fontSize: "15px",
                  }}
                />
                <button
                  style={{
                    background: "#0f172a",
                    color: "white",
                    border: "none",
                    padding: "12px 25px",
                    width: "min(100%, 150px)",
                    borderRadius: "8px",
                    fontWeight: "700",
                    cursor: "pointer",
                    fontSize: "15px",
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>

            <h2
              style={{
                fontSize: "clamp(20px, 4vw, 24px)",
                fontWeight: "700",
                marginBottom: "10px",
              }}
            >
              SGE - SYN Global Edutech
            </h2>
            <p
              style={{
                color: "#94a3b8",
                marginBottom: "30px",
                fontSize: "14px",
              }}
            >
              A Global edutech platform with Ai-Enabled Excellence.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "clamp(15px, 4vw, 30px)",
                marginBottom: "30px",
                flexWrap: "wrap",
                fontSize: "14px",
              }}
            >
              <span style={{ cursor: "pointer", color: "#cbd5e1" }}>
                Terms Of Use
              </span>
              <span style={{ cursor: "pointer", color: "#cbd5e1" }}>
                Privacy Policy
              </span>
            </div>

            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.1)",
                paddingTop: "20px",
                color: "#64748b",
                fontSize: "13px",
              }}
            >
              Copyright @2026 SGE. All Rights Reserved.
            </div>
          </footer>
        </div>
      )}

      {/* --- CONTENT PAGES --- */}
      {page === "vision" && <VisionMissionPage />}
      {page === "sgaac" && <SgaacPage />}
      {page === "accreditation" && <AccreditationPage />}
      {page === "verify" && <VerificationPage />}
      {page === "courses" && <CoursesPage key="courses-page" />}
      {page === "csr_policy" && <CsrPolicyPage />}
      {page === "add_publication" && <PublicationsPage key="pub-page" />}

      {/* --- UPDATED DEDICATED PAGES --- */}
      {page === "apply_internship" && <InternshipPage key="intern-page" />}
      {page === "contact" && <ContactPage key="contact-page" />}

      {/* --- REMAINING SECTION PAGES --- */}
      {page === "campus_corporate" && (
        <CampusToCorporatePage key="campus-page" />
      )}
    </div>
  );
}
