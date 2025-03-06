import * as React from 'react';

export default function IframeEmbed() {
  return (
    <div>
      <iframe
        src="https://play.gamepix.com/hoop-world/embed?sid=12411"
        width={600}
        height={400}
        frameBorder="0"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}