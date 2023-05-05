import Image from 'next/image'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
    <Header/>
      <section>
        <div className="item-group px-4 py-12 min-w-auto mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div className="flex flex-wrap items-center mx-auto max-w-7xl">
            <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
              <div>
                <div className="relative w-full max-w-lg">
                  <div
                      className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                  <div
                      className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div className="relative">
                    <img className=" square xyz-in object-cover object-center mx-auto rounded-lg shadow-2xl" alt="hero"
                         src="/gaurav.jpg" />
                  </div>
                </div>
              </div>
            </div>
            <div
                className="flex flex-col square xyz-in items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
              <span className="mb-8 font-[Rocher] purples text-xs font-bold  tracking-widest text-blue-600 "> Hello,  </span>
              <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 font-[Rocher] purples text-2xl md:text-4xl lg:text-4xl">I Am Dev. Gaurav Jatt</h1>
              <p className="mb-8 text-base leading-relaxed text-left text-gray-500">Hi there! I'm a web developer with a strong focus on building modern, high-performance websites using Next.js, React.js and Tailwind CSS.</p>
              <div className="flex flex-wrap bg-gray-100 rounded-[12px] border-2 sm:ml-4 mt-2 mx-4  text-left">
                <div className="w-1/4 p-4 sm:w-1/4">
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-whatsapp" style={{ color: '#25c322', fontSize: '40px' }}></i>
                  </a>
                </div>
                <div className="w-1/4 p-4 sm:w-1/4">
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-telegram" style={{ color: '#0f5adb', fontSize: '40px' }}></i>
                  </a>
                </div>
                <div className="w-1/4 p-4 sm:w-1/4">
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github" style={{ color: '#4f7ac4', fontSize: '40px' }}></i>
                  </a>
                </div>
                <div className="w-1/4 p-4 sm:w-1/4">
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram" style={{ color: '#ff0066', fontSize: '40px' }}></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer/>
    </>
  )
}
