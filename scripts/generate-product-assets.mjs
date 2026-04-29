import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "public", "images", "products");
mkdirSync(outDir, { recursive: true });

const escapeXml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const baseDefs = (id, accent, dark) => `
  <defs>
    <linearGradient id="${id}-bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#fffaf2"/>
      <stop offset="0.52" stop-color="#f0dfc2"/>
      <stop offset="1" stop-color="${accent}"/>
    </linearGradient>
    <linearGradient id="${id}-glass" x1="0" x2="1">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.32"/>
      <stop offset="0.2" stop-color="${dark}"/>
      <stop offset="1" stop-color="#0f0a09"/>
    </linearGradient>
    <filter id="${id}-shadow" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="24" stdDeviation="22" flood-color="#171514" flood-opacity="0.22"/>
    </filter>
  </defs>`;

const wineSvg = ({ file, title, subtitle, label, fill, accent, dark = "#2b1018" }) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(title)}</title>
  <desc id="desc">Imagen de producto WineNotFound para ${escapeXml(title)}.</desc>
  ${baseDefs(file, accent, dark)}
  <rect width="1200" height="900" fill="url(#${file}-bg)"/>
  <path d="M0 682 C210 610 286 738 482 666 C682 592 794 548 1200 638 L1200 900 L0 900 Z" fill="#2b1018" opacity="0.13"/>
  <rect x="118" y="650" width="964" height="80" rx="40" fill="#171514" opacity="0.16"/>
  <g filter="url(#${file}-shadow)">
    <rect x="510" y="160" width="180" height="560" rx="52" fill="${fill}"/>
    <rect x="552" y="82" width="96" height="128" rx="24" fill="${fill}"/>
    <rect x="544" y="68" width="112" height="30" rx="15" fill="#171514"/>
    <path d="M526 168 C570 152 646 154 684 178 L684 694 C620 716 564 716 526 694 Z" fill="url(#${file}-glass)" opacity="0.62"/>
    <rect x="536" y="402" width="128" height="150" rx="10" fill="#fffaf2"/>
    <rect x="552" y="421" width="96" height="8" fill="${accent}"/>
    <text x="600" y="486" text-anchor="middle" font-family="Georgia, serif" font-size="40" font-weight="700" fill="#2b1018">${escapeXml(label)}</text>
    <rect x="552" y="516" width="96" height="7" fill="#566b52" opacity="0.78"/>
  </g>
  <text x="76" y="112" font-family="Inter, Segoe UI, sans-serif" font-size="32" font-weight="800" fill="#566b52" letter-spacing="4">WINE NOT FOUND</text>
  <text x="76" y="778" font-family="Georgia, serif" font-size="72" font-weight="700" fill="#2b1018">${escapeXml(title)}</text>
  <text x="80" y="832" font-family="Inter, Segoe UI, sans-serif" font-size="28" font-weight="700" fill="#641c2f">${escapeXml(subtitle)}</text>
</svg>
`;

const packSvg = ({ file, title, subtitle, label, accent, variant }) => {
  const bottles =
    variant === "vertical"
      ? `
    <rect x="372" y="206" width="118" height="390" rx="38" fill="#151416"/>
    <rect x="405" y="128" width="52" height="110" rx="16" fill="#151416"/>
    <rect x="542" y="176" width="128" height="420" rx="40" fill="#3f1322"/>
    <rect x="580" y="94" width="52" height="118" rx="16" fill="#3f1322"/>
    <rect x="724" y="226" width="112" height="370" rx="36" fill="#641c2f"/>
    <rect x="754" y="154" width="52" height="102" rx="16" fill="#641c2f"/>`
      : variant === "maridaje"
        ? `
    <circle cx="468" cy="434" r="132" fill="#fffaf2"/>
    <circle cx="468" cy="434" r="82" fill="#f0dfc2"/>
    <path d="M704 212 C778 314 760 476 676 586" fill="none" stroke="#641c2f" stroke-width="18" stroke-linecap="round"/>
    <ellipse cx="718" cy="320" rx="72" ry="86" fill="#641c2f" opacity="0.88"/>
    <rect x="706" y="402" width="24" height="174" rx="12" fill="#641c2f"/>
    <rect x="660" y="572" width="116" height="22" rx="11" fill="#641c2f"/>`
        : variant === "subscription"
          ? `
    <rect x="348" y="278" width="510" height="270" rx="26" fill="#c39a52"/>
    <path d="M348 310 L604 206 L858 310 L604 402 Z" fill="#d8b675"/>
    <path d="M604 402 L858 310 L858 548 L604 664 Z" fill="#b66a45"/>
    <path d="M348 310 L604 402 L604 664 L348 548 Z" fill="#c39a52"/>
    <rect x="520" y="218" width="78" height="230" rx="22" fill="#641c2f"/>
    <rect x="632" y="222" width="78" height="234" rx="22" fill="#151416"/>`
          : `
    <rect x="390" y="214" width="126" height="400" rx="40" fill="#641c2f"/>
    <rect x="426" y="132" width="54" height="116" rx="16" fill="#641c2f"/>
    <rect x="610" y="238" width="126" height="376" rx="40" fill="#151416"/>
    <rect x="646" y="158" width="54" height="112" rx="16" fill="#151416"/>
    <rect x="754" y="362" width="168" height="216" rx="18" fill="#fffaf2"/>
    <path d="M780 422 H896 M780 474 H874 M780 526 H900" stroke="#566b52" stroke-width="14" stroke-linecap="round"/>`;

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(title)}</title>
  <desc id="desc">Imagen de producto WineNotFound para ${escapeXml(title)}.</desc>
  ${baseDefs(file, accent, "#2b1018")}
  <rect width="1200" height="900" fill="url(#${file}-bg)"/>
  <path d="M0 656 C162 598 286 712 462 646 C660 570 816 548 1200 634 L1200 900 L0 900 Z" fill="#2b1018" opacity="0.12"/>
  <rect x="178" y="636" width="846" height="88" rx="44" fill="#171514" opacity="0.15"/>
  <g filter="url(#${file}-shadow)">
    ${bottles}
    <rect x="516" y="466" width="152" height="86" rx="9" fill="#fffaf2"/>
    <text x="592" y="518" text-anchor="middle" font-family="Georgia, serif" font-size="34" font-weight="700" fill="#2b1018">${escapeXml(label)}</text>
  </g>
  <text x="76" y="112" font-family="Inter, Segoe UI, sans-serif" font-size="32" font-weight="800" fill="#566b52" letter-spacing="4">WINE NOT FOUND</text>
  <text x="76" y="778" font-family="Georgia, serif" font-size="72" font-weight="700" fill="#2b1018">${escapeXml(title)}</text>
  <text x="80" y="832" font-family="Inter, Segoe UI, sans-serif" font-size="28" font-weight="700" fill="#641c2f">${escapeXml(subtitle)}</text>
</svg>
`;
};

