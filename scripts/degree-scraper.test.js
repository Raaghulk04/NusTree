const assert = require("node:assert/strict");
const test = require("node:test");
const { extractFixedModuleCodes, parseDegreePage } = require("./degree-scraper");

const html = `
  <html>
    <body>
      <nav>CS9999 Navigation Noise</nav>
      <main>
        <h1>Bachelor of Computing (Honours) in Computer Science</h1>
        <h2>Common Curriculum Requirements</h2>
        <table>
          <tr><td>Digital Literacy - CS1101S Programming Methodology</td><td>4</td></tr>
          <tr><td>Critique and Expression - ES2660 Communicating in the Information Age</td><td>4</td></tr>
          <tr><td>Data Literacy - Either GEA1000, BT1101, ST1131 or DSA1101</td><td>4</td></tr>
          <tr><td>Singapore Studies - GES%</td><td>4</td></tr>
          <tr><td>Computing Ethics</td><td>IS1108 Digital Ethics and Data Privacy</td></tr>
        </table>
        <h2>Computer Science Foundation</h2>
        <ul>
          <li>CS1231S Discrete Structures</li>
          <li>CS2030S Programming Methodology II</li>
          <li>CS2040S Data Structures and Algorithms</li>
          <li>CS2100 Computer Organisation</li>
          <li>CS2101 Effective Communication for Computing Professionals</li>
          <li>CS2103T Software Engineering</li>
          <li>CS2106 Introduction to Operating Systems</li>
          <li>CS2109S Introduction to AI and Machine Learning</li>
          <li>CS3230 Design and Analysis of Algorithms</li>
        </ul>
        <h2>Information Security Requirements</h2>
        <p>Either</p>
        <p>IFS4205 Information Security Capstone Project or</p>
        <p>(CS4238 Computer Security Practice and IFS4103 Penetration Testing Practice)</p>
        <p>IS4231 Information Security Management</p>
        <h2>Industry Experience Requirement</h2>
        <p>CP3880 Advanced Technology Attachment Programme or IS4010 Industry Internship Programme</p>
        <ul>
          <li>
            A 3-month internship through one of the followings:
            <ul>
              <li>CP3200 Internship</li>
              <li>CP3110 Computing for Social Service Agencies II</li>
            </ul>
          </li>
        </ul>
        <p>Students who aim for Honours (Highest Distinction) must pass CP4101 BComp Dissertation.</p>
        <h2>Programme Electives</h2>
        <ul>
          <li>CS4230 Foundations of Modern Cryptography</li>
          <li>IFS4101 Legal Aspects of Information Security</li>
        </ul>
        <h2>Mathematics and Sciences</h2>
        <ul>
          <li>MA1521 Calculus for Computing</li>
          <li>MA1522 Linear Algebra for Computing</li>
          <li>ST2334 Probability and Statistics</li>
        </ul>
        <p>Students without H2 Mathematics are required to complete MA1301/X or equivalent.</p>
      </main>
    </body>
  </html>
`;

test("extractFixedModuleCodes keeps fixed modules and drops choices/placeholders", () => {
  assert.deepEqual(extractFixedModuleCodes(html), [
    "CS1101S",
    "ES2660",
    "IS1108",
    "CS1231S",
    "CS2030S",
    "CS2040S",
    "CS2100",
    "CS2101",
    "CS2103T",
    "CS2106",
    "CS2109S",
    "CS3230",
    "IS4231",
    "MA1521",
    "MA1522",
    "ST2334",
  ]);
});

test("parseDegreePage derives the degree name from the page heading", () => {
  assert.equal(parseDegreePage(html).degreeName, "Computer Science");
});
