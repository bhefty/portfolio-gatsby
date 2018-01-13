import React from 'react'

import MainHeader from '../components/MainHeader/MainHeader'
import About from '../components/About/About'
import ProjectsSection from '../components/ProjectsSection/ProjectsSection'
import BlogSection from '../components/BlogSection/BlogSection'
import ContactSection from '../components/ContactSection/ContactSection'
import Navbar from '../components/Navbar/Navbar'

const IndexPage = () => (
  <div>
    <MainHeader />
    <Navbar />
    <About />
    <ProjectsSection />
    <BlogSection />
    <ContactSection />
  </div>
)

export default IndexPage
