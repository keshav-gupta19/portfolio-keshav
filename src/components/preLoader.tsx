const Preload = ({ load }: { load: boolean }) => {
  return <div id={load ? "preload" : "noPreload"}></div>;
};

export default Preload;
