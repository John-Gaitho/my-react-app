import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import { toPng } from 'html-to-image';
import { Briefcase, GraduationCap, Award, Download } from 'lucide-react';
import { formatDate } from '../utils/dateUtils';

export default function ResumePreview({ resume }) {
  const resumeRef = useRef(null);

  const exportToPDF = async () => {
    if (!resumeRef.current) return;

    try {
      // Convert resume section to an image
      const image = await toPng(resumeRef.current, {
        quality: 1,
        pixelRatio: 2,
      });

      // Create PDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: 'a4',
      });

      // Get image dimensions
      const imgProps = pdf.getImageProperties(image);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      // Add image to PDF
      pdf.addImage(image, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${resume.personalInfo.fullName || 'resume'}.pdf`);
    } catch (error) {
      console.error('PDF Export Error:', error);
      alert('Failed to export PDF. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg animate-fade-in">
      {/* PDF Export Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={exportToPDF}
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          <Download size={20} /> Import PDF
        </button>
      </div>

      {/* Resume Content */}
      <div ref={resumeRef} className="p-6 bg-white rounded-lg shadow">
        <header className="text-center mb-8 border-b pb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{resume.personalInfo.fullName}</h1>
          <div className="text-gray-600 space-x-4">
            <span>{resume.personalInfo.email}</span>
            <span>•</span>
            <span>{resume.personalInfo.phone}</span>
            <span>•</span>
            <span>{resume.personalInfo.location}</span>
          </div>
        </header>

        {resume.personalInfo.summary && (
          <section className="mb-8 animate-slide-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Professional Summary</h2>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">{resume.personalInfo.summary}</p>
          </section>
        )}

        {resume.experience.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-blue-500" />
              Experience
            </h2>
            <div className="space-y-6">
              {resume.experience.map((exp, index) => (
                <div key={index} className="animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-start border-l-4 border-blue-500 pl-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
                      <div className="text-gray-600">{exp.company} • {exp.location}</div>
                    </div>
                    <div className="text-gray-600 font-medium">
                      {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                    </div>
                  </div>
                  <p className="mt-2 text-gray-700 whitespace-pre-line pl-4">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {resume.education.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-green-500" />
              Education
            </h2>
            <div className="space-y-6">
              {resume.education.map((edu, index) => (
                <div key={index} className="animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-start border-l-4 border-green-500 pl-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{edu.school}</h3>
                      <div className="text-gray-600">{edu.degree} in {edu.fieldOfStudy}</div>
                    </div>
                    <div className="text-gray-600 font-medium">
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </div>
                  </div>
                  {edu.description && (
                    <p className="mt-2 text-gray-700 whitespace-pre-line pl-4">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {resume.skills.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Award className="h-6 w-6 text-yellow-500" />
              Skills
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {resume.skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-gray-800 font-medium">{skill.name}</span>
                  <span className="text-gray-600 bg-white px-3 py-1 rounded-full text-sm">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
