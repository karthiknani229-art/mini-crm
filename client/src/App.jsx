import React,{ useEffect, useState } from 'react';
import API from './services/api';
import LeadForm from './components/LeadForm';
import LeadList from './components/LeadList';
import Dashboard from './components/Dashboard';

const App = () => {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState('');

  const fetchLeads = async () => {
    const response = await API.get('/leads');
    setLeads(response.data);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const filteredLeads = leads.filter((lead) =>
    lead.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Lead Management System (Mini CRM)</h1>

      <Dashboard leads={leads} />

      <input
        className="search"
        type="text"
        placeholder="Search leads..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <LeadForm fetchLeads={fetchLeads} />

      <LeadList leads={filteredLeads} fetchLeads={fetchLeads} />
    </div>
  );
};

export default App;