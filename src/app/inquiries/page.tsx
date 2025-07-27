'use client';

import React, { useState, useEffect } from 'react';
import Wrapper from "@/layout/DefaultWrapper";

interface Inquiry {
  name: string;
  phone: string;
  course: string;
  submittedAt: string;
}

const InquiriesPage = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const response = await fetch('/api/inquiry');
        if (!response.ok) {
          throw new Error('Failed to fetch inquiries.');
        }
        const data = await response.json();
        setInquiries(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred.');
      } finally {
        setLoading(false);
      }
    };

    fetchInquiries();
  }, []);

  return (
    <Wrapper>
      <main style={{ padding: '40px' }}>
        <div style={styles.container}>
          <h1 style={styles.header}>Submitted Inquiries</h1>
          {loading && <p>Loading inquiries...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {!loading && !error && (
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Name</th>
                  <th style={styles.th}>Phone Number</th>
                  <th style={styles.th}>Course</th>
                  <th style={styles.th}>Date Submitted</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.length > 0 ? (
                  inquiries.map((inquiry, index) => (
                    <tr key={index} style={styles.tr}>
                      <td style={styles.td}>{inquiry.name}</td>
                      <td style={styles.td}>{inquiry.phone}</td>
                      <td style={styles.td}>{inquiry.course}</td>
                      <td style={styles.td}>{new Date(inquiry.submittedAt).toLocaleString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} style={{ textAlign: 'center', padding: '20px' }}>No inquiries found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </Wrapper>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '30px',
    color: '#333',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  th: {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '15px',
    textAlign: 'left' as const,
  },
  tr: {
    borderBottom: '1px solid #ddd',
  },
  td: {
    padding: '15px',
    color: '#555',
  },
};

export default InquiriesPage;
