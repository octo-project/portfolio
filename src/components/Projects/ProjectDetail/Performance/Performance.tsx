import Metrics from "../../../Metrics/Metrics";
import { useLocalFormatHook } from "../../../../common/hooks/localFormatHook";

const Performance = () => {
  const { formatText } = useLocalFormatHook();

  return (
    <div className="performance">
      <div className="perf-root">
        <h2>Performance</h2>
        <span>
          {formatText("performanceText")}
          <a
            href="https://pagespeed.web.dev/analysis/https-mathieu-portf-netlify-app/pxzqs6fgbi?form_factor=desktop"
            target="_blank"
            rel="noopener noreferrer"
            className="metrics-link"
          >
            : {formatText("performanceLink")}
          </a>
        </span>
        <div className="performance-container">
          <Metrics label={"Performance"} percentage={98} />
          <Metrics label={"Accessibility"} percentage={93} />
          <Metrics label={"Best Practices"} percentage={100} />
          <Metrics label={"SEO"} percentage={100} />
        </div>
      </div>
    </div>
  );
};

export default Performance;
