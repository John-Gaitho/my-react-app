import React, { useState, useEffect } from 'react';
import { FileText, Briefcase, GraduationCap, Award, Save, Trash2, Plus } from 'lucide-react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import { createNewResume, saveResume, getAllResumes, deleteResume } from './utils/storage';

function App() {
  const [resume, setResume] = useState(createNewResume());
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [savedResumes, setSavedResumes] = useState([]);
  const [showSavedResumes, setShowSavedResumes] = useState(false);

  useEffect(() => {
    setSavedResumes(getAllResumes());
  }, []);

  const handleSave = () => {
    saveResume(resume);
    setSavedResumes(getAllResumes());
  };

  const handleDelete = (id) => {
    deleteResume(id);
    setSavedResumes(getAllResumes());
    if (resume.id === id) {
      setResume(createNewResume());
    }
  };

  const handleLoad = (loadedResume) => {
    setResume(loadedResume);
    setShowSavedResumes(false);
  };

  const handleNew = () => {
    setResume(createNewResume());
    setShowSavedResumes(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 hero-pattern">
      <header className="bg-white shadow-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 animate-fade-in">
              <FileText className="h-8 w-8 text-blue-500" />
              <h1 className="text-3xl font-bold text-gray-900">Resume Generator</h1>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowSavedResumes(!showSavedResumes)}
                className="btn-secondary"
              >
                Saved Resumes
              </button>
              <button onClick={handleSave} className="btn-primary">
                <Save size={20} /> Save Resume
              </button>
              <button
                onClick={() => setIsPreviewMode(!isPreviewMode)}
                className="btn-preview"
              >
                {isPreviewMode ? 'Edit Resume' : 'Preview Resume'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {showSavedResumes && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Saved Resumes</h2>
              <button onClick={() => setShowSavedResumes(false)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <button onClick={handleNew} className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-500 transition-colors flex items-center justify-center gap-2">
                <Plus size={20} /> Create New Resume
              </button>
              {savedResumes.map((savedResume) => (
                <div key={savedResume.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold">{savedResume.name}</h3>
                    <p className="text-sm text-gray-500">
                      Last modified: {new Date(savedResume.lastModified).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleLoad(savedResume)}
                      className="btn-secondary text-sm"
                    >
                      Load
                    </button>
                    <button
                      onClick={() => handleDelete(savedResume.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 animate-slide-in">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105">
            <Briefcase className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Professional Experience</h3>
            <p className="text-gray-600">Showcase your work history and achievements</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105">
            <GraduationCap className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-gray-600">Highlight your academic background</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105">
            <Award className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Skills</h3>
            <p className="text-gray-600">List your technical and soft skills</p>
          </div>
        </div>

        <div className="animate-fade-in">
          {isPreviewMode ? (
            <ResumePreview resume={resume} />
          ) : (
            <ResumeForm resume={resume} setResume={setResume} />
          )}
        </div>
      </main>

      <img
        src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=2400"
        alt="Background decoration"
        className="fixed bottom-0 right-0 w-64 opacity-10 pointer-events-none"
      />
    </div>
  );
}

export default App;