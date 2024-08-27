//Description: Vimeo video Section

import { vimeoEmbeedType } from "../../types/common/VimeoEmbed";

const VimeoEmbed: React.FC<vimeoEmbeedType> = ({ videoId, width, height }) => {
  return (
    <div style={{
      width: `${width}px`,
      height: `${height}px`
    }} className="rounded-md overflow-clip bg-black">
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe
          src={videoId}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title="Gabriela Victorica - VIDEO 2"
        ></iframe>
      </div>
    </div>
  );
};

export default VimeoEmbed;
