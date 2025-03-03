<script>
    // Replace with your actual Google Drive preview link
    const drivePreviewUrl = "https://drive.google.com/file/d/1zVXD470CYm7Egml8ArJmS0NOIvr3ZIpP/preview";
    const driveDownloadUrl = "https://drive.google.com/uc?export=download&id=1zVXD470CYm7Egml8ArJmS0NOIvr3ZIpP";
    // https://drive.google.com/file/d/1zVXD470CYm7Egml8ArJmS0NOIvr3ZIpP/view?usp=sharing
</script>
  
<div class="resume-container">
<h1>Resume</h1>

<!-- Embed the Google Drive PDF preview -->
<iframe
    src={drivePreviewUrl}
    width="100%"
    height="600px"
    style="border: none;"
    title="Resume"
>
</iframe>

<!-- Download Button using the direct download link from Drive -->
<div class="download-button">
    <a href={driveDownloadUrl} download>
    <button>Download Resume</button>
    </a>
</div>
</div>

<style>
.resume-container {
    max-width: 800px;
    margin: 80px auto;
    padding: 0 1rem;
}

.download-button {
    margin-top: 1rem;
}

button {
    background-color: #3b2948; /* Darkish purple, adjust as needed */
    color: #fff9c4;
    border: none;
    padding: 0.75rem 1.25rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
}

button:hover {
    opacity: 0.9;
}
</style>
