import React from "react"
import { Link } from 'gatsby';
import '../styles/homepage.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from '../components/intro'
import Project from '../components/projects'

const IndexPage = () => (
  <Layout>
    <SEO title="Linh Huynh" keywords={[`gatsby`, `portfolio`, `react`]} />
    <Intro />
    <Project />
  </Layout>
)

export default IndexPage
