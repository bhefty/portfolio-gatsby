import React from 'react'

import MainHeader from '../components/MainHeader/MainHeader'
import About from '../components/About/About'
import ProjectsSection from '../components/ProjectsSection/ProjectsSection'
import BlogSection from '../components/BlogSection/BlogSection'
import ContactSection from '../components/ContactSection/ContactSection'
import Footer from '../components/Footer/Footer'

const IndexPage = () => (
  <div>
    <MainHeader />
    <About />
    <ProjectsSection />
    <BlogSection />
    <ContactSection />
    <Footer />
  </div>
)

export default IndexPage
