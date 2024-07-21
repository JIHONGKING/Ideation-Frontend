"use client";

import { Button } from "@/components/ui/button";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  CartesianGrid,
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

export default function Analyze({ data }: { data: any[] }) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-primary-background-light p-2 bg-opacity-60 rounded-sm space-y-2">
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
                  <h1 className="text-[12px] font-medium">
                    {position.position}
                  </h1>
                  <p className="text-[8px] font-light">{position.location}</p>
                  <p className="text-[10px] font-light">{position.company}</p>
                </div>
              ),
            )}
          </div>
        </div>
      );
    }

    return null;
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-darkest relative bottom-0 text-primary-background w-[120px] h-[40px] text-sm font-medium rounded-sm">
          Analyze
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[800px] rounded-lg bg-primary-background">
        <DialogHeader className="text-xl font-normal">
          Frontend Development
        </DialogHeader>
        <ChartContainer config={chartConfig}>
          <ScatterChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="Experience"
              type="number"
              name="Experience"
              unit="Year(s)"
            />
            <YAxis
              dataKey="Acceptance Rate"
              type="number"
              name="Acceptance Rate"
              unit="%"
            />
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
              data={[{ Experience: 5.5, "Acceptance Rate": 34.5 }]}
              fill="#36E099"
            />
          </ScatterChart>
        </ChartContainer>
      </DialogContent>
    </Dialog>
  );
}
