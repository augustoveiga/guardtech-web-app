import React from 'react';
import BlogPostPage from '../BlogPostPage';

const title = "Want to Be Prepared to Respond to Cyber Threats? Train Your Team";
const date = "June 25, 2024";
const author = "GuardTech - Augusto Veiga";
const content = `
    <p>An Incident Response Plan (IRP) needs to be tested periodically. This ensures the company can trust it will be effective when a real incident occurs. Simulation exercises are important to identify gaps in the IRP, how to solve them, and make the response quick and assertive, minimizing impacts on the company's image and reputation, operations, and finances.</p>

    <h2>Tabletop Exercise in Practice</h2>
    <p>The Tabletop Exercise is a cyber incident simulation. It is based on strategic, tactical, and operational discussions involving the entire organization, including stakeholders. It is an immersion in the company's ability to handle threats.</p>
    
    <p>The tests evaluate all necessary measures and identify those responsible for responding to the incident. Actions taken by technical teams in forensic analysis, business continuity, and communications with corporate stakeholders are considered from the beginning of the incident until the return to normalcy. This way, the exercise highlights operational risks of executed processes and how they should be addressed.</p>

    <p>In the simulation, the scenario, participants, information used, and decision points need to reflect realistic challenges the organization might face, so the company can fully understand the types of obstacles it will encounter in a real crisis.</p>

    <h3>Some questions asked during the exercise:</h3>
    <ul>
        <li>Who should I inform if I identify an abnormality in the company's technological environment? How should I communicate?</li>
        <li>Who is the technical person responsible for the infected environment?</li>
        <li>What is the criticality of the information stored in the infected environment?</li>
        <li>Which key suppliers should be contacted?</li>
        <li>Do I gather all the information first or start making calls immediately?</li>
        <li>Who should act on containment?</li>
        <li>Should I contact the attacker or not?</li>
        <li>Are there people involved who are traveling? Do I need them here, or are there representatives?</li>
        <li>If I need to buy airline tickets and we have no systems, what should I do?</li>
        <li>Activate the Business Continuity Plan?</li>
        <li>Which stakeholders should I communicate with? When should I communicate? What level of detail should I provide in the communications?</li>
        <li>Is the environment effectively recovered?</li>
        <li>Is the most recent backup properly available?</li>
        <li>Is the operation properly normalized?</li>
    </ul>

    <p>All this will increase the company's readiness to respond to cyber incidents.</p>

    <h3>Other advantages the organization will gain from conducting the test include:</h3>
    <ul>
        <li>Responding to incidents without suffering the negative consequences of a real scenario;</li>
        <li>Identifying capacity gaps, understanding what is working well and what is not;</li>
        <li>Understanding in detail the Incident Response Plan, Communication Plan, Business Continuity Plan, and identifying areas for improvement.</li>
    </ul>

    <p>To learn more about how the Tabletop Exercise can help your business increase its readiness to respond to cyber incidents, talk to one of our specialists today.</p>
`;

const Post9 = () => {
    return <BlogPostPage title={title} date={date} author={author} content={content} />;
};

export { title }
export default Post9;
