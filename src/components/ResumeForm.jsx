import React from 'react';
import { Plus, Trash2, BookOpen, Building2, Lightbulb } from 'lucide-react';

export default function ResumeForm({ resume, setResume }) {
  const addEducation = () => {
    setResume(prev => ({
      ...prev,
      education: [...prev.education, {
        school: '',
        degree: '',
        fieldOfStudy: '',
        startDate: '',
        endDate: '',
        description: ''
      }]
    }));
  };

  const addExperience = () => {
    setResume(prev => ({
      ...prev,
      experience: [...prev.experience, {
        company: '',
        position: '',
        location: '',
        startDate: '',
        endDate: '',
        description: ''
      }]
    }));
  };

  const addSkill = () => {
    setResume(prev => ({
      ...prev,
      skills: [...prev.skills, { name: '', level: 'Beginner' }]
    }));
  };

  const updatePersonalInfo = (field, value) => {
    setResume(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  const updateEducation = (index, field, value) => {
    setResume(prev => ({
      ...prev,
      education: prev.education.map((edu, i) => 
        i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const updateExperience = (index, field, value) => {
    setResume(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const updateSkill = (index, field, value) => {
    setResume(prev => ({
      ...prev,
      skills: prev.skills.map((skill, i) => 
        i === index ? { ...skill, [field]: value } : skill
      )
    }));
  };

  const removeEducation = (index) => {
    setResume(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  const removeExperience = (index) => {
    setResume(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  const removeSkill = (index) => {
    setResume(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <section className="space-y-4 animate-slide-in">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-blue-500" />
          Personal Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={resume.personalInfo.fullName}
            onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
            className="input-field"
          />
          <input
            type="email"
            placeholder="Email"
            value={resume.personalInfo.email}
            onChange={(e) => updatePersonalInfo('email', e.target.value)}
            className="input-field"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={resume.personalInfo.phone}
            onChange={(e) => updatePersonalInfo('phone', e.target.value)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Location"
            value={resume.personalInfo.location}
            onChange={(e) => updatePersonalInfo('location', e.target.value)}
            className="input-field"
          />
        </div>
        <textarea
          placeholder="Professional Summary"
          value={resume.personalInfo.summary}
          onChange={(e) => updatePersonalInfo('summary', e.target.value)}
          className="input-field h-32"
        />
      </section>

      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Building2 className="h-6 w-6 text-green-500" />
            Education
          </h2>
          <button onClick={addEducation} className="btn-add">
            <Plus size={20} /> Add Education
          </button>
        </div>
        {resume.education.map((edu, index) => (
          <div key={index} className="section-card animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex justify-end">
              <button onClick={() => removeEducation(index)} className="text-red-500 hover:text-red-700 transition-colors">
                <Trash2 size={20} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="School"
                value={edu.school}
                onChange={(e) => updateEducation(index, 'school', e.target.value)}
                className="input-field"
              />
              <input
                type="text"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                className="input-field"
              />
              <input
                type="text"
                placeholder="Field of Study"
                value={edu.fieldOfStudy}
                onChange={(e) => updateEducation(index, 'fieldOfStudy', e.target.value)}
                className="input-field"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  placeholder="Start Date"
                  value={edu.startDate}
                  onChange={(e) => updateEducation(index, 'startDate', e.target.value)}
                  className="input-field"
                />
                <input
                  type="date"
                  placeholder="End Date"
                  value={edu.endDate}
                  onChange={(e) => updateEducation(index, 'endDate', e.target.value)}
                  className="input-field"
                />
              </div>
            </div>
            <textarea
              placeholder="Description"
              value={edu.description}
              onChange={(e) => updateEducation(index, 'description', e.target.value)}
              className="input-field h-24"
            />
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Building2 className="h-6 w-6 text-blue-500" />
            Experience
          </h2>
          <button onClick={addExperience} className="btn-add">
            <Plus size={20} /> Add Experience
          </button>
        </div>
        {resume.experience.map((exp, index) => (
          <div key={index} className="section-card animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex justify-end">
              <button onClick={() => removeExperience(index)} className="text-red-500 hover:text-red-700 transition-colors">
                <Trash2 size={20} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company"
                value={exp.company}
                onChange={(e) => updateExperience(index, 'company', e.target.value)}
                className="input-field"
              />
              <input
                type="text"
                placeholder="Position"
                value={exp.position}
                onChange={(e) => updateExperience(index, 'position', e.target.value)}
                className="input-field"
              />
              <input
                type="text"
                placeholder="Location"
                value={exp.location}
                onChange={(e) => updateExperience(index, 'location', e.target.value)}
                className="input-field"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  placeholder="Start Date"
                  value={exp.startDate}
                  onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                  className="input-field"
                />
                <input
                  type="date"
                  placeholder="End Date"
                  value={exp.endDate}
                  onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                  className="input-field"
                />
              </div>
            </div>
            <textarea
              placeholder="Description"
              value={exp.description}
              onChange={(e) => updateExperience(index, 'description', e.target.value)}
              className="input-field h-24"
            />
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-yellow-500" />
            Skills
          </h2>
          <button onClick={addSkill} className="btn-add">
            <Plus size={20} /> Add Skill
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resume.skills.map((skill, index) => (
            <div key={index} className="section-card flex items-center gap-4 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <input
                type="text"
                placeholder="Skill"
                value={skill.name}
                onChange={(e) => updateSkill(index, 'name', e.target.value)}
                className="input-field flex-1"
              />
              <select
                value={skill.level}
                onChange={(e) => updateSkill(index, 'level', e.target.value)}
                className="input-field"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
              <button onClick={() => removeSkill(index)} className="text-red-500 hover:text-red-700 transition-colors">
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}