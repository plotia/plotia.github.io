function toggleSubNav(subNavId) {
    var subNav = document.getElementById(subNavId);
    var parentLi = subNav.parentElement;

    // Toggle the open class to show or hide sub-navigation
    parentLi.classList.toggle("open");

    // Hide other open sub-navs (if any)
    document.querySelectorAll("nav ul > li.open").forEach(openLi => {
        if (openLi !== parentLi) {
            openLi.classList.remove("open");
        }
    });
}

// Function to change content based on the selected page
function changeContent(page) {
    var contentDiv = document.getElementById('content');

    switch (page) {
        case 'home':
            contentDiv.innerHTML = `
                <img src = "image.png">
                <h2>About me:</h2>
                <p>
                    I am a graduate student at Carnegie Mellon University, currently pursuing an M.S. in Biotechnology and Pharmaceutical Engineering. I hold a B.Tech. in Pharmaceutical Chemistry & Technology from the Institute of Chemical Technology, Mumbai.
                </p>
                <p>
                    Currently, I am part of the Koes Group, led by Dr. David Ryan Koes, at the Department of Computational & Systems Biology, University of Pittsburgh. My research focuses on the E104D mutation-induced destabilization of the Triose Phosphate Isomerase (TPI) enzyme, a key player in the glycolysis pathway.
                </p>
                <p>
                    At Carnegie Mellon, I have developed a strong foundation in machine learning and simulations of biological systems, furthering my expertise in computational drug discovery.
                </p>
                <h2>Contact :</h2>
                <p>LinkedIn : </p>
                <>Email :<>
            `;
            break;
        case 'Research':
            contentDiv.innerHTML = `
                <img src = "image-2.png" alt="Example Image" class="side-image">
                <div class="text-content">
                <h2>Koes Group :</h2>
                <p>
                At the Koes Group, since fall 2024 I am conducting molecular dynamics simulations of wild-type Triose Phosphate Isomerase (TPI) using AMBER. TPI plays a crucial role in the interconversion of dihydroxyacetone phosphate and D-glyceraldehyde-3-phosphate. The E104D mutation in TPI, while preserving enzymatic activity, compromises the enzyme's thermal stability, leading to increased degradation and a significant reduction in catalytic efficiency. Wild-type TPI dimerizes, preventing thermal degradation through a stabilizing internal water network. This water network is absent in the mutant form. My work involves simulating the wild-type TPI to calculate the root mean square fluctuation (RMSF) values. These RMSF results are compared with data from a colleague working on the mutant TPI to identify amino acid residues, particularly those near residue 104, that exhibit structural differences in flexibility or stability due to the mutation. Upon observing the crystal structure of the wild type and the mutant, we identified that there were some missing H bonds and Salt bridges in the mutant which are present in the wild type residue that lead to calculating distances between the atoms of the corresponding residues and comparing the mutant to that of the wild type. This research aims to elucidate the molecular mechanisms behind the destabilization of mutant TPI.
                </p>
                <p>Skills: Molecular Dynamics, Amber, Python, bash, ssh, MDAnalysis, py3dmol, VMD</p>
                <img src = "photo-2024-07-12-21-17-02.jpg" alt="Example Image" class="side-image">
                <div class="text-content">
                <h2>Niepa μ biointerface Lab :</h2>
                <p>
                Before joining the Koes Group, I worked throughout the summer at the Niepa Microbiointerface Lab, where I focused on testing the rheological properties of microbes. My research centered on biofilms formed by ESKAPEE pathogens such as E. coli, P. aeruginosa, and S. aureus. The goal was to investigate whether the use of efflux pump inhibitors could alter the rheological properties of these biofilms, signaling their potential role as biofilm disruptors. During this time, I gained proficiency in using a rheometer and conducted a series of experiments to measure changes in shear stress versus shear rate. This experience deepened my understanding of microbial biofilms and their mechanical properties, while honing my technical skills in bioengineering experimentation.
                </p>
                <p>Skills: Rheometry, Tensiometry, Bench-Top Spectrophotometer, Cell Culture</p>
                <h2>The Ly Lab :</h2>
                <p>
                The Danith Ly Lab at Carnegie Mellon University is known for its innovative research in chemical biology, particularly in the synthesis of nucleic acid-based molecules like peptide nucleic acids (PNAs). The lab’s work spans gene editing, molecular diagnostics, and the development of novel therapeutics, combining chemistry and biology to address critical challenges in medicine.
                </p>
                <p>
                During my time at the Ly Lab, I worked on the synthesis of Janus Base 4, focusing on optimizing the organic chemistry process. To enhance the yield of the product, I applied techniques such as dropwise reactant addition and a gradual increase in temperature, allowing for more controlled reactions. Later, we adopted a heuristic approach, where we adjusted the protocol to shorten the reaction time, even if it meant slightly compromising the yield. This experience allowed me to refine my organic synthesis skills and think strategically about balancing efficiency and output in a research setting.
                </p>
                <p>Skills: Organic Chemistry, Organic Synthesis, Column Chromatography, Flash Chromatography, Thin Layer Chomatography, Rota Vap usage</p>
                
            `;
            break;
        case 'Experience':
            contentDiv.innerHTML = `
                <h1>Industrial Experience:</h1> 
                <h2>Zydus Lifesciences Ltd :</h2>
                <p>
                    I gained experience in drug discovery and process optimization during my tenure at Zydus Lifesciences Ltd.
                </p>
                <h2 onclick="changeContent('Nectar')" style="cursor: pointer;"> Nectar Lifesciences Ltd.</h2>

            `;
        case 'Nectar':
            contentDiv.innerHTML = `
            <h2>Nectar Lifesciencs Ltd.</h2> 
            <p>Nectar Lifesciences is a prominent pharmaceutical company based in India, specializing in the manufacturing and development of active pharmaceutical ingredients (APIs), formulations, and phytochemicals. Established in 1995, the company has grown into a leading global supplier of APIs, particularly focusing on antibiotics like cephalosporins and other essential medicines. With a strong emphasis on quality control and compliance with international regulatory standards, Nectar Lifesciences serves a wide range of markets across the globe, providing cost-effective and high-quality pharmaceutical products to improve healthcare outcomes.</p>

            <p>
            At Nectar Lifesciences, it was my first step into the corporate world. It was out here, I came to know about how large scale manufacturing of pharmaceutical APIs work. It was a great experience to know the packaging of Cephalosporins through milling seiving and sifting.
              </p>`
            break;
        case 'Skills':
            contentDiv.innerHTML = `
                <h2>Molecular Dynamics :</h2> 
                <p>Amber, Bash script, py3dmol</p>
            `;
            break;
        case 'Courses':
            contentDiv.innerHTML = `
                <h2>Graduate Masters :</h2> 
                <p>Automated biology</p>
            `;
            break;
        case 'contact':
            contentDiv.innerHTML = `
                <h2>Contact Us</h2>
                <p>Feel free to reach out to us!</p>
                <form> 
                    <label for="name">Name:</label> 
                    <input type="text" id="name" name="name" placeholder="Your Name" required>
                    <label for="email">Email:</label> 
                    <input type="email" id="email" name="email" placeholder="Your Email" required>
                    <label for="message">Message:</label> 
                    <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            `;
            break;
        default:
            contentDiv.innerHTML = '<h2>Page not found!</h2>';
    }
}
