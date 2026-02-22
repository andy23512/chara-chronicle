interface TimelineEntry {
  time: string;
  description: string;
}

interface TimelineYearEntry {
  year: number;
  title: string;
  items: TimelineEntry[];
}

const timelineData: TimelineYearEntry[] = [
  {
    year: 2019,
    title: "CharaChorder One",
    items: [
      { time: "Jun", description: "CharaChorder was founded." },
      { time: "Jun", description: "CharaChorder One was introduced." },
    ],
  },
  {
    year: 2022,
    title: "CharaChorder Lite & X",
    items: [
      { time: "May", description: "CharaChorder Lite began being sold." },
      { time: "Nov", description: "Kickstarter of CCX started." },
    ],
  },
  {
    year: 2023,
    title: "Master Forge",
    items: [
      { time: "Nov", description: "ChorderCon 2023 was held." },
      {
        time: "Nov",
        description: "Master Forge was revealed in ChorderCon 2023.",
      },
    ],
  },
  {
    year: 2024,
    title: "CharaChorder Two",
    items: [
      { time: "Nov", description: "ChorderCon 2024 was held." },
      {
        time: "Nov",
        description: "CharaChorder Two was announced in ChorderCon 2024.",
      },
    ],
  },
  {
    year: 2025,
    title: "CCIO & CCU",
    items: [
      {
        time: "Aug",
        description:
          "The beta of CCIO started. It's a revolutionary typing game and integrated platform, combining educational tools, MMO elements, social networking, and device management functions.",
      },
      { time: "Nov", description: "ChorderCon 2025 was held." },
      { time: "Nov", description: "CCU was revealed in ChorderCon 2025." },
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
            <div className="size-64 flex-none sticky font-bold text-6xl text-gray-10 flex items-center justify-center">
              {entry.year}
            </div>
            <div className="flex-none flex items-center justify-center gap-8 flex-col w-[500px]">
              <h1 className="text-3xl lg:text-5xl font-bold">{entry.title}</h1>
              <ul className="flex flex-col lg:text-xl">
                {entry.items.map((item, index) => (
                  <li key={index}>{`${item.time} - ${item.description}`}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
