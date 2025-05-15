document.addEventListener('DOMContentLoaded', function() {
  // Initialize tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Theme Toggle
  const themeToggle = document.getElementById('themeToggle');
  const htmlElement = document.documentElement;
  
  themeToggle.addEventListener('click', function() {
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  });

  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme') || 'light';
  htmlElement.setAttribute('data-bs-theme', savedTheme);
  if (savedTheme === 'dark') {
    const icon = themeToggle.querySelector('i');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }

  // Initialize modals
  const aiModal = new bootstrap.Modal(document.getElementById('aiModal'));

  // AI Help Button
  document.getElementById('aiHelpBtn').addEventListener('click', function() {
    aiModal.show();
  });

  // Generate with AI
  document.getElementById('generateWithAI').addEventListener('click', function() {
    const description = document.getElementById('aiDescription').value;
    if (!description) return;
    
    const aiResults = document.getElementById('aiResults');
    aiResults.innerHTML = '<div class="text-center my-3"><div class="spinner-border text-primary" role="status"></div><p class="mt-2">Generating README content...</p></div>';
    
    // Simulate AI generation (in a real app, you would call an API here)
    setTimeout(() => {
      aiResults.innerHTML = `
        <div class="alert alert-success">
          <h5>Suggested README Content</h5>
          <p>Based on your description, here's a suggested structure:</p>
          <ul>
            <li><strong>Project Title:</strong> ${description.split(' ')[0]} ${description.split(' ')[1]}</li>
            <li><strong>Features:</strong> ${extractFeatures(description)}</li>
            <li><strong>Installation:</strong> npm install ${description.split(' ')[0].toLowerCase()}</li>
          </ul>
          <button class="btn btn-sm btn-primary" id="applyAISuggestions">Apply Suggestions</button>
        </div>
      `;
      
      document.getElementById('applyAISuggestions').addEventListener('click', function() {
        document.getElementById('projectName').value = `${description.split(' ')[0]} ${description.split(' ')[1]}`;
        document.getElementById('projectDescription').value = description;
        aiModal.hide();
      });
    }, 2000);
  });

  function extractFeatures(desc) {
    const features = [];
    if (desc.toLowerCase().includes('react')) features.push('React components');
    if (desc.toLowerCase().includes('api')) features.push('REST API support');
    if (desc.toLowerCase().includes('database')) features.push('Database integration');
    return features.length > 0 ? features.join(', ') : 'Modern JavaScript features';
  }

  // Tech Stack Badges
  const techStackSelect = document.getElementById('techStackSelect');
  const techStackBadgesPreview = document.getElementById('techStackBadgesPreview');
  
  techStackSelect.addEventListener('change', function() {
    techStackBadgesPreview.innerHTML = '';
    const selectedOptions = Array.from(techStackSelect.selectedOptions).map(opt => opt.value);
    
    selectedOptions.forEach(tech => {
      const badgeUrl = getTechBadgeUrl(tech);
      if (badgeUrl) {
        const img = document.createElement('img');
        img.src = badgeUrl;
        img.alt = tech;
        img.title = tech;
        techStackBadgesPreview.appendChild(img);
      }
    });
  });

  function getTechBadgeUrl(tech) {
    const badges = {
      'react': 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
      'nodejs': 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white',
      'python': 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white',
      'java': 'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white',
      'docker': 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white',
      'aws': 'https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white'
    };
    return badges[tech] || null;
  }

  // File Uploads
  document.getElementById('screenshotUpload').addEventListener('change', function(e) {
    const previewContainer = document.getElementById('screenshotPreviews');
    previewContainer.innerHTML = '';
    
    Array.from(e.target.files).forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(event) {
          const img = document.createElement('img');
          img.src = event.target.result;
          previewContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
      }
    });
  });

  document.getElementById('gifUpload').addEventListener('change', function(e) {
    const previewContainer = document.getElementById('gifPreview');
    previewContainer.innerHTML = '';
    
    const file = e.target.files[0];
    if (file && file.type === 'image/gif') {
      const reader = new FileReader();
      reader.onload = function(event) {
        const img = document.createElement('img');
        img.src = event.target.result;
        previewContainer.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  });

  // Social Preview
  document.getElementById('projectName').addEventListener('input', updateSocialPreview);
  document.getElementById('projectDescription').addEventListener('input', updateSocialPreview);
  
  function updateSocialPreview() {
    const title = document.getElementById('projectName').value || 'Project Title';
    const desc = document.getElementById('projectDescription').value || 'Project description will appear here';
    
    document.getElementById('socialTitlePreview').textContent = title;
    document.getElementById('socialDescPreview').textContent = desc;
    
    // Update social image if screenshots are uploaded
    const screenshots = document.getElementById('screenshotPreviews').querySelector('img');
    if (screenshots) {
      document.getElementById('socialImagePreview').style.backgroundImage = `url(${screenshots.src})`;
    }
  }

  // Roadmap Items
  document.getElementById('addRoadmapItem').addEventListener('click', function() {
    const container = document.getElementById('roadmapItems');
    const item = document.createElement('div');
    item.className = 'roadmap-item mb-2';
    item.innerHTML = `
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Feature/task">
        <select class="form-select" style="max-width: 120px;">
          <option value="planned">Planned</option>
          <option value="progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button class="btn btn-outline-danger remove-roadmap" type="button">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `;
    container.appendChild(item);
    
    item.querySelector('.remove-roadmap').addEventListener('click', function() {
      container.removeChild(item);
    });
  });

  // Sponsorship Toggle
  document.getElementById('enableSponsorship').addEventListener('change', function(e) {
    document.getElementById('sponsorshipOptions').classList.toggle('d-none', !e.target.checked);
  });

  // Form Submission
  document.getElementById('readmeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    generateReadme();
  });

  // Preview Mode Toggle
  document.querySelectorAll('.preview-mode-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const mode = this.getAttribute('data-mode');
      document.querySelectorAll('.preview-mode-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      document.getElementById('markdownPreview').classList.add('d-none');
      document.getElementById('markdownSource').classList.add('d-none');
      document.getElementById('rawMarkdown').classList.add('d-none');
      
      document.getElementById(`${mode}Markdown`).classList.remove('d-none');
    });
  });

  // Generate README
  function generateReadme() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.style.display = 'flex';
    
    setTimeout(() => {
      const projectName = document.getElementById('projectName').value;
      const projectDescription = document.getElementById('projectDescription').value;
      
      // Generate badges
      let badges = [];
      if (document.getElementById('licenseBadge').checked) {
        badges.push('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)');
      }
      if (document.getElementById('versionBadge').checked) {
        badges.push('[![GitHub release](https://img.shields.io/github/release/username/repo.svg)](https://github.com/username/repo/releases)');
      }
      // Add other badges similarly...
      
      // Generate tech stack badges
      const techStackBadges = Array.from(techStackSelect.selectedOptions).map(opt => {
        const badgeUrl = getTechBadgeUrl(opt.value);
        return badgeUrl ? `[![${opt.value}](${badgeUrl})]` : '';
      }).filter(Boolean).join(' ');
      
      // Generate README content
      let readmeContent = `# ${projectName}\n\n`;
      readmeContent += `> ${projectDescription}\n\n`;
      
      if (badges.length > 0) {
        readmeContent += badges.join(' ') + '\n\n';
      }
      
      if (techStackBadges) {
        readmeContent += `## Tech Stack\n\n${techStackBadges}\n\n`;
      }
      
      // Add more sections as needed...
      
      // Update preview
      document.getElementById('markdownPreview').innerHTML = marked.parse(readmeContent);
      document.getElementById('sourceCode').textContent = readmeContent;
      document.getElementById('rawMarkdown').textContent = readmeContent;
      hljs.highlightAll();
      
      loadingOverlay.style.display = 'none';
    }, 500);
  }

  // Copy to Clipboard
  document.getElementById('copyBtn').addEventListener('click', function() {
    const text = document.getElementById('rawMarkdown').textContent;
    navigator.clipboard.writeText(text).then(() => {
      const tooltip = bootstrap.Tooltip.getInstance(this);
      tooltip.setContent({ '.tooltip-inner': 'Copied!' });
      setTimeout(() => tooltip.hide(), 1000);
    });
  });

  // Download README
  document.getElementById('downloadBtn').addEventListener('click', function() {
    const text = document.getElementById('rawMarkdown').textContent;
    const blob = new Blob([text], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  // Export as PDF
  document.getElementById('exportPdfBtn').addEventListener('click', function() {
    const element = document.getElementById('markdownPreview');
    const opt = {
      margin: 10,
      filename: 'README.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  });

  // Clear Form
  document.getElementById('clearBtn').addEventListener('click', function() {
    if (confirm('Are you sure you want to clear all inputs?')) {
      document.getElementById('readmeForm').reset();
      document.getElementById('techStackBadgesPreview').innerHTML = '';
      document.getElementById('screenshotPreviews').innerHTML = '';
      document.getElementById('gifPreview').innerHTML = '';
      document.getElementById('roadmapItems').innerHTML = `
        <div class="roadmap-item mb-2">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Feature/task">
            <select class="form-select" style="max-width: 120px;">
              <option value="planned">Planned</option>
              <option value="progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
            <button class="btn btn-outline-danger remove-roadmap" type="button">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      `;
      updateSocialPreview();
    }
  });
});
