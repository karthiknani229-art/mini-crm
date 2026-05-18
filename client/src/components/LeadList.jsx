import API from '../services/api';
import React from 'react';
const LeadList = ({ leads, fetchLeads }) => {
  const updateStatus = async (id, status) => {
    await API.put(`/leads/${id}`, { status });
    fetchLeads();
  };

  const deleteLead = async (id) => {
    await API.delete(`/leads/${id}`);
    fetchLeads();
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Source</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.name}</td>
              <td>{lead.phone}</td>
              <td>{lead.source}</td>

              <td>
                <select
                  value={lead.status}
                  onChange={(e) =>
                    updateStatus(lead.id, e.target.value)
                  }
                >
                  <option>Interested</option>
                  <option>Not Interested</option>
                  <option>Converted</option>
                </select>
              </td>

              <td>
                <button onClick={() => deleteLead(lead.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadList;