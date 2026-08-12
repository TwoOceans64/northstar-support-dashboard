# Northstar Support Dashboard

##📜 Project Mission
Build a self‑serve dashboard MVP for Northstar Retail Co. that empowers customers to resolve common support queries — specifically order status and returns/refunds — before opening a ticket. This solution reduces manual ticket handling, improves customer satisfaction, and demonstrates a scalable approach to support deflection within one week.

---

##🚀 Tech Stack
- Frontend: React.js (deployed via Vercel)
- Backend: n8n (workflow automation)
- Database: Firebase or Supabase (TBD)
- Version Control: GitHub (main + dev branches)

---

##📂 Repo Structure
`
northstar-support-dashboard/
│
├── frontend/        # React.js code
├── backend/         # n8n workflows
├── docs/            # Charter, board workshop, go-live note
└── tests/           # QA scripts
`

---

##🛠️ Setup Instructions
1. Clone the repo:
   `bash
   git clone https://github.com/<your-org>/northstar-support-dashboard.git
   `
2. Install dependencies:
   `bash
   cd frontend
   npm install
   `
3. Run locally:
   `bash
   npm run dev
   `
4. Backend (n8n):
   - Install n8n locally or run via Docker.
   - Import workflows from /backend.

---

📋 Collaboration Rules
- Branching:
  - main → stable, production-ready code.
  - dev → active development.
  - feature/* → individual tasks (e.g., feature/order-status-ui).
- Commit Convention:
  `
  <type>: <what changed> - <why it matters>
  `
  Examples:
  - feature: add order status lookup - reduces manual tickets
  - docs: add commit convention - ensures audit compliance

---

👥 Team Roles
- Team Lead: Represents team to sponsor, manages communication.
- Project Manager(s): Track timelines, assign tasks, monitor deliverables.
- Project Lead: Guides technical direction, enforces deadlines.
- Scribes: Document meetings, maintain repo records.
- All Members: Contribute actively, complete tasks, provide feedback.

---

✅ Deliverables
- Demoable self‑serve dashboard MVP
- Mid‑sprint audit snapshot
- 1‑page go‑live readiness note
- Audit trail of commits and board updates

---

📅 Timeline
- Draft Deliverables: August 14th
- Final Project: August 30th
`
