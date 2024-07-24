import React from 'react';
import BlogPostPage from '../BlogPostPage';

const title = "Before Accessing Public Wi-Fi Again, Read This";
const date = "June 20, 2024";
const author = "GuardTech - Augusto Veiga"
const content = `
    <p>Free Wi-Fi is convenient but imperfect. On the one hand, it makes everyday life easier. You can keep up with work while waiting at the airport or access emails in a café. On the other hand, it leaves users vulnerable to cyber-attacks.</p>
    
    <p>It's a valuable service for customers, but its security is usually very low, if not non-existent. This guide is for you to understand exactly what's at stake when using public internet, to avoid unnecessary exposures, and to handle the risks intelligently.</p>
    
    <h2>Unencrypted Networks</h2>
    <p>An encrypted network converts the information sent between a device and the Wi-Fi router into a "secret code." Thus, no one can see this information without a key. Most Wi-Fi routers have encryption turned off by default. It's easier for a cybercriminal to capture web traffic and use it for malicious activities on an unencrypted network.</p>
    
    <h2>Malware Distribution</h2>
    <p>There are ways attackers can place malware on notebooks and cell phones without the user knowing. This is possible thanks to software vulnerabilities, security flaws, or weaknesses found in an operating system or program. Hackers exploit these gaps with codes that target a specific vulnerability. They then inject malware into the device.</p>
    
    <h2>Man-in-the-Middle Attacks</h2>
    <p>A man-in-the-middle (MITM) attack is a form of eavesdropping. When a computer connects to the Internet, data is sent from point A (device) to point B (service/site). An attacker can read these transmissions through Wi-Fi security weaknesses. What the user believed to be private is no longer. Scammers also create a MITM attack using phishing emails.</p>
    
    <h2>Sniffing</h2>
    <p>Cybercriminals can buy special software kits and even devices to spy on Wi-Fi signals. They can access everything the user is doing online: pages visited, any information entered on a site, login credentials. With this in hand, the criminal can even hijack an online session.</p>
    
    <h2>Malicious Access Points</h2>
    <p>These are rogue access points that trick victims into connecting to what they think is a legitimate network because the name sounds respectable. For example, if staying at a hotel, a user might think they are selecting the correct Wi-Fi when clicking on a network with the hotel's name. However, they didn't notice the slight typo in the network name. Connected to a rogue access point set up by cybercriminals, the user has allowed their personal information to be viewed.</p>
    
    <h2>Signs You Might Be Connected to an Insecure Wi-Fi Network</h2>
    <ul>
        <li>The network name matches a trusted network. In some cases, a hacker can set up a fraudulent Wi-Fi network to impersonate an existing network. Look for duplicate network names or if you are connected to your "home network" even when far from home;</li>
        <li>"HTTPS" sites are rendered as "HTTP." If you are trying to connect to a secure site and notice that the page is loading as an "HTTP" site, you might be connected to an insecure Wi-Fi access point. This could mean someone is trying to steal your information using a MITM attack;</li>
        <li>The name is generic. Malicious networks can appear in highly populated areas with vague names like "FreeWiFi" to attract users. In most cases, legitimate public Wi-Fi networks, such as those in cafés, will have a more specific name.</li>
    </ul>
    
    <h2>Practical Security Measures for Using Public Wi-Fi</h2>
    
    <h3>Adjust Connection Settings</h3>
    <p>Set the wireless settings on your devices not to connect automatically to available public access points. You can do this by disabling the "Connect automatically" feature on your devices.</p>
    
    <h3>Stick to "HTTPS" Sites</h3>
    <p>Browse only on sites that include an SSL Certificate while on public Wi-Fi. A site has an SSL certificate when the URL begins with "HTTPS." Sites that start with "HTTPS" are encrypted, adding an extra layer of security and making browsing more protected. If you connect to unsecured Wi-Fi networks and use "HTTP" addresses instead of "HTTPS," your traffic may be visible to anyone else on the network.</p>
    
    <h3>Avoid Accessing Confidential Information</h3>
    <p>If using free internet, do not access banking applications or make online purchases. Instead, use Wi-Fi to look up directions or find places you need to visit if you are traveling.</p>
    
    <h3>But if You Need to Access Confidential Data, Use a Privacy Screen</h3>
    <p>If you need to access confidential information in public areas, consider using a privacy screen on your devices. A privacy screen will darken your display for everyone except you, preventing fraudsters from copying your confidential information.</p>
    
    <h3>Use a VPN</h3>
    <p>A virtual private network (VPN) creates a secure tunnel on public Wi-Fi, allowing the user to send and receive information with an extra layer of security on the connection. However, for this to work, avoid free VPN versions.</p>
    
    <h3>Disable File Sharing</h3>
    <p>Make sure to disable file sharing before accessing public Wi-Fi. Keeping this setting enabled means making your device's folders accessible to anyone connected to the same public network.</p>
    
    <h3>Use Two-Factor Authentication (MFA)</h3>
    <p>Even if a cybercriminal gains access to your password while using public Wi-Fi, they will not be able to log into your accounts if two-factor authentication is enabled. Set it up on all services that offer it.</p>
    
    <h3>Keep Your Operating System Updated</h3>
    <p>Operating system updates often include important security patches that can further protect your device from Wi-Fi threats. By always installing the latest updates, you can browse the web knowing you are protected by the most up-to-date security features.</p>
    
    <h3>Remember to Log Off</h3>
    <p>When you finish browsing, make sure to log out of all services you were using. Also, check your settings to ensure your device "forgets the network" and does not automatically reconnect to that network again if you are within range without your permission. This can help minimize the time your device is connected to a public network.</p>
    
    <h3>Use Antivirus Software</h3>
    <p>With antivirus software installed, you can use public Wi-Fi networks knowing you are protected against threats like computer viruses and spyware.</p>
`;

const Post11 = () => {
    return <BlogPostPage title={title} date={date} author={author} content={content} />;
};

export { title }
export default Post11;
