import Link from "next/link";

export const Data = {
  navibar: [
    {
      name: "trade",
      path: "#",
      dot: false,
    },
    {
      name: "swap",
      path: "#",
      dot: true,
    },
    {
      name: "listings",
      path: "#",
      dot: false,
    },
    {
      name: "Leverage",
      path: "#",
      dot: false,
    },
    {
      name: "Buy $SOLAPE",
      path: "#",
      dot: false,
    },
  ],
  heroSectionChartData: [
    {
      name: "price 1",
      value: 722,
    },
    {
      name: "price 2",
      value: 330,
    },
    {
      name: "price 2",
      value: 1330,
    },
    {
      name: "price 2",
      value: 830,
    },
    {
      name: "price 2",
      value: 1430,
    },
    {
      name: "price 2",
      value: 2030,
    },
    {
      name: "price 2",
      value: 1470,
    },
    {
      name: "price 2",
      value: 1090,
    },
    {
      name: "price 2",
      value: 1890,
    },
    {
      name: "price 2",
      value: 1990,
    },
    {
      name: "price 2",
      value: 890,
    },
    {
      name: "price 2",
      value: 1090,
    },
    {
      name: "price 2",
      value: 1460,
    },
  ],
  solapeTokenButtonImage: [
    {
      name: "ftx",
      img: "assets/ftx.svg",
      width: 89,
      height: 28,
    },

    {
      name: "coinMarketCap",
      img: "assets/solana.svg",
      width: 146,
      height: 30,
    },
    {
      name: "fcoinGeckotx",
      img: "assets/coinGecko.svg",
      width: 108,
      height: 30,
    },
    {
      name: "coinMarketCap",
      img: "assets/coinMarketCap.svg",
      width: 146,
      height: 25,
    },
  ],
  solapeTokenChartData: [
    {
      name: "price 1",
      value: 722,
    },
    {
      name: "price 1",
      value: 1722,
    },
    {
      name: "price 2",
      value: 330,
    },
    {
      name: "price 2",
      value: 1330,
    },
    {
      name: "price 2",
      value: 830,
    },
    {
      name: "price 2",
      value: 1430,
    },
    {
      name: "price 2",
      value: 2030,
    },
    {
      name: "price 2",
      value: 1470,
    },
    {
      name: "price 2",
      value: 1090,
    },
    {
      name: "price 2",
      value: 1890,
    },
    {
      name: "price 2",
      value: 1990,
    },
    {
      name: "price 2",
      value: 890,
    },
    {
      name: "price 2",
      value: 1090,
    },
    {
      name: "price 2",
      value: 1460,
    },
  ],
  roadmapData: [
    {
      question: "Q2 2021",
      list: [
        "Dex launch",
        "$SOLAPE Token",
        "Mainnet",
        " Price API Integration",
        "Margin Trading (ApeXLeverage)",
        "Token data on CoinGecko, FTX, CoinMarketCap",
      ],
      current: false,
    },
    {
      question: "Q3 2021",
      list: [
        "DEX v2 Launch",
        "Swap App",
        "DEX Market orders",
        "NFT Storefront launched ",
        "Ecosystem buybacks",
      ],
      current: true,
    },
    {
      question: "Q4 2021",
      list: [
        "Token Minting",
        "PERP contracts",
        "NFT Marketplace",
        "Ecosystem buybacks ",
      ],
      current: false,
    },
    {
      question: "Q1 2021",
      list: ["Other dex tools: DCA", "Games", "Next NFT launch or NFT perks"],
      current: false,
    },
  ],
  servicesData: [
    {
      img: "/assets/apiAccess.svg",
      title: "API Access",
      des: " Looking to get access to our custom Solape API? Need a marke feed to implement into your up-and-coming DAPP?",
      btnText: "request access",
    },
    {
      img: "/assets/charting.svg",
      title: "charting",
      des: "Solape offers extensive charting tools on-site, as well as an external service for integration purposes.",
      btnText: "request access",
    },
    {
      img: "/assets/listing.svg",
      title: "listing",
      des: "Want us to list your project? Adding custom markets is allowed by default, but verified listings put you in a more prominent spot.",
      btnText: "submit request",
    },
  ],
  faqData: {
    rows: [
      {
        title:
          "Question one is amazingly hard, which is why we answer it well?",
        content: (
          <>
            I walked forty-seven miles of barbed wire, I got a cobra snake for a
            necktie, I got a brand new house by the road side, Made out of
            rattlesnake hide. I got me chimney made on top, made from a human
            skull, now come on, take a little walk with me. Now how{" "}
            <Link href="#" className="text-th-gradient-1 underline">
              {" "}
              do you love
            </Link>
            ? Come on Arlene, take me by hand, Let me know you understand. Who
            do you love? Ride nine times on the midnight train through{" "}
            <Link href="#" className="text-th-gradient-1 underline">
              {" "}
              the fire
            </Link>{" "}
            and cold rain who do you love I’ve got a tombstone hand in a
            graveyard mine, just twenty two and I don’t mind dying. Who do you
            love? Who do you love?
          </>
        ),
      },
      {
        title:
          "This is a 2 row example of a question. We should generally avoid these in the actual FAQ but I’m sure some will occur.",
        content: (
          <>
            I walked forty-seven miles of barbed wire, I got a cobra snake for a
            necktie, I got a brand new house by the road side, Made out of
            rattlesnake hide. I got me chimney made on top, made from a human
            skull, now come on, take a little walk with me. Now how{" "}
            <Link href="#" className="text-th-gradient-1 underline">
              {" "}
              do you love
            </Link>
            ? Come on Arlene, take me by hand, Let me know you understand. Who
            do you love? Ride nine times on the midnight train through{" "}
            <Link href="#" className="text-th-gradient-1 underline">
              {" "}
              the fire
            </Link>{" "}
            and cold rain who do you love I’ve got a tombstone hand in a
            graveyard mine, just twenty two and I don’t mind dying. Who do you
            love? Who do you love?
          </>
        ),
      },
      {
        title: "This is how it looks when the question is active?",
        content: (
          <>
            I walked forty-seven miles of barbed wire, I got a cobra snake for a
            necktie, I got a brand new house by the road side, Made out of
            rattlesnake hide. I got me chimney made on top, made from a human
            skull, now come on, take a little walk with me. Now how{" "}
            <Link href="#" className="text-th-gradient-1 underline">
              {" "}
              do you love
            </Link>
            ? Come on Arlene, take me by hand, Let me know you understand. Who
            do you love? Ride nine times on the midnight train through{" "}
            <Link href="#" className="text-th-gradient-1 underline">
              {" "}
              the fire
            </Link>{" "}
            and cold rain who do you love I’ve got a tombstone hand in a
            graveyard mine, just twenty two and I don’t mind dying. Who do you
            love? Who do you love?
          </>
        ),
      },
    ],
  },
  header2Data: [
    {
      name: "dex",
      path: "#",
      isNew: false,
    },
    {
      name: "swap",
      path: "#",
      isNew: false,
    },
    {
      name: "markets",
      path: "#",
      isNew: true,
    },
    {
      name: "token",
      path: "#",
      isNew: false,
    },
    {
      name: "airdrops",
      path: "#",
      isNew: false,
    },
    {
      name: "docs",
      path: "#",
      isNew: false,
    },
  ],
};
