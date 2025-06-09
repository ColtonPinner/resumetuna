import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../comp/Navbar';
import { Geist, Geist_Mono } from 'next/font/google';

// Use the same font setup as index.js
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function About() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)] bg-white dark:bg-slate-900`}>
      <Head>
        <title>About ResumeTuna | Smart Resume Builder</title>
        <meta name="description" content="Learn about ResumeTuna - the modern resume builder that helps you create professional, ATS-friendly resumes" />
      </Head>

      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-6">About ResumeTuna</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Building powerful resumes that stand out and get results in today's competitive job market.
          </p>
        </section>

        {/* Mission Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">Our Mission</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                At ResumeTuna, we believe that everyone deserves a great resume that accurately represents their skills and experience. Our mission is to make professional resume creation accessible to all job seekers.
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                We combine modern design with AI-powered content optimization to help you create resumes that not only look great but also pass through Applicant Tracking Systems (ATS) with ease.
              </p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-8 flex items-center justify-center">
              <div className="relative h-64 w-full">
                <Image 
                  src="/mission-image.jpg" 
                  alt="Resume creation illustration" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-slate-50 dark:bg-slate-800/50 py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-800 dark:text-white">
              Why Choose ResumeTuna?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md">
                <div className="h-12 w-12 bg-sky-100 dark:bg-sky-900/50 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-600 dark:text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">ATS-Optimized Templates</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Our templates are designed to pass through Applicant Tracking Systems while maintaining a professional and modern look.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md">
                <div className="h-12 w-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">AI-Powered Suggestions</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Get intelligent content recommendations to improve your resume's impact and highlight your most relevant skills.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md">
                <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">Easy Export & Sharing</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Download your resume in multiple formats (PDF, DOCX) or share a direct link with potential employers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800 dark:text-white">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="h-16 w-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-2xl font-bold text-slate-800 dark:text-white mx-auto mb-4">1</div>
              <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-white">Choose a Template</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Select from our library of professional, ATS-friendly resume templates.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="h-16 w-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-2xl font-bold text-slate-800 dark:text-white mx-auto mb-4">2</div>
              <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-white">Add Your Details</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Fill in your experience, skills, and education with our intuitive editor.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="h-16 w-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-2xl font-bold text-slate-800 dark:text-white mx-auto mb-4">3</div>
              <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-white">Get AI Feedback</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Receive intelligent suggestions to improve your content and formatting.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="text-center">
              <div className="h-16 w-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-2xl font-bold text-slate-800 dark:text-white mx-auto mb-4">4</div>
              <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-white">Download & Share</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Export your finished resume in multiple formats or share it online.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-slate-50 dark:bg-slate-800/50 py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-800 dark:text-white">
              Meet Our Team
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
            
              
              {/* Team Member 2 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 bg-slate-200 dark:bg-slate-700">
                  <div className="relative h-full w-full">
                    <Image 
                      src="/team-member-2.jpg" 
                      alt="Team Member" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">Andrew Chen</h3>
                <p className="text-green-600 dark:text-green-400 mb-2">Founder</p>
                <p className="text-slate-600 dark:text-slate-300">
                  Expert in designing intuitive user experiences and beautiful interfaces.
                </p>
              </div>
              
              {/* Team Member 3 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 bg-slate-200 dark:bg-slate-700">
                  <div className="relative h-full w-full">
                    <Image 
                      src="/team-member-3.jpg" 
                      alt="Team Member" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">Sarah Johnson</h3>
                <p className="text-green-600 dark:text-green-400 mb-2">Career Specialist</p>
                <p className="text-slate-600 dark:text-slate-300">
                  Former recruiter with expertise in what makes resumes stand out.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">Ready to Create Your Resume?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            Join thousands of professionals who've used ResumeTuna to land their dream jobs.
          </p>
          <div>
            <a 
              href="/signup" 
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-colors"
            >
              Get Started For Free
            </a>
            <a 
              href="/templates" 
              className="inline-block ml-4 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-white font-medium py-3 px-8 rounded-lg shadow-md transition-colors"
            >
              View Templates
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-slate-100 dark:bg-slate-800 py-8 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-600 dark:text-slate-300">© {new Date().getFullYear()} ResumeTuna. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="/terms" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">Terms</a>
            <a href="/privacy" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">Privacy</a>
            <a href="/contact" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}