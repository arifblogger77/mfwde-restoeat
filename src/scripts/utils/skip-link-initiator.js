const SkipLinkInitiator = {
  init({
    button, content,
  }) {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      content.scrollIntoView({ behavior: 'smooth' });
      button.blur();
    });
  },
};

export default SkipLinkInitiator;
