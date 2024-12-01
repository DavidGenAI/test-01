// Ensure videos play/pause based on visibility
const videoWrappers = document.querySelectorAll('.video-wrapper');

const handleScroll = () => {
  videoWrappers.forEach(wrapper => {
    const video = wrapper.querySelector('.video');
    const rect = wrapper.getBoundingClientRect();
    const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

    if (isInViewport) {
      video.play();
    } else {
      video.pause();
    }
  });
};

// Add scroll event listener
window.addEventListener('scroll', handleScroll);
