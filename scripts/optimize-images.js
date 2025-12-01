// scripts/optimize-images.js
const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeImage(inputPath, outputPath, width, quality = 80) {
  try {
    await sharp(inputPath)
      .resize(width, null, { withoutEnlargement: true })
      .jpeg({ quality, progressive: true })
      .toFile(outputPath);
    console.log(`✅ Optimized: ${path.basename(outputPath)} (${width}px)`);
  } catch (error) {
    console.error(`❌ Failed to optimize ${inputPath}:`, error.message);
  }
}

async function getImageDimensions(inputPath) {
  const metadata = await sharp(inputPath).metadata();
  return { width: metadata.width, height: metadata.height };
}

async function optimizeAllImages() {
  console.log('🔄 Starting image optimization...\n');
  
  const imagesDir = path.join(process.cwd(), 'public/images');
  const files = await fs.readdir(imagesDir);
  
  // Create optimized directory
  const optimizedDir = path.join(imagesDir, 'optimized');
  try {
    await fs.mkdir(optimizedDir, { recursive: true });
  } catch (error) {
    // Directory might already exist
  }
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
      const inputPath = path.join(imagesDir, file);
      const stats = await fs.stat(inputPath);
      
      // Skip if already optimized file
      if (file.includes('-optimized-') || file.includes('-small') || file.includes('-medium') || file.includes('-large')) {
        console.log(`⏩ Skipping already optimized: ${file}`);
        continue;
      }
      
      // Get original size
      const originalSize = (stats.size / 1024 / 1024).toFixed(2);
      console.log(`\n📁 Processing: ${file} (${originalSize} MB)`);
      
      try {
        const { width: originalWidth } = await getImageDimensions(inputPath);
        
        const ext = path.extname(file);
        const name = path.basename(file, ext);
        
        // Generate optimized versions
        const sizes = [
          { suffix: 'small', width: 640 },
          { suffix: 'medium', width: 1280 },
          { suffix: 'large', width: 1920 },
          { suffix: 'xl', width: 2560 }
        ];
        
        for (const size of sizes) {
          if (originalWidth >= size.width) {
            const outputFileName = `${name}-optimized-${size.suffix}${ext}`;
            const outputPath = path.join(optimizedDir, outputFileName);
            await optimizeImage(inputPath, outputPath, size.width, 80);
          }
        }
        
        // Also create a thumbnail for preloading
        const thumbnailPath = path.join(optimizedDir, `${name}-thumbnail${ext}`);
        await optimizeImage(inputPath, thumbnailPath, 100, 50);
        
        console.log(`✅ Completed: ${file}`);
        
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error.message);
      }
    }
  }
  
  console.log('\n🎉 Image optimization complete!');
  console.log('📁 Optimized images saved to: public/images/optimized/');
}

// Run the optimization
optimizeAllImages().catch(console.error);