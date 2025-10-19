
'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import api from '@/app/utils/api';

interface Submission {
  id: string;
  data: string | Record<string, string | number>;
  files: string[];
  createdAt: string;
}

interface DataWithResponses {
  responses?: string | Record<string, string | number>;
}

export default function SubmissionsPage() {
  const params = useParams();
  const formId = params.id as string;
  
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [formTitle, setFormTitle] = useState('');
  const [expandedCells, setExpandedCells] = useState<Record<string, boolean>>({});

  const fetchSubmissions = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/submission/${formId}`);
      
      const processedSubmissions = response.data.submissions.map((submission: Submission) => {
        let parsedData = submission.data;
        
        if (parsedData && typeof parsedData === 'object' && 'responses' in parsedData) {
          const responsesValue = (parsedData as DataWithResponses).responses;
          if (typeof responsesValue === 'string') {
            try {
              parsedData = JSON.parse(responsesValue);
            } catch {
              parsedData = responsesValue;
            }
          } else {
            parsedData = responsesValue ?? {};
          }
        }
        else if (typeof parsedData === 'string') {
          try {
            parsedData = JSON.parse(parsedData);
          } catch {
            parsedData = parsedData;
          }
        }
        
        return {
          ...submission,
          data: parsedData,
        };
      });
      
      setSubmissions(processedSubmissions);
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      setError(error.response?.data?.message || 'Failed to fetch submissions');
    } finally {
      setIsLoading(false);
    }
  }, [formId]);

  const fetchFormTitle = useCallback(async () => {
    try {
      const response = await api.get(`/form/${formId}`);
      setFormTitle(response.data.form.title);
    } catch {
      // Silently fail, form title is not critical
    }
  }, [formId]);

  useEffect(() => {
    fetchSubmissions();
    fetchFormTitle();
  }, [fetchSubmissions, fetchFormTitle]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const toggleCellExpansion = (submissionId: string, fieldName: string) => {
    const key = `${submissionId}-${fieldName}`;
    setExpandedCells(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const renderFieldValue = (value: string | number, submissionId: string, fieldName: string) => {
    if (value === null || value === undefined || value === '') {
      return <span className="text-gray-400 italic">Not provided</span>;
    }
    
    const stringValue = String(value);
    const cellKey = `${submissionId}-${fieldName}`;
    const isExpanded = expandedCells[cellKey];
    const shouldTruncate = stringValue.length > 100;
    
    if (shouldTruncate && !isExpanded) {
      return (
        <div className="max-w-xs">
          <span className="text-gray-900 break-words">{stringValue.substring(0, 100)}...</span>
          <button
            onClick={() => toggleCellExpansion(submissionId, fieldName)}
            className="ml-2 text-sm font-medium hover:underline"
            style={{ color: 'rgb(226, 52, 43)' }}
          >
            Show more
          </button>
        </div>
      );
    }
    
    if (shouldTruncate && isExpanded) {
      return (
        <div className="max-w-xs">
          <span className="text-gray-900 break-words whitespace-pre-wrap">{stringValue}</span>
          <button
            onClick={() => toggleCellExpansion(submissionId, fieldName)}
            className="ml-2 text-sm font-medium hover:underline"
            style={{ color: 'rgb(226, 52, 43)' }}
          >
            Show less
          </button>
        </div>
      );
    }
    
    return <span className="text-gray-900 break-words max-w-xs block">{stringValue}</span>;
  };

  const renderFileLinks = (files: string[]) => {
    if (!files || files.length === 0) {
      return <span className="text-gray-400 italic">No files</span>;
    }

    return (
      <div className="space-y-1">
        {files.map((fileUrl, index) => (
          <div key={index} className="flex items-center space-x-2">
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm flex items-center hover:underline"
              style={{ color: 'rgb(226, 52, 43)' }}
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              File {index + 1}
            </a>
          </div>
        ))}
      </div>
    );
  };

  const downloadCSV = () => {
    if (submissions.length === 0) return;

    // Get all field names from first submission
    const firstSubmission = submissions[0];
    const fieldNames = typeof firstSubmission.data === 'object' && firstSubmission.data !== null
      ? Object.keys(firstSubmission.data as Record<string, string | number>)
      : ['Data'];

    // Create CSV headers
    const headers = ['Submitted Date', ...fieldNames, 'Files'];
    
    // Create CSV rows
    const rows = submissions.map(submission => {
      const row = [formatDate(submission.createdAt)];
      
      if (typeof submission.data === 'object' && submission.data !== null) {
        fieldNames.forEach(fieldName => {
          const value = (submission.data as Record<string, string | number>)[fieldName];
          // Escape quotes and wrap in quotes if contains comma or newline
          const stringValue = String(value || '');
          const escapedValue = stringValue.replace(/"/g, '""');
          row.push(stringValue.includes(',') || stringValue.includes('\n') ? `"${escapedValue}"` : escapedValue);
        });
      } else {
        row.push(String(submission.data || ''));
      }
      
      // Add files URLs
      const filesString = submission.files.length > 0 ? submission.files.join('; ') : 'No files';
      row.push(filesString.includes(',') ? `"${filesString}"` : filesString);
      
      return row;
    });

    // Combine headers and rows
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `${formTitle || 'form'}-responses-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto" style={{ borderColor: 'rgb(226, 52, 43)' }}></div>
            <p className="mt-4 text-gray-600">Loading responses...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold" style={{ color: '#1c1b1b' }}>
                {formTitle ? `${formTitle} - Responses` : 'Form Responses'}
              </h1>
              <p className="mt-2 text-gray-600">
                View all responses and uploaded files for this form
              </p>
            </div>
            <div className="flex items-center space-x-3">
              {submissions.length > 0 && (
                <button
                  onClick={downloadCSV}
                  className="inline-flex items-center px-4 py-2 border shadow-sm text-sm font-medium rounded-md text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all"
                  style={{ 
                    backgroundColor: 'rgb(226, 52, 43)',
                    borderColor: 'rgb(226, 52, 43)',
                    '--tw-ring-color': 'rgb(226, 52, 43)'
                  } as React.CSSProperties}
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CSV
                </button>
              )}
              <Link
                href="/dashboard"
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ '--tw-ring-color': 'rgb(226, 52, 43)' } as React.CSSProperties}
              >
                ← Back to Dashboard
              </Link>
            </div>
          </div>
        </div>

        {/* Submissions Table */}
        {submissions.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No responses yet</h3>
            <p className="text-gray-600">Begin gathering responses by sharing your form!</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">
                {submissions.length} Response{submissions.length !== 1 ? 's' : ''}
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Submitted
                    </th>
                    {submissions.length > 0 && typeof submissions[0].data === 'object' && Object.keys(submissions[0].data as Record<string, string | number>).map((fieldName) => (
                      <th key={fieldName} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {fieldName}
                      </th>
                    ))}
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Files
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {submissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(submission.createdAt)}
                      </td>
                      {typeof submission.data === 'object' && submission.data !== null ? (
                        Object.keys(submission.data as Record<string, string | number>).map((fieldName) => (
                          <td key={fieldName} className="px-6 py-4 text-sm">
                            {renderFieldValue(
                              (submission.data as Record<string, string | number>)[fieldName],
                              submission.id,
                              fieldName
                            )}
                          </td>
                        ))
                      ) : (
                        <td className="px-6 py-4 text-sm">
                          {renderFieldValue(submission.data as string, submission.id, 'data')}
                        </td>
                      )}
                      <td className="px-6 py-4 text-sm">
                        {renderFileLinks(submission.files)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}