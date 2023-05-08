class FooterElement extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <footer>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Favorite</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </footer>
        `;
    }
}

customElements.define("footer-element", FooterElement);