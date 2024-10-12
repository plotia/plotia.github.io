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
                <p>
                    I joined the Koes Group as a graduate researcher in the start of Fall 2024. Under the guidance of Dr. David Ryan Koes and Dr. Somayeh Pirhadi at the Department of Computational and Systems Biology, University of Pittsburgh, the group focuses on computational methods for structure-based drug discovery. My research centers on the molecular simulation of Triose Phosphate Isomerase (TPI), a key enzyme in the glycolysis pathway. By employing advanced molecular modeling techniques, I aim to investigate the structural dynamics of TPI, particularly its interactions and stability, which could provide insights into therapeutic interventions. This work aligns with the Koes Group's broader mission to enhance drug discovery through computational innovation.
                </p>
                <p>
                
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
