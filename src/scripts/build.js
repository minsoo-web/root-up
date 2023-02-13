require("esbuild")
  .build({
    entryPoints: ["src/index.ts"],
    outdir: "build",
    bundle: true,
    platform: "node"
  })
  .catch(() => process.exit(1));
