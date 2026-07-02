'use client';
import { motion } from 'framer-motion';
import { Settings, Database } from 'lucide-react';

const servicenowTech = [
  { category: 'Modules & Portals', items: ['ITSM', 'CSM', 'CMDB', 'Service Catalog', 'Employee Center', 'Service Portal', 'Now Mobile', 'SLAs', 'Surveys'] },
  { category: 'Scripting & Development', items: ['JavaScript', 'Client Scripts', 'Business Rules', 'Script Includes', 'GlideRecord', 'GlideAjax', 'UI Policies', 'UI Actions', 'ACLs', 'Scoped Apps'] },
  { category: 'Automation & Workflow', items: ['Flow Designer', 'Subflows', 'Custom Actions', 'Decision Tables', 'Scheduled Jobs', 'Inbound Email Actions'] },
  { category: 'Reporting & Workspaces', items: ['Dashboards', 'Performance Analytics', 'Service Ops Workspace', 'CSM/FSM Workspace'] },
  { category: 'Integrations & Data', items: ['Scripted REST APIs', 'eBonding', 'LDAP', 'Twilio', 'JSON', 'Transform Maps', 'Import Sets'] },
  { category: 'AI & Automation', items: ['Virtual Agent', 'Agentic AI', 'Now Assist'] }
];

const otherTech = ['Java', 'Spring Boot', 'SQL', 'MySQL', 'Apache Kafka', 'Talend ETL', 'Jenkins', 'Jira', 'Bitbucket', 'Git', 'HTML', 'CSS', 'XML', 'Agile'];

export default function TechnicalExpertise() {
  return (
    <section id="expertise" className="py-24 sm:py-32 relative bg-ink overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16 flex flex-col items-center text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-accent font-medium mb-4">Skills</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Technical Expertise
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-12">
          <h2 className="text-xl font-bold tracking-[0.2em] uppercase flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
            <span className="text-blue-500"><Settings size={20} className="inline" /></span> SERVICENOW PLATFORM
          </h2>
        </motion.div>

        <div className="space-y-10 mb-20">
          {servicenowTech.map((section, idx) => (
            <motion.div key={section.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
              <h3 className="text-sm font-semibold mb-4" style={{ color: 'var(--text-muted)' }}>{section.category}</h3>
              <div className="flex flex-wrap gap-3">
                {section.items.map(item => (
                  <span key={item} className="px-4 py-2 rounded-full text-sm font-medium glass-card transition-all cursor-default"
                        style={{ color: 'var(--text-primary)', borderColor: 'var(--border)' }}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-10 pt-16 border-t" style={{ borderColor: 'var(--divider)' }}>
          <h2 className="text-xl font-bold tracking-[0.2em] uppercase flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
            <span className="text-cyan-500"><Database size={20} className="inline" /></span> OTHER TECHNOLOGIES & TOOLS
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="flex flex-wrap gap-3">
            {otherTech.map(item => (
              <span key={item} className="px-4 py-2 rounded-full text-sm font-medium glass-card transition-all cursor-default"
                    style={{ color: 'var(--text-primary)', borderColor: 'var(--border)' }}>
                {item}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
