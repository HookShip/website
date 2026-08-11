const nodes = [
  { id: "contract", label: "Contract", meta: "orders.v1" },
  { id: "route", label: "Route", meta: "primary" },
  { id: "deliver", label: "Deliver", meta: "signed" },
  { id: "observe", label: "Observe", meta: "metadata" },
] as const;

export function SignalFlow() {
  return (
    <div className="signal-flow" aria-label="Webhook delivery flow">
      <div className="signal-flow__topline">
        <span>Live route / synthetic</span>
        <span className="signal-flow__status">
          <i aria-hidden="true" />
          ready
        </span>
      </div>
      <div className="signal-flow__canvas">
        <div className="signal-flow__rail" aria-hidden="true">
          <i />
        </div>
        {nodes.map((node, index) => (
          <div className="signal-node" key={node.id}>
            <span className="signal-node__index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <strong>{node.label}</strong>
            <span>{node.meta}</span>
          </div>
        ))}
      </div>
      <div className="signal-flow__log">
        <span>202 accepted</span>
        <span>signature verified</span>
        <span>payload-free status</span>
      </div>
    </div>
  );
}
