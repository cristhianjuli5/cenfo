const fs = require('fs');
const path = 'c:\\Users\\ccardenas\\Downloads\\cenfo\\index.html';
const content = fs.readFileSync(path, 'utf8');

// Use regex to locate and replace the entire S1B CSS section
const s1bCssRegex = /\/\* ══════════════════════════════════\s+SECTION 1B — SECUENCIA DE IMÁGENES TIPO KHABY[\s\S]+?SECTION 2/;

const highQualityCss = `/* ══════════════════════════════════
   SECTION 1B — SECUENCIA DE IMÁGENES TIPO KHABY
   Optimized for High Quality & Premium Visuals
══════════════════════════════════ */
        #s1b-spacer {
            height: 600vh;
            position: relative;
            z-index: 10;
        }

        #s1b-sticky {
            position: sticky;
            top: 0;
            height: 100vh;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            background: radial-gradient(circle at center, #1a1a1a 0%, #000 100%);
            z-index: 10;
        }

        .s1b-img-container {
             position: absolute;
             width: 100%;
             height: 100%;
             display: flex;
             align-items: center;
             justify-content: center;
             pointer-events: none;
        }

        .s1b-img {
            width: 85%;
            max-width: 650px;
            height: auto;
            aspect-ratio: 4/5;
            object-fit: cover;
            border-radius: 24px;
            opacity: 0;
            will-change: transform, opacity;
            
            /* High Quality Render Settings */
            image-rendering: auto;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            transform-style: preserve-3d;
            
            /* Premium Depth */
            box-shadow: 
                0 60px 120px rgba(0,0,0,0.98), 
                0 0 50px rgba(184, 158, 112, 0.15),
                inset 0 0 0 1px rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.08);
            filter: contrast(1.03) saturate(1.08) brightness(1.02);
            position: absolute;
        }

        /* SECTION 2`;

if (s1bCssRegex.test(content)) {
    const updatedContent = content.replace(s1bCssRegex, highQualityCss);
    fs.writeFileSync(path, updatedContent, 'utf8');
    console.log('Successfully applied high-quality CSS optimizations.');
} else {
    console.error('Regular expression did not match. Block structure has changed.');
    process.exit(1);
}
