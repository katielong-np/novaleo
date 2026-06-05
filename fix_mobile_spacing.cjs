const fs = require('fs');
const path = './src/routes/discovery.tsx';

let content = fs.readFileSync(path, 'utf8');

// 1. Parent layout spacing
content = content.replace(
  /relative p-6/g, 
  'relative p-4 md:p-6'
);
content = content.replace(
  /gap-12 lg:gap-20/g, 
  'gap-8 lg:gap-20'
);
content = content.replace(
  /mt-12 mb-12/g, 
  'mt-4 mb-8 lg:mt-12 lg:mb-12'
);

// 2. Badge sizing and spacing
content = content.replace(
  /mb-8 group cursor-pointer/g, 
  'mb-4 lg:mb-8 group cursor-pointer'
);
content = content.replace(
  /px-4 py-2 rounded-full/g, 
  'px-3 py-1.5 md:px-4 md:py-2 rounded-full'
);
content = content.replace(
  /text-sm font-medium shadow-sm/g,
  'text-xs md:text-sm font-medium shadow-sm'
)

// 3. Title spacing and size
content = content.replace(
  /text-5xl md:text-6xl/g, 
  'text-4xl md:text-6xl'
);
content = content.replace(
  /mb-6 text-primary/g, 
  'mb-3 lg:mb-6 text-primary'
);

// 4. Booking widget container padding & rounding
content = content.replace(
  /rounded-\[2rem\] p-8 md:p-10/g, 
  'rounded-3xl md:rounded-[2rem] p-6 md:p-10'
);

// 5. Provider image size and text
content = content.replace(
  /w-16 h-16/g, 
  'w-12 h-12 md:w-16 md:h-16'
);
content = content.replace(
  /text-2xl text-primary/g, 
  'text-xl md:text-2xl text-primary'
);
content = content.replace(
  /mb-8 pb-6/g, 
  'mb-6 md:mb-8 pb-4 md:pb-6'
);

// 6. Form elements spacing
content = content.replace(
  /pb-2 mb-6 snap-x/g, 
  'pb-2 mb-4 md:mb-6 snap-x'
);
content = content.replace(
  /p-3 rounded-2xl/g, 
  'p-2 md:p-3 rounded-2xl'
);
content = content.replace(
  /py-3 px-2 text-sm/g, 
  'py-2 md:py-3 px-2 text-sm'
);

// 7. Buttons
content = content.replace(
  /py-4 bg-primary/g, 
  'py-3.5 md:py-4 bg-primary'
);
content = content.replace(
  /py-4 mt-4 bg-primary/g, 
  'py-3.5 md:py-4 mt-2 md:mt-4 bg-primary'
);

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed mobile spacing and bulkiness!');
