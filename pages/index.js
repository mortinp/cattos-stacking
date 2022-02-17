import Head from "next/head";
import Image from "next/image";
import ConnectButton from "../components/ConnectButton";
import { NavBar } from "../components";
import
import { useSelector, useDispatch } from "react-redux";
export default function Home() {
  const address = useSelector((state) => state.app.appInfo.address);
  const totalNftInWallet = useSelector(
    (state) => state.app.appInfo.totalNftInWallet
  );

  return (
    <>
      <Head>
        <title>Cattos</title>
        <meta name="description" content="Cattos" />
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
      <section className="cattos">
        <NavBar />
        <Slider />
      </section>
    </>
  );
}
