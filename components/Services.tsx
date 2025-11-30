import React from 'react';
import { Server, Network, Lock, FileCheck } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'mrr',
    title: 'White-Label Fortinet Managed Service',
    description: 'Continuous rulebase optimization, firmware upgrades, policy management, and troubleshooting. Fully white-labeled under your brand.',
    icon: Server
  },
  {
    id: 'sase',
    title: 'SASE Architecture Consulting',
    description: 'Design and implementation of Secure Access Service Edge frameworks tailored for enterprise clients moving to the cloud.',
    icon: Network
  },
  {
    id: 'ztna',
    title: 'ZTNA Design & Rollout',
    description: 'Moving beyond VPN. We design Zero Trust Network Access strategies that reduce attack surface and improve user experience.',
    icon: Lock
  },
  {
    id: 'nis2',
    title: 'NIS 2 Compliance Support',
    description: 'Technical auditing and gap analysis to ensure your infrastructure (and your clients\') meets strict new EU cybersecurity directives.',
    icon: FileCheck
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Core Competencies</h2>
          <p className="mt-4 text-slate-400">Focused expertise where you need it most.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="flex gap-6 p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/30 transition-all hover:bg-slate-800">
              <div className="flex-shrink-0">
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-700">
                  <service.icon className="h-8 w-8 text-cyan-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};