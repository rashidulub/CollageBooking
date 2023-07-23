

const ResearchPaper = () => {
    return (
        <div>
            <div className="mx-auto text-center mt-5 lg:my-20 md:w-4/12 ">
                <p className="text-orange-400 font-bold mb-2">---Visit This Section---</p>
                <h3 className="text-3xl uppercase text-white  border-b-4 border-indigo-500 py-4">Research Paper Links</h3>
            </div>
            <div tabIndex={0} className="collapse bg-base-200 w-3/4 mx-auto my-5">
                <div className="collapse-title text-xl font-medium">
                    <span className="font-bold text-blue-800">Google Scholar</span>: A freely accessible search engine for scholarly articles, theses, books, and conference papers.
                </div>
                <div className="collapse-content">
                    <a className="font-bold text-red-800 text-2xl" href="https://scholar.google.com/"> Google Scholar</a>
                </div>
            </div>
            <div tabIndex={0} className="collapse bg-base-200 w-3/4 mx-auto my-2">
                <div className="collapse-title text-xl font-medium">
                <span className="font-bold text-blue-800">PubMed</span> : A database of biomedical literature, including research articles and clinical studies.
                </div>
                <div className="collapse-content">
                    <a className="font-bold text-red-800 text-2xl" href="https://pubmed.ncbi.nlm.nih.gov/">PubMed</a>
                </div>
            </div>
            <div tabIndex={0} className="collapse bg-base-200 w-3/4 mx-auto my-2">
                <div className="collapse-title text-xl font-medium">
                <span className="font-bold text-blue-800">IEEE Xplore</span>: A digital library for research papers in the fields of engineering, computer science, and related disciplines.
                </div>
                <div className="collapse-content">
                    <a className="font-bold text-red-800 text-2xl" href="https://ieeexplore.ieee.org/Xplore/home.jsp"> IEEE Xplore</a>
                </div>
            </div>
            <div tabIndex={0} className="collapse bg-base-200 w-3/4 mx-auto my-2">
                <div className="collapse-title text-xl font-medium">
                <span className="font-bold text-blue-800">ScienceDirect</span>: A leading full-text scientific database offering journal articles and book chapters from various fields.
                </div>
                <div className="collapse-content">
                    <a className="font-bold text-red-800 text-2xl" href="https://www.sciencedirect.com/"> ScienceDirect</a>
                </div>
            </div>
        </div>
    );
};

export default ResearchPaper;