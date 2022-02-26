import "./styles.css";
import NavBar from "./NavBar";
import SearchCard from "./SearchCard";
import SupplyCard from "./SupplyCard";
import StatsCard from "./StatsCard";
import TpsCard from "./TpsCard";
import PriceCard from "./PriceCard";
import BalanceCard from "./BalanceCard";
import { Container } from "@chakra-ui/react";
import "./style.css"
export default function App() {
  return (
    <>
      <h1 id="heading">Welcome to HennyScript<br />
        Homepage of HENDX Token</h1>
      <h3>HennyScript is a Javascript library made specifically for when you are drinking.</h3>
      <h4>The HENDX token is a Utility token that will be redeemable for custom software.</h4>
      <p>My Twitter: <a href="https://twitter.com/hendrixjoshua">🐥</a></p>
      <span id="emoji">🍻</span>
      <h5>HENDX provides ownership over the success of HennyScript</h5>
      <h6>HennyScript earnings and donations go directly into HENDX Liquidity Pool and Token Buybacks.</h6>
      <Container maxW="3xl">
        Solana INFO
        {/* Get SOL price from Coingecko */}
        <PriceCard />

        {/* Get user SOL balance with Phantom Wallet */}
        <BalanceCard />
        <p>HENDX Roadmap:<br /> 2/25/22: Inital Liquidity pooled and 20% up for sale on Raydium. <br />
          3/1/22: Secondary offering, added liquidity up to 20% more for sale based on price.<br />
          4/1/22: HENDX Utility Development Milestone, HENDX will have a function to redeem custom software from HENDX Dev Team.<br />


        </p>
        <p>Here is a lowdown on how to use HennyScript and the functions within.</p>


        <p>Add this link to the top of your code and viola you have access to the functions!</p>
        <code className="prettyprint">&lt;script src="https://hennyscript.netlify.app/scripts/main.js"&gt;&lt;/script&gt;</code>
        <br />

        <p>Here are some of the functions and their equivalents</p>
        <p>Instead of:&emsp;<code className="prettyprint">Document.querySelector()</code>&emsp;You can use:&emsp;<code className="prettyprint">get()</code></p>
        <p>Instead of using:&emsp;<code className="prettyprint">DOMElement.addEventListener()</code>&emsp;You can use:
          &emsp;<code className="prettyprint"><span className="nocode kwd">listen</span>(selector,eventType,callback)</code>&emsp;<br />Passing your selector for your object
          as the
          first parameter.</p>
        <p>Instead of:&emsp;<code className="prettyprint">setTimeout()</code>&emsp;You can use:&emsp;<code className="prettyprint"><span className="nocode kwd">delay</span>()</code></p>
        <p>Instead of:&emsp;<code className="prettyprint">setInterval()</code>&emsp;You can use:&emsp;<code className="prettyprint"><span className="nocode kwd">loop</span>()</code></p>
        <p>Instead of:&emsp;<code className="prettyprint">
          Array.filter(item <span className="nocode">=&gt;</span> item !<span className="nocode">==</span> value)</code>&emsp; To filter out a single value you can
          use:&emsp;<code className="prettyprint">filterOut(Array, valueToFilterOut)</code>
        </p>
        <p>Instead of:&emsp;<code className="prettyprint">Array.sort((a,b) <span className='nocode'>=&gt;</span>  a - b )</code>&emsp;You can use:&emsp;<code className="prettyprint"><span className="nocode kwd">numberSort</span>(Array)</code>&emsp;And it will
          automatically sort by value instead of lexigraphically.</p>
        <p>Instead of:&emsp;<code className="prettyprint">console.log(Array)</code>&emsp;You can use:&emsp;<code className="prettyprint">Array.<span className="nocode kwd">log</span>()</code> replacing
          Array with your Array variable. This also works with strings and numbers</p>
        <p>Instead of:&emsp;<code className="prettyprint">Array.push()</code>&emsp;You can use:&emsp;<code className="prettyprint">Array.add()</code></p>
        <p>Instead of:&emsp;<code className="prettyprint">Array.toString()</code>&emsp;You can use:&emsp;<code className="prettyprint">Array.<span className="nocode kwd">toWords</span>()</code></p>
        <p>You can reverse a string just by using <code className="prettyprint">&emsp;"yourString".<span className="nocode kwd">reverse</span>()</code></p>
        <p>Got new ideas for Hennyscript? Submit a pull request with your own changes or suggestions in the readme!</p>
        <h2>Copyright &copy;2021</h2>
      </Container>
    </>
  );
}
