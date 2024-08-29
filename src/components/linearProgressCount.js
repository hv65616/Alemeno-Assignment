import * as React from "react";
import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";
import { useCountUp } from "use-count-up";

export default function LinearProgressCountUp({ progress }) {
  const { value } = useCountUp({
    isCounting: true,
    duration: 4,
    easing: "linear",
    start: 0,
    end: progress, // Use the provided progress value
    onComplete: () => ({
      shouldRepeat: true,
      delay: 1,
    }),
  });

  return (
    <LinearProgress
      determinate
      variant="outlined"
      color="neutral"
      size="sm"
      thickness={24}
      value={Number(value)}
      sx={{
        "--LinearProgress-radius": "20px",
        "--LinearProgress-thickness": "24px",
      }}
    >
      <Typography
        level="body-xs"
        fontWeight="xl"
        textColor="common.white"
        sx={{ mixBlendMode: "difference" }}
      >
        PROGRESSING... {`${Math.round(Number(value))}%`}
      </Typography>
    </LinearProgress>
  );
}