const assets = [
  {
    file: "pack-debug",
    svg: packSvg({
      file: "pack-debug",
      title: "Pack Debug",
      subtitle: "Dos botellas y ficha de cata",
      label: "404",
      accent: "#c39a52",
      variant: "debug",
    }),
  },
  {
    file: "vertical-null",
    svg: packSvg({
      file: "vertical-null",
      title: "Vertical Null",
      subtitle: "Tres anadas de reserva",
      label: "NULL",
      accent: "#641c2f",
      variant: "vertical",
    }),
  },
  {
    file: "entrada-maridaje",
    svg: packSvg({
      file: "entrada-maridaje",
      title: "Entrada Maridaje",
      subtitle: "Vino, mesa y bodega",
      label: "404",
      accent: "#b66a45",
      variant: "maridaje",
    }),
  },
  {
    file: "suscripcion-missing-bottle",
    svg: packSvg({
      file: "suscripcion-missing-bottle",
      title: "Missing Bottle",
      subtitle: "Caja mensual privada",
      label: "CLUB",
      accent: "#566b52",
      variant: "subscription",
    }),
  },
  {
    file: "wine-404-crianza",
    svg: wineSvg({
      file: "wine-404-crianza",
      title: "404 Crianza",
      subtitle: "Tinto 2023",
      label: "404",
      fill: "#641c2f",
      accent: "#c39a52",
    }),
  },
  {
    file: "wine-null-reserva",
    svg: wineSvg({
      file: "wine-null-reserva",
      title: "Null Reserva",
      subtitle: "Reserva 2021",
      label: "NULL",
      fill: "#151416",
      accent: "#b66a45",
    }),
  },
  {
    file: "wine-cache-miss",
    svg: wineSvg({
      file: "wine-cache-miss",
      title: "Cache Miss",
      subtitle: "Blanco 2024",
      label: "CACHE",
      fill: "#c5893f",
      accent: "#566b52",
    }),
  },
  {
    file: "wine-fork-rose",
    svg: wineSvg({
      file: "wine-fork-rose",
      title: "Fork Rose",
      subtitle: "Rosado 2024",
      label: "FORK",
      fill: "#b94b68",
      accent: "#c39a52",
    }),
  },
  {
    file: "wine-stack-trace",
    svg: wineSvg({
      file: "wine-stack-trace",
      title: "Stack Trace",
      subtitle: "Blanco de parcela 2023",
      label: "TRACE",
      fill: "#d39a45",
      accent: "#566b52",
    }),
  },
  {
    file: "wine-root-access",
    svg: wineSvg({
      file: "wine-root-access",
      title: "Root Access",
      subtitle: "Tinto de guarda 2020",
      label: "ROOT",
      fill: "#161416",
      accent: "#641c2f",
    }),
  },
  {
    file: "wine-syntax-blanc",
    svg: wineSvg({
      file: "wine-syntax-blanc",
      title: "Syntax Blanc",
      subtitle: "Macabeo 2024",
      label: "SYNTAX",
      fill: "#d1a044",
      accent: "#c39a52",
    }),
  },
];

assets.forEach((asset) => {
  writeFileSync(join(outDir, `${asset.file}.svg`), `${asset.svg.trim()}\n`);
});

console.log(`Generated ${assets.length} product assets in ${outDir}`);
