import { useState, useEffect } from 'react';
import projectsData from '../../constants/projects';
import { EyeIcon } from '@heroicons/react/20/solid';


const IMAGE_RELATIVE_PATH='../../../public/'
const Portfolio = () => {

  
  // State to store project data and filtered projects
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Load project data from projects.js
  useEffect(() => {
   
    setProjects(projectsData);
    setFilteredProjects(projectsData);
    
      
  }, []);

  // Function to handle category filter selection
  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === category);
      setFilteredProjects(filtered);
    }
  };

  return (
    <section className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      {/* Filter buttons */}
      <ul className="filter-list">
        {['All', 'Web design', 'Applications', 'Web development'].map(category => (
          <li className="filter-item" key={category}>
            <button
              className={category === selectedCategory ? 'active' : ''}
              onClick={() => handleFilterClick(category)}
              data-filter-btn
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

      {/* Select for filtering */}

      <div className="relative  block md:hidden">
  <div className="relative flex bg-red ">
    <button
      onClick={() => setShowOptions(!showOptions)}
      className="flex items-center bg-white border border-gray-300 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
    >
      <span>{selectedCategory}</span>
      <span className="ml-2">{showOptions ? '▲' : '▼'}</span>
    </button>
  </div>
  <div
    className={`origin-top-right absolute py-3  mt-2  w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 ${showOptions ? 'block' : 'hidden'}`}
  >
    {['All', 'Web design', 'Applications', 'Web development'].map(category => (
      <button
        key={category}
        onClick={() => {
          handleFilterClick(category);
          setShowOptions(false);
        }}
        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        {category}
      </button>
    ))}
  </div>
</div>


     

      {/* Portfolio items */}
      <section className="projects">
        <ul className="project-list">
          {filteredProjects.map(project => (
            <li
              className="project-item active p-2"
              data-filter-item
              data-category={project.category}
              key={project.id}
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                   <EyeIcon width={20}/>
                  </div>
                  <img src={`${IMAGE_RELATIVE_PATH}${project.image}`} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <h6 className='text-white'>project description</h6>
<p className="px-4 py-2 w-max text-white rounded-full backdrop-blur-sm border border-black mt-1 hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/10 text-xs transition duration-200">
#{project.category}
</p>
               
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Portfolio;
