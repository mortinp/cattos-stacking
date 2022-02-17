import Head from "next/head";
import Image from "next/image";
import Box from "@mui/material/Box";
import ConnectButton from "../components/ConnectButton";
import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
export default function Home() {
  const address = useSelector((state) => state.app.appInfo.address);
  const totalNftInWallet = useSelector(
    (state) => state.app.appInfo.totalNftInWallet
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Ethereum</title>
        <meta name="description" content="Ethereum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className={styles.main}>
        <div>
          <h1>Wallet Id: {address}</h1>
          <Box display="flex" justifyContent="center">
            {!address && <ConnectButton />}
          </Box>

          <h1>Total Nft In Wallet: {totalNftInWallet}</h1>
        </div>
      </main> */}
      <section class="cattos">
        <div class="container">
          <div class="cattos__content d-flex">
            <img class="cattos__logo" src="/logo.png" alt="missing" />

            <ul class="nav nav-tabs cattos__tabBox">
              <li class="active cattos__tab">
                <a data-toggle="tab" href="#home">
                  Buy
                </a>
              </li>
              <li class="cattos__tab">
                <a data-toggle="tab" href="#menu1">
                  Mint
                </a>
              </li>
              <li class="cattos__tab">
                <a data-toggle="tab" href="#menu2">
                  Stake
                </a>
              </li>
              <li class="cattos__tab cattos__tab--change">
                <a class="nftconnect" data-toggle="tab" href="#menu3">
                  <img
                    class="nftconnect__icon"
                    src="/wallet-icon.png"
                    alt="missing"
                  />
                  Connect Wallet
                </a>
              </li>
              <li class="cattos__bar" onclick="myFunction(this)">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
              </li>
            </ul>
          </div>
          <div class="tab-content cattos__tabInfo">
            <div id="home" class="tab-pane fade in active show">
              <div class="cattos__slider">
                <div>
                  <div class="cattos__slide">
                    <h2 class="cattos__title">
                      Welcome To The World of Cattos
                    </h2>
                    <h3 class="cattos__detail">
                      where cryptocurrency is used in real world problem. In
                      this application we will use it for passive
                    </h3>
                    <div class="cattos__bottom">
                      <h4 class="cattos__number">0 / 10000</h4>
                      <ul class="d-flex cattos__tabBox cattos__tabBox--slider">
                        <li class="cattos__tab cattos__tab--slider">
                          <a href="">Road Map</a>
                        </li>
                        <li class="cattos__tab cattos__tab--slider">
                          <a href="">Oasis</a>
                        </li>
                        <li class="cattos__tab cattos__tab--slider">
                          <a href="">Rarity</a>
                        </li>
                      </ul>
                      <h5 class="cattos__cost">
                        1 CTN costs 0.0013 BCH Excluding gas fees,
                      </h5>
                      <h3 class="cattos__detail">
                        Connect to the SmartBCH network
                      </h3>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="cattos__slide">
                    <h2 class="cattos__title">Get the power</h2>
                    <h3 class="cattos__detail">
                      where cryptocurrency is used in real world problem. In
                      this application we will use it for passive
                    </h3>
                    <div class="cattos__bottom">
                      <ul class="d-flex cattos__tabBox cattos__tabBox--slider">
                        <li class="cattos__tab cattos__tab--slider">
                          <a href="">Buy USDT</a>
                        </li>
                        <li class="cattos__tab cattos__tab--slider">
                          <a href="">Buy smartBCH</a>
                        </li>
                        <li class="cattos__tab cattos__tab--slider">
                          <a href="">Buy smartBCH</a>
                        </li>
                      </ul>
                      <h5 class="cattos__cost">
                        1 CTN costs 0.0013 BCH Excluding gas fees,
                      </h5>
                      <h3 class="cattos__detail">
                        Connect to the SmartBCH network
                      </h3>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="cattos__slide">
                    <h2 class="cattos__title">Inspiring header</h2>
                    <h3 class="cattos__detail">
                      where cryptocurrency is used in real world problem. In
                      this application we will use it for passive
                    </h3>
                    <div class="cattos__bottom">
                      <ul class="d-flex cattos__tabBox cattos__tabBox--slider">
                        <li class="cattos__tab cattos__tab--slider">
                          <a href="">Stake</a>
                        </li>
                        <li class="cattos__tab cattos__tab--slider">
                          <a href="">Unstake</a>
                        </li>
                        <li class="cattos__tab cattos__tab--slider">
                          <a href="">Withdraw</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
