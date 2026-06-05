const fs = require('fs');
const path = './src/routes/discovery.tsx';

let content = fs.readFileSync(path, 'utf8');

// 1. Remove bulky styles from CustomStyles
content = content.replace(/ \.premium-glass \{[\s\S]*? \}\n/g, '');
content = content.replace(/ \.premium-input \{[\s\S]*? \}\n/g, '');
content = content.replace(/ \.premium-input:focus \{[\s\S]*? \}\n/g, '');
content = content.replace(/ \.shimmer-button \{[\s\S]*? \}\n/g, '');
content = content.replace(/ \.shimmer-button::after \{[\s\S]*? \}\n/g, '');
content = content.replace(/ @keyframes shimmer \{[\s\S]*? \}\n/g, '');
content = content.replace(/ \.smooth-step-enter \{[\s\S]*? \}\n/g, '');
content = content.replace(/ @keyframes smoothEnter \{[\s\S]*? \}\n/g, '');

// Clean up remaining occurrences of the classes in HTML
content = content.replace(/premium-glass/g, 'bg-white/90 backdrop-blur-md border border-gray-100 shadow-sm');
content = content.replace(/rounded-3xl md:rounded-\[2rem\]/g, 'rounded-2xl');
content = content.replace(/p-6 md:p-10/g, 'p-6 md:p-8');
content = content.replace(/slide-up relative/g, 'slide-up');
content = content.replace(/shimmer-button /g, '');
content = content.replace(/smooth-step-enter/g, 'fade-in');

// Provider header
content = content.replace(/w-12 h-12 md:w-16 md:h-16/g, 'w-10 h-10 md:w-12 md:h-12');
content = content.replace(/shadow-\[0_4px_12px_rgba\(44,61,48,0\.15\)\] border-2 border-white/g, 'border border-gray-100');
content = content.replace(/text-xl md:text-2xl text-primary font-medium tracking-tight/g, 'text-lg md:text-xl font-medium text-primary');
content = content.replace(/mb-6 md:mb-8 pb-4 md:pb-6 border-b border-gray-100\/60 relative z-10/g, 'mb-6 md:mb-8 pb-4 md:pb-6 border-b border-gray-100');

// Date Buttons (horizontal pills instead of big boxes)
content = content.replace(/flex gap-3 overflow-x-auto no-scrollbar pb-4 mb-4 md:mb-6 snap-x pt-2 px-1 -mx-1/g, 'flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-6');
content = content.replace(/snap-start min-w-\[80px\] p-3 md:p-4 rounded-full border transition-all duration-300 flex flex-col items-center justify-center gap-1\.5 focus:outline-none focus:ring-2 focus:ring-primary\/20/g, 'shrink-0 px-5 py-2\.5 rounded-full border transition-colors flex items-baseline gap-1\.5');
content = content.replace(/shadow-\[0_8px_20px_-6px_rgba\(44,61,48,0\.5\)\] transform -translate-y-1 scale-105/g, '');
content = content.replace(/bg-white\/60 hover:bg-white/g, 'bg-white hover:bg-gray-50');
content = content.replace(/hover:shadow-sm hover:-translate-y-0\.5/g, '');
content = content.replace(/text-\[10px\] md:text-xs uppercase font-bold tracking-widest/g, 'text-sm font-medium');
content = content.replace(/text-2xl md:text-3xl font-display font-medium tracking-tight/g, 'text-sm font-medium');
content = content.replace(/text-\[10px\] md:text-xs font-semibold/g, 'text-sm font-medium');

// Time Buttons
content = content.replace(/py-2\.5 md:py-3\.5 px-2 text-sm rounded-2xl border transition-all duration-300 font-medium text-center focus:outline-none focus:ring-2 focus:ring-primary\/20/g, 'py-2 px-3 text-sm rounded-full border transition-colors font-medium text-center');
content = content.replace(/transform scale-\[1\.02\]/g, '');
content = content.replace(/shadow-\[inset_0_2px_4px_rgba\(0,0,0,0\.02\)\]/g, '');

// Continue buttons
content = content.replace(/w-full py-4 md:py-4 bg-primary text-primary-foreground rounded-2xl font-medium text-base md:text-lg transition-all duration-300 shadow-\[0_8px_20px_-8px_rgba\(44,61,48,0\.5\)\] hover:shadow-\[0_12px_24px_-8px_rgba\(44,61,48,0\.6\)\] hover:-translate-y-0\.5 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none/g, 'w-full py-3 bg-primary text-white rounded-full font-medium transition-colors hover:bg-primary/90 flex items-center justify-center gap-2 disabled:opacity-50');

// Inputs
content = content.replace(/premium-input w-full px-4 py-3\.5 rounded-xl text-primary font-medium focus:outline-none/g, 'w-full px-0 py-2 border-b border-gray-200 bg-transparent text-primary focus:border-primary transition-colors focus:outline-none rounded-none');
content = content.replace(/premium-input/g, 'w-full px-0 py-2 border-b border-gray-200 bg-transparent text-primary focus:border-primary transition-colors focus:outline-none rounded-none');

fs.writeFileSync(path, content, 'utf8');
console.log('Cleaned up bulky design');
