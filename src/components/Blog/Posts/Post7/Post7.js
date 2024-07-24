import React from 'react';
import BlogPostPage from '../BlogPostPage';

const title = "Understand the Difference Between Pentest, Intrusion Test, and Vulnerability Assessment";
const date = "July 3, 2024";
const author = "GuardTech - Augusto Veiga";
const content = `
    <p>We can say that all are very similar and have quite similar final proposals as well. However, there are some crucial points that make them different, especially in terms of cost, time, and difficulty.</p>
    
    <p>Pentest, short for Penetration Test, is a penetration test that assesses the security levels of a computer network or a computer system.</p>
    
    <p>This penetration test simulates a cyber-attack from a malicious source, demonstrating the vulnerability of the protection systems installed on computers and mobile devices, such as cell phones, notebooks, and tablets.</p>
    
    <p>Pentest, as explained, is a vulnerability test against a possible virtual attack, capable of stealing logins, passwords, accessing accounts, deleting databases, among other serious damages caused to internet users.</p>
    
    <p>There are different types and modalities in a Pentest, so some important points to consider are:</p>

    <ul>
      <li>Is it an INTERNAL or EXTERNAL Pentest?</li>
      <li>Is it a Black, Gray, or White Box Pentest?</li>
      <li>Is it a Pentest on an Application, API, Mobile, Infrastructure, or Web?</li>
    </ul>

    <p>On the other hand, an Intrusion Test is commonly confused and associated with Pentest.</p>
    
    <p>Yes, in an intrusion test it is possible and common to perform pentests, but it is not just that!</p>
    
    <p>In an Intrusion Test, it is common to perform physical access to environments, and those responsible for carrying out this test, usually the Red Team, use various techniques to gain access, such as:</p>

    <ul>
      <li>Social Engineering</li>
      <li>RFID Cloning</li>
      <li>Phishing</li>
    </ul>

    <p>So, in an Intrusion Test, much more than just remote access security is tested. Physical access, security controls (both physical and virtual), and the incident response teams' procedures are also tested.</p>
    
    <p>Finally, Vulnerability Assessment consists of evaluating and identifying security flaws and potential threats in a technological infrastructure.</p>
    
    <p>This procedure allows anticipating cybersecurity problems that could harm the company's operation.</p>
    
    <p>The ideal is for the vulnerability analysis to be performed periodically in the environment, to identify possible breaches that attackers could exploit, such as outdated software or systems with public CVEs and Exploits.</p>
    
    <p>For the analysis, automated tools such as Nessus, Burp Suite, among others, are usually used.</p>
`;

const Post7 = () => {
    return <BlogPostPage title={title} date={date} author={author} content={content} />;
};

export { title }
export default Post7;
