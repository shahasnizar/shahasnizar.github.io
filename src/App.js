import logo from './logo.svg';
import './App.css';
import myPic from './mypic.png';
import laptop from './laptoptable.avif';
import linkedin from './linkedin.svg'
import github from './github.svg'
import whatsapIcon from './whatsapp-icon.png'
import TypingAnimation from './TypingAnimation';
import React, { useState, useEffect,useRef } from 'react';

function App() {
  const skills = ['React JS', 'Nuxt JS', 'Javascript', 'Typescript', 'HTML + CSS', 'TailwindCSS'];
  const education = ['PG Diploma in UI/UX Design & Development', 'iCAT Design & Media College'];
  const [isSkillSelected, setSkillSelected] = useState(true);

  // Create refs for the target divs
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const works = [
    {
      title: "Hero Passwords",
      desc: "HeroPasswords.xyz is a sleek password generator built with TailwindCSS and Gatsby, offering customizable, secure passwords with options for uppercase, lowercase, numbers, and special characters.",
      tech_used: "TailwindCSS, Gatsby",
      image: "password.png",
      url:"https://heropasswords.xyz/"
    },
    {
      title: "Tailwind Love",
      desc: "TailwindLove.com is a modern website built with Next.js and TailwindCSS, showcasing beautifully crafted UI components and designs. It provides developers with inspiration and practical examples for building responsive, stylish web interfaces.",
      tech_used: "TailwindCSS, Next JS, React JS",
      image: "tailwindlove.png",
      url:"https://tailwindlove.com/"
    },
    {
      title: "Shapes Studio",
      desc: "ShapeStudio is a sleek and responsive design tool built with Nuxt.js and TailwindCSS. It offers a collection of customizable shapes and components, helping developers and designers quickly create visually appealing web layouts.",
      tech_used: "TailwindCSS, Nuxt JS, React JS",
      image: "shapes.png",
      url:"https://shapestudio.netlify.app/"
    },
    {
      title: "Lorem Interior",
      desc: "LoremInterior is a stylish website built with Gatsby.js and TailwindCSS, showcasing modern interior design with a clean, responsive layout. It's perfect for design enthusiasts and professionals.",
      tech_used: "TailwindCSS, Gatsby",
      image: "lorem.png",
      url:"https://loreminterior.netlify.app/"
    },
    {
      title: "Pixel Peak",
      desc: "PixelSpeak is a fast, responsive website built with Gatsby and TailwindCSS, showcasing digital design and creative content. It's a sleek platform for design enthusiasts and professionals.",
      tech_used: "TailwindCSS, Gatsby, React JS",
      image: "pixelpeak.png",
      url:"https://pixelspeak.netlify.app/"
    },
    {
      title: "Vivid Studio",
      desc: "Vivid Studio is a visually stunning website built with Vue.js and TailwindCSS, offering a sleek and modern platform for showcasing creative design work. Its responsive layout and vibrant aesthetic make it perfect for artists, designers, and agencies looking to highlight their portfolios.",
      tech_used: "TailwindCSS, Vue JS",
      image: "vivid.png",
      url:"https://vivid-studio.netlify.app/"
    },
    {
      title: "Freet App",
      desc: "Imagine a platform where simplicity meets functionality—FreetApp is built using Vue.js and TailwindCSS to create a sleek, intuitive interface.",
      tech_used: "TailwindCSS",
      image: "freet.png",
      url:"https://freetapp.netlify.app/"
    },
    {
      title: "Iroid Technologies",
      desc: "iRoidTechnologies.com is a cutting-edge website built with TailwindCSS, Laravel, and Vue.js, showcasing innovative tech solutions and services. It combines a sleek, responsive design with robust backend functionality, offering a seamless user experience for clients and tech enthusiasts alike.",
      tech_used: "TailwindCSS, Gatsby",
      image: "iroid.png",
      url:"https://www.iroidtechnologies.com/"
    },
    {
      title: "Iroid Technologies UK",
      desc: "RoidTechnologies.co.uk is a dynamic website developed with TailwindCSS, Laravel, and Vue.js, dedicated to the United Kingdom operations of iRoid Technologies. It offers a sleek, responsive user experience while showcasing the company’s cutting-edge tech solutions and services.",
      tech_used: "TailwindCSS, Next JS, React JS",
      image: "iroid.png",
      url:"https://www.iroidtechnologies.co.uk/"
    },
    {
      title: "Irohub.com",
      desc: "irohub.com is a platform offering internships, built with Bootstrap 5 and Laravel. It features a clean, responsive design and provides a user-friendly interface for students and professionals seeking internship opportunities.",
      tech_used: "TailwindCSS, Gatsby",
      image: "irohub.png",
      url:"https://www.irohub.com/"
    },
    {
      title: "Dentcare Aligners",
      desc: "DentcareAligners.com is a modern website built with Vite.js, Vue.js, and Laravel, showcasing advanced dental aligner solutions. Its sleek, responsive design and smooth user experience make it easy for visitors to explore treatment options and services.",
      tech_used: "TailwindCSS",
      image: "dentcare.png",
      url:"https://dentcarealigners.com/"
    },
    {
      title: "Dentcare Dental",
      desc: "DentcareDental.com is a cutting-edge website built with Vite.js, Vue.js, and Laravel, offering comprehensive dental care solutions. Its responsive design and seamless user experience provide visitors with easy access to dental products, services, and expert care information.",
      tech_used: "TailwindCSS, React JS",
      image: "dentcare2.png",
      url:"https://www.dentcaredental.com/"
    },
  ]

  const handleClick = () => {
    setSkillSelected((prev) => !prev); // Toggle selection on click
    // You can add more logic here as needed
  };

  // Scroll function
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const openPDF = () => {
    window.open('./ShahasCV_2024.pdf', '_blank'); // Adjust the path as needed
  };

  return (
    <div className="App">
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <nav className="hidden sm:block fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
          <div className="flex flex-wrap items-center justify-between mx-auto px-10 py-5"><a className="text-xl md:text-3xl text-white font-semibold" href="/">SHAHAS
            NIZAR</a>
            <div className="menu hidden md:block md:w-auto" id="navbar">
              <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                <li><a className="block pl-3 pr-4 test-[#ADB7BE] sm:text-small rounded md:p-0 text-slate-400 hover:text-white" onClick={() => scrollToSection(section1Ref)}>
                  <div className="flex flex-col items-center"><span>About</span></div>
                </a></li>
                <li><a className="block pl-3 pr-4 test-[#ADB7BE] sm:text-small rounded md:p-0 text-slate-400 hover:text-white" onClick={() => scrollToSection(section2Ref)}>
                  <div className="flex flex-col items-center"><span>Projects</span></div>
                </a></li>
                <li><a className="block pl-3 pr-4 test-[#ADB7BE] sm:text-small rounded md:p-0 text-slate-400 hover:text-white" onClick={() => scrollToSection(section3Ref)}>
                  <div className="flex flex-col items-center"><span>Contact</span></div>
                </a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mx-auto mt-5 py-4 px-5 sm:px-12">
          <section className="sm:mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-12">
              <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Hi
                  there, I'm{/* */} </span><br /><TypingAnimation /></h1>
                <p className="text-[#ADB7BE] text-md mb-6 md:text-lg">Creative UI/UX Developer with over 6 years of experience in designing and building user-friendly interfaces. Proficient in modern frameworks and design tools, I excel at translating concepts into responsive web applications that enhance user experience.</p>
                <div>
                  <button onClick={() => scrollToSection(section3Ref)} className="px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-white hover:bg-slate-200 text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">Contact
                  Me</button>
                  <button className="px-1 py-1 rounded-full mt-4 w-full sm:w-fit hover:bg-slate-800 text-white border bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"><span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2" onClick={() => openPDF()}>Download CV</span></button></div>
              </div>
              <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
                  <img alt="hero image" loading="lazy" width={300} height={300} decoding="async" data-nimg={1} className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" style={{ color: 'transparent' }} srcSet={`${myPic}?w=640&q=75 640w, ${myPic}?w=1080&q=75 1080w`} src={myPic} /></div>
              </div>
            </div>
          </section>
          <section className="text-white" id="about"  ref={section1Ref}>
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-6 sm:py-16 xl-16">
              <img alt="About" loading="lazy" width={500} height={500} decoding="async" data-nimg={1} style={{ color: 'transparent' }} srcSet={`${laptop}?w=640&q=75 640w, ${laptop}?w=1080&q=75 1080w`} src={laptop} />
              <div className="mt-4 flex flex-col h-full">
                <h2 className="text-white mb-4 text-4xl lg:text-4xl font-bold text-center sm:text-start">About Me</h2>
                <p className="text-base md:text-lg">I am a UI/UX Designer and Developer who loves creating interactive and responsive web applications. I have experience with JavaScript, React.js, Node.js, Express, HTML, CSS, TailwindCSS, and Git. A quick learner, I am always eager to expand my knowledge and skills.</p>
                <div className="flex flex-row mt-8">
                  <button onClick={handleClick}>
                    <p className={`mr-3 font-semibold hover:text-white text-[#ADB7BE] ${isSkillSelected ? 'text-white border-b-2 border-purple-500' : ''}`}>Skills</p>
                  </button>
                  <button onClick={handleClick}>
                    <p className={`mr-3 font-semibold hover:text-white text-[#ADB7BE] ${isSkillSelected ? '' : 'text-white border-b-2 border-purple-500'}`}>Education</p>
                  </button>
                </div>
                <div className="mt-8">
                  <ul>
                    {isSkillSelected ? skills.map((item, index) => (
                      <li key={index}>{item}</li>
                    )) : education.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <div id="projects"  ref={section2Ref}>
            <h2 className="text-white mb-4 text-4xl lg:text-4xl font-bold text-center">My Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

              {works.map((item, index) => (
                <>
                  <div>
                    <div className="h-52 md:h-72 rounded-t-xl relative group" style={{ background: `url(${process.env.PUBLIC_URL}/${item.image})`, backgroundSize: 'contain' }}>
                      <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                        {/* <a className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link" href={item.url} target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white">
                          <path fillRule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        </svg></a> */}
                        <a className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link" href={item.url} target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white">
                          <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                        </a>
                        </div>
                    </div>
                    <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
                      <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
                      <p className="text-[#ADB7BE]">{item.desc}</p>
                    </div>
                  </div>
                </>
              ))}
              
              
            </div>
          </div>
          <section className="grid md:grid-cols-2 my-5 md:my-12 py-10 gap-4" id="contact"  ref={section3Ref}>
            <div>
              <h5 className="text-xl font-bold text-white my-2">Let's Connect!</h5>
              <p className="text-[#ADB7BE] mb-4 max-w-md">I am open to new opportunities and would love to connect! Feel free to reach out, and I'll make sure to reply as soon as I can.</p>
              <div className="socials flex flex-row gap-2"><a target="_blank" href="https://github.com/shahasnizar"><img alt="Github Icon" loading="lazy" width={48} height={48} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src={github} /></a><a target="_blank" href="https://www.linkedin.com/in/shahas-nizar-689416103/"><img alt="Linkedin Icon" loading="lazy" width={48} height={48} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src={linkedin} /></a><a target="_blank" className="flex items-center px-2" href="https://wa.me/+918089993903"><img alt="Linkedin Icon" loading="lazy" width={256} height={256} decoding="async" data-nimg={1} className="h-10 w-10" style={{ color: 'transparent' }} src={whatsapIcon} /></a></div>
            </div>
            {/* <div>
              <form className="flex flex-col gap-4"><label htmlFor="name" className="text-white block font-bold">Your Name</label><input type="text" id="name" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="John Doe" name="name" /><label htmlFor="email" className="text-white block font-bold">Your
                Email</label><input type="email" id="email" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="abc@example.com" name="email" /><label htmlFor="message" className="text-white block font-bold">Message</label><textarea type="text" name="message" id="message" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Hey there! I would like to connect with you" defaultValue={""} /><button type="submit" className="bg-purple-500 hober:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">Submit</button>
              </form>
            </div> */}
          </section>
          <footer className="footer flex justify-center w-full mb-20 sm:mb-5">
            <p className="text-white">Developed with ❤️ by <span className="text-purple-500">Shahas Nizar</span></p>
          </footer>
        </div>
        <nav className="fixed bottom-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 border-t border-slate-800">
          <div className="menu block md:hidden md:w-auto" id="navbar">
            <ul className="flex justify-evenly p-2 md:p-0 md:flex-row md:space-x-8 mt-0 ">
              <li><a className="block pl-3 pr-4 test-[#ADB7BE] sm:text-small rounded md:p-0 text-slate-400 hover:text-white" onClick={() => scrollToSection(section1Ref)}>
                <div className="flex flex-col items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-6 w-6">
                  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                </svg><span>About</span></div>
              </a></li>
              <li><a className="block pl-3 pr-4 test-[#ADB7BE] sm:text-small rounded md:p-0 text-slate-400 hover:text-white" onClick={() => scrollToSection(section2Ref)}>
                <div className="flex flex-col items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-6 w-6">
                  <path fillRule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg><span>Projects</span></div>
              </a></li>
              <li><a className="block pl-3 pr-4 test-[#ADB7BE] sm:text-small rounded md:p-0 text-slate-400 hover:text-white" onClick={() => scrollToSection(section3Ref)}>
                <div className="flex flex-col items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-6 w-6">
                  <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z" clipRule="evenodd" />
                </svg><span>Contact</span></div>
              </a></li>
            </ul>
          </div>
        </nav>
      </main>
    </div>
  );
}

export default App;
