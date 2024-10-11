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

                    Currently, I am part of the Koes Group, led by Dr. David Ryan Koes, at the Department of Computational & Systems Biology, University of Pittsburgh. My research focuses on the E104D mutation-induced destabilization of the Triose Phosphate Isomerase (TPI) enzyme, a key player in the glycolysis pathway.

                    At Carnegie Mellon, I have developed a strong foundation in machine learning and simulations of biological systems, furthering my expertise in computational drug discovery.
                </p>
            `;
            break;
        case 'Research':
            contentDiv.innerHTML = `
                <h2>Koes Group :</h2> 
                <p>
                    At the Koes Group, I am conducting molecular dynamics simulations of wild-type Triose Phosphate Isomerase (TPI) using AMBER. TPI plays a crucial role in the interconversion of dihydroxyacetone phosphate and D-glyceraldehyde-3-phosphate. The E104D mutation in TPI, while preserving enzymatic activity, compromises the enzyme's thermal stability, leading to increased degradation and a significant reduction in catalytic efficiency. Wild-type TPI dimerizes, preventing thermal degradation through a stabilizing internal water network. This water network is absent in the mutant form.

                    My work involves simulating the wild-type TPI to calculate the root mean square fluctuation (RMSF) values. These RMSF results are compared with data from a colleague working on the mutant TPI to identify amino acid residues, particularly those near residue 104, that exhibit structural differences in flexibility or stability due to the mutation. This research aims to elucidate the molecular mechanisms behind the destabilization of mutant TPI.
                </p>
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
