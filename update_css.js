const fs = require('fs');
const path = 'c:\\Users\\ccardenas\\Downloads\\cenfo\\index.html';
let content = fs.readFileSync(path, 'utf8');

const oldCss = `        #s1b-spacer {
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
            background: radial-gradient(circle at center, #111 0%, #050505 100%);
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
            border-radius: 20px;
            opacity: 0;
            will-change: transform, opacity;
            box-shadow: 0 40px 100px rgba(0,0,0,0.9), 0 0 20px rgba(184, 158, 112, 0.1);
            border: 1px solid rgba(255,255,255,0.05);
            position: absolute;
        }`;

const newCss = `        #s1b-spacer {
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
            background: radial-gradient(circle at 50% 50%, #151515 0%, #000 100%);
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
            filter: contrast(1.02) saturate(1.05) brightness(1.05);
            
            box-shadow: 
                0 50px 120px rgba(0,0,0,0.95), 
                0 0 40px rgba(184, 158, 112, 0.15),
                inset 0 0 0 1px rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.08);
            position: absolute;
        }`;

if (content.includes(oldCss)) {
    content = content.replace(oldCss, newCss);
    fs.writeFileSync(path, content, 'utf8');
    console.log('Successfully updated CSS for high quality images.');
} else {
    console.error('Could not find the target CSS block. Check for exact string match.');
    process.exit(1);
}
