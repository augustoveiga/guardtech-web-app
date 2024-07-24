import React from 'react';
import BlogPostPage from '../BlogPostPage';

const title = "Want to Avoid Phishing? Learn to Thoroughly Investigate Email Headers";
const date = "June 20, 2024";
const author = "GuardTech - Augusto Veiga";
const content = `
    <p>Less complex cyber-attacks continue to cause the most damage to companies. According to this year's IBM report, phishing is still the most common method criminals use to gain access to victims' networks.</p>
    
    <p>And the scenario is not expected to get any easier: it is predicted that identifying a malicious email through its content will become increasingly complex, with the sophistication of phishing tools and attacks driven by the evolution of Artificial Intelligence and Phishing as a Service (PaaS).</p>
    
    <p>That is why knowing how to detect fraudulent emails beyond the message is essential. In this article, you will understand how to do this, avoiding social engineering frauds through email header analysis to check the sender's authenticity.</p>
    
    <h2>But after all, what information is contained in the email header?</h2>
    <p>The email header, also known as Header, is a fundamental part of the message. It is a record of information that contains the entire history of the email. Among this information are:</p>
    <ul>
        <li>The origin of the message;</li>
        <li>The path the email took before reaching the recipient;</li>
        <li>The sender's IP address;</li>
        <li>The service provider.</li>
    </ul>
    
    <p>Reviewing header data can help identify a "header modification," which is a strong indication that the email was sent with malicious intent. After an analysis, it is possible to extract the IP from the header and set a message flow rule to block emails with that IP to avoid possible future fraud.</p>
    
    <p>Next, you will understand how to analyze the header fields' information to identify potential security threats in the email.</p>
    
    <h2>Understanding the Header Fields</h2>
    <p>Each email provider has a different path for the user to access the complete header of a message. In Gmail, for example, follow these steps:</p>
    <ol>
        <li>Open the email with the header you want to see.</li>
        <li>Next to Reply ↩, click More ⁝ › Show original.</li>
    </ol>
    
    <p>To correctly interpret the information, it is important to analyze its structure chronologically, that is, from top to bottom.</p>
    
    <h3>1. Delivered-To:</h3>
    <p>This field is added by the email servers involved in the delivery process and shows the final recipient's email address to which the message was delivered. With it, you can track which email account received the message, especially in cases of forwarding or redirecting emails.</p>
    
    <h3>2. Received:</h3>
    <p>This field is added by each email server through which the message passes during its delivery. It contains relevant information from each server, which generally includes its IP address or name, the date, and the time the message was received.</p>
    
    <p>The Received fields are listed in reverse order, meaning the most recent server is listed first. The sequence of servers allows tracking the message's path from the sender to the final recipient. Additionally, it can help identify delays, delivery problems, or possible manipulations.</p>
    
    <h3>3. X-Received:</h3>
    <p>The X-Received field is similar to the Received field but is used for internal records or to specify additional information about the delivery process. It may contain specific server details, such as information about the protocol used to deliver the message or other internal tracking information.</p>
    
    <h3>4. Return-Path:</h3>
    <p>This field indicates the email address to which reply messages should be sent. It is set by the sending server and generally corresponds to the original sender's address. It is important to note that the From field can be spoofed, but the Return-Path field is used for delivery purposes and cannot be easily altered by intermediaries.</p>
    
    <h3>5. Received From:</h3>
    <p>The Received From field provides information about the origin server from which the message was received. It may contain the server's IP address or name and is added by the intermediate server that received the message from the origin. This field is useful for identifying the first step of the message's journey and can help track its origin.</p>
    
    <h3>6. Received-SPF:</h3>
    <p>The Received-SPF field contains information about the SPF (Sender Policy Framework) check performed on the message. SPF is an authentication mechanism that allows domain administrators to specify the email servers authorized to send messages on behalf of their domain. This field indicates whether the message passed or failed the SPF check. A successful pass indicates that the sending server is authorized to send emails on behalf of the originating domain, increasing confidence in the sender's authenticity.</p>
    
    <p>The possible SPF results are:</p>
    <ul>
        <li>Pass: the source is valid</li>
        <li>Softfail: possible fake source</li>
        <li>Fail: the source is invalid</li>
        <li>Neutral: source validity is hard to determine</li>
        <li>None: SPF record not found</li>
        <li>Unknown: SPF check could not be performed</li>
        <li>Error: an error occurred during the SPF check</li>
    </ul>
    
    <h3>7. Authentication-Results:</h3>
    <p>The Authentication-Results field provides information about the results of the authentication checks performed on the message. It includes information about the sender's authenticity and can cover different authentication techniques, such as SPF, DKIM, and DMARC. The results of the checks are reported in this field to inform the recipient about the message's authenticity and reliability.</p>
    
    <h3>8. DKIM-Signature:</h3>
    <p>The DKIM-Signature field contains the DKIM (DomainKeys Identified Mail) signature applied to the message. DKIM is an email authentication method that uses asymmetric cryptography to verify the message's integrity and authenticity. The sender adds a cryptographic signature to the message header using a private key, while the receiving server verifies this signature using the public key stored in the domain's DNS record. The DKIM-Signature field in the email header contains information about the DKIM signature applied to the message, including the domain used to sign and the public key identifier. DKIM verification helps ensure that the message has not been modified during transmission and that the sender is authentic.</p>
    
    <p>Careful analysis of the headers and their fields helps understand the messages' history, authenticity, and path. By knowing how to read the information provided by the header, it is possible to confirm the sender, identify security threats, and trace the message back to its origin to avoid potential fraud and phishing attacks, protecting personal and corporate information.</p>
`;

const Post10 = () => {
    return <BlogPostPage title={title} date={date} author={author} content={content} />;
};

export { title }
export default Post10;
