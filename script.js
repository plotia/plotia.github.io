function changeContent(page) {
    var contentDiv = document.getElementById('content');
    //home_researchnexperience_SkillsnCoursestaken_transcriptsnresumenpublications_projects_technologies_contact

    switch (page) {
        case 'home':
            contentDiv.innerHTML = `
                <img src = "image.png">
                <h2>
                    About me :
                </h2>
                <p>
                    I am a graduate student at Carnegie Mellon University, currently pursuing an M.S. in Biotechnology and Pharmaceutical Engineering. I hold a B.Tech. in Pharmaceutical Chemistry & Technology from the Institute of Chemical Technology, Mumbai.

Currently, I am part of the Koes Group, led by Dr. David Ryan Koes, at the Department of Computational & Systems Biology, University of Pittsburgh. My research focuses on the E104D mutation-induced destabilization of the Triose Phosphate Isomerase (TPI) enzyme, a key player in the glycolysis pathway.

At Carnegie Mellon, I have developed a strong foundation in machine learning and simulations of biological systems, furthering my expertise in computational drug discovery.
                </p>
            `;
            break;
        case 'about':
            contentDiv.innerHTML = `
                <h2>About Us</h2>
                <p>
                    This is the about page content. Learn more 
                    about our purpose and team.
                </p>
                <p>
                    We're passionate about creating engaging and
                    informative SPAs.
                </p>
            `;
            break;
        case 'contact':
            contentDiv.innerHTML = 
                `<h2>Contact Us</h2> 
                <p>
                    Feel free to reach out to us!
                </p> 
                <form> 
                <label for="name">Name:</label> 
                <input type="text" id="name" name="name" 
                        placeholder="Your Name" required>
                <label for="email">Email:</label> 
                <input type="email" id="email" name="email" 
                        placeholder="Your Email" required>
                <label for="message">Message:</label> 
                <textarea id="message" name="message" 
                            placeholder="Your Message" 
                            rows="4" required>
                    </textarea>
                <button type="submit">Send Message</button> 
                </form>`;
            break;

        default:
            contentDiv.innerHTML = '<h2>Page not found!</h2>';
    }
}
