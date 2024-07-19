import React from 'react';
import BlogPostPage from '../PostTemplate';

const title = "From DevOps to DevSecOps: A Comprehensive Guide";
const date = "July 10, 2024";
const author = "GuardTech - Augusto Veiga";
const content = `
    <p>DevOps is a mindset as well as a business tactic. It is a cultural shift that merges operations with development and employs a linked toolchain to create changes. In turn, DevSecOps aims to merge security into DevOps. This can be useful for a company seeking rapid and secure growth. Transforming your DevOps into DevSecOps can be a challenge. However, there are ways to make it efficient, smooth, and mostly painless.</p>
    
    <h2>The Shift from DevOps to DevSecOps</h2>
    <p>Keep in mind that security, like DevOps, is always evolving. It should be treated as a general necessity in application development. Here are some important steps we have seen clients use to effectively incorporate security into their DevOps practices.</p>
    
    <h2>Use the Right Approach</h2>
    <p>Although most entities today use DevOps in some form, adding security to the mix remains a challenge. Transforming DevOps into DevSecOps is an ongoing process. As DevSecOps practices mature, related tools, governance processes, developer awareness, knowledge, and training need to be frequently updated. This requires a programmatic approach to ensure that people continue learning throughout the process.</p>
    
    <h2>Develop a Custom Framework for DevSecOps</h2>
    <p>A security framework tailored to DevSecOps is essential for effective governance. The framework should define the security tasks and actions performed in the continuous integration/development (CI/CD) pipeline. In turn, each of these tasks should have a defined key performance indicator (KPI) or metric, as well as a risk threshold that determines the progression of the application code in the pipeline.</p>
    
    <p>The KPIs and the type of tasks may vary depending on the classification of the application's business impact analysis (or microservice). Security teams may choose to use a minimum baseline applied across all code and a stricter standard on top of that for critical applications. This provides developers with transparency regarding governance requirements and helps them plan and deliver smoothly.</p>
    
    <h2>Cultural Change</h2>
    <p>When DevSecOps solutions are executed correctly, developers can perform all necessary tasks and actions. Changing the culture means not forgetting the human element.</p>
    
    <p>Developers will not only be responsible for performing security tasks (automatic and manual) but also for resolving any issues. They will need basic security knowledge and skills to develop and implement it. The skills and knowledge of developers vary within a large team.</p>
    
    <p>Most importantly, you should encourage a mindset change that fully embraces security. This is crucial to reducing alert fatigue and limiting disruption to the CI/CD pipeline. One way to achieve this, along with training, is to find and promote 'security champions' within the development team. These champions will become the go-to people for all things security. They should also encourage a mindset change among developers over time.</p>
    
    <h2>Establish a DevSecOps Center of Excellence</h2>
    <p>To support a smooth transition to DevSecOps, create a center of excellence. This is a central, cross-functional team that researches, develops best practices, and automates manual tasks.</p>
    
    <p>Customers who have already set up a center of excellence as part of a DevOps framework should extend it to include security. One of the main objectives of this team is to develop models for security components and tasks to ensure repeatability. They will also help fine-tune tool configurations to reduce false positives.</p>
    
    <p>With a central team, it is more likely that your process for reducing risks or performing a task will be consistent across the company. A DevSecOps center of excellence will also accelerate the company's overall adoption of security.</p>
    
    <h2>Automate and Integrate Security Governance</h2>
    <p>You may be familiar with the practice of 'shift left' in DevSecOps. It helps improve quality and security by moving tests earlier in the software development lifecycle. As more DevSecOps practices are automated, it becomes harder to capture the necessary metrics (according to the defined framework) to demonstrate that security and compliance requirements are met.</p>
    
    <p>Therefore, a DevSecOps framework should include a way to track governance throughout the software delivery lifecycle. Governance automation requires careful calibration of the underlying tools and platform. They need to be aligned with the metrics and thresholds defined by the security gate. Companies can benefit from this because it allows for faster software delivery and greater confidence among employees.</p>
    
    <h2>Where to Start with DevSecOps</h2>
    <p>Does shifting from DevOps to DevSecOps seem like a good option? If so, start with a review of your security in relation to DevOps practices. The goal of this review should be to gain knowledge of current roles, tools, and areas for improvement in your governance processes.</p>
    
    <p>The review should measure the desired state of DevSecOps. To do this, first formulate a program with a set of tasks aimed at delivering specific functions. Meanwhile, carefully consider how you can advocate for cultural change in the long term. Finally, define metrics and KPIs to monitor progress and apply lessons learned.</p>
    
    <p>We know that transforming DevOps into DevSecOps is an ongoing process. As DevSecOps practices mature, related tools, governance processes, developer awareness, knowledge, and training need to be frequently updated. A DevSecOps framework should include a way to track governance throughout the software delivery lifecycle.</p>
    
`;

const Post4 = () => {
    return <BlogPostPage title={title} date={date} author={author} content={content} />;
};

export { title };
export default Post4;
