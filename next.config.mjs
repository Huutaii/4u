/** @type {import('next').NextConfig} */
import path from "path";
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(process.cwd(), "src/styles")],
        prependData: `
            @import "abstracts/variables.scss";
            @import "abstracts/fonts.scss";
            @import "abstracts/mixins.scss";
            @import "abstracts/animations.scss";
        `,
        indentWidth: 4,
    },
};

export default nextConfig;
