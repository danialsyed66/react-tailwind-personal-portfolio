import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { projects } from "./src/data/projects.js";

const SITE = "https://danial-syed.netlify.app";

const escapeAttr = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Link previews (LinkedIn, Slack, X) don't run JavaScript, so every
// /projects/:slug link used to preview as the homepage, with its URL and image.
// After the build, write projects/<slug>.html: a copy of index.html whose title,
// description, URL and image are the project's. Netlify serves it for
// /projects/<slug>, and the app boots from it as usual.
function projectLinkPreviews() {
  let outDir;
  return {
    name: "project-link-previews",
    apply: "build",
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      const html = await readFile(path.join(outDir, "index.html"), "utf8");
      const base = html
        .replace(/<title>[\s\S]*?<\/title>\s*/, "")
        .replace(/<meta\s+(?:name|property)="(?:description|og:[\w:]+|twitter:[\w:]+)"[\s\S]*?\/?>\s*/g, "");
      await mkdir(path.join(outDir, "projects"), { recursive: true });
      for (const p of projects) {
        const title = `${p.name}: ${p.tagline}`;
        const description = `Case study: what ${p.name} does, what I built, and screenshots.`;
        const url = `${SITE}/projects/${p.slug}`;
        const image = `${SITE}/og/${p.slug}.jpg`;
        const head = [
          `<title>${escapeAttr(`${p.name} | Danial Syed`)}</title>`,
          `<meta name="description" content="${escapeAttr(description)}" />`,
          `<meta property="og:title" content="${escapeAttr(title)}" />`,
          `<meta property="og:description" content="${escapeAttr(description)}" />`,
          `<meta property="og:type" content="article" />`,
          `<meta property="og:url" content="${url}" />`,
          `<meta property="og:image" content="${image}" />`,
          `<meta property="og:image:width" content="1200" />`,
          `<meta property="og:image:height" content="630" />`,
          `<meta property="og:image:alt" content="${escapeAttr(p.cover.alt)}" />`,
          `<meta name="twitter:card" content="summary_large_image" />`,
        ].join("\n    ");
        await writeFile(
          path.join(outDir, "projects", `${p.slug}.html`),
          base.replace(/\s*<\/head>/, `\n    ${head}\n  </head>`),
        );
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), projectLinkPreviews()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
