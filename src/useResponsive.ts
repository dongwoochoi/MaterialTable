import { useMediaQuery } from "react-responsive";

export default function useResponsive() {
  const isTablet = useMediaQuery({
    query: `(max-width: 1279px)`,
  });
  const isPc = useMediaQuery({ query: `(min-width: 1280px)` });

  return { isPc, isTablet };
}
