import React from 'react';
import { 
  AppBar, 
  Box, 
  Button, 
  Card, 
  CardContent, 
  Container, 
  Grid, 
  IconButton,
  LinearProgress, 
  Stack, 
  Typography, 
  ThemeProvider,
  createTheme,
  CssBaseline,
  keyframes,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Alert
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Brain, 
  Database,
  Instagram,
  Facebook,
  Plus,
  Sun,
  Moon,
  Send
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#2196f3',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });

  const float = keyframes`
    0% { transform: translateY(0px) rotate(0deg) scale(1); }
    25% { transform: translateY(-15px) rotate(3deg) scale(1.02); }
    50% { transform: translateY(0px) rotate(0deg) scale(1); }
    75% { transform: translateY(15px) rotate(-3deg) scale(1.02); }
    100% { transform: translateY(0px) rotate(0deg) scale(1); }
  `;

  const pulse = keyframes`
    0% { transform: scale(1); box-shadow: 0 5px 15px rgba(0,0,0,0.3); }
    50% { transform: scale(1.05); box-shadow: 0 8px 25px rgba(0,0,0,0.4); }
    100% { transform: scale(1); box-shadow: 0 5px 15px rgba(0,0,0,0.3); }
  `;

  const skills = [
    { name: 'HTML', level: 95, icon: <Code2 /> },
    { name: 'Tailwind CSS', level: 85, icon: <Code2 /> },
    { name: 'JavaScript', level: 90, icon: <Code2 /> },
    { name: 'React.js', level: 85, icon: <Code2 /> },
    { name: 'Python', level: 85, icon: <Database /> },
    { name: 'Flask', level: 80, icon: <Database /> },
    { name: "Git & GitHub", level:80, icon: <Github /> },
    { name: 'Machine Learning', level: 75, icon: <Brain /> },
    { name: 'SQL & Databases', level: 80, icon: <Database /> },
  ];
  
  const projects = [
    {
      title: 'Flashlearn Platform',
      image: 'https://camo.githubusercontent.com/1de02b4b60b49848cc428f3873ee3f60c86b69aca8a578194046cec4219029f4/68747470733a2f2f692e70636d61672e636f6d2f696d61676572792f6c696e657570732f3031436843544d5958386e6a516c3961705a356f7952692d312e2e76313536393439323830372e6a7067',
      description: 'Built a full-stack e-commerce platform using React, js and python',
      link: 'https://github.com/John-Gaitho/flashlearn-frontend'
    },
    {
      title: 'AI Image Recognition',
      description: 'Developed an AI-powered image recognition system using TensorFlow and Python',
      link: 'https://github.com/John-Gaitho/music-melodies-frontend-app'
    },
    {
      title: 'Music Management App',
      description: 'Created a real-time task management application using React and Firebase',
      link: 'https://github.com/John-Gaitho/project3'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend or email service
    // For demonstration purposes, we'll just show a success message
    setSnackbar({
      open: true,
      message: 'Message sent successfully! I will get back to you soon.',
      severity: 'success'
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({
      ...snackbar,
      open: false
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        {/* Navigation */}
        <AppBar position="static" color="transparent" elevation={0} sx={{ py: 2 }}>
          <Container>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                  Portfolio
                </Typography>
              </motion.div>
              <Stack direction="row" spacing={2} alignItems="center">
                <AnimatePresence>
                  <Stack direction="row" spacing={2}>
                    {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ 
                          scale: 1.1,
                          transition: { type: "spring", stiffness: 300 }
                        }}
                      >
                        <Button href={`#${item.toLowerCase()}`} color="inherit">
                          {item}
                        </Button>
                      </motion.div>
                    ))}
                  </Stack>
                </AnimatePresence>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <IconButton 
                    onClick={() => setDarkMode(!darkMode)} 
                    color="inherit"
                    sx={{ ml: 2 }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={darkMode ? 'dark' : 'light'}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                      </motion.div>
                    </AnimatePresence>
                  </IconButton>
                </motion.div>
              </Stack>
            </Stack>
          </Container>
        </AppBar>

        {/* Hero Section */}
        <Box
          sx={{
            backgroundImage: 'url(https://wallpapercave.com/wp/wp6690890.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            py: 15,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.7)',
            }
          }}
        >
          <Container sx={{ position: 'relative', zIndex: 1 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <Box
                    component="img"
                    src="https://avatars.githubusercontent.com/u/181092609?v=4"
                    alt="Profile"
                    sx={{
                      width: '100%',
                      maxWidth: 300,
                      height: 300,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '4px solid white',
                      mx: 'auto',
                      display: 'block',
                      animation: isHovered 
                        ? `${pulse} 2s ease-in-out infinite`
                        : `${float} 6s ease-in-out infinite`,
                      boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                      transition: 'all 0.3s ease-in-out',
                    }}
                  />
                </motion.div>
              </Grid>
              <Grid item xs={12} md={8}>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={itemVariants}>
                    <Typography variant="h4" color="white" gutterBottom>
                       Hi, I'm John Gaitho 
                    </Typography>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Typography variant="h2" color="white" gutterBottom>
                       A Software Engineer
                    </Typography>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Typography variant="h5" color="white" sx={{ mb: 4 }}>
                      Building innovative solutions with modern technologies
                    </Typography>
                  </motion.div>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="contained" 
                      size="large" 
                      href="#contact"
                      sx={{
                        background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
                        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                      }}
                    >
                      Get in Touch
                    </Button>
                  </motion.div>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Skills Section */}
        <Container sx={{ py: 8 }} id="skills">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h4" gutterBottom align="center" sx={{ mb: 6, color: 'text.primary' }}>
              Skills & Expertise
            </Typography>
          </motion.div>
          <Grid container spacing={4}>
            {skills.map((skill, index) => (
              <Grid item xs={12} md={4} key={skill.name}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card elevation={2}>
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            {skill.icon}
                          </motion.div>
                          <Typography variant="h6" sx={{ ml: 1 }}>
                            {skill.name}
                          </Typography>
                        </Box>
                        <motion.div
                          initial="initial"
                          whileInView="animate"
                          viewport={{ once: true }}
                        >
                          <LinearProgress 
                            variant="determinate" 
                            value={skill.level} 
                            sx={{ 
                              height: 8, 
                              borderRadius: 4,
                              '& .MuiLinearProgress-bar': {
                                background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
                              }
                            }}
                          />
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Projects Section */}
        <Box sx={{ bgcolor: 'background.paper', py: 8 }} id="projects">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h4" gutterBottom align="center" sx={{ mb: 6, color: 'text.primary' }}>
                Featured Projects
              </Typography>
            </motion.div>
            <Grid container spacing={4}>
              {projects.map((project, index) => (
                <Grid item xs={12} md={4} key={project.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.05,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Card 
                        sx={{ 
                          height: '100%',
                          background: darkMode 
                            ? 'linear-gradient(45deg, #1a1a1a 30%, #2d2d2d 90%)'
                            : 'linear-gradient(45deg, #ffffff 30%, #f5f5f5 90%)',
                        }}
                      >
                        <CardContent>
                          <Typography variant="h6" gutterBottom>
                            {project.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            {project.description}
                          </Typography>
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Button 
                              startIcon={<ExternalLink size={16} />}
                              href={project.link}
                              target="_blank"
                              sx={{
                                background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
                                color: 'white',
                                '&:hover': {
                                  background: 'linear-gradient(45deg, #21cbf3 30%, #2196f3 90%)',
                                }
                              }}
                            >
                              View Project
                            </Button>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Contact Section */}
        <Container sx={{ py: 8 }} id="contact">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h4" gutterBottom align="center" sx={{ mb: 6, color: 'text.primary' }}>
              Get in Touch
            </Typography>
          </motion.div>

          {/* Contact Form */}
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card elevation={3} sx={{ p: 3 }}>
                  <form onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                      <Typography variant="h6" gutterBottom>
                        Send me a message
                      </Typography>
                      
                      <TextField
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        fullWidth
                        required
                        variant="outlined"
                      />
                      
                      <TextField
                        label="Your Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        fullWidth
                        required
                        variant="outlined"
                      />
                      
                      <FormControl fullWidth variant="outlined">
                        <InputLabel>Subject</InputLabel>
                        <Select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          label="Subject"
                          required
                        >
                          <MenuItem value="Project Inquiry">Project Inquiry</MenuItem>
                          <MenuItem value="Job Opportunity">Job Opportunity</MenuItem>
                          <MenuItem value="Collaboration">Collaboration</MenuItem>
                          <MenuItem value="General Question">General Question</MenuItem>
                          <MenuItem value="Other">Other</MenuItem>
                        </Select>
                      </FormControl>
                      
                      <TextField
                        label="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        fullWidth
                        required
                        multiline
                        rows={4}
                        variant="outlined"
                      />
                      
                      <motion.div
                        whileHover={{ 
                          scale: 1.03,
                          transition: { type: "spring", stiffness: 400 }
                        }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Button 
                          type="submit" 
                          variant="contained" 
                          fullWidth
                          size="large"
                          startIcon={<Send />}
                          sx={{
                            background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
                            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                            py: 1.5
                          }}
                        >
                          Send Message
                        </Button>
                      </motion.div>
                    </Stack>
                  </form>
                </Card>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card elevation={3} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography variant="h6" gutterBottom>
                    Connect with me
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Feel free to reach out through any of the channels below. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </Typography>
                  
                  <Stack spacing={2} sx={{ mt: 2 }}>
                    {[
                      { icon: <Github />, label: 'GitHub', href: 'https://github.com/John-Gaitho' },
                      { icon: <Linkedin />, label: 'LinkedIn', href: 'https://linkedin.com/in/John-Gaitho' },
                      { icon: <Instagram />, label: 'Instagram', href: 'https://instagram.com/yourusername' },
                      { icon: <Facebook />, label: 'Facebook', href: 'https://www.facebook.com/john.gaitho.963' },
                      { icon: <Mail />, label: 'Email', href: 'mailto:jgaitho016@gmail.com' }
                    ].map((social, index) => (
                      <motion.div
                        key={social.label}
                        whileHover={{ 
                          scale: 1.05,
                          transition: { type: "spring", stiffness: 400 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          startIcon={social.icon} 
                          variant="outlined" 
                          href={social.href}
                          fullWidth
                          sx={{
                            borderWidth: 2,
                            justifyContent: 'flex-start',
                            py: 1,
                            '&:hover': {
                              borderWidth: 2,
                              background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
                              color: 'white',
                              borderColor: 'transparent'
                            }
                          }}
                        >
                          {social.label}
                        </Button>
                      </motion.div>
                    ))}
                  </Stack>
                </Card>
              </motion.div>
            </Grid>
          </Grid>

          {/* Social Media Links (smaller version at bottom) */}
          <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" useFlexGap sx={{ mt: 6 }}>
            {[
              { icon: <Github />, label: 'GitHub', href: 'https://github.com/John-Gaitho' },
              { icon: <Linkedin />, label: 'LinkedIn', href: 'https://linkedin.com/in/John-Gaitho' },
              { icon: <Instagram />, label: 'Instagram', href: 'https://instagram.com/yourusername' },
              { icon: <Facebook />, label: 'Facebook', href: 'https://www.facebook.com/john.gaitho.963' },
              { icon: <Mail />, label: 'Email', href: 'mailto:jgaitho016@gmail.com' }
            ].map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button 
                    startIcon={social.icon} 
                    variant="outlined" 
                    href={social.href}
                    size="small"
                    sx={{
                      borderWidth: 2,
                      '&:hover': {
                        borderWidth: 2,
                        background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
                        color: 'white',
                        borderColor: 'transparent'
                      }
                    }}
                  >
                    {social.label}
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Snackbar for form submission feedback */}
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default App;