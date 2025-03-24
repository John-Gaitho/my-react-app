const Education = {
  school: '',
  degree: '',
  fieldOfStudy: '',
  startDate: '',
  endDate: '',
  description: ''
};

const Experience = {
  company: '',
  position: '',
  location: '',
  startDate: '',
  endDate: '',
  description: ''
};

const Skill = {
  name: '',
  level: ['Beginner', 'Intermediate', 'Advanced', 'Expert']
};

const PersonalInfo = {
  fullName: '',
  email: '',
  phone: '',
  location: '',
  summary: ''
};

const Resume = {
  id: '',
  name: '',
  lastModified: '',
  personalInfo: { ...PersonalInfo },
  education: [],
  experience: [],
  skills: []
};

export { Education, Experience, Skill, PersonalInfo, Resume };
