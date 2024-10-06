"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import {
  CartesianGrid,
  Label,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-primary-background-light p-2 bg-opacity-50 rounded-sm space-y-2">
        <p>
          {parseFloat(payload[0].payload.Experience).toFixed(2)} years of
          experience
        </p>
        <p>
          Projected acceptance:{" "}
          {parseFloat(payload[0].payload["Acceptance Rate"]).toFixed(2)}%
        </p>
        <div className="flex flex-row space-x-4">
          {payload[0].payload.Positions.map(
            (
              position: {
                position: string;
                location: string;
                company: string;
              },
              idx: number,
            ) => (
              <div
                className="bg-primary-background rounded-sm p-2 grow basis-0"
                key={idx}
              >
                <h1 className="text-[14px] font-medium">{position.position}</h1>
                <p className="text-[10px] font-light">{position.location}</p>
                <p className="text-[12px] font-light">{position.company}</p>
              </div>
            ),
          )}
        </div>
      </div>
    );
  }

  return null;
};

export default function Chart({ data }: { data: [] }) {
  return (
    <ChartContainer config={chartConfig}>
      <ScatterChart>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="Experience"
          type="number"
          name="Experience"
          unit="Year(s)"
        >
          <Label
            value="Experience (years)"
            offset={0}
            position="insideBottom"
          />
        </XAxis>
        <YAxis
          dataKey="Acceptance Rate"
          type="number"
          name="Acceptance Rate"
          unit="%"
        ></YAxis>
        <ZAxis
          dataKey="Confidence"
          type="number"
          name="Confidence"
          range={[64, 144]}
        />
        <ChartTooltip content={<CustomTooltip />} />
        <Scatter name="Applicants" data={data} fill="#8884d8" />
        <Scatter
          name="You"
          data={[{ Experience: 5.5, "Acceptance Rate": 34.5, Confidence: 100 }]}
          fill="#36E099"
        />
      </ScatterChart>
    </ChartContainer>
  );
}
