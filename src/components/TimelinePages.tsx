import Clock from "./Clock";

interface TimelineEntry {
  time: string;
  description: (string | { type: "url"; url: string; content: string })[];
}

interface TimelineYearEntry {
  year: number | null;
  yearInRoman: string;
  title: string;
  items: TimelineEntry[];
}

const timelineData: TimelineYearEntry[] = [
  {
    year: 2019,
    yearInRoman: "ⅯⅯⅩⅨ",
    title: "CharaChorder One",
    items: [
      {
        time: "Jun",
        description: [
          {
            type: "url",
            url: "https://charachorder.com",
            content: "CharaChorder",
          },
          " was founded.",
        ],
      },
      { time: "Jun", description: ["CharaChorder One was introduced."] },
    ],
  },
  {
    year: 2022,
    yearInRoman: "ⅯⅯⅩⅩⅡ",
    title: "CharaChorder Lite & X",
    items: [
      {
        time: "May",
        description: [
          {
            type: "url",
            url: "https://www.charachorder.com/products/charachorder-lite",
            content: "CharaChorder Lite",
          },
          " began being sold.",
        ],
      },
      {
        time: "Nov",
        description: [
          "Kickstarter of ",
          {
            type: "url",
            url: "https://www.charachorder.com/products/charachorder-x",
            content: "CharaChorder X",
          },
          " started.",
        ],
      },
    ],
  },
  {
    year: 2023,
    yearInRoman: "ⅯⅯⅩⅩⅢ",
    title: "Master Forge",
    items: [
      {
        time: "Nov",
        description: [
          {
            type: "url",
            url: "https://youtu.be/fux9gU3M25E",
            content: "ChorderCon 2023",
          },
          " was held.",
        ],
      },
      {
        time: "Nov",
        description: [
          {
            type: "url",
            url: "https://www.charachorder.com/collections/forge-collection/products/master-forge-1",
            content: "Master Forge",
          },
          " was revealed in ",
          {
            type: "url",
            url: "https://youtu.be/fux9gU3M25E?si=yfcLuXMcfKwJzLoq&t=1025",
            content: "ChorderCon 2023",
          },
          ".",
        ],
      },
    ],
  },
  {
    year: 2024,
    yearInRoman: "ⅯⅯⅩⅩⅣ",
    title: "CharaChorder Two",
    items: [
      {
        time: "Nov",
        description: [
          {
            type: "url",
            url: "https://youtu.be/yh5c10bW7z0",
            content: "ChorderCon 2024",
          },
          " was held.",
        ],
      },
      {
        time: "Nov",
        description: [
          {
            type: "url",
            url: "https://www.charachorder.com/products/cc2",
            content: "CharaChorder Two",
          },
          " was announced in ",
          {
            type: "url",
            url: "https://youtu.be/yh5c10bW7z0?t=223",
            content: "ChorderCon 2024",
          },
          ".",
        ],
      },
    ],
  },
  {
    year: 2025,
    yearInRoman: "ⅯⅯⅩⅩⅤ",
    title: "CCIO & CC2.1",
    // title: "CCIO & CC2.1 & CCU",
    items: [
      {
        time: "Aug",
        description: [
          "The beta of ",
          {
            type: "url",
            url: "https://adventure.charachorder.io/",
            content: "CCIO",
          },
          " started.",
        ],
      },
      { time: "Nov", description: ["ChorderCon 2025 was held."] },
      // { time: "Nov", description: ["CCU was revealed in ChorderCon 2025."] },
      {
        time: "Nov",
        description: [
          {
            type: "url",
            url: "https://www.charachorder.com/products/cc2",
            content: "CC2.1",
          },
          " was introduced.",
        ],
      },
    ],
  },
  {
    year: null,
    yearInRoman: "ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ",
    title: "To be continued...",
    items: [
      {
        time: "",
        description: [
          "until the whole world can type at the speed of thought...",
        ],
      },
    ],
  },
];

export function TimelinePages() {
  return (
    <>
      {timelineData.map((entry) => (
        <div
          key={entry.year}
          className="h-screen flex items-center justify-center flex-wrap"
        >
          <div className="flex gap-16 justify-center flex-col lg:flex-row items-center">
            <div className="size-64 flex-none relative">
              <Clock
                className="opacity-20"
                labels={entry.yearInRoman
                  .repeat(Math.ceil(12 / entry.yearInRoman.length))
                  .split("")}
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-10 text-6xl font-bold">
                {entry.year}
              </div>
            </div>
            <div className="flex-none flex items-center justify-center gap-8 flex-col w-[520px]">
              <h1 className="text-3xl lg:text-5xl font-bold">{entry.title}</h1>
              <ul className="flex flex-col lg:text-xl">
                {entry.items.map((item, index) => (
                  <li key={index}>
                    {item.time ? <span>{item.time} - </span> : null}
                    {item.description.map((desc, descIndex) => {
                      if (typeof desc === "string") {
                        return <span key={descIndex}>{desc}</span>;
                      } else if (desc.type === "url") {
                        return (
                          <a
                            key={descIndex}
                            href={desc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-4"
                          >
                            {desc.content}
                          </a>
                        );
                      }
                    })}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
