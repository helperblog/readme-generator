<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="The most advanced FREE README generator with AI features, screenshot uploads, and social media previews">
    <title>Ultimate README Generator Pro | Free Tool</title>
    
    <!-- Favicon -->
    <link rel="icon" href="https://img.icons8.com/fluency/48/github.png" type="image/png">
    
    <!-- CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github-dark.min.css" rel="stylesheet">
    <link href="assets/styles.css" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body class="d-flex flex-column min-vh-100" data-bs-theme="light">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#">
                <i class="fas fa-rocket me-2"></i>README GENERATOR PRO
            </a>
            <div class="d-flex">
                <button class="btn btn-sm btn-outline-light me-2" id="aiHelpBtn">
                    <i class="fas fa-robot"></i> AI Assist
                </button>
                <button class="btn btn-sm btn-outline-light" id="themeToggle">
                    <i class="fas fa-moon"></i>
                </button>
                <button class="navbar-toggler ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            <i class="fas fa-language"></i> Language
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" data-lang="en">English</a></li>
                            <li><a class="dropdown-item" href="#" data-lang="hi">Hindi</a></li>
                            <li><a class="dropdown-item" href="#" data-lang="es">Spanish</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/your-username/readme-generator" target="_blank">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- AI Modal -->
    <div class="modal fade" id="aiModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title"><i class="fas fa-robot"></i> AI README Assistant</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label">Describe your project:</label>
                        <textarea class="form-control" id="aiDescription" rows="3" placeholder="A React-based e-commerce platform with payment gateway integration..."></textarea>
                    </div>
                    <button class="btn btn-primary" id="generateWithAI">
                        <i class="fas fa-magic"></i> Generate README Content
                    </button>
                    <div class="mt-3" id="aiResults"></div>
                </div>
            </div>
        </div>
    </div>

    <!-- Main Content -->
    <main class="flex-grow-1 py-4">
        <div class="container">
            <div class="row">
                <!-- Input Section -->
                <div class="col-lg-6 mb-4">
                    <div class="card shadow-sm h-100 sticky-lg-top" style="top: 20px;">
                        <div class="card-header bg-primary text-white">
                            <ul class="nav nav-tabs card-header-tabs" id="configTabs" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="basic-tab" data-bs-toggle="tab" data-bs-target="#basic" type="button">
                                        <i class="fas fa-cog"></i> Basic
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="media-tab" data-bs-toggle="tab" data-bs-target="#media" type="button">
                                        <i class="fas fa-images"></i> Media
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="advanced-tab" data-bs-toggle="tab" data-bs-target="#advanced" type="button">
                                        <i class="fas fa-star"></i> Advanced
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div class="card-body">
                            <form id="readmeForm">
                                <div class="tab-content" id="configTabsContent">
                                    <!-- Basic Tab -->
                                    <div class="tab-pane fade show active" id="basic" role="tabpanel">
                                        <!-- Project Info -->
                                        <div class="mb-4">
                                            <label class="form-label fw-bold">Project Information</label>
                                            <input type="text" class="form-control mb-2" id="projectName" placeholder="Project Name" required>
                                            <textarea class="form-control" id="projectDescription" rows="3" placeholder="Project Description" required></textarea>
                                        </div>

                                        <!-- Badges -->
                                        <div class="mb-4">
                                            <label class="form-label fw-bold">Badges</label>
                                            <div class="row g-2">
                                                <div class="col-6 col-md-4">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" id="licenseBadge" checked>
                                                        <label class="form-check-label" for="licenseBadge">License</label>
                                                    </div>
                                                </div>
                                                <div class="col-6 col-md-4">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" id="versionBadge" checked>
                                                        <label class="form-check-label" for="versionBadge">Version</label>
                                                    </div>
                                                </div>
                                                <div class="col-6 col-md-4">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" id="starsBadge">
                                                        <label class="form-check-label" for="starsBadge">Stars</label>
                                                    </div>
                                                </div>
                                                <div class="col-6 col-md-4">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" id="downloadsBadge">
                                                        <label class="form-check-label" for="downloadsBadge">Downloads</label>
                                                    </div>
                                                </div>
                                                <div class="col-6 col-md-4">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" id="lastCommitBadge">
                                                        <label class="form-check-label" for="lastCommitBadge">Last Commit</label>
                                                    </div>
                                                </div>
                                                <div class="col-6 col-md-4">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" id="codeSizeBadge">
                                                        <label class="form-check-label" for="codeSizeBadge">Code Size</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Tech Stack Badges -->
                                        <div class="mb-4">
                                            <label class="form-label fw-bold">Tech Stack Badges</label>
                                            <select class="form-select mb-2" id="techStackSelect" multiple>
                                                <option value="react">React</option>
                                                <option value="nodejs">Node.js</option>
                                                <option value="python">Python</option>
                                                <option value="java">Java</option>
                                                <option value="docker">Docker</option>
                                                <option value="aws">AWS</option>
                                            </select>
                                            <div id="techStackBadgesPreview" class="d-flex flex-wrap gap-2"></div>
                                        </div>
                                    </div>

                                    <!-- Media Tab -->
                                    <div class="tab-pane fade" id="media" role="tabpanel">
                                        <!-- Screenshots -->
                                        <div class="mb-4">
                                            <label class="form-label fw-bold">Screenshots</label>
                                            <div class="file-upload-wrapper">
                                                <input type="file" id="screenshotUpload" class="file-upload-input" accept="image/*" multiple>
                                                <label for="screenshotUpload" class="file-upload-label">
                                                    <i class="fas fa-upload me-2"></i>Upload Screenshots
                                                </label>
                                            </div>
                                            <div id="screenshotPreviews" class="d-flex flex-wrap gap-2 mt-2"></div>
                                        </div>

                                        <!-- GIF Upload -->
                                        <div class="mb-4">
                                            <label class="form-label fw-bold">Demo GIF</label>
                                            <div class="file-upload-wrapper">
                                                <input type="file" id="gifUpload" class="file-upload-input" accept="image/gif">
                                                <label for="gifUpload" class="file-upload-label">
                                                    <i class="fas fa-video me-2"></i>Upload Demo GIF
                                                </label>
                                            </div>
                                            <div id="gifPreview" class="mt-2"></div>
                                        </div>

                                        <!-- Social Preview -->
                                        <div class="mb-4">
                                            <label class="form-label fw-bold">Social Media Preview</label>
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="social-preview">
                                                        <div class="social-preview-image" id="socialImagePreview"></div>
                                                        <div class="social-preview-content">
                                                            <div class="social-preview-title" id="socialTitlePreview">Project Title</div>
                                                            <div class="social-preview-desc" id="socialDescPreview">Project description will appear here</div>
                                                            <div class="social-preview-url">github.com/your-repo</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Advanced Tab -->
                                    <div class="tab-pane fade" id="advanced" role="tabpanel">
                                        <!-- Roadmap -->
                                        <div class="mb-4">
                                            <label class="form-label fw-bold">Development Roadmap</label>
                                            <div id="roadmapItems">
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
                                            </div>
                                            <button type="button" class="btn btn-sm btn-outline-primary mt-2" id="addRoadmapItem">
                                                <i class="fas fa-plus"></i> Add Item
                                            </button>
                                        </div>

                                        <!-- Sponsorship -->
                                        <div class="mb-4">
                                            <label class="form-label fw-bold">Sponsorship</label>
                                            <div class="form-check form-switch mb-2">
                                                <input class="form-check-input" type="checkbox" id="enableSponsorship">
                                                <label class="form-check-label" for="enableSponsorship">Enable Sponsorship Section</label>
                                            </div>
                                            <div id="sponsorshipOptions" class="d-none">
                                                <select class="form-select mb-2" id="sponsorshipPlatform">
                                                    <option value="github">GitHub Sponsors</option>
                                                    <option value="patreon">Patreon</option>
                                                    <option value="buymeacoffee">Buy Me a Coffee</option>
                                                </select>
                                                <input type="text" class="form-control" id="sponsorshipLink" placeholder="Your sponsorship link">
                                            </div>
                                        </div>

                                        <!-- Analytics -->
                                        <div class="mb-4">
                                            <label class="form-label fw-bold">Project Analytics</label>
                                            <div class="row g-2">
                                                <div class="col-md-6">
                                                    <div class="input-group">
                                                        <span class="input-group-text"><i class="fas fa-eye"></i></span>
                                                        <input type="number" class="form-control" id="projectViews" placeholder="Views">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="input-group">
                                                        <span class="input-group-text"><i class="fas fa-download"></i></span>
                                                        <input type="number" class="form-control" id="projectDownloads" placeholder="Downloads">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="d-grid gap-2 mt-3">
                                    <button type="submit" class="btn btn-primary btn-lg">
                                        <i class="fas fa-magic me-2"></i> Generate README
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <!-- Preview Section -->
                <div class="col-lg-6 mb-4">
                    <div class="card shadow-sm h-100">
                        <div class="card-header bg-success text-white d-flex justify-content-between align-items-center">
                            <div>
                                <i class="fas fa-eye me-2"></i>
                                <span class="fw-bold">Live Preview</span>
                            </div>
                            <div class="btn-group">
                                <button class="btn btn-sm btn-outline-light active preview-mode-btn" data-mode="preview">
                                    <i class="fas fa-desktop"></i> Preview
                                </button>
                                <button class="btn btn-sm btn-outline-light preview-mode-btn" data-mode="source">
                                    <i class="fas fa-code"></i> Source
                                </button>
                                <button class="btn btn-sm btn-outline-light preview-mode-btn" data-mode="raw">
                                    <i class="fas fa-file-alt"></i> Raw
                                </button>
                            </div>
                        </div>
                        <div class="card-body p-0 position-relative">
                            <div id="markdownPreview" class="p-3 markdown-body"></div>
                            <pre id="markdownSource" class="p-3 d-none"><code id="sourceCode" class="language-markdown"></code></pre>
                            <div id="rawMarkdown" class="p-3 d-none"></div>
                            <div class="loading-overlay" id="loadingOverlay">
                                <div class="spinner-border text-primary" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer bg-light">
                            <div class="d-flex flex-wrap justify-content-between gap-2">
                                <div class="btn-group">
                                    <button id="copyBtn" class="btn btn-outline-secondary" data-bs-toggle="tooltip" title="Copy to Clipboard">
                                        <i class="fas fa-copy"></i> Copy
                                    </button>
                                    <button id="downloadBtn" class="btn btn-success" data-bs-toggle="tooltip" title="Download README.md">
                                        <i class="fas fa-download"></i> Download
                                    </button>
                                </div>
                                <div class="btn-group">
                                    <button id="exportPdfBtn" class="btn btn-outline-danger" data-bs-toggle="tooltip" title="Export as PDF">
                                        <i class="fas fa-file-pdf"></i> PDF
                                    </button>
                                    <button id="exportHtmlBtn" class="btn btn-outline-primary" data-bs-toggle="tooltip" title="Export as HTML">
                                        <i class="fas fa-file-code"></i> HTML
                                    </button>
                                </div>
                                <button id="clearBtn" class="btn btn-outline-dark" data-bs-toggle="tooltip" title="Clear All">
                                    <i class="fas fa-trash-alt"></i> Clear
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="bg-dark text-white py-4 mt-auto">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <h5><i class="fas fa-rocket me-2"></i> README GENERATOR PRO</h5>
                    <p class="mb-0">The most advanced free tool for creating professional GitHub README files</p>
                </div>
                <div class="col-md-6 text-md-end">
                    <div class="d-flex justify-content-md-end gap-3">
                        <a href="#" class="text-white"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="text-white"><i class="fab fa-github"></i></a>
                        <a href="#" class="text-white"><i class="fab fa-discord"></i></a>
                    </div>
                    <p class="mb-0 mt-2">
                        Made with <i class="fas fa-heart text-danger"></i> by You
                    </p>
                </div>
            </div>
        </div>
    </footer>

    <!-- JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/4.2.12/marked.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
    <script src="assets/script.js"></script>
</body>
</html>
