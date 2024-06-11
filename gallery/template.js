class TemplateSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div>
                <h2>This is an example of portfolio details</h2>
                <p>
                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque ea voluptate. Molestiae officiis omnis exercitationem neque sunt et. Neque voluptates earum et sint dolorem sint voluptatem.
                </p>
                <blockquote>
                    Eos est fugiat rerum alias molestiae alias esse maxime aut quam. Qui maxime quisquam qui maxime ut et et necessitatibus. Quia sunt debitis inventore harum amet. Quia nam eos saepe. Quo eius qui autem et est.
                </blockquote>
                <p>By Sara Wilsson</p>
            </div>
            <aside class="project-info">
                <h3>Project Information</h3>
                <ul>
                    <li><strong>Category:</strong> Web design</li>
                    <li><strong>Client:</strong> Sara Wilsson</li>
                    <li><strong>Project Date:</strong> 1 March, 2020</li>
                    <li><strong>Project URL:</strong> <a href="#">www.example.com</a></li>
                </ul>
            </aside>
        `;
    }
}

customElements.define('template-section', TemplateSection);
