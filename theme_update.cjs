const fs = require('fs');
const path = './src/routes/discovery.tsx';

let content = fs.readFileSync(path, 'utf8');

// Replace text-secondary with text-primary
content = content.replace(/text-secondary/g, 'text-primary');

// Replace border-secondary with border-primary
content = content.replace(/border-secondary/g, 'border-primary');

// Replace ring-secondary with ring-primary
content = content.replace(/ring-secondary/g, 'ring-primary');

// Replace bg-secondary on buttons to bg-primary
content = content.replace(/bg-secondary text-white/g, 'bg-primary text-primary-foreground');
content = content.replace(/hover:bg-secondary\/90/g, 'hover:bg-primary/90');

// Replace subtle backgrounds
content = content.replace(/bg-secondary\/20/g, 'bg-primary/10');
content = content.replace(/bg-secondary\/10/g, 'bg-primary/5');
content = content.replace(/bg-secondary\/30/g, 'bg-primary/20');

// Special cases
content = content.replace(/hover:border-secondary/g, 'hover:border-primary');
content = content.replace(/border-secondary/g, 'border-primary');

fs.writeFileSync(path, content, 'utf8');
console.log('Removed yellow (secondary) from fonts and buttons.');
