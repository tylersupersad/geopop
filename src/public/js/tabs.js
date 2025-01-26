document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const target = document.querySelector(`#${this.getAttribute('data-tab')}`);

            tabs.forEach(item => item.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            this.classList.add('active');
            target.classList.add('active');
        });
    });
});

document.getElementById('rankTextbox').addEventListener('input', function (e) {
    // Replace any non-digit character with an empty string
    this.value = this.value.replace(/\D/g, '');
});