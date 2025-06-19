const tools = [
  // Image Tools
  { name: "Image to PNG Converter", category: "Image Tools", file: "tools/image-to-png.html" },
  { name: "Image to JPG Converter", category: "Image Tools", file: "tools/image-to-jpg.html" },
  { name: "Image Resizer", category: "Image Tools", file: "tools/image-resizer.html" },
  { name: "Image Compressor", category: "Image Tools", file: "tools/image-compressor.html" },
  { name: "Image Cropper", category: "Image Tools", file: "tools/image-cropper.html" },
  { name: "Convert Image to Base64", category: "Image Tools", file: "tools/image-to-base64.html" },
  { name: "Convert WebP to PNG", category: "Image Tools", file: "tools/webp-to-png.html" },
  { name: "GIF Maker", category: "Image Tools", file: "tools/gif-maker.html" },
  { name: "QR Code Generator", category: "Image Tools", file: "tools/qr-code-generator.html" },
  { name: "Screenshot to PDF Converter", category: "Image Tools", file: "tools/screenshot-to-pdf.html" },

  // SEO Tools
  { name: "Meta Tag Generator", category: "SEO Tools", file: "tools/meta-tag-generator.html" },
  { name: "Keyword Density Checker", category: "SEO Tools", file: "tools/keyword-density-checker.html" },
  { name: "Sitemap Generator", category: "SEO Tools", file: "tools/sitemap-generator.html" },
  { name: "Robots.txt Generator", category: "SEO Tools", file: "tools/robots-txt-generator.html" },
  { name: "Google Index Checker", category: "SEO Tools", file: "tools/google-index-checker.html" },
  { name: "Domain Authority Checker", category: "SEO Tools", file: "tools/domain-authority-checker.html" },
  { name: "Backlink Checker", category: "SEO Tools", file: "tools/backlink-checker.html" },
  { name: "Page Speed Checker", category: "SEO Tools", file: "tools/page-speed-checker.html" },
  { name: "XML Sitemap Validator", category: "SEO Tools", file: "tools/xml-sitemap-validator.html" },
  { name: "Mobile-Friendly Test", category: "SEO Tools", file: "tools/mobile-friendly-test.html" },

  // Text Tools
  { name: "Word Counter", category: "Text Tools", file: "tools/word-counter.html" },
  { name: "Character Counter", category: "Text Tools", file: "tools/character-counter.html" },
  { name: "Case Converter", category: "Text Tools", file: "tools/case-converter.html" },
  { name: "Plagiarism Checker", category: "Text Tools", file: "tools/plagiarism-checker.html" },
  { name: "Grammar Checker", category: "Text Tools", file: "tools/grammar-checker.html" },
  { name: "Text-to-Speech", category: "Text Tools", file: "tools/text-to-speech.html" },
  { name: "Speech-to-Text", category: "Text Tools", file: "tools/speech-to-text.html" },
  { name: "URL Encoder & Decoder", category: "Text Tools", file: "tools/url-encoder-decoder.html" },
  { name: "Fancy Text Generator", category: "Text Tools", file: "tools/fancy-text-generator.html" },
  { name: "Random Text Generator", category: "Text Tools", file: "tools/random-text-generator.html" },

  // Developer Tools
  { name: "JSON Formatter", category: "Developer Tools", file: "tools/json-formatter.html" },
  { name: "HTML to Markdown Converter", category: "Developer Tools", file: "tools/html-to-markdown.html" },
  { name: "CSS Minifier", category: "Developer Tools", file: "tools/css-minifier.html" },
  { name: "JavaScript Minifier", category: "Developer Tools", file: "tools/js-minifier.html" },
  { name: "SQL Formatter", category: "Developer Tools", file: "tools/sql-formatter.html" },
  { name: "HTACCESS Redirect Generator", category: "Developer Tools", file: "tools/htaccess-redirect-generator.html" },
  { name: "Markdown to HTML Converter", category: "Developer Tools", file: "tools/markdown-to-html.html" },
  { name: "Color Code Picker", category: "Developer Tools", file: "tools/color-code-picker.html" },
  { name: "Base64 Encoder & Decoder", category: "Developer Tools", file: "tools/base64-encoder-decoder.html" },
  { name: "IP Address Lookup", category: "Developer Tools", file: "tools/ip-address-lookup.html" },

  // Math & Calculators
  { name: "Percentage Calculator", category: "Math & Calculators", file: "tools/percentage-calculator.html" },
  { name: "Age Calculator", category: "Math & Calculators", file: "tools/age-calculator.html" },
  { name: "BMI Calculator", category: "Math & Calculators", file: "tools/bmi-calculator.html" },
  { name: "Loan EMI Calculator", category: "Math & Calculators", file: "tools/loan-emi-calculator.html" },
  { name: "Scientific Calculator", category: "Math & Calculators", file: "tools/scientific-calculator.html" },
  { name: "Discount Calculator", category: "Math & Calculators", file: "tools/discount-calculator.html" },
  { name: "Currency Converter", category: "Math & Calculators", file: "tools/currency-converter.html" },
  { name: "Time Zone Converter", category: "Math & Calculators", file: "tools/time-zone-converter.html" },
  { name: "Binary to Decimal Converter", category: "Math & Calculators", file: "tools/binary-to-decimal.html" },
  { name: "Tip Calculator", category: "Math & Calculators", file: "tools/tip-calculator.html" },

  // Unit Converters
  { name: "Length Converter", category: "Unit Converters", file: "tools/length-converter.html" },
  { name: "Weight Converter", category: "Unit Converters", file: "tools/weight-converter.html" },
  { name: "Speed Converter", category: "Unit Converters", file: "tools/speed-converter.html" },
  { name: "Temperature Converter", category: "Unit Converters", file: "tools/temperature-converter.html" },
  { name: "Volume Converter", category: "Unit Converters", file: "tools/volume-converter.html" },
  { name: "Data Storage Converter", category: "Unit Converters", file: "tools/data-storage-converter.html" },
  { name: "Energy Converter", category: "Unit Converters", file: "tools/energy-converter.html" },
  { name: "Pressure Converter", category: "Unit Converters", file: "tools/pressure-converter.html" },
  { name: "Fuel Efficiency Converter", category: "Unit Converters", file: "tools/fuel-efficiency-converter.html" },
  { name: "Angle Converter", category: "Unit Converters", file: "tools/angle-converter.html" },

  // Security & Encryption Tools
  { name: "MD5 Hash Generator", category: "Security & Encryption Tools", file: "tools/md5-hash-generator.html" },
  { name: "SHA256 Hash Generator", category: "Security & Encryption Tools", file: "tools/sha256-hash-generator.html" },
  { name: "Password Generator", category: "Security & Encryption Tools", file: "tools/password-generator.html" },
  { name: "Random String Generator", category: "Security & Encryption Tools", file: "tools/random-string-generator.html" },
  { name: "URL Shortener", category: "Security & Encryption Tools", file: "tools/url-shortener.html" },
  { name: "IP Geolocation Finder", category: "Security & Encryption Tools", file: "tools/ip-geolocation-finder.html" },
  { name: "SSL Certificate Checker", category: "Security & Encryption Tools", file: "tools/ssl-certificate-checker.html" },
  { name: "Whois Lookup", category: "Security & Encryption Tools", file: "tools/whois-lookup.html" },
  { name: "HTTP Headers Checker", category: "Security & Encryption Tools", file: "tools/http-headers-checker.html" },
  { name: "Privacy Policy Generator", category: "Security & Encryption Tools", file: "tools/privacy-policy-generator.html" },

  // Social Media Tools
  { name: "YouTube Thumbnail Downloader", category: "Social Media Tools", file: "tools/youtube-thumbnail-downloader.html" },
  { name: "Instagram Photo Downloader", category: "Social Media Tools", file: "tools/instagram-photo-downloader.html" },
  { name: "Twitter Video Downloader", category: "Social Media Tools", file: "tools/twitter-video-downloader.html" },
  { name: "Facebook Video Downloader", category: "Social Media Tools", file: "tools/facebook-video-downloader.html" },
  { name: "TikTok Video Downloader", category: "Social Media Tools", file: "tools/tiktok-video-downloader.html" },
  { name: "YouTube Tags Extractor", category: "Social Media Tools", file: "tools/youtube-tags-extractor.html" },
  { name: "Hashtag Generator", category: "Social Media Tools", file: "tools/hashtag-generator.html" },
  { name: "Social Media Post Generator", category: "Social Media Tools", file: "tools/social-media-post-generator.html" },
  { name: "Emoji Keyboard", category: "Social Media Tools", file: "tools/emoji-keyboard.html" },
  { name: "Twitter Character Counter", category: "Social Media Tools", file: "tools/twitter-character-counter.html" },

  // Miscellaneous Tools
  { name: "Barcode Generator", category: "Miscellaneous Tools", file: "tools/barcode-generator.html" },
  { name: "Meme Generator", category: "Miscellaneous Tools", file: "tools/meme-generator.html" },
  { name: "Resume Builder", category: "Miscellaneous Tools", file: "tools/resume-builder.html" },
  { name: "Invoice Generator", category: "Miscellaneous Tools", file: "tools/invoice-generator.html" },
  { name: "Business Name Generator", category: "Miscellaneous Tools", file: "tools/business-name-generator.html" },
  { name: "Lottery Number Generator", category: "Miscellaneous Tools", file: "tools/lottery-number-generator.html" },
  { name: "Flip a Coin Simulator", category: "Miscellaneous Tools", file: "tools/flip-coin-simulator.html" },
  { name: "Random Number Generator", category: "Miscellaneous Tools", file: "tools/random-number-generator.html" },
  { name: "Dice Roller Simulator", category: "Miscellaneous Tools", file: "tools/dice-roller-simulator.html" },
  { name: "Internet Speed Test", category: "Miscellaneous Tools", file: "tools/internet-speed-test.html" },
  { name: "Daily Planner Creator", category: "Miscellaneous Tools", file: "tools/daily-planner-creator.html" },
  { name: "Wedding Invitation Generator", category: "Miscellaneous Tools", file: "tools/wedding-invitation-generator.html" },
  { name: "Story Plot Generator", category: "Miscellaneous Tools", file: "tools/story-plot-generator.html" },
  { name: "E-book Creator", category: "Miscellaneous Tools", file: "tools/ebook-creator.html" },
  { name: "AI Chatbot Demo", category: "Miscellaneous Tools", file: "tools/ai-chatbot-demo.html" },
  { name: "IP Address Tracker", category: "Miscellaneous Tools", file: "tools/ip-address-tracker.html" },
  { name: "Fake Address Generator", category: "Miscellaneous Tools", file: "tools/fake-address-generator.html" },
  { name: "Calculator for Electric Bills", category: "Miscellaneous Tools", file: "tools/electric-bill-calculator.html" },
  { name: "Leap Year Checker", category: "Miscellaneous Tools", file: "tools/leap-year-checker.html" },
  { name: "Name to Numerology Calculator", category: "Miscellaneous Tools", file: "tools/numerology-calculator.html" }
];

function renderTools() {
  const categories = [...new Set(tools.map(t => t.category))];
  categories.forEach(cat => {
    const catId = cat.toLowerCase().replace(/\s+/g, '-') + '-list';
    const container = document.getElementById(catId);
    if (container) {
      container.innerHTML = tools.filter(t => t.category === cat).map(tool => `
        <div class="col-md-3 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">${tool.name}</h5>
              <a href="${tool.file}" class="btn btn-primary">Open</a>
            </div>
          </div>
        </div>
      `).join('');
    }
  });
}

document.addEventListener('DOMContentLoaded', renderTools);

// Search functionality
setTimeout(() => {
  const searchInput = document.getElementById('tool-search');
  if (!searchInput) return;
  searchInput.addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    tools.forEach(tool => {
      const card = document.querySelector(`[href="${tool.file}"]`);
      if (card) {
        const cardCol = card.closest('.col-md-3');
        if (tool.name.toLowerCase().includes(query) || tool.category.toLowerCase().includes(query)) {
          cardCol.style.display = '';
        } else {
          cardCol.style.display = 'none';
        }
      }
    });
  });
}, 500); 