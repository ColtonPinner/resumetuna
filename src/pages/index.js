import { useState } from "react";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from '../comp/Navbar';
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [resumeFile, setResumeFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  return (
    <div className={`${geistSans.className} ${geistMono.className} min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)] bg-slate-50 dark:bg-slate-900`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 lg:px-0 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-6">Land Your Dream Job</h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
          Where Smart AI Meets Expert Career Guidance
        </p>
        <Link href="/signup" legacyBehavior>
          <a className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-colors">
            Get Started for Free
          </a>
        </Link>
        <div className="mt-12">
          <Image
            src="/resume-showcase.png"
            alt="ResumeTuna App Preview"
            width={1000}
            height={600}
            className="rounded-lg shadow-xl w-full max-w-4xl mx-auto"
            priority
          />
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4 md:px-8 lg:px-0 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-16">
            Why ResumeTuna is Your Edge in Today's Job Market
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12">
            Stop guessing. Start landing. We combine smart AI with clear guidance to help you stand out and secure the right opportunities.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Feature 1 */}
            <div className="bg-slate-50 dark:bg-slate-700 p-8 rounded-xl shadow-md">
              <div className="h-12 w-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">Precision Alignment, Zero Guesswork</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Our AI-powered Alignment Score instantly shows how well your resume matches job descriptions. This means less wasted time on unsuitable roles and more callbacks from employers looking for exactly what you offer.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 dark:bg-slate-700 p-8 rounded-xl shadow-md">
              <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">Unlock Hidden Opportunities & Beat ATS</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Get critical keyword suggestions tailored to your target jobs. This ensures your resume passes Applicant Tracking Systems (ATS) and gets seen by recruiters. We help you articulate your value so companies understand your fit.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 dark:bg-slate-700 p-8 rounded-xl shadow-md">
              <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">Personalized Strategy for Long-Term Success</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Receive tailored recommendations for both your immediate job search and long-term career goals. Move beyond just "getting a job" to building a purposeful career path.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Upload Section */}
      <section className="py-16 px-4 md:px-8 lg:px-0">
        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 shadow-lg rounded-xl overflow-hidden">
          <div className="p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-6">Resume Evaluation</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Continuing as a guest. Don't have a resume on hand? Click the 'Demo' button to see how it works.
            </p>
            
            <div className="space-y-6">
              <div className="flex flex-col space-y-2">
                <label className="font-medium text-slate-700 dark:text-slate-300">Upload Resume (PDF, DOC, DOCX)</label>
                <div className="flex items-center">
                  <label className="flex-1 cursor-pointer bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg px-4 py-2 border-2 border-dashed border-slate-300 dark:border-slate-600">
                    <div className="flex items-center justify-center py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-slate-500 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <span className="text-slate-600 dark:text-slate-300">
                        {resumeFile ? resumeFile.name : 'Click to upload resume'}
                      </span>
                    </div>
                    <input type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
                  </label>
                  <button className="ml-4 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 py-2 px-4 rounded-lg">
                    Demo
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2">
                <label className="font-medium text-slate-700 dark:text-slate-300">Career Goals</label>
                <textarea 
                  className="w-full border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-2 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500" 
                  rows="3"
                  placeholder="Describe your career goals and ideal position..."
                />
              </div>
              
              <div className="flex flex-col space-y-2">
                <label className="font-medium text-slate-700 dark:text-slate-300">Job Description</label>
                <textarea 
                  className="w-full border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-2 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500" 
                  rows="5"
                  placeholder="Paste the job description you want to apply for..."
                />
              </div>
              
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg shadow-md transition-colors">
                Analyze Resume
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Feedback Section */}
      <section className="py-16 px-4 md:px-8 lg:px-0 bg-slate-100 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-8">
            Your Feedback Matters
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Did ResumeTuna help you? Share your thoughts.
          </p>
          
          <div className="flex justify-center space-x-4">
            <Link href="/feedback" legacyBehavior>
              <a className="bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 py-2 px-6 rounded-lg">
                Leave Feedback
              </a>
            </Link>
          </div>
          
         
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
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
